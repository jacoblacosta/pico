'use strict';
export class EventEmitter {
    constructor() {
        this.callbacksPerEvent = {};
    }
    on(event, cb){
        if (!this.callbacksPerEvent[event]) {
            this.callbacksPerEvent[event] = [];
        }
        this.callbacksPerEvent[event].push(cb);
    }
    emit(event, data){
        const callbacks = this.callbacksPerEvent[event];
        if(callbacks) {
            callbacks.forEach(callback => callback(data));
        }
    }
}
export class SmartEventEmitter {
    static getJson(object) {
        if (object && object.toPlainTree) {
            object = object.toPlainTree();
        }
        return JSON.stringify(object);
    }
    constructor() {
        this.subscriptionsPerEvent = {};
    }
    on(event, callback){
        if (!this.subscriptionsPerEvent[event])  {
            this.subscriptionsPerEvent[event] = {
                oldValueJson: undefined,
                callbacks: [],
            };
        }
        this.subscriptionsPerEvent[event].callbacks.push(callback);
    }
    emit(event, newValue) {
        const subscription = this.subscriptionsPerEvent[event];
        if (subscription) {
            const oldValueJson = subscription.oldValueJson;
            const newValueJson = SmartEventEmitter.getJson(newValue);
            if (newValueJson !== oldValueJson) {
                const callbacks = subscription.callbacks;
                callbacks.forEach(callback => callback(newValue));
            }
            subscription.oldValueJson = newValueJson;
        }
    }
}