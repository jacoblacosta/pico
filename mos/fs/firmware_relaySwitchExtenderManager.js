module.exports = {
    init: function(capacity, dataPinIdx, shiftClockPinIdx, latchClockPinIdx) {
        let registers = [];
        for (let i = 0; i < capacity; i++) {
            registers[i] = false;
        }
        let extender = {
            registers: registers,
            capacity: capacity,
            dataPin: hal.digital.init(dataPinIdx),
            shiftClockPin: hal.digital.init(shiftClockPinIdx),
            latchClockPin: hal.digital.init(latchClockPinIdx),
            init: function(pinIdx, isInitialHigh) {
                extender.write(pinIdx, isInitialHigh);
                let relaySwitch = {
                    write: function(isHigh) {
                        extender.write(pinIdx, isHigh);
                    }
                }
                return relaySwitch;
            },
            write: function(pinIdx, isHigh) {
                extender.registers[pinIdx] = isHigh;
                this.dump();
            },
            dump: function() {
                extender.shiftClockPin.write(false);
                extender.latchClockPin.write(false);
                hal.delay(100);
                for (let i = extender.capacity - 1; i >= 0; i--) {
                    let register = extender.registers[i];
                    extender.dataPin.write(register);
                    hal.delay(100);
                    extender.shiftClockPin.write(true);
                    hal.delay(100);
                    extender.shiftClockPin.write(false);
                    hal.delay(100);
                }
                extender.latchClockPin.write(true);
                hal.delay(100);
                extender.shiftClockPin.write(false);
                extender.latchClockPin.write(false);
                hal.delay(100);
            }
        }
        return extender;
    }
};
