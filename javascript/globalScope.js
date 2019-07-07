// eslint-disable-next-line no-unused-vars
const app = new PIXI.Application ({
    width: 800,
    height: 500
});

// eslint-disable-next-line no-unused-vars
const possibleSymSrc = [
    /*"agent.png",
    "batman.png",*/
    "girl.png",
    "ironMan.png",
    "robot.png",
    /*"deadPool.png",
    "captain.png",
    "hulk.png",
    "spiderW.png"*/
];

// eslint-disable-next-line no-unused-vars
const spinButtonSrc = {
    idle : "idle_spin.png",
    hover: "hover_spin.png",
    down : "down_spin.png",
    disabled : "disabled_spin.png"
};

// eslint-disable-next-line no-unused-vars
const leftSelector ={
    idle : "idle_left.png",
    hover: "hover_left.png",
    down : "down_left.png",
    disabled : "disabled_left.png"
};

// eslint-disable-next-line no-unused-vars
const rightSelector ={
    idle : "idle_right.png",
    hover: "hover_right.png",
    down : "down_right.png",
    disabled : "disabled_right.png"
};

// eslint-disable-next-line no-unused-vars
const numbers = [
    "one.png",
    "two.png",
    "three.png",
    "four.png",
    "five.png",
    "six.png",
];

// eslint-disable-next-line no-unused-vars
const gameSize = {
    width: 800,
    height: 400,
    rows: 3,
    reels: 5
};

// eslint-disable-next-line no-unused-vars
let betLines = [
    [0,0,0,0,0],
    [1,1,1,1,1],
    [2,2,2,2,2],
    [0,1,2,1,0],
    [2,1,0,1,2]
];


