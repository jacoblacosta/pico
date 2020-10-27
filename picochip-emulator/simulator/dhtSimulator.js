class DhtSimulator {
    isInited = false;
    constructor(connectedGpioPinIdx, temperatureAndHumidity) {
        this.connectedGpioPinIdx = connectedGpioPinIdx;
        this.temperatureAndHumidity = temperatureAndHumidity;
    }
    init(gpioPinIdx) {
        const isConnectedToRightPin = (gpioPinIdx === this.connectedGpioPinIdx)
        this.isInited = isConnectedToRightPin;
        return this.isInited;
    }
    read() {
        if (!this.isInited) {
            return undefined;
        } else {
            return this.temperatureAndHumidity;
        }
    }
    shutdown() {
        this.isInited = false;
    }
}

module.exports = DhtSimulator;