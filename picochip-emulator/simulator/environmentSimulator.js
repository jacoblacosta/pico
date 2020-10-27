const PicochipEmulator = require('../picochipEmulator.js');
const RelaySwitchSimulator = require('./relaySwitchSimulator.js');
const DhtSimulator = require('./dhtSimulator.js');
class EnvironmentSimulator {
    indoorTemperature = 25;
    indoorHumidity = 50;
    outdoorTemperature = 25;
    outdoorHumidity = 50;
    dt = 0.1;
    constructor() {
        this.lightSimulator = new RelaySwitchSimulator(1, false);
        this.fanSimulator = new RelaySwitchSimulator(2, false);
        this.waterSimulator = new RelaySwitchSimulator(3, false);
        this.heaterSimulator = new RelaySwitchSimulator(4, false);
        this.vaporizerSimulator = new RelaySwitchSimulator(5, false);
        this.innerDhtSimulator = new DhtSimulator(14, {temperature: this.indoorTemperature, humidity: this.indoorHumidity });
        this.outerDhtSimulator = new DhtSimulator(15, {temperature: this.outdoorTemperature, humidity: this.outdoorHumidity });
        setInterval(() => {
            this.simulateStep();
        }, this.dt * 1000);
        this.onPicochipEmulatorReset();
    }
    onPicochipEmulatorReset() {
        if (this.picochipEmulator && this.picochipEmulator.isShutdowned != true) {
            throw new Error('reset event without shotdown state');
        }
        this.recreatePicochipEmulator();

    }
    recreatePicochipEmulator() {
        this.picochipEmulator = new PicochipEmulator(
            this.lightSimulator,
            this.fanSimulator,
            this.waterSimulator,
            this.heaterSimulator,
            this.vaporizerSimulator,
            this.innerDhtSimulator,
            this.outerDhtSimulator,
            () => { return this.onPicochipEmulatorReset(); }
        );
    }
    simulateStep() {
        if (this.lightSimulator.isRelaySwitchedOn) {
            this.indoorTemperature += 0.2 * this.dt;
            this.indoorHumidity -= 0.5 * this.dt;
        }
        if (this.waterSimulator.isRelaySwitchedOn) {
            this.indoorTemperature -= 0.5 * this.dt;
            this.indoorHumidity += 1.0 * this.dt;
        }
        if (this.heaterSimulator.isRelaySwitchedOn) {
            this.indoorTemperature += 1.0 * this.dt;
            this.indoorHumidity -= 1.0 * this.dt;
        }
        if (this.vaporizerSimulator.isRelaySwitchedOn) {
            let indoorHumidityRatio = this.indoorHumidity / 100;
            let indoorTemperatureAffectRatio = 1 - indoorHumidityRatio;
            this.indoorTemperature -= 1.0 * indoorTemperatureAffectRatio * this.dt;
            this.indoorHumidity += 5.0 * this.dt;
        }
        this.indoorHumidity = Math.min(100, this.indoorHumidity);
        this.indoorHumidity = Math.max(0, this.indoorHumidity);
        let mixRatio;
        if (this.fanSimulator.isRelaySwitchedOn) {
            mixRatio = 0.2 * this.dt;
        } else {
            mixRatio = 0.01 * this.dt;
        }


        this.indoorTemperature = this.indoorTemperature * (1 - mixRatio) + this.outdoorTemperature * mixRatio;
        this.indoorHumidity = this.indoorHumidity * (1 - mixRatio) + this.outdoorHumidity * mixRatio;

        this.innerDhtSimulator.temperatureAndHumidity = {
            temperature: this.indoorTemperature,
            humidity: this.indoorHumidity,
        }
        this.outerDhtSimulator.temperatureAndHumidity = {
            temperature: this.outdoorTemperature,
            humidity: this.outdoorHumidity,
        }
    }
}

module.exports = EnvironmentSimulator;