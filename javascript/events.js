export class Events {
    constructor () {
        this.events = {};
    }

    /**
     *
     * @param {string} eventName Name of event
     * @param {object} eventListener object with callback function, which should be called on event
     */
    addListener(eventName, eventListener) {
        if(!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(eventListener);
    }

    /**
     *
     * @param {string} eventName Name of event
     * @param {array} args arguments for callback function
     */
    fireEvent (eventName, args){
        let listeners = this.events[eventName];

        for(let i = 0; i < listeners.length; i++) {
            let listener = listeners[i];
            let handler = listener.eventHandlers[eventName];

            handler.apply(listener, args)
        }

    }
}