import {hexesData} from '../../dataStorage/hexesData';
import {corridorsData} from '../../dataStorage/corridorsData';
import {Hex} from './hex';
import {Corridor} from './corridor';
import {RoomsManager} from '../rooms/roomsManager';
import {Helpers} from '../helpers';
import fs from "fs";

export class BoardManager {
    helpers: Helpers = new Helpers();

    setHexesBoard() {
        const hexesBoard: Hex[] = [];
        for (const [id, hexData] of Object.entries(hexesData)) {
            const hex = Hex.createHex(Number(id), hexData.type, hexData.connectedRooms, hexData.relatedCorridors);
            hexesBoard.push(hex);
        }
        return hexesBoard;
    }

    async setCorridorsBoard() {
        const corridorsBoard: Corridor[] = [];
        for (const [id, corridorData] of Object.entries(corridorsData)) {
            const corridor = Corridor.createCorridor(Number(id), corridorData.areRipples, corridorData.ripplesValue, corridorData.connectedRooms);
            corridorsBoard.push(corridor);
        }
        await this.helpers.saveBoardToFile(corridorsBoard, 'corridorsBoard.json');
        return corridorsBoard;
    }

    async setRoomsBoard() {
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
        await this.helpers.saveBoardToFile(hexesBoard, 'roomsBoard.json');
        return hexesBoard;
    }

    async setPlayersOnBoard() {
        const charactersOnBoardPosition: any[] = [];
        const numberOfPlayers = await this.helpers.setPlayersCount();
        for (let i = 0; i < numberOfPlayers; i++) {
            charactersOnBoardPosition.push({
                players: `Player ${i + 1}`,
                position: 6 });
        }

        return await this.helpers.saveBoardToFile(charactersOnBoardPosition, 'charactersPositionOnBoard.json');
    }

    async getPlayersOnBoardPositions(): Promise< { players: string, position: number }[]> {
        return await this.helpers.loadFile('charactersPositionOnBoard.json');
    }

    async getCurrentPlayerPosition() {
        let allCharacterPosition = await this.getPlayersOnBoardPositions();
        // to be changed later when game round order is implemented
        let playersOrder = 2;
        // type assertion to make filter works with availableRooms
        let currentPlayerPosition = allCharacterPosition.find(p => p.players === `Player ${playersOrder}`)?.position!;
        return {currentPlayerPosition, playersOrder};
    }

    async saveCharactersNewPosition(to: number) {
        let newRoomPosition = to;
        const { playersOrder } = await this.getCurrentPlayerPosition();
        let allPlayersPositions = await this.getPlayersOnBoardPositions();

        allPlayersPositions = allPlayersPositions.map(p => {
            if (p.players === `Player ${playersOrder}`) {
                return { ...p, position: newRoomPosition };
            }
            return p;
        });
        await this.helpers.saveBoardToFile(allPlayersPositions, 'charactersPositionOnBoard.json');
    }

    //function overloading
    async getRequiredCorridors(corridors: Corridor[], type: 'connected', roomToLeave: number, roomToEnter?: number): Promise< Corridor | undefined>;
    async getRequiredCorridors(corridors: Corridor[], type: 'all', roomToLeave: number): Promise<Corridor[]>;
    async getRequiredCorridors(corridors: Corridor[], type: 'all' | 'connected', roomToLeave: number, roomToEnter?: number): Promise<Corridor[] | Corridor | undefined> {
        switch (type) {
            case 'all':
                return corridors.filter(c => c.connectedRooms.includes(roomToLeave));
            case 'connected':
                return corridors.find(c => c.connectedRooms.includes(<number>roomToEnter) && c.connectedRooms.includes(roomToLeave));
        }
    }
}