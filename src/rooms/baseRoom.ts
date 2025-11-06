import {roomStatusesData} from "../../dataStorage/roomStatusesData";

export class BaseRoom {
    //using parameter properties to reduce boilerplate code
    //using this type of constructor for type safety and possible refactoring and future extensions
    constructor(public roomName: string,
                public roomType: 'special' | 'basic' | 'additional',
                public roomDescription: string,
                public isComputer: boolean,
                public roomActions: string[],
                public roomStatus: string,
                public itemsCount: number)
    {};

    async getItem(){};
    async repairRoom(){};
}