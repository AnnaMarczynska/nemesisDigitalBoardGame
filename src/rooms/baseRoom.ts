export class BaseRoom {
    //using parameter properties to reduce boilerplate code
    //using this type of constructor for type safety and possible refactoring and future extensions
    constructor(public roomName: string,
                public roomType: string,
                public roomDescription: string,
                public isComputer: boolean,
                public roomActions: string[])
    {};

    async getItem(){};
    async repairRoom(){};
}