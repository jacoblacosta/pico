const ExpressAsRpcOverHttpAndStaticHttpServerEmulator = require('./expressAsRpcOverHttpAndStaticHttpServerEmulator.js');
const mergeDeep = require('./util/mergeDeep.js');

class PicochipEmulator {
    static persistentStorage = {};
    genericCfg = {};
    isShutdowned = false;
    startDateAndTime = new Date();
    constructor(pinboardSimulator) {
        this.pinboardSimulator = pinboardSimulator;
        const genericCfgFromBackup = PicochipEmulator.persistentStorage.genericCfg;

        if (genericCfgFromBackup) {
            this.genericCfg = genericCfgFromBackup;
        } else {
            this.genericCfg = {};
        }
        this.expressAsRpcOverHttpAndStaticHttpServerEmulator = new ExpressAsRpcOverHttpAndStaticHttpServerEmulator();
        this.wifiEmulatorState = {
            station: {
                ssid: 'picoface',
                password: 'gigabutt',
            },
            accessPoint: {
                ssid: 'picoface',
                password: 'gigabutt',
            },
        }
        setTimeout(() => {
            this.startLowLevelEmulation();
        }, 3000);
    }


    async startLowLevelEmulation() {
        global.hal = this.hal;
        const halBasedFirmware = (await import('../mos/fs/firmwareProxy.js')).default;
        global.firmware = halBasedFirmware;
        halBasedFirmware.start();
    };
    hal = {
        cfg: {
            get: (key) => {
                let  tokens = key.split('.');
                let subset = this.genericCfg;
                for (let tokenIdx = 0; tokenIdx < tokens.length; tokenIdx++) {
                    const token = tokens[tokenIdx];
                    subset = subset[token];
                    if (!subset) { break; }
                }
                return subset;
            },
            set: (cfgSubsetObject) => {
                mergeDeep(this.genericCfg, cfgSubsetObject);
            },
        },
        rpc: {
            registerCallback: (name, callback) => {
                return this.expressAsRpcOverHttpAndStaticHttpServerEmulator.registerCallback(name, callback);
            },
            call: (name, input, callback, userdata) => {
                return this.expressAsRpcOverHttpAndStaticHttpServerEmulator.call(name, input, callback, userdata);
            },
        },
        wifi: {
            setStationConfig: (ssid, password, isEnabled) => {
                this.wifiEmulatorState.station = {ssid, password, isEnabled};
                console.log('WIFI EMULATOR: station ssid and password changed:', ssid, password, isEnabled);
            },
            getStationConfig: () => {
                return this.wifiEmulatorState.station;
            },
            setAccessPointConfig: (ssid, password, isEnabled) => {
                this.wifiEmulatorState.accessPoint = {ssid, password, isEnabled};
                console.log('WIFI EMULATOR: accessPoint ssid and password changed:', ssid, password, isEnabled);
            },
            getAccessPointConfig: () => {
                return this.wifiEmulatorState.accessPoint;
            },
        },
        digital: {
            init: (gpioPinIdx, isInitialHigh) => {
                return this.pinboardSimulator.digitalOutputManagerEmulator.hal.init(gpioPinIdx, isInitialHigh);
            },
        },
        sensor: {
            dht22: {
                init: (gpioPinIdx) => {
                    return this.pinboardSimulator.dhtManagerEmulator.hal.init(gpioPinIdx);
                },
            },
        },
        timer: {
            add: (millisecondsDelay, isRepeat, callback, userdata) => {
                if (isRepeat) {
                    const intervalId = setInterval(() => {
                        if (!this.isShutdowned) {
                            callback(userdata);
                        } else {
                            clearInterval(intervalId);
                        }
                    }, millisecondsDelay);
                    return intervalId;
                } else {
                    const timeoutId = setTimeout(() => {
                        if (!this.isShutdowned) { callback(userdata); }
                    }, millisecondsDelay);
                    return timeoutId;
                }
            },
            remove(timerId) {
                clearInterval(timerId);
                clearTimeout(timerId);
            }
        },
        delay: (microseconds) => {
            // do nothing
        },
        sys: {
            getFreeRam() {
                return 123456;
            },
            getTotalRam() {
                return 987654;
            },
        },
        getCurrentInternalSeconds: () => {
            const currentInternalSeconds = (Date.now() - this.startDateAndTime.valueOf()) / 1000;
            return currentInternalSeconds;
        },
        logString: (message) => {
            console.log('LOWLEVEL EMUL: ' + message);
        },
        shutdown: () => {
            this.isShutdowned = true;
            this.expressAsRpcOverHttpAndStaticHttpServerEmulator.shutdown();
            this.lightSimulator.shutdown();
            this.fanSimulator.shutdown();
            this.waterSimulator.shutdown();
            this.indoorDhtSimulator.shutdown();
            this.outdoorDhtSimulator.shutdown();
            throw new Error('shutdown happend');
        },
        restart: () => {
            this.isShutdowned = true;
            this.expressAsRpcOverHttpAndStaticHttpServerEmulator.shutdown();
            this.lightSimulator.shutdown();
            this.fanSimulator.shutdown();
            this.waterSimulator.shutdown();
            this.indoorDhtSimulator.shutdown();
            this.outdoorDhtSimulator.shutdown();
            PicochipEmulator.persistentStorage.genericCfg = this.genericCfg;
            console.warn('restart happends');
        }
    }
}

module.exports = PicochipEmulator;









