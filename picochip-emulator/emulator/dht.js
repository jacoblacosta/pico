class DhtManagerEmulator {
    constructor(dhtSimulatorPinProxies = []) {
        this.dhtSimulatorPinProxies = dhtSimulatorPinProxies;
    }
    outputEmulators = [];
    hal = {
        init: (pinIdx) => {
            const dhtSimulatorPinProxy = this.dhtSimulatorPinProxies[pinIdx];
            if (dhtSimulatorPinProxy) {
                const outputEmulator = new DhtEmulator(dhtSimulatorPinProxy);
                this.outputEmulators[pinIdx] = outputEmulator;
                return outputEmulator.hal;
            } else {
                return false;
            }
        }
    }
}
class DhtEmulator {
    constructor(dhtSimulatorPinProxy) {
        this.dhtSimulatorPinProxy = dhtSimulatorPinProxy;
    }
    hal = {
        read: () => {
            return this.dhtSimulatorPinProxy.read();
        }
    }
}

class DhtSimulatorPinProxy {
    constructor(onRead) {
        this.onRead = onRead;
    }
    read() {
        return this.onRead();
    }
}

module.exports.DhtManagerEmulator = DhtManagerEmulator;
module.exports.DhtEmulator = DhtEmulator;
module.exports.DhtSimulatorPinProxy = DhtSimulatorPinProxy;