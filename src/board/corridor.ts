// interface Corridor {
//     id: number;
//     areRipples: boolean;
//     ripplesValue: number[];
//     connectedRooms: number[];
// }

export class Corridor {
    constructor(public id: number,
                public areRipples: boolean,
                ripplesValue: number[],
                public connectedRooms: number[]) {
    }

    static createCorridor(id: number, areRipples: boolean, ripplesValue: number[], connectedRooms: number[]): Corridor {
        return new Corridor(id, areRipples, ripplesValue, connectedRooms);
    }
}
