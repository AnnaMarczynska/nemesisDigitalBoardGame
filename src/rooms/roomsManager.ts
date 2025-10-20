import {roomsData} from '../dataStorage/roomsData';
import {RoomsSpecificActions} from './roomsSpecificActions';
import {BaseRoom} from './baseRoom';
import {shuffle} from 'lodash';
import {roomStatusesData} from '../dataStorage/roomStatusesData';

export class RoomsManager {

    static setRoomStatuses() {
        return shuffle(roomStatusesData);
    }

    // moved from BaseRoom as setRoomStatuses() is required for it
    static createRoom(value: any, specificActions: string[], roomStatuses?: any) {
        // take and remove the first one, if not provided, use none/0
        const currentStatus = roomStatuses?.shift();
        // take currentStatus.roomStatus if it exists, otherwise use 'none/0 for special rooms'
        const roomStatus = currentStatus?.roomStatus ?? 'none';
        const itemsCount = currentStatus?.itemsCount ?? 0;
        return new BaseRoom(value.roomName, value.roomType, value.roomDescription, value.isComputer, specificActions, roomStatus, itemsCount);
    };

    // map approach selected as access to specific room will be often needed
    static createRoomsList() {
        const specialRoomsList = [];
        const basicRoomsList = [];
        const additionalRoomsList = [];

        for (const [key, value] of Object.entries(roomsData)) {
            //using as keyof typeof RoomsSpecificActions because value.actionsKey will always be a string equal to one of the static property names (keys) of the RoomsSpecificActions class
            const actionKey = value.actionsKey as keyof typeof RoomsSpecificActions;
            const roomSpecificActions = RoomsSpecificActions[actionKey];
            const action = Object.keys(roomSpecificActions);
            const roomStatuses = this.setRoomStatuses();

            switch (value.roomType) {
                case 'special':
                    if (value.roomName === 'Engine') {
                        for (let i = 0; i < 3; i++) {
                            const roomCopy = {...value, roomName: `Engine ${i + 1}` };
                            specialRoomsList.push(this.createRoom(roomCopy, action));
                        }
                    }
                    specialRoomsList.push(this.createRoom(value, action, roomStatuses));
                    break;
                case 'basic':
                    if (value.roomName === 'Evacuation pod') {
                        for (let i = 0; i < 2; i++) {
                            value.roomName = `Evacuation pod ${i + 1}`;
                        }
                    }
                    basicRoomsList.push(this.createRoom(value, action, roomStatuses));
                    break;
                case 'additional':
                    additionalRoomsList.push(this.createRoom(value, action, roomStatuses));
                    break;
                default:
                    throw new Error(`Unknown room type: ${value.roomType}`);
            }
        }
        return {specialRoomsList, basicRoomsList, additionalRoomsList};
    }

    static getShuffledRoomsForBoardSetting() {
        let {specialRoomsList, basicRoomsList, additionalRoomsList} = this.createRoomsList();
        basicRoomsList = shuffle(basicRoomsList);
        additionalRoomsList = shuffle(additionalRoomsList);
        return {
            specialRoomsList,
            basicRoomsList,
            additionalRoomsList
        }
    }
}