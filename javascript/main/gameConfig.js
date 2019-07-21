export const gameConfig  = {
    activeBetLines : [
        [0,0,0,0,0],
        [1,1,1,1,1],
        [2,2,2,2,2],
        [0,1,2,1,0],
        [2,1,0,1,2],
        [1,0,1,0,1],
        [1,2,1,2,1]
    ],

    /**
     * create and return reelSets
     * @returns {array} two-levels array with reelSets
     */
    addReelsets : function () {
        const reelSets = [
            [
                [1,0,2,0,2,0,1,0,2],
                [0,0,2,1,0,1,2,0,2],
                [1,1,2,2,2,0,1,0,1],
                [1,1,0,0,2,0,0,1,2],
                [0,0,1,1,0,0,2,2,1]
            ],
            [
                [0,2,2,1,0,0,2,1,2],
                [2,2,1,1,0,1,2,0,1],
                [1,1,0,2,1,0,2,0,0],
                [2,1,1,2,0,0,1,0,2],
                [1,0,2,2,2,1,0,2,0]
            ],
            [
                [1,2,0,1,0,1,2,1,2],
                [1,1,0,0,2,0,0,1,2],
                [0,1,0,2,1,0,2,0,1],
                [1,0,2,2,2,1,0,2,0],
                [1,1,0,0,2,0,0,1,2]
            ]
        ];
        return reelSets;
    },

    gameSize : {
        width: 800,
        height: 400,
        rows: 3,
        reels: 5
    },

    reelsPosition : {
        topOffset : 10,

        reels : {
            left: 80,
            slotLength: 133,
            symbolDimensions: {width: 125, height: 125},
            visibleSymbNum: 3,
            symbolsNumber: 4
        },

        //can't find the solution how to set context here
        reelsPoints : [
            {x : 80, y : 133/2},
            {x : 80 * 3, y : 133/2},
            {x : 80 * 5, y : 133/2},
            {x : 80 * 7, y : 133/2},
            {x : 80 * 9, y : 133/2}
        ],

        symbolsPoint : [
            {x : 0, y : 0},
            {x : 0, y : 133},
            {x : 0, y : 133 * 2},
            {x : 0, y : 133 * 3},

        ]
    },

};