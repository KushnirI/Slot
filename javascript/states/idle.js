import {DefaultState} from "./defaultState";

export class Idle extends DefaultState {
    constructor(){
        super();
        this.by({onSpinButtonPressed: this.onSpinButtonPressed});
    }

    onSpinButtonPressed(){
        this.finish("onSpinButtonPressed");
    }
}
