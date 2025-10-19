import {RoomsData} from '../dataStorage/roomsData';

export interface Hex {
    id: number;
    type: string;
    connectedRooms: number[];
    relatedCorridors: number[];
    assignedRoom?: RoomsData;  // optional until revealed
}

export class Hex {
    constructor(public id: number,
                public type: string,
                public connectedRooms: number[],
                public relatedCorridors: number[],
                public assignedRoom?: RoomsData) {}

    static createHex(id: number, type: string, connectedRooms: number[], relatedCorridors: number[]): Hex {
        return new Hex(id, type, connectedRooms, relatedCorridors);
    }
}