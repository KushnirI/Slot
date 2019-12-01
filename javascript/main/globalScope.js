// eslint-disable-next-line no-unused-vars
const app = new PIXI.Application ({
    width: 800,
    height: 500
});

// eslint-disable-next-line no-unused-vars
const possibleSymSrc = [
    "girl.png",
    "ironMan.png",
    "robot.png",

];

// eslint-disable-next-line no-unused-vars
const spinButtonSrc = {
    idle : "idle_spin.png",
    hover: "hover_spin.png",
    down : "down_spin.png",
    disabled : "disabled_spin.png"
};

// eslint-disable-next-line no-unused-vars
const leftSelector ={
    idle : "idle_left.png",
    hover: "hover_left.png",
    down : "down_left.png",
    disabled : "disabled_left.png"
};

// eslint-disable-next-line no-unused-vars
const rightSelector ={
    idle : "idle_right.png",
    hover: "hover_right.png",
    down : "down_right.png",
    disabled : "disabled_right.png"
};

// eslint-disable-next-line no-unused-vars
const numbers = [
    "one.png",
    "two.png",
    "three.png",
    "four.png",
    "five.png",
    "six.png",
];

// eslint-disable-next-line no-unused-vars
const events = {

    events : {},

    /**
     *
     * @param {string} eventName Name of event
     * @param {object} eventListener object with callback function, which should be called on event
     */
    addListener : function(eventName, eventListener) {
        if(!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(eventListener);
    },

    /**
     *
     * @param {string} eventName Name of event
     * @param {array} args arguments for callback function
     */
    fireEvent : function (eventName, args){
        const listeners = this.events[eventName];

        for(let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            const handler = listener.eventHandlers[eventName];

            handler.apply(listener, args)
        }

    }
};
