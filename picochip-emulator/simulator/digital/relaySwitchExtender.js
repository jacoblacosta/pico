const { DigitalOutputSimulatorPinProxy } = require('../../emulator/digital');

class DigitalRelaySwitchExtenderSimulator {
    isDataHigh = null;
    isShiftClockHigh = null;
    isLatchClockHigh = null;
    constructor(capacity, digitalOutputSimulatorPinProxies) {
        this.digitalOutputSimulatorPinProxies = digitalOutputSimulatorPinProxies;
        this.capacity = capacity;
        this.indoorRegisters = [];
        for (let i = 0; i < this.capacity; i++) {
            this.indoorRegisters[i] = false;
        }
        this.dataPinProxy = new DigitalOutputSimulatorPinProxy(false, (isHigh) => { this.onDataWrite(isHigh); })
        this.shiftClockPinProxy = new DigitalOutputSimulatorPinProxy(false, (isHigh) => { this.onShiftClockWrite(isHigh); })
        this.latchClockPinProxy = new DigitalOutputSimulatorPinProxy(false, (isHigh) => { this.onLatchClockWrite(isHigh); })
    }
    onDataWrite(isHigh) {
        this.isDataHigh = isHigh;
            return true;
    }
    onShiftClockWrite(isHigh) {
        if (this.isShiftClockHigh !== isHigh && isHigh) {
            this.shift(this.isDataHigh);
        }
        this.isShiftClockHigh = isHigh;
        return true;
    }
    onLatchClockWrite(isHigh) {
        if (this.isLatchClockHigh !== isHigh && isHigh) {
            this.latch();
        }
        this.isLatchClockHigh = isHigh;
        return true;
    }
    shift(isHigh) {
        for (let i = 1; i < this.capacity; i++) {
            this.indoorRegisters[i] = this.indoorRegisters[i - 1];
        }
        this.indoorRegisters[0] = isHigh;
    }
    latch() {
        for (let i = 0; i < this.capacity; i++) {
            const isHigh = this.indoorRegisters[i];
            const digitalOutputSimulatorPinProxy = digitalOutputSimulatorPinProxies[i];
            if (digitalOutputSimulatorPinProxy) {
                digitalOutputSimulatorPinProxy.write(isHigh);
            }
        }
    }
}
module.exports = DigitalRelaySwitchExtenderSimulator;