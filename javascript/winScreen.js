import {Rectangle} from "./rectangle";
import {events} from "./engine";

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

        this.addChild(this.screen, this.message);
        this.visible = false;
        this.alpha = 0.6;

        this.by({"notify:winSpinOver" : this.showScreen});

        app.stage.addChild(this)
    }

    /**
     * makes winScreen visible
     * @param {number} config - amount of win points
     */
    showScreen (config){
        let winMsg = "You won " + config.winAmount + " !!!!!";
        this.visible = true;
        this.message.text = winMsg;
    }

    /**
     * hides winScreen
     */
    hideScreen () {
        this.visible = false;
    }

    by (params) {
        if( !this.eventHandlers ){
            this.eventHandlers = {};
        }

        for( let eventName in params) {
            if( params.hasOwnProperty(eventName) ) {
                if ( !this.eventHandlers[eventName]){

                    events.addListener(eventName, this);
                }

                this.eventHandlers[eventName] = params[eventName] ;
            }
        }
    }

}