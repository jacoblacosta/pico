class DigitalOutputManagerEmulator {
    constructor(digitalDeviceSimulatorPinProxies = []) {
        this.digitalDeviceSimulatorPinProxies = digitalDeviceSimulatorPinProxies;
    }
    outputEmulators = [];
    hal = {
        init: (hardwarePinIdx, isInitialHigh) => {
            const digitalDeviceSimulatorPinProxy = this.digitalDeviceSimulatorPinProxies[hardwarePinIdx];
            if (digitalDeviceSimulatorPinProxy) {
                const outputEmulator = new DigitalOutputEmulator(digitalDeviceSimulatorPinProxy, isInitialHigh);
                this.outputEmulators[hardwarePinIdx] = outputEmulator;
                return outputEmulator.hal;
            } else {
                return false;
            }
        }
    }
}
class DigitalOutputEmulator {
    constructor(digitalDeviceSimulatorPinProxy, isInitialHigh) {
        this.digitalDeviceSimulatorPinProxy = digitalDeviceSimulatorPinProxy;
        this.hal.write(isInitialHigh);
    }
    hal = {
        write: (isHigh) => {
            return this.digitalDeviceSimulatorPinProxy.write(isHigh);
        }
    }
}

class DigitalOutputSimulatorPinProxy {
    constructor(isInitialHigh, onWrite) {
        this.onWrite = onWrite;
        this.write(isInitialHigh);
    }
    write(isHigh) {
        return this.onWrite(isHigh);
    }
}

module.exports.DigitalOutputManagerEmulator = DigitalOutputManagerEmulator;
module.exports.DigitalOutputEmulator = DigitalOutputEmulator;
module.exports.DigitalOutputSimulatorPinProxy = DigitalOutputSimulatorPinProxy;
