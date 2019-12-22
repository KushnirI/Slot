import {Slot} from "./slot";
import {StateMachine} from "./states/stateMachine";
import {StatesConfig} from "./states/statesConfig";
import {Loader} from "./loader/loader";

document.body.appendChild(app.view);

export let textures,
    background,
    slot;

export const renderLoop = [];
export const loader = new Loader();
export const stateHandler = new StateMachine(StatesConfig);

export function setup() {
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