interface Hex {
    type: 'special' | 'basic' | 'additional';
    connectedRooms: number[];
    relatedCorridors: number[];
}

export const hexesData: Record<number, Hex> = {
    1: { type: 'special', connectedRooms: [2, 3, 4], relatedCorridors: [1, 2, 3] },
    2: { type: 'basic', connectedRooms: [1, 6], relatedCorridors: [1, 6, 29] },
    3: { type: 'basic', connectedRooms: [1, 7], relatedCorridors: [2, 4] },
    4: { type: 'basic', connectedRooms: [1, 8], relatedCorridors: [3, 9, 30] },
    5: { type: 'basic', connectedRooms: [6, 10], relatedCorridors: [5, 10, 31] },
    6: { type: 'additional', connectedRooms: [2, 5, 7, 11], relatedCorridors: [5, 6, 7, 11] },
    7: { type: 'additional', connectedRooms: [3, 6, 8], relatedCorridors: [4, 7, 8] },
    8: { type: 'basic', connectedRooms: [4, 7, 9, 11], relatedCorridors: [8, 9, 12] },
    9: { type: 'basic', connectedRooms: [8, 12], relatedCorridors: [13, 14, 32] },
    10: { type: 'basic', connectedRooms: [5, 13], relatedCorridors: [10, 15] },
    11: { type: 'special', connectedRooms: [6, 8, 14, 15], relatedCorridors: [11, 12, 16, 17] },
    12: { type: 'additional', connectedRooms: [9, 16], relatedCorridors: [14, 18] },
    13: { type: 'additional', connectedRooms: [10, 14, 19], relatedCorridors: [15, 19, 23] },
    14: { type: 'additional', connectedRooms: [11, 13, 17], relatedCorridors: [16, 19, 20] },
    15: { type: 'additional', connectedRooms: [11, 16, 18], relatedCorridors: [17, 21, 22, 34] },
    16: { type: 'basic', connectedRooms: [12, 15, 21], relatedCorridors: [18, 22, 28] },
    17: { type: 'basic', connectedRooms: [14, 19, 20], relatedCorridors: [20, 24, 25] },
    18: { type: 'basic', connectedRooms: [15, 20, 21], relatedCorridors: [21, 26, 27] },
    19: { type: 'special', connectedRooms: [13, 17], relatedCorridors: [23, 24, 35] },
    20: { type: 'special', connectedRooms: [17, 18], relatedCorridors: [25, 26] },
    21: { type: 'special', connectedRooms: [16, 18], relatedCorridors: [27, 28, 36] },
};