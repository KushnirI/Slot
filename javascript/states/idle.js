import {DefaultState} from "./defaultState";
import {slot} from "../index";

export class Idle extends DefaultState {
    constructor(){
        super();
        this.by({onSpinButtonPressed: this.onSpinButtonPressed});
    }

    onSpinButtonPressed(){
        this.finish("onSpinButtonPressed");
    }

    start() {
        super.start();
        slot.reels.playIdle();
    }
}
