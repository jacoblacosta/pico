const { DigitalOutputManagerEmulator }  = require('../emulator/digital');
const { DhtManagerEmulator }  = require('../emulator/dht');

const DigitalDummyLedSimulator = require('./digital/dummyLed');
const DigitalRelaySwitchSimulator = require('./digital/relaySwitch');
const DigitalRelaySwitchExtenderSimulator = require('./digital/relaySwitchExtender');
const DhtSimulator = require('./dht');

class PinboardSimulator {
    constructor(indoorInitialEnvironment, outdoorInitialEnvironment) {

        //// digital

        // simulators

        this.digitalDummyLedSimulator = new DigitalDummyLedSimulator();
        this.digitalLightRelaySwitchSimulator = new DigitalRelaySwitchSimulator();
        this.digitalFanRelaySwitchSimulator = new DigitalRelaySwitchSimulator();
        this.digitalWaterRelaySwitchSimulator = new DigitalRelaySwitchSimulator();
        this.digitalHeaterRelaySwitchSimulator = new DigitalRelaySwitchSimulator();
        this.digitalVaporizerRelaySwitchSimulator = new DigitalRelaySwitchSimulator();

        // extended pins

        this.extenderDigitalOutputSimulatorPinProxies = [];
        this.extenderDigitalOutputSimulatorPinProxies[7] = this.digitalVaporizerRelaySwitchSimulator.pinProxy;

        // extender simulator

        this.digitalRelaySwitchExtenderSimulator = new DigitalRelaySwitchExtenderSimulator(16, this.extenderDigitalOutputSimulatorPinProxies);

        // raw pins

        this.digitalOutputSimulatorPinProxies = [];
        this.digitalOutputSimulatorPinProxies[0] = this.digitalDummyLedSimulator.pinProxy;
        this.digitalOutputSimulatorPinProxies[1] = this.digitalLightRelaySwitchSimulator.pinProxy;
        this.digitalOutputSimulatorPinProxies[2] = this.digitalFanRelaySwitchSimulator.pinProxy;
        this.digitalOutputSimulatorPinProxies[3] = this.digitalWaterRelaySwitchSimulator.pinProxy;
        this.digitalOutputSimulatorPinProxies[4] = this.digitalHeaterRelaySwitchSimulator.pinProxy;
        //this.digitalOutputSimulatorPinProxies[5] = this.digitalVaporizerRelaySwitchSimulator.pinProxy;
        this.digitalOutputSimulatorPinProxies[10] = this.digitalRelaySwitchExtenderSimulator.dataPinProxy;
        this.digitalOutputSimulatorPinProxies[11] = this.digitalRelaySwitchExtenderSimulator.shiftClockPinProxy;
        this.digitalOutputSimulatorPinProxies[12] = this.digitalRelaySwitchExtenderSimulator.latchClockPinProxy;

        // manager

        this.digitalOutputManagerEmulator = new DigitalOutputManagerEmulator(this.digitalOutputSimulatorPinProxies);

        //// sensor

        // simulators

        this.indoorDhtSimulator = new DhtSimulator(indoorInitialEnvironment);
        this.outdoorDhtSimulator = new DhtSimulator(outdoorInitialEnvironment);

        // pins

        this.dhtSimulatorPinProxies = [];
        this.dhtSimulatorPinProxies[20] = this.indoorDhtSimulator.pinProxy;
        this.dhtSimulatorPinProxies[21] = this.outdoorDhtSimulator.pinProxy;

        // manager

        this.dhtManagerEmulator = new DhtManagerEmulator(this.dhtSimulatorPinProxies);
    }
}
module.exports = PinboardSimulator;