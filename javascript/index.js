import {Slot} from "./slot";
import {StateMachine} from "./states/stateMachine";
import {StatesConfig} from "./states/statesConfig";
import {LoadingScreen} from "./loadingScreen";

document.body.appendChild(app.view);

export const stateHandler = new StateMachine(StatesConfig);

PIXI.Loader.shared
    .add("./images/sheet.json")
    .add("./images/1.jpg")
    .add("./images/2.jpg")
    .add("./images/3.jpg")
    .add("./images/4.jpg")
    .add("./images/5.jpg")
    .on("progress", loadProgressHandler)
    .load(setup);

let loadingScreen = new LoadingScreen(0, 0, 800, 500, 0x696969);

function loadProgressHandler(loader) {
    loadingScreen.update(loader.progress);
}

export let textures,
    background,
    slot;

export const renderLoop = [];

function setup() {
    //releasing loading state
    events.fireEvent("onLoadingComplete");

    textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;
    background = new PIXI.Sprite(textures["background.png"]);
    app.stage.addChild(background);

    slot = new Slot();
    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
    for (let i = 0; i < renderLoop.length; i++) {
        renderLoop[i].update(delta);
    }
}