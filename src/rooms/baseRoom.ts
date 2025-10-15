export class BaseRoom {

    //using parameter properties to reduce boilerplate code
    //using this type of constructor for type safety and possible refactoring and future extensions
    constructor(roomName: string,
                readonly roomType: string,
                readonly roomDescription: string,
                readonly isComputer: boolean,
                readonly roomActions: string[],
                public roomStatus: string)
    {};

    async getItem(){};
    async repairRoom(){};

}