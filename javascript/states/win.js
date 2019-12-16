import {DefaultState} from "./defaultState";

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
}
