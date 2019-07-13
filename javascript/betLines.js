import {Line} from "./line";
import {events} from "./engine";

export class BetLines extends PIXI.Container{
    constructor() {
        super();

        this.activeLines = 5;
        this.addLinePositions();

        this.allLines = [];
        this.addLines(this.activeLines);

        this.activeBetLines = [
            [0,0,0,0,0],
            [1,1,1,1,1],
            [2,2,2,2,2],
            [0,1,2,1,0],
            [2,1,0,1,2]
        ];

        this.by({"notify:winSpinOver" : this.showWinLines});

        app.stage.addChild(this);

    }

    addLinePositions () {
        this.linePositions = [
            [0, gameSize.height/6, gameSize.width, gameSize.height/6],
            [0, gameSize.height/2, gameSize.width, gameSize.height/2],
            [0, gameSize.height - gameSize.height/6, gameSize.width, gameSize.height - gameSize.height/6],
            [0, 0, gameSize.width/2,  gameSize.height - gameSize.height/6, gameSize.width, 0],
            [0, gameSize.height, gameSize.width/2, gameSize.height/6, gameSize.width, gameSize.height]
        ]
    }

    addLines () {

        for(let i = 0; i < this.linePositions.length; i++) {
            let betLine;
            let args = this.linePositions[i];

            if (args.length === 4){
                betLine = new Line(...args);
            }
            if (args.length === 6){
                betLine = new Line(...args);
                betLine.lineTo(args[4], args[5]);
            }

            this.allLines.push(betLine);
            this.addChild(betLine);
        }
    }

    showWinLines(config) {
        for(let i = 0; i < config.winLines.length; i++){
            let curLine = config.winLines[i];
            this.allLines[curLine].tint = 0x00ff00;
        }
    }

    removeWinLines() {
        this.allLines.forEach( (line) => {
            line.tint = 0x808080;
        });

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

    fireEvent(eventName, ...args){
        events.fireEvent(eventName, args);
    }


}