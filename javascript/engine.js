import {Button} from "./button";
import {Reel} from "./reel";
import {EvenlyChangeValueBetween} from "./evenlyChangeValueBetween";
import {Reels} from "./reels";

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
    reels,
    reelsMask,
    evenlyChangeValueBetween,
    testDate;

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

/*export let test = {
    start : 23,
    end : 57
};*/

function setup() {
    textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;

    background = new PIXI.Sprite(textures["background.png"]);
    app.stage.addChild(background);

    reels = new Reels();
    addMask(reels);

    /*testDate = new Date();
    evenlyChangeValueBetween = new EvenlyChangeValueBetween(test, 2000, justForTest);*/

    button = new Button(400, 450, spinButtonSrc);

    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){

    for(let i = 0; i < renderLoop.length; i++){
        renderLoop[i].update(delta);
    }

    reelsMask.beginFill();
    reelsMask.drawRect(0, 0, gameSize.width, gameSize.height)
}

export function makeSpin(addSymb) {
    reels.allReels.forEach((reel) => {
        reel.spin(addSymb);
    })
}

export function changeAnimRequireTo (boolean) {
    animationRequired = boolean;
}

export function spinOverFiltration() {
    changeAnimRequireTo(false);
    button.disabled = false;

}

function addMask(obj) {
    reelsMask = new PIXI.Graphics();
    app.stage.addChild(reelsMask);
    reelsMask.position.set(0,0);
    reelsMask.lineStyle(0);
    reelsMask.clear();

    obj.mask = reelsMask;
}

// function justForTest() {
//     console.log(test.start);
//     console.log(new Date() - testDate);
// }