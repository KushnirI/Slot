export const gameConfig  = {
    betLines : [
        [0,0,0,0,0],
        [1,1,1,1,1],
        [2,2,2,2,2],
        [0,1,2,1,0],
        [2,1,0,1,2],
        [1,0,1,0,1],
        [1,2,1,2,1]
    ],


    reelsets : [
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
    ],


    gameSize : {
        width: 800,
        height: 400,
        rows: 3,
        reels: 5
    },

    reelsPosition : {
        topOffset : 10,
        leftOffset : 15,

        reels : {
            left: 80,
            slotLength: 134,
            symbolDimensions: {width: 110, height: 110},
            visibleSymbNum: 3,
            symbolsNumber: 4,
            symbolSpeed : 160
        },

        //can't find the solution how to set context here
        reelsPoints : [
            {x : 80, y : 134/2},
            {x : 80 * 3, y : 134/2},
            {x : 80 * 5, y : 134/2},
            {x : 80 * 7, y : 134/2},
            {x : 80 * 9, y : 134/2}
        ],

        symbolsPoint : [
            {x : 0, y : 0},
            {x : 0, y : 134},
            {x : 0, y : 134 * 2},
            {x : 0, y : 134 * 3},

        ]
    },


};