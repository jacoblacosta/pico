module.exports = {
    internalToUnixSecondsDiff: 0,
    setCurrentUnixSeconds: function(currentUnixSeconds) {
        firmware.clock.internalToUnixSecondsDiff = currentUnixSeconds - hal.getCurrentInternalSeconds();
    },
    internalSecondsToUnixSeconds: function(internalSeconds) {
        return internalSeconds + firmware.clock.internalToUnixSecondsDiff;
    },
    internalSecondsToTime24: function(internalSeconds) {
        let unixSeconds = firmware.clock.internalSecondsToUnixSeconds(internalSeconds);
        let timeSettings = firmware.persistent.datum.settings.time;
        let zonedUnixSeconds = unixSeconds + timeSettings.currentTime.tz * 60 * 60;
        return {
            s: Math.floor(zonedUnixSeconds) % 60,
            m: Math.floor(zonedUnixSeconds / 60) % 60,
            h: Math.floor(zonedUnixSeconds / 60 / 60) % 24,
        }
    },

    time24ToSeconds24: function(time24) {
        return time24.h * 60 * 60 + time24.m * 60 + time24.s;
    },

    isTime24inTimespan24: function(time24, timespan24) {
        let fromSeconds24 = firmware.clock.time24ToSeconds24(timespan24.from);
        let toSeconds24 = firmware.clock.time24ToSeconds24(timespan24.to);
        let isCrossingMidnight = (fromSeconds24 > toSeconds24);
        let seconds24 = firmware.clock.time24ToSeconds24(time24);
        let lowSeconds24 = Math.min(fromSeconds24, toSeconds24);
        let highSeconds24 = Math.max(fromSeconds24, toSeconds24);
        let isInside = (seconds24 >= lowSeconds24) && (seconds24 < highSeconds24);
        return isCrossingMidnight ? !isInside : isInside;
    },

    timespan24ToDuration: function(timespan24) {
        let fromSeconds24 = firmware.clock.time24ToSeconds24(timespan24.from);
        let toSeconds24 = firmware.clock.time24ToSeconds24(timespan24.to);
        let isCrossingMidnight = (fromSeconds24 > toSeconds24);
        if (isCrossingMidnight) {
            return fromSeconds24 + 60 * 60 * 24 - toSeconds24;
        } else {
            return toSeconds24 - fromSeconds24;
        }
    },

};
