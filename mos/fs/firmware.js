module.exports = {
    logger: require('./firmware_logger.js'),
    clock: require('./firmware_clock.js'),
    persistent: require('./firmware_persistent.js'),
    rpc: require('./firmware_rpc.js'),
    relaySwitchManager: require('./firmware_relaySwitchManager.js'),
    relaySwitchExtenderManager: require('./firmware_relaySwitchExtenderManager.js'),
    relaySwitch: require('./firmware_relaySwitch.js'),
    sensorManager: require('./firmware_sensorManager.js'),
    sensor: require('./firmware_sensor.js'),
    deviceLogic: require('./firmware_deviceLogic.js'),
    picochipLogic: require('./firmware_picochipLogic.js'),
    startupInternalSeconds: hal.getCurrentInternalSeconds(),
    lastHealthLogInternalSeconds: 0,
    start: function() {
        // start

        firmware.persistent.start();
        firmware.rpc.start();
        firmware.relaySwitch.start();
        firmware.sensor.start();

        function loop() {
            let healthLogThrottlingSeconds = 60;
            let currentInternalSeconds = hal.getCurrentInternalSeconds();
            if (firmware.lastHealthLogInternalSeconds + healthLogThrottlingSeconds < currentInternalSeconds) {
                firmware.logger.info('still alive and looping');
                firmware.lastHealthLogInternalSeconds = currentInternalSeconds;
            }
            firmware.picochipLogic.iteration();
        }
        let iterationDt = 0.25;
        hal.timer.add(iterationDt * 1000, true, loop);
    },
};