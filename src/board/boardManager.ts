import {hexesData} from '../../dataStorage/board/hexesData';
import {corridorsData} from '../../dataStorage/board/corridorsData';
import {Hex} from './hex';
import {Corridor} from './corridor';
import {RoomsManager} from '../rooms/roomsManager';
import {Helpers} from '../helpers';

interface assignedRoom {
    roomName: string;
    roomType: 'normal' | 'special' | 'additional';
    roomDescription: string;
    isComputer: boolean;
    roomActions: string[];
    roomStatus: string;
    itemsCount: number;
}

interface Room {
    id: number;
    type: 'special' | 'basic' | 'additional';
    connectedRooms: number[];
    relatedCorridors: number[];
    assignedRoom: assignedRoom;
}

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
        await this.helpers.saveBoardToFile(corridorsBoard, 'corridorsBoard.json', 'board');
        return corridorsBoard;
    }

    async setRoomsBoard() {
        const hexesBoard = this.setHexesBoard();
        const roomsBoard = RoomsManager.getShuffledRoomsForBoardSetting();
        let basicRoomIndex = 0;
        let additionalRoomIndex = 0;

        for (const [id, hex] of hexesBoard.entries()) {
            if (hex.type === 'basic') {
                hex.assignedRoom = roomsBoard.basicRoomsList[basicRoomIndex];
                basicRoomIndex++;
            }
            if (hex.type === 'additional') {
                hex.assignedRoom = roomsBoard.additionalRoomsList[additionalRoomIndex];
                additionalRoomIndex++;
            }
            if (hex.type === 'special') {
                if (hex.id === 1) hex.assignedRoom = roomsBoard.specialRoomsList[0];
                if (hex.id === 11) hex.assignedRoom = roomsBoard.specialRoomsList[1];
                if (hex.id === 19) hex.assignedRoom = roomsBoard.specialRoomsList[2];
                if (hex.id === 20) hex.assignedRoom = roomsBoard.specialRoomsList[3];
                if (hex.id === 21) hex.assignedRoom = roomsBoard.specialRoomsList[4];
            }
        }
        await this.helpers.saveBoardToFile(hexesBoard, 'roomsBoard.json', 'board');
        return hexesBoard;
    }

    async setNumberOfPlayers() {
        let input =  await this.helpers.askQuestion('Enter number of players (1-5): ');
        if (isNaN(Number(input)) || Number(input) < 1 || Number(input) > 5) {
            console.log('Invalid number of players. Please enter a number between 1 and 5.');
        }
        return await this.helpers.saveBoardToFile(input, 'numberOfPlayers.json');
    }

    async setPlayersOnBoard() {
        let numberOfPlayers = await this.helpers.loadFile('numberOfPlayers.json');
        let playersCount = Number(numberOfPlayers);
        const charactersOnBoardPosition: any[] = [];
        for (let i = 0; i < playersCount; i++) {
            charactersOnBoardPosition.push({
                players: `Player ${i + 1}`,
                position: 11
            });
        }
        return await this.helpers.saveBoardToFile(charactersOnBoardPosition, 'charactersPositionOnBoard.json');
    }

    async getPlayersOnBoardPositions(): Promise<{ players: string, position: number }[]> {
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
        const {playersOrder} = await this.getCurrentPlayerPosition();
        let allPlayersPositions = await this.getPlayersOnBoardPositions();

        allPlayersPositions = allPlayersPositions.map(p => {
            if (p.players === `Player ${playersOrder}`) {
                return {...p, position: newRoomPosition};
            }
            return p;
        });
        await this.helpers.saveBoardToFile(allPlayersPositions, 'charactersPositionOnBoard.json');
    }

    //function overloading
    async getRequiredCorridors(corridors: Corridor[], type: 'connected', roomToLeave: number, roomToEnter?: number): Promise<Corridor | undefined>;
    async getRequiredCorridors(corridors: Corridor[], type: 'all', roomToLeave: number): Promise<Corridor[]>;
    async getRequiredCorridors(corridors: Corridor[], type: 'all' | 'connected', roomToLeave: number, roomToEnter?: number): Promise<Corridor[] | Corridor | undefined> {
        switch (type) {
            case 'all':
                return corridors.filter(c => c.connectedRooms.includes(roomToLeave));
            case 'connected':
                return corridors.find(c => c.connectedRooms.includes(<number>roomToEnter) && c.connectedRooms.includes(roomToLeave));
        }
    }

    async roomDataRevealer(hexId: number) {
        const roomsBoard: Room[] = await this.helpers.loadFile('roomsBoard.json', 'board');
        const enteredRoom: Room = roomsBoard.find(r => r.id === hexId)!; // as there will always be a room

        console.log('You have entered ', enteredRoom.assignedRoom!.roomName);
        console.log('Room status: ', enteredRoom.assignedRoom!.roomStatus);
        console.log('Remaining items: ', enteredRoom.assignedRoom!.itemsCount);
        await this.helpers.askQuestion('Do you want to see room description? (yes/no): ').then(async (answer) => {
            if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
                console.log(enteredRoom.assignedRoom!.roomDescription);
            }
        });
    }
}