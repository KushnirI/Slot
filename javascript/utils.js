import {reels, winScreen} from "./engine";

export function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

//I'm not sure if this function should be here, but I removed it from enjine
/**
 *
 * @param {number} addSymb amount of added symbols before the spin end
 */
export function makeSpin(addSymb = 5) {
    winScreen.hideScreen();
    reels.currentWinLines.forEach( symbol => {
        symbol.removeScale();
    });
    reels.clearCurrentWinLines();

    reels.start(addSymb);
}

export const timeBetweenFrames = 16.67;