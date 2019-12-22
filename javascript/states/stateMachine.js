let instance;

export class StateMachine {
    constructor(statesConfig) {
        // eslint-disable-next-line consistent-this
        instance = this;
        this.states = {};
        this.currentState = null;
        this.init(statesConfig);
    }

    init(statesConfig) {
        statesConfig.forEach((config) => {
            // eslint-disable-next-line new-cap
            let instance = new config.class();

            instance.name = config.class.name;
            instance.transitions = config.transitions;

            this.states[instance.name] = instance;
        });
    }

    changeStateTo(nextStateName) {
        this.currentState = this.states[nextStateName];

        /*when the next state starts it becomes active and in case if it listens the same event
        that finished previous state and is processed later in observable loop it will be finished
        straight away. setTimeout is added to prevent it.*/
        setTimeout(() => this.currentState.start(), 0);
    }

    static get instance() {
        return instance;
    }
}