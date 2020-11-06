module.exports = {
    init: function(pinIdx, isInitialHigh) {
        let relaySwitch = hal.digital.init(pinIdx, isInitialHigh);
        return relaySwitch;
    }
};
