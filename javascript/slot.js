import {Reels} from "./reels/reels";
import {BetLines} from "./betLines/betLines";
import {ServerManager} from "./main/serverManager";
import {WinSymbols} from "./main/winSymbols";
import {Selector} from "./selector";
import {WinScreen} from "./winScreen/winScreen";
import {gameConfig} from "./main/gameConfig";
import {Button} from "./UI/button";

export class Slot {
    constructor() {
        this.betLines = new BetLines();
        this.reels = new Reels();
        this.spinButton = new Button(400, 450, spinButtonSrc, function () {
            this.fireEvent("onSpinButtonPressed")
        });
        this.winScreen = new WinScreen(0,gameConfig.gameSize.height, 300, 100, 0x696969);
        this.betSelector = new Selector(550, 450, leftSelector, rightSelector, numbers);
        this.winSymbols = new WinSymbols();
        this.serverManager = new ServerManager();
    }
}