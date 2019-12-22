import {DefaultState} from "./defaultState";
import {loader} from "../index";

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

    start() {
        super.start();
        loader.startLoading();
    }

    finish(eventName) {
        loader.loadingScreen.hide();
        super.finish(eventName);
    }
}