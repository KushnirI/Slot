import {observableMixin} from "./main/observableMixin";
import {Rectangle} from "./winScreen/rectangle";

export class LoadingScreen extends PIXI.Graphics{
    constructor(x, y, width, height, color) {
        super();

        Object.assign(this, observableMixin);
        this.screen = new Rectangle(x, y, width, height, color);
        this.screen.alpha = 0.5;
        this.message = this.createMessage(x, y, width, 400);
        this.blackLine = new Rectangle(150, 250, 500, 30, 0x000000);
        this.greenLine = new Rectangle(150, 250, 500, 30, 0x229954);
        this.addChild(this.screen, this.message, this.blackLine, this.greenLine);

        this.update(0);
        this.by({"stateCompleted:Load" : this.hideAll});
        app.stage.addChild(this)
    }

    createMessage (x, y, width, height) {
        const message = new PIXI.Text("Loading...");
        message.style = {
            fontFamily: "Arial",
            fontSize: 36,
            fill: "white"
        };
        message.anchor.set(0.5);
        message.position.set(x + width/2, y + height/2);

        return message;
    }

    update(percent){
        this.message.text = `Loading ${Math.floor(percent)}%`;
        this.greenLine.width = percent * 5;
    }

    hideAll() {
        this.visible = false;
    }
}