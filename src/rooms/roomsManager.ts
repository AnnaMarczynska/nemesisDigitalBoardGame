import {roomsData} from '../dataStorage/roomsData';
import {RoomsSpecificActions} from './roomsSpecificActions';
import {BaseRoom} from './baseRoom';
import {shuffle} from 'lodash';

export class RoomsManager {

    // map approach selected as access to specific room will be often needed
    static createRoomsList() {
        const specialRoomsList = [];
        const basicRoomsList = [];
        const additionalRoomsList = [];

        for (const [key, value] of Object.entries(roomsData)) {
            //using as keyof typeof RoomsSpecificActions because value.actionsKey will always be a string equal to one of the static property names (keys) of the RoomsSpecificActions class
            const actionKey = value.actionsKey as keyof typeof RoomsSpecificActions;
            const roomSpecificActions = RoomsSpecificActions[actionKey];
            const action = Object.keys(roomSpecificActions)
            switch (value.roomType) {
                case 'special':
                    if (value.roomName === 'Engine') {
                        for (let i = 0; i < 3; i++) {
                            value.roomName = 'Engine ' + (i + 1);
                            const room = BaseRoom.createRoom(value, action);
                            specialRoomsList.push(room);
                        }
                    } else {
                        const room = BaseRoom.createRoom(value, action);
                        specialRoomsList.push(room);
                    }
                    break;
                case 'basic':
                    if (value.roomName === 'Evacuation pod') {
                        for (let i = 0; i < 2; i++) {
                            value.roomName = 'Evacuation pod ' + (i + 1);
                            const room = BaseRoom.createRoom(value, action);
                            basicRoomsList.push(room);
                        }
                    } else {
                        const room = BaseRoom.createRoom(value, action);
                        basicRoomsList.push(room);
                    }
                    break;
                case 'additional':
                    const room = BaseRoom.createRoom(value, action);
                    additionalRoomsList.push(room);
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