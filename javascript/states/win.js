import {DefaultState} from "./defaultState";
import {slot} from "../index";

export class Win extends DefaultState {
    constructor(){
        super();
        this.by({
            betChanged : this.betChanged,
            onSpinButtonPressed : this.onSpinButtonPressed
        });
    }

    betChanged(){
        this.finish("betChanged");
    }

    onSpinButtonPressed(){
        this.finish("onSpinButtonPressed");
    }

    start(){
        super.start();
        slot.betLines.showWinLines();
        slot.winScreen.showScreen();
        slot.reels.showWinAnimation();
    }

    finish(eventName) {
        slot.betLines.hideWinLines();
        slot.winScreen.hideScreen();
        super.finish(eventName);
    }
}