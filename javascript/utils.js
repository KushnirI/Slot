import {animationRequired, changeAnimRequireTo, spinButton, winScreen, server, betLines} from "./engine";

/**
 * creates random integer value between min and max
 * @param {number} min min possible value
 * @param {number} max max possible value
 * @returns {number}
 */
export function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

/**
 * start/stop spin depending on animationRequired param
 * @param {number} addSymb amount of added symbols before the spin end
 */
export function makeSpin() {
    if(!animationRequired){
        winScreen.hideScreen();
        betLines.removeWinLines();

        server.start(betLines.activeBetLines);
    } else {
        changeAnimRequireTo(false);
        spinButton.disable();
    }

}

export const timeBetweenFrames = 16.67;