import {Button} from "../UI/button";
import {stateHandler} from "../index";

export class SpinButton extends Button{
    constructor(x, y, buttonTextures){
        super(x, y, buttonTextures);
        this.by({
            "stateCompleted:Spin": this.enable
        });

        //setting spin button click callback
        this.callback = this.makeSpin;
    }

    /**
     * fires different events depending on current state and disable button if needed
     */
    makeSpin() {
        if(stateHandler.currentState.name === "Spin"){
            this.fireEvent("spin:forcedStop");
            this.disable();
        } else{
            this.fireEvent("onSpinButtonPressed");
        }
    }
}