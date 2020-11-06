const { DigitalOutputSimulatorPinProxy } = require('../../emulator/digital');

class DigitalDummyLedSimulator {
    isHigh = null;
    constructor() {
        this.pinProxy = new DigitalOutputSimulatorPinProxy(false, (isHigh) => { this.isHigh = isHigh; })
    }
}

module.exports = DigitalDummyLedSimulator