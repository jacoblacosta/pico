const PicochipEmulator = require('../picochipEmulator.js');
const PinboardSimulator = require('./pinboard.js');
class EnvironmentSimulator {
    indoorEnvironment = {
        temperature: 25,
        humidity: 50,
    };
    outdoorEnvironment = {
        temperature: 25,
        humidity: 50,
    };
    dt = 0.1;
    constructor() {
        this.pinboardSimulator = new PinboardSimulator(this.indoorEnvironment, this.outdoorEnvironment);
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
            this.pinboardSimulator,
            () => { return this.onPicochipEmulatorReset(); }
        );
    }
    simulateStep() {
        if (this.pinboardSimulator.digitalLightRelaySwitchSimulator.isHigh) {
            this.indoorEnvironment.temperature += 0.2 * this.dt;
            this.indoorEnvironment.humidity -= 0.5 * this.dt;
        }
        if (this.pinboardSimulator.digitalWaterRelaySwitchSimulator.isHigh) {
            this.indoorEnvironment.temperature -= 0.5 * this.dt;
            this.indoorEnvironment.humidity += 1.0 * this.dt;
        }
        if (this.pinboardSimulator.digitalHeaterRelaySwitchSimulator.isHigh) {
            this.indoorEnvironment.temperature += 1.0 * this.dt;
            this.indoorEnvironment.humidity -= 1.0 * this.dt;
        }
        if (this.pinboardSimulator.digitalVaporizerRelaySwitchSimulator.isHigh) {
            const humidityRatio = this.indoorEnvironment.humidity / 100;
            const temperatureAffectRatio = 1 - humidityRatio;
            this.indoorEnvironment.temperature -= 1.0 * temperatureAffectRatio * this.dt;
            this.indoorEnvironment.humidity += 5.0 * this.dt;
        }
        this.indoorEnvironment.humidity = Math.min(100, this.indoorEnvironment.humidity);
        this.indoorEnvironment.humidity = Math.max(0, this.indoorEnvironment.humidity);
        let mixRatio;
        if (this.pinboardSimulator.digitalFanRelaySwitchSimulator.isHigh) {
            mixRatio = 0.2 * this.dt;
        } else {
            mixRatio = 0.01 * this.dt;
        }


        this.indoorEnvironment.temperature = this.indoorEnvironment.temperature * (1 - mixRatio) + this.outdoorEnvironment.temperature * mixRatio;
        this.indoorEnvironment.humidity = this.indoorEnvironment.humidity * (1 - mixRatio) + this.outdoorEnvironment.humidity * mixRatio;

        this.pinboardSimulator.indoorDhtSimulator.environment = {
            temperature: this.indoorEnvironment.temperature,
            humidity: this.indoorEnvironment.humidity,
        }
        this.pinboardSimulator.outdoorDhtSimulator.environment = {
            temperature: this.outdoorEnvironment.temperature,
            humidity: this.outdoorEnvironment.humidity,
        }
    }
}

module.exports = EnvironmentSimulator;