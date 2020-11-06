const firmware = require('./firmware');

module.exports = {
    start() {
        let pinSettings = firmware.persistent.datum.settings.pin;
        firmware.sensor.indoorEnvironment = firmware.sensor.dht22.init(pinSettings.indoorDhtDataPin.idx);
        firmware.sensor.outdoorEnvironment = firmware.sensor.dht22.init(pinSettings.outdoorDhtDataPin.idx);
    },
};
