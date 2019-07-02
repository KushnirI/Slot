import {renderLoop, app} from "./engine";
import {Rectangle} from "./rectangle";

export class WinScreen extends PIXI.Graphics{
    constructor(x, y, width, height, color) {
        super();

        this.screen = new Rectangle(x, y, width, height, color);
        this.message = new PIXI.Text("You won");
        this.message.style = {
            fontFamily: "Arial",
            fontSize: 36,
            fill: "white"
        };
        this.message.position.set(width/2 - 130, height/2 - 36 );

        this.addChild(this.screen);
        this.addChild(this.message);
        this.visible = false;
        this.alpha = 0.6;

        renderLoop.push(this);
        app.stage.addChild(this)
    }

    showScreen (winAmount){
        let winMsg = "You won " + winAmount + " !!!!!";
        this.visible = true;
        this.message.text = winMsg;
    }

    hideScreen () {
        this.visible = false;
    }

    update(){
        //Stub
    }
}