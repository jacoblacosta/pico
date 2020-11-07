module.exports = {
    init: function(capacity, dataHardwarePinIdx, shiftClockHardwarePinIdx, latchClockHardwarePinIdx) {
        let registers = [];
        for (let i = 0; i < capacity; i++) {
            registers[i] = false;
        }
        let extender = {
            registers: registers,
            capacity: capacity,
            dataHardwarePin: hal.digital.init(dataHardwarePinIdx),
            shiftClockHardwarePin: hal.digital.init(shiftClockHardwarePinIdx),
            latchClockHardwarePin: hal.digital.init(latchClockHardwarePinIdx),
            init: function(extendedPinIdx, isInitialHigh) {
                extender.write(extendedPinIdx, isInitialHigh);
                let relaySwitch = {
                    write: function(isHigh) {
                        extender.write(extendedPinIdx, isHigh);
                    }
                }
                return relaySwitch;
            },
            write: function(extendedPinIdx, isHigh) {
                extender.registers[extendedPinIdx] = isHigh;
                this.dump();
            },
            dump: function() {
                extender.shiftClockHardwarePin.write(false);
                extender.latchClockHardwarePin.write(false);
                hal.delay(100);
                for (let i = extender.capacity - 1; i >= 0; i--) {
                    let register = extender.registers[i];
                    extender.dataHardwarePin.write(register);
                    hal.delay(100);
                    extender.shiftClockHardwarePin.write(true);
                    hal.delay(100);
                    extender.shiftClockHardwarePin.write(false);
                    hal.delay(100);
                }
                extender.latchClockHardwarePin.write(true);
                hal.delay(100);
                extender.shiftClockHardwarePin.write(false);
                extender.latchClockHardwarePin.write(false);
                hal.delay(100);
            }
        }
        return extender;
    }
};
