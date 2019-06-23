import {gameSize, app, gameArea} from "./engine";
import {Reel} from "./reel";

export class Reels extends PIXI.Container{
    constructor() {
        super();

        this.width = gameSize.width;
        this.height = gameSize.height;
        this.allReels = [];

        for(let i = 0; i < gameSize.reels; i++){
            let reel = new Reel(gameSize.width/gameSize.reels * i,0,gameSize.rows);
            this.allReels.push(reel);
            this.addChild(reel)
        }

        app.stage.addChild(this);
    }

}