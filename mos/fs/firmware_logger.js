module.exports = {
    info: function(message) {
        hal.logString(message);
    },
    warn: function(message) {
        hal.logString('WARN:' + message);
    },
    error: function(message) {
        hal.logString('CRITICAL ERROR, SHUTDOWN:' + message);
        hal.shutdown();
    },
};

