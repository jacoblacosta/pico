const firmware = require('./firmware');

//print('### in picochipLogic.js head');
module.exports = {
    iteration: function() {
        let powerSettings = firmware.persistent.datum.settings.power;
        let currentIndoorTemperature = firmware.sensor.indoorEnvironment.read().temperature;
        let currentOutdoorTemperature = firmware.sensor.outdoorEnvironment.read().temperature;
        let currentMaxTemperature = Math.max(currentIndoorTemperature, currentOutdoorTemperature);
        let isInSafeThreshold = currentMaxTemperature < powerSettings.generalPowerOffTemperatureThreshold.temperatureThreshold;
        if (!isInSafeThreshold) {
            hal.shutdown();
        }

        let currentInternalSeconds = hal.getCurrentInternalSeconds();
        let secondsSinceRestart = currentInternalSeconds - firmware.startupInternalSeconds;
        let currentUnixSeconds = firmware.clock.internalSecondsToUnixSeconds(hal.getCurrentInternalSeconds());

        let timeSettings = firmware.persistent.datum.settings.time;
        timeSettings.currentTime.currentUnixSeconds = currentUnixSeconds;

        firmware.deviceLogic.lightRelaySwitch.iteration();
        firmware.deviceLogic.fanRelaySwitch.iteration();
        firmware.deviceLogic.waterRelaySwitch.iteration();
        firmware.deviceLogic.heaterRelaySwitch.iteration();
        firmware.deviceLogic.vaporizerRelaySwitch.iteration();

        let indoorTemperatureAndHumididy = firmware.sensor.indoorEnvironment.read();
        let outdoorTemperatureAndHumididy = firmware.sensor.outdoorEnvironment.read();

        let basicStats = firmware.persistent.datum.stats.basic;
        basicStats.time.secondsSinceRestart = secondsSinceRestart;
        basicStats.time.currentUnixSeconds = currentUnixSeconds;
        basicStats.time.tz = timeSettings.currentTime.tz;
        basicStats.environment.currentIndoorTemperature = indoorTemperatureAndHumididy.temperature;
        basicStats.environment.currentIndoorHumidity = indoorTemperatureAndHumididy.humidity;
        basicStats.environment.currentOutdoorTemperature = outdoorTemperatureAndHumididy.temperature;
        basicStats.environment.currentOutdoorHumidity = outdoorTemperatureAndHumididy.humidity;
        basicStats.relay.isLightActive = firmware.deviceLogic.lightRelaySwitch.isRelaySwitchedOn;
        basicStats.relay.isFanActive = firmware.deviceLogic.fanRelaySwitch.isRelaySwitchedOn;
        basicStats.relay.isWaterActive = firmware.deviceLogic.waterRelaySwitch.isRelaySwitchedOn;
        basicStats.relay.isHeaterActive = firmware.deviceLogic.heaterRelaySwitch.isRelaySwitchedOn;
        basicStats.relay.isVaporizerActive = firmware.deviceLogic.vaporizerRelaySwitch.isRelaySwitchedOn;

    },
};
