import {DefaultState} from "./defaultState";
import {slot} from "../index";

export class Spin extends DefaultState {
    constructor(){
        super();
        this.by({
            "notify:serverManager.newResponse": this.updateBetResult,
            onSpinButtonPressed: this.forcedStop
        });
    }

    playWin(){
        this.finish("playWin");
    }

    playIdle(){
        this.finish("playIdle");
    }

    start() {
        super.start();
        slot.betSelector.disableButtons();
        const betSize = slot.betSelector.getCurBetSize();
        slot.serverManager.start(betSize);

        Promise.all([
            slot.reels.startReelsSpin(),
            new Promise(resolve => this.serverResponseResolve = resolve)
        ])
            .then(() => slot.reels.startStopSequence(this.currentSpinResult))
            .then(() => this.isWin ? this.playWin() : this.playIdle());
    }

    finish(eventName) {
        slot.spinButton.enable();
        slot.betSelector.buttonDisableCheck();
        super.finish(eventName);
    }

    forcedStop() {
        if(this.active){
            slot.reels.forcedStop();
            slot.spinButton.disable();
        }
    }

    /**
     *
     * @param {object} response
     * @param {number} response.winAmount amount of win point
     * @param {array} response.winLines array with win bet lines
     * @param {array} response.winSymbols array with win symbols
     * @param {array} response.spinResult 2d array with spin result
     */
    updateBetResult(response) {
        if(!this.active){
            return;
        }

        slot.winScreen.updateCurrentWin(response.winAmount);
        slot.betLines.updateWinLines(response.winLines);

        this.winSymbols = slot.winSymbols.createSymbolsConfig(response.winSymbols);
        slot.reels.updateWinSymbols(this.winSymbols);

        this.currentSpinResult = response.spinResult;
        this.isWin = response.winAmount > 0;
        this.serverResponseResolve();
    }
}
