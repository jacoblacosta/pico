module.exports = {
    start() {
        //let sensorSettings = firmware.persistent.datum.settings.sensor;
        firmware.sensor.indoorEnvironment = firmware.sensorManager.dht22.init(20);
        firmware.sensor.outdoorEnvironment = firmware.sensorManager.dht22.init(21);
    },
};
