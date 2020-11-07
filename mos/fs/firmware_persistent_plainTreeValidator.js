module.exports = {
    time24: function(value) {
        return (typeof value.h === 'number' && value.h >= 0 && value.h < 24 && typeof value.m === 'number' && value.m >= 0 && value.m < 60 && typeof value.s === 'number' && value.s >= 0 && value.s < 60);
    },
    timespan24: function(value) {
        return (
            typeof value.from === 'object' && firmware.persistent.plainTreeValidator.time24(value.from) &&
            typeof value.to === 'object' && firmware.persistent.plainTreeValidator.time24(value.to)
        );
    },
    hardwarePin: function(value) {
        return (typeof value.idx === 'number' && value.idx >= 0 && value.idx < 32);
    },
    smartOutputPin: function(value) {
        return (
            typeof value.idx === 'number' && value.idx >= 0 && value.idx < 32 &&
            typeof value.modeKey === 'string' && (value.modeKey === 'raw' || value.modeKey === 'extended')
        );


    },
    cyclicTimerSettingsSection: function(value) {
        return (
            typeof value.timespan24 === 'object' && firmware.persistent.plainTreeValidator.timespan24(value.timespan24) &&
            typeof value.isEnabled === 'boolean'
        );
    },
    temperatureThrersholdSettingsSection: function(value) {
        return (
            typeof value.temperatureThreshold === 'number' && value.temperatureThreshold >= -270 && value.temperatureThreshold <= 270 &&
            typeof value.isEnabled === 'boolean'
        );
    },
    humidityThrersholdSettingsSection: function(value) {
        return (
            typeof value.humidityThreshold === 'number' && value.humidityThreshold >= 0 && value.humidityThreshold <= 100 &&
            typeof value.isEnabled === 'boolean'
        );
    },
    switchCooldownSettingsSection: function(value) {
        return (
            typeof value.seconds === 'number' && value.seconds > 0 && value.seconds <= 900 &&
            typeof value.isEnabled === 'boolean'
        );
    },
    periodicDutySettingsSection: function(value) {
        return (
            typeof value.count === 'number' && value.count > 0 && value.count < 10 &&
            typeof value.duration === 'number' && value.duration > 0 && value.duration < 60*60
        );
    },
    dutyModulationSettingsSection: function(value) {
        return (
            typeof value.ratio === 'number' && value.ratio > 0 && value.ratio <= 1 &&
            typeof value.duration === 'number' && value.duration > 0 && value.duration < 300
        );
    },
    wifiStationSettingsSection: function(value) {
        return (
            typeof value.ssid === 'string' && firmware.persistent.plainTreeValidator.safeString(value.ssid) &&
            typeof value.password === 'string' && firmware.persistent.plainTreeValidator.safeString(value.password) &&
            typeof value.isEnabled === 'boolean'
        );
    },
    wifiAccessPointSettingsSection: function(value) {
        return (
            typeof value.ssid === 'string' && firmware.persistent.plainTreeValidator.safeString(value.ssid) &&
            typeof value.password === 'string' && firmware.persistent.plainTreeValidator.safeString(value.password) &&
            typeof value.isEnabled === 'boolean'
        );
    },
    currentTimeSettingsSection: function(value) {
        return (typeof value.currentUnixSeconds === 'number' && typeof value.tz === 'number' && value.tz >= -12 && value.tz <= 12);
    },
    environmentReadingsStatsSection: function(value) {
        return (
            typeof value.currentIndoorTemperature === 'number' && value.currentIndoorTemperature >= -270 && value.currentIndoorTemperature <= 270 &&
            typeof value.currentIndoorHumidity === 'number' && value.currentIndoorHumidity >= 0 && value.currentIndoorHumidity <= 100 &&
            typeof value.currentOutdoorTemperature === 'number' && value.currentOutdoorTemperature >= -270 && value.currentOutdoorTemperature <= 270 &&
            typeof value.currentOutdoorHumidity === 'number' && value.currentOutdoorHumidity >= 0 && value.currentOutdoorHumidity <= 100
        );
    },
    relayStateStatsSection: function(value) {
        return (
            typeof value.isLightActive === 'boolean' &&
            typeof value.isFanActive === 'boolean' &&
            typeof value.isWaterActive === 'boolean' &&
            typeof value.isHeaterActive === 'boolean' &&
            typeof value.isVaporizerActive === 'boolean'
        );
    },
    timeTelemetryStatsSection: function(value) {
        return (
            typeof value.secondsSinceRestart === 'number' && value.secondsSinceRestart >= 0 &&
            typeof value.currentUnixSeconds === 'number' &&
            typeof value.tz === 'number' && value.tz >= -12 && value.tz <= 12
        );
    },
    lightSettings: function(value) {
        return (
            typeof value.cyclicTimer === 'object' && firmware.persistent.plainTreeValidator.cyclicTimerSettingsSection(value.cyclicTimer) &&
            typeof value.indoorTemperatureThreshold === 'object' && firmware.persistent.plainTreeValidator.temperatureThrersholdSettingsSection(value.indoorTemperatureThreshold)  &&
            typeof value.switchCooldown === 'object' && firmware.persistent.plainTreeValidator.switchCooldownSettingsSection(value.switchCooldown)  &&
            (typeof value.manualOverride === 'undefined' || typeof value.manualOverride === 'boolean')
        );
    },
    fanSettings: function(value) {
        return (
            typeof value.cyclicTimer === 'object' && firmware.persistent.plainTreeValidator.cyclicTimerSettingsSection(value.cyclicTimer) &&
            typeof value.indoorTemperatureThreshold === 'object' && firmware.persistent.plainTreeValidator.temperatureThrersholdSettingsSection(value.indoorTemperatureThreshold)  &&
            typeof value.switchCooldown === 'object' && firmware.persistent.plainTreeValidator.switchCooldownSettingsSection(value.switchCooldown)  &&
            (typeof value.manualOverride === 'undefined' || typeof value.manualOverride === 'boolean')
        );
    },
    waterSettings: function(value) {
        return (
            typeof value.periodicDuty === 'object' && firmware.persistent.plainTreeValidator.periodicDutySettingsSection(value.periodicDuty) &&
            typeof value.cyclicTimer === 'object' && firmware.persistent.plainTreeValidator.cyclicTimerSettingsSection(value.cyclicTimer) &&
            typeof value.dutyModulation === 'object' && firmware.persistent.plainTreeValidator.dutyModulationSettingsSection(value.dutyModulation) &&
            (typeof value.manualOverride === 'undefined' || typeof value.manualOverride === 'boolean')
        );
    },
    heaterSettings: function(value) {
        return (
            typeof value.cyclicTimer === 'object' && firmware.persistent.plainTreeValidator.cyclicTimerSettingsSection(value.cyclicTimer) &&
            typeof value.indoorTemperatureThreshold === 'object' && firmware.persistent.plainTreeValidator.temperatureThrersholdSettingsSection(value.indoorTemperatureThreshold)  &&
            typeof value.switchCooldown === 'object' && firmware.persistent.plainTreeValidator.switchCooldownSettingsSection(value.switchCooldown)  &&
            (typeof value.manualOverride === 'undefined' || typeof value.manualOverride === 'boolean')
        );
    },
    vaporizerSettings: function(value) {
        return (
            typeof value.cyclicTimer === 'object' && firmware.persistent.plainTreeValidator.cyclicTimerSettingsSection(value.cyclicTimer) &&
            typeof value.indoorHumidityThreshold === 'object' && firmware.persistent.plainTreeValidator.humidityThrersholdSettingsSection(value.indoorHumidityThreshold)  &&
            typeof value.switchCooldown === 'object' && firmware.persistent.plainTreeValidator.switchCooldownSettingsSection(value.switchCooldown)  &&
            (typeof value.manualOverride === 'undefined' || typeof value.manualOverride === 'boolean')
        );
    },
    powerSettings: function(value) {
        return (
            typeof value.generalPowerOffTemperatureThreshold === 'object' && firmware.persistent.plainTreeValidator.temperatureThrersholdSettingsSection(value.generalPowerOffTemperatureThreshold)
        );
    },
    timeSettings: function(value) {
        return (
            typeof value.currentTime === 'object' && firmware.persistent.plainTreeValidator.currentTimeSettingsSection(value.currentTime)
        );
    },
    wifiSettings: function(value) {
        return (
            typeof value.station === 'object' && firmware.persistent.plainTreeValidator.wifiStationSettingsSection(value.station) &&
            typeof value.accessPoint === 'object' && firmware.persistent.plainTreeValidator.wifiAccessPointSettingsSection(value.accessPoint)
        );
    },
    sensorSettings: function(value) {
        return (
            typeof value.indoorEnvironment === 'object' && firmware.persistent.plainTreeValidator.environmentSensorSettigs(value.indoorEnvironment) &&
            typeof value.outdoorEnvironment === 'object' && firmware.persistent.plainTreeValidator.environmentSensorSettigs(value.outdoorEnvironment)
        );
    },
    environmentSensorSettigs: function(value) {
        return (
            typeof value.virtual === 'object' && firmware.persistent.plainTreeValidator.environmentSensorVirtualSettings(value.virtual) &&
            typeof value.dht === 'object' && firmware.persistent.plainTreeValidator.environmentSensorDhtSettings(value.dht) &&
            typeof value.bme === 'object' && firmware.persistent.plainTreeValidator.environmentSensorBmeSettings(value.bme) &&
            typeof value.bmp === 'object' && firmware.persistent.plainTreeValidator.environmentSensorBmpSettings(value.bmp) &&
            typeof value.ds === 'object' && firmware.persistent.plainTreeValidator.environmentSensorDsSettings(value.ds) &&
            typeof value.sensorType === 'object' && firmware.persistent.plainTreeValidator.environmentSensorType(value.sensorType)
        );
    },
    environmentSensorVirtualSettings: function(value) {
        // TODO: this
        return true;
    },
    environmentSensorDhtSettings: function(value) {
        // TODO: this
        return true;
    },
    environmentSensorBmeSettings: function(value) {
        // TODO: this
        return true;
    },
    environmentSensorBmpSettings: function(value) {
        // TODO: this
        return true;
    },
    environmentSensorDsSettings: function(value) {
        // TODO: this
        return true;
    },
    environmentSensorType: function(value) {
        // TODO: this
        return true;
    },
    peripheralSettings: function(value) {
        return (
            typeof value.input === 'object' && firmware.persistent.plainTreeValidator.inputPeripheralSetting(value.input) &&
            typeof value.output === 'object' && firmware.persistent.plainTreeValidator.outputPeripheralSetting(value.output)
        );
    },
    inputPeripheralSetting: function(value) {
        // TODO: this
        return true;
    },
    outputPeripheralSetting: function(value) {
        // TODO: this
        return true;
    },
    settings: function(value) {
        return (
            typeof value.light === 'object' && firmware.persistent.plainTreeValidator.lightSettings(value.light) &&
            typeof value.fan === 'object' && firmware.persistent.plainTreeValidator.fanSettings(value.fan) &&
            typeof value.water === 'object' && firmware.persistent.plainTreeValidator.waterSettings(value.water) &&
            typeof value.heater === 'object' && firmware.persistent.plainTreeValidator.heaterSettings(value.heater) &&
            typeof value.vaporizer === 'object' && firmware.persistent.plainTreeValidator.vaporizerSettings(value.vaporizer) &&
            typeof value.power === 'object' && firmware.persistent.plainTreeValidator.powerSettings(value.power) &&
            typeof value.time === 'object' && firmware.persistent.plainTreeValidator.timeSettings(value.time) &&
            typeof value.wifi === 'object' && firmware.persistent.plainTreeValidator.wifiSettings(value.wifi)
        );
    },
    basicStats: function(value) {
        return (
            typeof value.environment === 'object' && firmware.persistent.plainTreeValidator.environmentReadingsStatsSection(value.environment) &&
            typeof value.relay === 'object' && firmware.persistent.plainTreeValidator.relayStateStatsSection(value.relay) &&
            typeof value.time === 'object' && firmware.persistent.plainTreeValidator.timeTelemetryStatsSection(value.time)
        );
    },
    stats: function(value) {
        return (
            typeof value.basic === 'object' && firmware.persistent.plainTreeValidator.basicStats(value.basic)
        );
    },
    datum: function(value) {
        return (
            typeof value.settings === 'object' && firmware.persistent.plainTreeValidator.settings(value.settings) &&
            typeof value.stats === 'object' && firmware.persistent.plainTreeValidator.stats(value.stats)
        );
    },
    safeString: function(unsafeString) {
        if (unsafeString.length > 0 && unsafeString.length < 32) {
            let safeChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-';
            let isSafeString = true;
            for (let unsafeCharIdx = 0; unsafeCharIdx < unsafeString.length; unsafeCharIdx++) {
                let unsafeChar = unsafeString[unsafeCharIdx];
                let isSafeChar = false;
                for (let safeCharIdx = 0; safeCharIdx < safeChars.length; safeCharIdx++) {
                    let safeChar = safeChars[safeCharIdx];
                    if (unsafeChar === safeChar) {
                        isSafeChar = true;
                        break;
                    }
                }
                if (!isSafeChar) {
                    isSafeString = false;
                    break;
                }
            }
            return isSafeString;
        } else {
            return false;
        }
    }
};
