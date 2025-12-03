interface Corridor {
    areRipples: boolean,
    ripplesValue: number[],
    connectedRooms: number[]
}

export const corridorsData: Record<number, Corridor> = {
    1: { areRipples: false, ripplesValue: [3], connectedRooms: [1, 2] },
    2: { areRipples: false, ripplesValue: [1, 2], connectedRooms: [1, 3] },
    3: { areRipples: false, ripplesValue: [4], connectedRooms: [1, 4] },
    4: { areRipples: false, ripplesValue: [3, 4], connectedRooms: [3, 7] },
    5: { areRipples: false, ripplesValue: [3], connectedRooms: [5, 6] },
    6: { areRipples: false, ripplesValue: [4], connectedRooms: [2, 6] },
    7: { areRipples: false, ripplesValue: [1], connectedRooms: [6, 7] },
    8: { areRipples: false, ripplesValue: [2], connectedRooms: [7, 8] },
    9: { areRipples: false, ripplesValue: [1], connectedRooms: [4, 8] },
    10: { areRipples: false, ripplesValue: [1, 2], connectedRooms: [5, 10] },
    11: { areRipples: false, ripplesValue: [2], connectedRooms: [6, 11] },
    12: { areRipples: false, ripplesValue: [3], connectedRooms: [8, 11] },
    13: { areRipples: false, ripplesValue: [4], connectedRooms: [8, 9] },
    14: { areRipples: false, ripplesValue: [1, 2], connectedRooms: [9, 12] },
    15: { areRipples: false, ripplesValue: [3, 4], connectedRooms: [10, 13] },
    16: { areRipples: false, ripplesValue: [4], connectedRooms: [11, 14] },
    17: { areRipples: false, ripplesValue: [1], connectedRooms: [11, 15] },
    18: { areRipples: false, ripplesValue: [3, 4], connectedRooms: [12, 16] },
    19: { areRipples: false, ripplesValue: [1], connectedRooms: [13, 14] },
    20: { areRipples: false, ripplesValue: [2], connectedRooms: [14, 17] },
    21: { areRipples: false, ripplesValue: [3], connectedRooms: [15, 18] },
    22: { areRipples: false, ripplesValue: [2], connectedRooms: [15, 16] },
    23: { areRipples: false, ripplesValue: [2], connectedRooms: [13, 19] },
    24: { areRipples: false, ripplesValue: [1], connectedRooms: [17, 19] },
    25: { areRipples: false, ripplesValue: [3, 4], connectedRooms: [17, 20] },
    26: { areRipples: false, ripplesValue: [1, 2], connectedRooms: [18, 20] },
    27: { areRipples: false, ripplesValue: [4], connectedRooms: [18, 21] },
    28: { areRipples: false, ripplesValue: [1], connectedRooms: [16, 21] },
    29: { areRipples: false, ripplesValue: [1, 2], connectedRooms: [2] }, // air duct
    30: { areRipples: false, ripplesValue: [2, 3], connectedRooms: [4] },
    31: { areRipples: false, ripplesValue: [4], connectedRooms: [5] },
    32: { areRipples: false, ripplesValue: [3], connectedRooms: [9] },
    33: { areRipples: false, ripplesValue: [3], connectedRooms: [14] },
    34: { areRipples: false, ripplesValue: [4], connectedRooms: [15] },
    35: { areRipples: false, ripplesValue: [3, 4], connectedRooms: [19] },
    36: { areRipples: false, ripplesValue: [2, 3], connectedRooms: [21] }
}
