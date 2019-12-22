import {observableMixin} from "../main/observableMixin";
import {StateMachine} from "./stateMachine";

export class DefaultState {
    constructor() {
        Object.assign(this, observableMixin);

        this.name = "stateName";
        this.active = false;
        this.transitions = {};
        this.stateMashine = StateMachine.instance;
    }

    start() {
        this.active = true;
        console.log(`stateChangedTo:${this.name}`);
    }

    finish(eventName) {
        //only active state should react on event
        if (!this.active) {
            return;
        }

        this.active = false;
        let next = this.transitions[eventName];
        this.stateMashine.changeStateTo(next);
    }
}

