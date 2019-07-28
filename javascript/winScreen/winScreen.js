import {Rectangle} from "./rectangle";
import {observableMixin} from "../main/observableMixin";

export class WinScreen extends PIXI.Graphics{
    constructor(x, y, width, height, color) {
        super();

        Object.assign(this, observableMixin);
        this.screen = new Rectangle(x, y, width, height, color);
        this.screen.alpha = 0.3;
        this.message = this.createMessage(x, y, width, height);

        this.addChild(this.screen, this.message);
        this.hideScreen();
        this.alpha = 0.5;

        this.by({
            "notify:spinStart" : this.hideScreen,
            "notify:spinOver" : this.showScreen,
            "notify:betChanged" : this.hideScreen
        });

        app.stage.addChild(this)
    }

    createMessage (x, y, width, height) {
        const message = new PIXI.Text("You won");
        message.style = {
            fontFamily: "Arial",
            fontSize: 36,
            fill: "white"
        };
        message.position.set(x + width/2 - 130, y + height/2 - 18 );

        return message;
    }

    /**
     * makes winScreen visible
     * @param {object} config server's result config
     * @param {number} config.winAmount amount of win points
     */
    showScreen (config){
        if(config && config.winAmount > 0) {
            const winMsg = "You won " + config.winAmount + " !!!";
            this.visible = true;
            this.message.text = winMsg;
        }
    }

    /**
     * hides winScreen
     */
    hideScreen () {
        this.visible = false;
    }

}