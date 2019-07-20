import {Button} from "./button";
import {Reels} from "./reels/reels";
import {WinScreen} from "./winScreen/winScreen";
import {Selector} from "./selector";
import {ServerMock} from "./main/server";
import {BetLines} from "./betLines/betLines";
import {WinHandler} from "./main/winHandler";
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
    winHandler;

export let renderLoop = [];
export let animationRequired = false;

function setup() {
    textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;

    background = new PIXI.Sprite(textures["background.png"]);
    app.stage.addChild(background);


    betLines = new BetLines();
    reels = new Reels();

    spinButton = new Button(400, 450, spinButtonSrc, onSpinButtonClicked);
    spinButton.by({"notify:spinOver": spinButton.enable});

    winScreen = new WinScreen(0,0, gameConfig.gameSize.width, gameConfig.gameSize.height);
    betSelector = new Selector(550, 450, leftSelector, rightSelector, numbers);

    let selectorDisableCheck = betSelector.buttonDisableCheck;
    betSelector.buttonDisableCheck = function() {
        selectorDisableCheck.apply(this, arguments);
        this.fireEvent("notify:betChanged", this.currentValue);
    };

    winHandler = new WinHandler();

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
export function changeAnimRequireTo (boolean) {
    animationRequired = boolean;
}


/**
 * start/stop spin depending on animationRequired param
 */
function onSpinButtonClicked() {
    if(animationRequired){
        changeAnimRequireTo(false);
        this.disable();
        /*quickStop()*/
    } else {
        this.fireEvent("notify:spinStart", betSelector.currentValue + 1)
        // makeSpin()
    }
}
