import {Button} from "./button";
import {Reels} from "./reels";
import {makeSpin} from "./utils";
import {WinScreen} from "./winScreen";

export const app = new PIXI.Application ({
    width: 800,
    height: 500
});

document.body.appendChild(app.view);

PIXI.Loader.shared
    .add("./images/sheet.json")
    .load(setup);

export let textures,
    background,
    button,
    reels,
    winScreen;

export const possibleSymSrc = [
    "agent.png",
    "batman.png",
   /* "captain.png",
    "deadPool.png",
    "girl.png",
    "hulk.png",
    "ironMan.png",
    "robot.png",
    "spiderW.png"*/
];

const spinButtonSrc = {
    idle : "button_idle.png",
    hover: "button_hover.png",
    down : "button_down.png",
    disabled : "button_disabled.png"
};

export let animationRequired = false;
export let renderLoop = [];

export const gameSize = {
    width: 800,
    height: 400,
    rows: 3,
    reels: 5
};

export let betLines = [
    [0,0,0,0,0],
    [1,1,1,1,1],
    [2,2,2,2,2],
    [0,1,2,1,0],
    [2,1,0,1,2]
];

function setup() {
    textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;

    background = new PIXI.Sprite(textures["background.png"]);
    app.stage.addChild(background);

    reels = new Reels();

    button = new Button(400, 450, spinButtonSrc, makeSpin);

    winScreen = new WinScreen(0,0, gameSize.width,gameSize.height, 0x504f52);


    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){
    for(let i = 0; i < renderLoop.length; i++){
        renderLoop[i].update(delta);
    }
}

/**
 *
 * @param {boolean} boolean set animationRequired to true or false
 */
export function changeAnimRequireTo (boolean) {
    animationRequired = boolean;
}



