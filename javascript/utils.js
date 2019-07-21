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

export const timeBetweenFrames = 16.67;