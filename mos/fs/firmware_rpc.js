module.exports = {
    getLightSettings: function() {
        let plainTree = firmware.persistent.datum.settings.light;
        let isValid = firmware.persistent.plainTreeValidator.lightSettings(plainTree);
        if (isValid) { return plainTree } else { firmware.logger.error('invalid lightSettings on get'); }
    },
    getFanSettings: function() {
        let plainTree = firmware.persistent.datum.settings.fan;
        let isValid = firmware.persistent.plainTreeValidator.fanSettings(plainTree);
        if (isValid) { return plainTree } else { firmware.logger.error('invalid fanSettings on get'); }
    },
    getWaterSettings: function() {
        let plainTree = firmware.persistent.datum.settings.water;
        let isValid = firmware.persistent.plainTreeValidator.waterSettings(plainTree);
        if (isValid) { return plainTree } else { firmware.logger.error('invalid waterSettings on get'); }
    },
    getHeaterSettings: function() {
        let plainTree = firmware.persistent.datum.settings.heater;
        let isValid = firmware.persistent.plainTreeValidator.heaterSettings(plainTree);
        if (isValid) { return plainTree } else { firmware.logger.error('invalid heaterSettings on get'); }
    },
    getVaporizerSettings: function() {
        let plainTree = firmware.persistent.datum.settings.vaporizer;
        let isValid = firmware.persistent.plainTreeValidator.vaporizerSettings(plainTree);
        if (isValid) { return plainTree } else { firmware.logger.error('invalid vaporizerSettings on get'); }
    },
    getPowerSettings: function() {
        let plainTree = firmware.persistent.datum.settings.power;
        let isValid = firmware.persistent.plainTreeValidator.powerSettings(plainTree);
        if (isValid) { return plainTree } else { firmware.logger.error('invalid powerSettings on get'); }
    },
    getTimeSettings: function() {
        firmware.rpc.updateTimeSettingsFromClock(); // time-based tweaks
        let plainTree = firmware.persistent.datum.settings.time;
        let isValid = firmware.persistent.plainTreeValidator.timeSettings(plainTree);
        if (isValid) { return plainTree } else { firmware.logger.error('invalid timeSettings on get'); }
    },
    getWifiSettings: function() {
        firmware.rpc.updateWifiSettingsFromWifiHal(); // wifi-hal-based tweaks
        let plainTree = firmware.persistent.datum.settings.wifi;
        let isValid = firmware.persistent.plainTreeValidator.wifiSettings(plainTree);
        if (isValid) { return plainTree } else { firmware.logger.error('invalid wifiSettings on get'); }
    },
    getSensorSettings: function() {
        let plainTree = firmware.persistent.datum.settings.sensor;
        let isValid = firmware.persistent.plainTreeValidator.sensorSettings(plainTree);
        if (isValid) { return plainTree } else { firmware.logger.error('invalid sensorSettings on get'); }
    },
    getPeripheralSettings: function() {
        let plainTree = firmware.persistent.datum.settings.peripheral;
        let isValid = firmware.persistent.plainTreeValidator.peripheralSettings(plainTree);
        if (isValid) { return plainTree } else { firmware.logger.error('invalid peripheralSettings on get'); }
    },
    getBasicStats: function() {
        firmware.rpc.updateBasicStatsFromClock(); // time-based tweaks
        let plainTree = firmware.persistent.datum.stats.basic;
        let isValid = firmware.persistent.plainTreeValidator.basicStats(plainTree);
        if (isValid) { return plainTree } else { firmware.logger.error('invalid basicStats on get'); }
    },
    setLightSettings: function(plainTree) {
        let isValid = firmware.persistent.plainTreeValidator.lightSettings(plainTree);
        if (isValid) {
            firmware.persistent.datum.settings.light = plainTree;
            firmware.persistent.saveToStorage();
        } else {
            firmware.logger.error('invalid lightSettings on set');
        }
    },
    setFanSettings: function(plainTree) {
        let isValid = firmware.persistent.plainTreeValidator.fanSettings(plainTree);
        if (isValid) {
            firmware.persistent.datum.settings.fan = plainTree;
            firmware.persistent.saveToStorage();
        } else {
            firmware.logger.error('invalid fanSettings on set');
        }
    },
    setWaterSettings: function(plainTree) {
        let isValid = firmware.persistent.plainTreeValidator.waterSettings(plainTree);
        if (isValid) {
            firmware.persistent.datum.settings.water = plainTree;
            firmware.persistent.saveToStorage();
        } else {
            firmware.logger.error('invalid waterSettings on set');
        }
    },
    setHeaterSettings: function(plainTree) {
        let isValid = firmware.persistent.plainTreeValidator.heaterSettings(plainTree);
        if (isValid) {
            firmware.persistent.datum.settings.heater = plainTree;
            firmware.persistent.saveToStorage();
        } else {
            firmware.logger.error('invalid heaterSettings on set');
        }
    },
    setVaporizerSettings: function(plainTree) {
        let isValid = firmware.persistent.plainTreeValidator.vaporizerSettings(plainTree);
        if (isValid) {
            firmware.persistent.datum.settings.vaporizer = plainTree;
            firmware.persistent.saveToStorage();
        } else {
            firmware.logger.error('invalid vaporizerSettings on set');
        }
    },
    setPowerSettings: function(plainTree) {
        let isValid = firmware.persistent.plainTreeValidator.powerSettings(plainTree);
        if (isValid) {
            firmware.persistent.datum.settings.power = plainTree;
            firmware.persistent.saveToStorage();
        } else {
            firmware.logger.error('invalid powerSettings on set');
        }
    },
    setTimeSettings: function(plainTree) {
        let isValid = firmware.persistent.plainTreeValidator.timeSettings(plainTree);
        if (isValid) {
            firmware.persistent.datum.settings.time = plainTree;
            firmware.rpc.updateClockFromTimeSettings(); // time-based tweaks
            firmware.persistent.saveToStorage();
        } else {
            firmware.logger.error('invalid timeSettings on set');
        }
    },
    setWifiSettings: function(plainTree) {
        let isValid = firmware.persistent.plainTreeValidator.wifiSettings(plainTree);
        if (isValid) {
            firmware.persistent.datum.settings.wifi = plainTree;
            firmware.rpc.updateWifiHalFromWifiSettings(); // wifi-hal-based tweaks
            firmware.persistent.saveToStorage();
        } else {
            firmware.logger.error('invalid wifiSettings on set');
        }
    },
    setSensorSettings: function(plainTree) {
        let isValid = firmware.persistent.plainTreeValidator.sensorSettings(plainTree);
        if (isValid) {
            firmware.persistent.datum.settings.sensor = plainTree;
            firmware.persistent.saveToStorage();
            hal.restart(); // sensor-based tweaks
        } else {
            firmware.logger.error('invalid sensorSettings on set');
        }
    },
    setPeripheralSettings: function(plainTree) {
        let isValid = firmware.persistent.plainTreeValidator.peripheralSettings(plainTree);
        if (isValid) {
            firmware.persistent.datum.settings.peripheral = plainTree;
            firmware.persistent.saveToStorage();
            hal.restart(); // peripheral-based tweaks
        } else {
            firmware.logger.error('invalid peripheralSettings on set');
        }
    },
    updateClockFromTimeSettings: function() {
        let timeSettingsPlainTree = firmware.persistent.datum.settings.time;
        firmware.clock.setCurrentUnixSeconds(timeSettingsPlainTree.currentTime.currentUnixSeconds);
    },
    updateTimeSettingsFromClock: function() {
        let currentUnixSeconds = firmware.clock.internalSecondsToUnixSeconds(hal.getCurrentInternalSeconds());
        let timeSettingsPlainTree = firmware.persistent.datum.settings.time;
        timeSettingsPlainTree.currentTime.currentUnixSeconds = currentUnixSeconds;
    },
    updateWifiHalFromWifiSettings: function() {
        let wifiSettingsPlainTree = firmware.persistent.datum.settings.wifi;
        hal.wifi.setStationSettings(wifiSettingsPlainTree.station.ssid, wifiSettingsPlainTree.station.password, wifiSettingsPlainTree.station.isEnabled);
        hal.wifi.setAccessPointSettings(wifiSettingsPlainTree.accessPoint.ssid, wifiSettingsPlainTree.accessPoint.password, wifiSettingsPlainTree.accessPoint.isEnabled);
    },
    updateWifiSettingsFromWifiHal: function() {
        let stationSettings = hal.wifi.getStationSettings();
        let accessPointSettings = hal.wifi.getAccessPointSettings();
        let wifiSettingsPlainTree = firmware.persistent.datum.settings.wifi;
        wifiSettingsPlainTree.station.ssid = stationSettings.ssid;
        wifiSettingsPlainTree.station.password = stationSettings.password;
        wifiSettingsPlainTree.station.isEnabled = stationSettings.isEnabled;
        wifiSettingsPlainTree.accessPoint.ssid = accessPointSettings.ssid;
        wifiSettingsPlainTree.accessPoint.password = accessPointSettings.password;
        wifiSettingsPlainTree.accessPoint.isEnabled = accessPointSettings.isEnabled;
    },
    updateBasicStatsFromClock: function() {
        let currentUnixSeconds = firmware.clock.internalSecondsToUnixSeconds(hal.getCurrentInternalSeconds());
        let basicStatsPlainTree = firmware.persistent.datum.stats.basic;
        basicStatsPlainTree.time.currentUnixSeconds = currentUnixSeconds;
    },
    start: function() {
        hal.rpc.registerCallback('getLightSettings', firmware.rpc.getLightSettings);
        hal.rpc.registerCallback('getFanSettings', firmware.rpc.getFanSettings);
        hal.rpc.registerCallback('getWaterSettings', firmware.rpc.getWaterSettings);
        hal.rpc.registerCallback('getHeaterSettings', firmware.rpc.getHeaterSettings);
        hal.rpc.registerCallback('getVaporizerSettings', firmware.rpc.getVaporizerSettings);
        hal.rpc.registerCallback('getPowerSettings', firmware.rpc.getPowerSettings);
        hal.rpc.registerCallback('getTimeSettings', firmware.rpc.getTimeSettings);
        hal.rpc.registerCallback('getWifiSettings', firmware.rpc.getWifiSettings);
        hal.rpc.registerCallback('getSensorSettings', firmware.rpc.getSensorSettings);
        hal.rpc.registerCallback('getPeripheralSettings', firmware.rpc.getPeripheralSettings);

        hal.rpc.registerCallback('getBasicStats', firmware.rpc.getBasicStats);

        hal.rpc.registerCallback('setLightSettings', firmware.rpc.setLightSettings);
        hal.rpc.registerCallback('setFanSettings', firmware.rpc.setFanSettings);
        hal.rpc.registerCallback('setWaterSettings', firmware.rpc.setWaterSettings);
        hal.rpc.registerCallback('setHeaterSettings', firmware.rpc.setHeaterSettings);
        hal.rpc.registerCallback('setVaporizerSettings', firmware.rpc.setVaporizerSettings);
        hal.rpc.registerCallback('setPowerSettings', firmware.rpc.setPowerSettings);
        hal.rpc.registerCallback('setTimeSettings', firmware.rpc.setTimeSettings);
        hal.rpc.registerCallback('setWifiSettings', firmware.rpc.setWifiSettings);
        hal.rpc.registerCallback('setSensorSettings', firmware.rpc.setSensorSettings);
        hal.rpc.registerCallback('setPeripheralSettings', firmware.rpc.setPeripheralSettings);
    }
};
