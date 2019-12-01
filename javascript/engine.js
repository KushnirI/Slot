import {Button} from "./button";
import {Reels} from "./reels/reels";
import {WinScreen} from "./winScreen/winScreen";
import {Selector} from "./selector";
import {ServerMock} from "./main/server";
import {BetLines} from "./betLines/betLines";
import {WinSymbols} from "./main/winHandler";
import {gameConfig} from "./main/gameConfig";

document.body.appendChild(app.view);

PIXI.Loader.shared
    .add("./images/sheet.json")
    .load(setup);

export let textures,
    background,
    spinButton,
    reels,
    winScreen,
    betSelector,
    serverMock,
    betLines,
    winSymbols;

export const renderLoop = [];
export let areReelsSpinning = false;

function setup() {
    textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;

    background = new PIXI.Sprite(textures["background.png"]);
    app.stage.addChild(background);


    betLines = new BetLines();
    reels = new Reels();

    spinButton = new Button(400, 450, spinButtonSrc, onSpinButtonClicked);
    spinButton.by({"notify:spinOver": spinButton.enable});

    winScreen = new WinScreen(0,gameConfig.gameSize.height, 300, 100, 0x696969);
    betSelector = new Selector(550, 450, leftSelector, rightSelector, numbers);

    winSymbols = new WinSymbols();

    serverMock = new ServerMock();

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
export function changeReelsSpinningTo (boolean) {
    areReelsSpinning = boolean;
}


/**
 * start/stop spin depending on areReelsSpinning param
 */
function onSpinButtonClicked() {
    if(areReelsSpinning){
        changeReelsSpinningTo(false);
        this.disable();
    } else {
        this.fireEvent("notify:spinStart", betSelector.currentValue + 1)
    }
}
