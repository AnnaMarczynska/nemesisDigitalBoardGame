import { roomsData } from './roomsData';
import { RoomsSpecificActions } from './roomsSpecificActions';
import { BaseRoom } from './baseRoom';
import { shuffle } from 'lodash';

export class RoomsManager {

    // static chosen as roomsData & roomsActions should not belong to a single instance of some room
    static roomsData = roomsData;
    static roomsActions = RoomsSpecificActions;

    // map approach selected as access to specific room will be often needed
    createRoomsList() {
        const specialRoomsList = [];
        const basicRoomsList = [];
        const additionalRoomsList = [];
        for (const [key, value] of Object.entries(roomsData)) {
            //using as keyof typeof RoomsSpecificActions because value.actionsKey will always be a string equal to one of the static property names (keys) of the RoomsSpecificActions class
            const actionKey = value.actionsKey as keyof typeof RoomsSpecificActions;
            const roomSpecificActions = RoomsSpecificActions[actionKey];
            const room: BaseRoom = new BaseRoom (
                value.roomName,
                value.roomType,
                value.roomDescription,
                value.isComputer,
                Object.keys(roomSpecificActions)
            );
            switch (value.roomType) {
                case 'special':
                    specialRoomsList.push(room);
                    break;
                case 'basic':
                    basicRoomsList.push(room);
                    break;
                case 'additional':
                    additionalRoomsList.push(room);
                    break;
                default:
            }
        }
        return {
            specialRoomsList,
            basicRoomsList,
            additionalRoomsList
        };
    }

    getShuffledRoomsForBoardSetting() {
        let { specialRoomsList, basicRoomsList, additionalRoomsList } = this.createRoomsList();
        basicRoomsList = shuffle(basicRoomsList);
        additionalRoomsList = shuffle(additionalRoomsList);
        return {
            specialRoomsList,
            basicRoomsList,
            additionalRoomsList
        }
    }
}