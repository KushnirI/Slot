import {LoadingScreen} from "./loadingScreen";
import {observableMixin} from "../main/observableMixin";
import {setup} from "../index";

export class Loader {
    constructor(){
        Object.assign(this, observableMixin);
        this.loadingScreen = new LoadingScreen(0, 0, 800, 500, 0x696969);
    }

    startLoading() {
        PIXI.Loader.shared
            .add("./images/sheet.json")
            .add("./images/1.jpg")
            .add("./images/2.jpg")
            .add("./images/3.jpg")
            .add("./images/4.jpg")
            .add("./images/5.jpg")
            .on("progress", (loader) => this.loadProgressHandler(loader))
            .load(setup);
    }

    loadProgressHandler(loader){
        this.loadingScreen.update(loader.progress);
        if(loader.progress === 100) {
            this.fireEvent("onLoadingComplete");
        }
    }
}



