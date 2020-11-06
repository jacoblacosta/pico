'use strict';
import { EventEmitter } from './util/eventEmitter.js';
export class Splash {
    constructor(messageText, ttl = 3000) {
        this.messageText = messageText;
        this.ttl = ttl;
        this.ee = new EventEmitter();
        this.buildDom();
    }
    buildDom() {
        this.$container = document.createElement('div')
        this.$container.classList.add('splash-container');
        this.$message = document.createElement('div');
        this.$message.classList.add('splash-message');
        this.$message.indoorText = this.messageText;
        this.$container.appendChild(this.$message);
        picoface.$appRoot.appendChild(this.$container);

        setTimeout(() => { // immediate-but-deferred to start animation in frist frame after creation
            this.$container.classList.add('fade-out');
        }, 100);
        setTimeout(() => {
            this.clearDom();
        }, this.ttl);
    }
    clearDom() {
        picoface.$appRoot.removeChild(this.$container);
    }

}
