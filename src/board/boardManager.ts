import {hexesData} from '../dataStorage/hexesData';
import {corridorsData} from '../dataStorage/corridorsData';
import {Hex} from './hex';
import {Corridor} from './corridor';
import {RoomsManager} from '../rooms/roomsManager';
import {Helpers} from '../helpers';

export class BoardManager {
    helpers = new Helpers();

    setHexesBoard() {
        const hexesBoard: Hex[] = [];
        for (const [id, hexData] of Object.entries(hexesData)) {
            const hex = Hex.createHex(Number(id), hexData.type, hexData.connectedRooms, hexData.relatedCorridors);
            hexesBoard.push(hex);
        }
        return hexesBoard;
    }

    setCorridorsBoard() {
        const corridorsBoard: Corridor[] = [];
        for (const [id, corridorData] of Object.entries(corridorsData)) {
            const corridor = Corridor.createCorridor(Number(id), corridorData.areRipples, corridorData.ripplesValue, corridorData.connectedRooms);
            corridorsBoard.push(corridor);
        }
        this.helpers.saveBoardToFile(corridorsBoard, 'corridorsBoard.json');
        return corridorsBoard;
    }

    setRoomsBoard() {
        const hexesBoard = this.setHexesBoard();
        const roomsBoard = RoomsManager.getShuffledRoomsForBoardSetting();
        let basicRoomIndex = 0;
        let additionalRoomIndex = 0;

        for (const [id, hex] of hexesBoard.entries()) {
            if (hex.type === 'basic'){
                hex.assignedRoom = roomsBoard.basicRoomsList[basicRoomIndex];
                basicRoomIndex++;
            }
            if (hex.type === 'additional') {
                hex.assignedRoom = roomsBoard.additionalRoomsList[additionalRoomIndex];
                additionalRoomIndex++;
            }
            if (hex.type === 'special') {
                if (hex.id === 1)  hex.assignedRoom = roomsBoard.specialRoomsList[0];
                if (hex.id === 11) hex.assignedRoom = roomsBoard.specialRoomsList[1];
                if (hex.id === 19) hex.assignedRoom = roomsBoard.specialRoomsList[2];
                if (hex.id === 20) hex.assignedRoom = roomsBoard.specialRoomsList[3];
                if (hex.id === 21) hex.assignedRoom = roomsBoard.specialRoomsList[4];
            }
        }
        this.helpers.saveBoardToFile(hexesBoard, 'roomsBoard.json');
        return hexesBoard;
    }
}