module.exports = {
    logger: require('./firmware_logger.js'),
    clock: require('./firmware_clock.js'),
    persistent: require('./firmware_persistent.js'),
    rpc: require('./firmware_rpc.js'),
    deviceLogic: require('./firmware_deviceLogic.js'),
    picochipLogic: require('./firmware_picochipLogic.js'),
    startupInternalSeconds: hal.getCurrentInternalSeconds(),
    lastHealthLogInternalSeconds: 0,
    start: function() {
        // start

        firmware.persistent.start();
        firmware.rpc.start();

        let pinSettings = firmware.persistent.datum.settings.pin;
        hal.relaySwitch.light.init(pinSettings.lightRelaySwitchPin.idx);
        hal.relaySwitch.fan.init(pinSettings.fanRelaySwitchPin.idx);
        hal.relaySwitch.water.init(pinSettings.waterRelaySwitchPin.idx);
        hal.relaySwitch.heater.init(pinSettings.heaterRelaySwitchPin.idx);
        hal.relaySwitch.vaporizer.init(pinSettings.vaporizerRelaySwitchPin.idx);
        hal.sensor.innerDht.init(pinSettings.innerDhtDataPin.idx);
        hal.sensor.outerDht.init(pinSettings.outerDhtDataPin.idx);

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