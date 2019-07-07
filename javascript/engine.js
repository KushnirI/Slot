import {Button} from "./button";
import {Reels} from "./reels";
import {makeSpin} from "./utils";
import {WinScreen} from "./winScreen";
import {Selector} from "./selector";

document.body.appendChild(app.view);

PIXI.Loader.shared
    .add("./images/sheet.json")
    .load(setup);

export let textures,
    background,
    button,
    reels,
    winScreen,
    betSize;

export let renderLoop = [];
export let animationRequired = false;

function setup() {
    textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;

    background = new PIXI.Sprite(textures["background.png"]);
    app.stage.addChild(background);

    reels = new Reels();
    button = new Button(400, 450, spinButtonSrc, makeSpin);
    winScreen = new WinScreen(0,0, gameSize.width,gameSize.height, 0x504f52);
    betSize = new Selector(550, 450, leftSelector, rightSelector, numbers, );

    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){
    for(let i = 0; i < renderLoop.length; i++){
        renderLoop[i].update(delta);
    }
}

/**
 * gives spinButton an option to stop spin with current iteration
 * @param {boolean} boolean set animationRequired to true or false
 */
export function changeAnimRequireTo (boolean) {
    animationRequired = boolean;
}
