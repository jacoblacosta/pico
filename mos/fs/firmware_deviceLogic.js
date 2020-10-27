//print('### in deviceLogic.js head');
module.exports = {
    lightRelaySwitch: {
        isRelaySwitchedOn: false,
        iteration: function() {
            let lightSettings = firmware.persistent.datum.settings.light;
            if (lightSettings.manualOverride === true) {
                this.updateIsRelaySwitchedOn(true);
            } else if (lightSettings.manualOverride === false) {
                this.updateIsRelaySwitchedOn(false);
            } else {
                let dutyTimespan24 = lightSettings.cyclicTimer.timespan24;
                let currentInternalSeconds = hal.getCurrentInternalSeconds();
                let currentTime24 = firmware.clock.internalSecondsToTime24(currentInternalSeconds);
                let isInDutyTimespan = firmware.clock.isTime24inTimespan24(currentTime24, dutyTimespan24);
                if (isInDutyTimespan) {
                    let currentIndoorTemperature = hal.sensor.innerDht.read().indoorTemperature;
                    let hysteresis = this.isRelaySwitchedOn ? +0.25 : -0.25;
                    let isInThreshold = (currentIndoorTemperature < lightSettings.indoorTemperatureThreshold.temperatureThreshold + hysteresis);
                    this.updateIsRelaySwitchedOn(isInThreshold);
                } else {
                    this.updateIsRelaySwitchedOn(false);
                }
            }
        },
        updateIsRelaySwitchedOn: function(isRelaySwitchedOn) {
            if (this.isRelaySwitchedOn !== isRelaySwitchedOn) {
                hal.relaySwitch.light.write(isRelaySwitchedOn);
            }
            this.isRelaySwitchedOn = isRelaySwitchedOn;
        },
    },

    fanRelaySwitch: {
        isRelaySwitchedOn: false,
        iteration: function() {
            let fanSettings = firmware.persistent.datum.settings.fan;
            if (fanSettings.manualOverride === true) {
                this.updateIsRelaySwitchedOn(true);
            } else if (fanSettings.manualOverride === false) {
                this.updateIsRelaySwitchedOn(false);
            } else {
                let dutyTimespan24 = fanSettings.cyclicTimer.timespan24;
                let currentInternalSeconds = hal.getCurrentInternalSeconds();
                let currentTime24 = firmware.clock.internalSecondsToTime24(currentInternalSeconds);
                let isInDutyTimespan = firmware.clock.isTime24inTimespan24(currentTime24, dutyTimespan24);
                if (isInDutyTimespan) {
                    let currentIndoorTemperature = hal.sensor.innerDht.read().indoorTemperature;
                    let hysteresis = this.isRelaySwitchedOn ? -0.25 : +0.25;
                    let isInThreshold = currentIndoorTemperature >= fanSettings.indoorTemperatureThreshold.temperatureThreshold + hysteresis;
                    this.updateIsRelaySwitchedOn(isInThreshold);
                } else {
                    this.updateIsRelaySwitchedOn(false);
                }
            }
        },
        updateIsRelaySwitchedOn: function(isRelaySwitchedOn) {
            if (this.isRelaySwitchedOn !== isRelaySwitchedOn) {
                hal.relaySwitch.fan.write(isRelaySwitchedOn);
            }
            this.isRelaySwitchedOn = isRelaySwitchedOn;
        },
    },

    waterRelaySwitch: {
        isRelaySwitchedOn: false,
        iteration: function() {
            let waterSettings = firmware.persistent.datum.settings.water;
            if (waterSettings.manualOverride === true) {
                this.updateIsRelaySwitchedOn(true);
            } else if (waterSettings.manualOverride === false) {
                this.updateIsRelaySwitchedOn(false);
            } else {
                let dutyTimespan24 = waterSettings.cyclicTimer.timespan24;
                let wateringsCount = waterSettings.count;
                let wateringDuration = waterSettings.duration;
                let currentInternalSeconds = hal.getCurrentInternalSeconds();
                let currentSeconds24 = firmware.clock.time24ToSeconds24(firmware.clock.internalSecondsToTime24(currentInternalSeconds));
                let currentTime24 = firmware.clock.internalSecondsToTime24(currentInternalSeconds);
                let isInDutyTimespan = firmware.clock.isTime24inTimespan24(currentTime24, dutyTimespan24);
                if (isInDutyTimespan) {
                    let dutyDuration = firmware.clock.timespan24ToDuration(dutyTimespan24);
                    let wateringStepDuration = dutyDuration / wateringsCount;
                    let isActiveWateringState =  currentSeconds24 % wateringStepDuration < wateringDuration;
                    this.updateIsRelaySwitchedOn(isActiveWateringState);
                } else {
                    this.updateIsRelaySwitchedOn(false);
                }
            }
        },
        updateIsRelaySwitchedOn: function(isRelaySwitchedOn) {
            if (this.isRelaySwitchedOn !== isRelaySwitchedOn) {
                hal.relaySwitch.water.write(isRelaySwitchedOn);
            }
            this.isRelaySwitchedOn = isRelaySwitchedOn;
        },
    },

    heaterRelaySwitch: {
        isRelaySwitchedOn: false,
        iteration: function() {
            let heaterSettings = firmware.persistent.datum.settings.heater;
            if (heaterSettings.manualOverride === true) {
                this.updateIsRelaySwitchedOn(true);
            } else if (heaterSettings.manualOverride === false) {
                this.updateIsRelaySwitchedOn(false);
            } else {
                let dutyTimespan24 = heaterSettings.cyclicTimer.timespan24;
                let currentInternalSeconds = hal.getCurrentInternalSeconds();
                let currentTime24 = firmware.clock.internalSecondsToTime24(currentInternalSeconds);
                let isInDutyTimespan = firmware.clock.isTime24inTimespan24(currentTime24, dutyTimespan24);
                if (isInDutyTimespan) {
                    let currentIndoorTemperature = hal.sensor.innerDht.read().indoorTemperature;
                    let hysteresis = this.isRelaySwitchedOn ? +0.25 : -0.25;
                    let isInThreshold = currentIndoorTemperature < heaterSettings.indoorTemperatureThreshold.temperatureThreshold + hysteresis;
                    this.updateIsRelaySwitchedOn(isInThreshold);
                } else {
                    this.updateIsRelaySwitchedOn(false);
                }
            }
        },
        updateIsRelaySwitchedOn: function(isRelaySwitchedOn) {
            if (this.isRelaySwitchedOn !== isRelaySwitchedOn) {
                hal.relaySwitch.heater.write(isRelaySwitchedOn);
            }
            this.isRelaySwitchedOn = isRelaySwitchedOn;
        },
    },

    vaporizerRelaySwitch: {
        isRelaySwitchedOn: false,
        iteration: function() {
            let vaporizerSettings = firmware.persistent.datum.settings.vaporizer;
            if (vaporizerSettings.manualOverride === true) {
                this.updateIsRelaySwitchedOn(true);
            } else if (vaporizerSettings.manualOverride === false) {
                this.updateIsRelaySwitchedOn(false);
            } else {
                let dutyTimespan24 = vaporizerSettings.cyclicTimer.timespan24;
                let currentInternalSeconds = hal.getCurrentInternalSeconds();
                let currentTime24 = firmware.clock.internalSecondsToTime24(currentInternalSeconds);
                let isInDutyTimespan = firmware.clock.isTime24inTimespan24(currentTime24, dutyTimespan24);
                if (isInDutyTimespan) {
                    let currentIndoorHumidity = hal.sensor.innerDht.read().indoorHumidity;
                    let hysteresis = this.isRelaySwitchedOn ? +0.25 : -0.25;
                    let isInThreshold = currentIndoorHumidity < vaporizerSettings.indoorHumidityThreshold + hysteresis;
                    this.updateIsRelaySwitchedOn(isInThreshold);
                } else {
                    this.updateIsRelaySwitchedOn(false);
                }
            }
        },
        updateIsRelaySwitchedOn: function(isRelaySwitchedOn) {
            if (this.isRelaySwitchedOn !== isRelaySwitchedOn) {
                hal.relaySwitch.vaporizer.write(isRelaySwitchedOn);
            }
            this.isRelaySwitchedOn = isRelaySwitchedOn;
        },
    },
};
