import {DefaultState} from "./defaultState";

export class Load extends DefaultState {
    constructor(){
        super();
        this.name = "Load";
        this.by({onLoadingComplete : this.onLoadingComplete});
        this.start();
    }

    onLoadingComplete(){
        this.finish("onLoadingComplete");
    }
}