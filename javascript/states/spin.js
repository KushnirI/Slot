import {DefaultState} from "./defaultState";

export class Spin extends DefaultState {
    constructor(){
        super();
        this.by({
            playWin : this.playWin,
            playIdle : this.playIdle,
        });
    }

    playWin(){
        this.finish("playWin");
    }

    playIdle(){
        this.finish("playIdle");
    }
}
