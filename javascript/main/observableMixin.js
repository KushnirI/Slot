
// eslint-disable-next-line no-unused-vars
export const observableMixin = {
    /**
     *
     * @param {object} params {Object.<string, function>}
     */
    by : function (params) {
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
    },

    /**
     *
     * @param {string} eventName eventName
     * @param {array} args array with arguments
     */
    fireEvent : function(eventName, ...args){
        events.fireEvent(eventName, args);
    }
};