'use strict';
import { WebInterfaceSettings } from './crossplatform/assertable.js';
import { EventEmitter } from './util/eventEmitter.js';
export class ClientLocalApi {
    constructor() {
        this.ee = new EventEmitter();
    }
    getWebInterfaceSettings() {
        const localStorageJson = localStorage.getItem('picoface.localApi.webInterfaceSettings');
        if (localStorageJson) {
            return WebInterfaceSettings.fromPlainTree(JSON.parse(localStorageJson));
        } else {
            const newWebInterfaceSettings = new WebInterfaceSettings();
            this.setWebInterfaceSettings(newWebInterfaceSettings);
            return newWebInterfaceSettings;
        }
    }
    setWebInterfaceSettings(webInterfaceSettings) {
        localStorage.setItem('picoface.localApi.webInterfaceSettings', JSON.stringify(webInterfaceSettings.toPlainTree()));
        this.ee.emit('webInterfaceSettings', webInterfaceSettings);
    }
}
