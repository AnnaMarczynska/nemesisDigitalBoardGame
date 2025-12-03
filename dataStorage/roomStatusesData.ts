export interface RoomStatusesData {
    roomStatus: string;
    itemsCount: number;
}

export const roomStatusesData: RoomStatusesData[] = [
    { roomStatus: 'slime', itemsCount: 3 },     // slime
    { roomStatus: 'slime', itemsCount: 4 },
    { roomStatus: 'door', itemsCount: 1 },      // door
    { roomStatus: 'door', itemsCount: 1 },
    { roomStatus: 'door', itemsCount: 2 },
    { roomStatus: 'door', itemsCount: 3 },
    { roomStatus: 'damaged', itemsCount: 1 },   // damaged
    { roomStatus: 'damaged', itemsCount: 1 },
    { roomStatus: 'damaged', itemsCount: 2 },
    { roomStatus: 'damaged', itemsCount: 2 },
    { roomStatus: 'damaged', itemsCount: 3 },
    { roomStatus: 'damaged', itemsCount: 3 },
    { roomStatus: 'fire', itemsCount: 2 },      // fire
    { roomStatus: 'fire', itemsCount: 3 },
    { roomStatus: 'fire', itemsCount: 4 },
    { roomStatus: 'silence', itemsCount: 2 },   // silence
    { roomStatus: 'silence', itemsCount: 1 },
    { roomStatus: 'danger', itemsCount: 2 },
    { roomStatus: 'danger', itemsCount: 3 },
    { roomStatus: 'danger', itemsCount: 4 }
];