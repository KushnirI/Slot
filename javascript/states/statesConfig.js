import {Load} from "./load";
import {Idle} from "./idle";
import {Spin} from "./spin";
import {Win} from "./win";

/**
 * Array of Objects. Each of them contains config for different state
 * Object.class class of state
 * Object.transitions available transitions from current state to nextState
 * Object.transitions[eventName] nextState that becomes active by event with eventName
 */
export const StatesConfig = [
    {class: Load, transitions: {onLoadingComplete: "Idle"}},
    {class: Idle, transitions: {onSpinButtonPressed: "Spin"}},
    {class: Spin, transitions: {playWin: "Win", playIdle: "Idle"}},
    {class: Win, transitions: {betChanged: "Idle", onSpinButtonPressed: "Spin"}}
];