import {events} from "./engine";

export class Observable {

    by (params) {
        if( !this.eventHandlers ){
            this.eventHandlers = {};
        }

        for( let eventName in params) {
            if( params.hasOwnProperty(eventName) ) {
                if ( !this.eventHandlers[eventName]){
                    events.addListener(eventName, this);
                }

                this.eventHandlers[eventName] = params[eventName] ;
            }
        }
    }

    fireEvent(eventName, ...args){
        events.fireEvent(eventName, args);
    }
}


