const { DigitalOutputSimulatorPinProxy } = require('../../emulator/digital');

class DigitalRelaySwitchSimulator {
    isHigh = null;
    constructor(isInitialHigh) {
        this.pinProxy = new DigitalOutputSimulatorPinProxy(isInitialHigh, (isHigh) => { this.isHigh = isHigh; })
    }
}

module.exports = DigitalRelaySwitchSimulator