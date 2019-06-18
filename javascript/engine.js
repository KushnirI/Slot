import {Button} from "./button";
import {Reel} from "./reel";

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
    gameArea,
    gameMask;

export const possibleSymSrc = [
    "agent.png",
    "batman.png",
    "captain.png",
    "deadPool.png",
    "girl.png",
    "hulk.png",
    "ironMan.png",
    "robot.png",
    "spiderW.png"
];

export let animationRequired = false;
export let renderLoop = [];
export const reels = [];
export const gameSize = {
    width: 800,
    height: 400,
    rows: 3,
    reels: 5
};

function setup() {
    textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;

    background = new PIXI.Sprite(textures["background.png"]);
    app.stage.addChild(background);

    gameArea = new PIXI.Container();
    gameArea.width = gameSize.width;
    gameArea.height = gameSize.height;

    gameMask = new PIXI.Graphics();
    app.stage.addChild(gameMask);
    gameMask.position.set(0,0);
    gameMask.lineStyle(0);

    gameArea.mask = gameMask;

    for(let i = 0; i < gameSize.reels; i++){
        reels.push(new Reel(gameSize.width/gameSize.reels * i,0,gameSize.rows));
    }

    app.stage.addChild(gameArea);
    button = new Button();

    app.ticker.add(delta => gameLoop(delta));

}

function gameLoop(){

    for(let i = 0; i < renderLoop.length; i++){
        renderLoop[i].update();
    }

    gameMask.clear();
    gameMask.beginFill();
    gameMask.drawRect(0, 0, gameSize.width, gameSize.height)
}

export function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

export function makeSpin(AddSymb) {
    reels.forEach((reel) => {
        reel.spin(AddSymb);
    })
}

export function changeAnimRequireTo (boolean) {
    animationRequired = boolean;
}

export function spinOverFiltration() {
    changeAnimRequireTo(false);
    button.disabled = false;
    reels.forEach((reel) => {
        reel.removeUseless();
    })
}

