const { DhtSimulatorPinProxy } = require('../emulator/dht');

class DhtSimulator {
    constructor(initialEnvironment) {
        this.environment = initialEnvironment;
        this.pinProxy = new DhtSimulatorPinProxy(() => { return this.environment; })
    }
}




module.exports = DhtSimulator;