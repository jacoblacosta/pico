class RelaySwitchSimulator {
    constructor(connectedGpioPinIdx, isRelaySwitchedOn) {
        this.connectedGpioPinIdx = connectedGpioPinIdx;
        this.isRelaySwitchedOn = isRelaySwitchedOn;
    }
    init(gpioPinIdx) {
        const isConnectedToRightPin = (gpioPinIdx === this.connectedGpioPinIdx)
        this.isInited = isConnectedToRightPin;
        return this.isInited;
    }
    write(isRelaySwitchedOn) {
        if (!this.isInited) {
            return false;
        } else {
            this.isRelaySwitchedOn = isRelaySwitchedOn;
            return true;
        }
    }

    shutdown() {
        this.isInited = false;
    }


}

module.exports = RelaySwitchSimulator;