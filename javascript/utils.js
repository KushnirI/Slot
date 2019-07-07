import {animationRequired, changeAnimRequireTo, button, reels, winScreen} from "./engine";

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

//I'm not sure if this function should be here, but I removed it from enjine
/**
 * start/stop spin depending on animationRequired param
 * @param {number} addSymb amount of added symbols before the spin end
 */
export function makeSpin(addSymb = 5) {
    if(!animationRequired){
        winScreen.hideScreen();
        reels.clearCurrentWinLines();

        reels.start(addSymb);
    } else {
        changeAnimRequireTo(false);
        button.disable();
    }

}

export const timeBetweenFrames = 16.67;