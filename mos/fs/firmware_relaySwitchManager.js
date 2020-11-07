module.exports = {
    init: function(hardwarePinIdx, isInitialHigh) {
        let relaySwitch = hal.digital.init(hardwarePinIdx, isInitialHigh);
        return relaySwitch;
    }
};
