module.exports = {
    start() {
        //let pinSettings = firmware.persistent.datum.settings.pin;
        firmware.sensor.indoorEnvironment = firmware.sensorManager.dht22.init(20);
        firmware.sensor.outdoorEnvironment = firmware.sensorManager.dht22.init(21);
    },
};
