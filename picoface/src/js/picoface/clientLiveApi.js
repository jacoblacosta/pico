'use strict';
import { EventEmitter } from './util/eventEmitter.js';
import { timeouted, TimeoutedError } from './util/pause.js';
export class ClientLiveApi {
    constructor() {
        this.ee = new EventEmitter();
        this.loop();
    }
    fetched = {};
    promised = {};
    async loop() {
        const webInterfaceSettings = picoface.localApi.getWebInterfaceSettings();
        try {
            this.promised.basicStats = timeouted(webInterfaceSettings.liveApiFailDelay, picoface.restApi.getBasicStats);
            this.fetched.basicStats = await this.promised.basicStats;
            this.ee.emit('basicStats', this.fetched.basicStats);
        } catch (error) {
            if (error instanceof TimeoutedError) {
                this.fetched.basicStats = null;
                console.warn('disconnected from live api');
                this.ee.emit('disconnected');
            } else {
                throw error;
            }
        }
        await pause(webInterfaceSettings.liveApiDelay);
        this.loop();
    }
    async getBasicStats() {
        if (this.fetched.basicStats) {
            return this.fetched.basicStats;
        } else {
            return await this.promised.basicStats;
        }
    }
}
