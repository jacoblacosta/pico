let hal = {};

hal.cfg = {};

hal.cfg.get = function (key) {
    return Cfg.get(key);
};

hal.cfg.set = function (value, isSaveToFlash) {
    return Cfg.set(value, isSaveToFlash);
};

hal.digital = {};
hal.digital.init = function (pin, isInitialHigh) {
    let setupResult = GPIO.setup_output(pin, isInitialHigh);
    if (setupResult) {
        let digital = {
            pin: pin,
            write: function (isHigh) {
                let value = isHigh ? 1 : 0;
                GPIO.write(this.pin, value);
                return true;
            }
        }
        return digital;
    } else {
        return false;
    }
};

hal.sensor = {};
hal.sensor.dht22 = {};
hal.sensor.dht22.init = function (pin) {
    let dht = DHT.create(pin, DHT.DHT22);
    if (dht) {
    let sensor = {
            dht: dht,
            read: function () {
                let temperature = this.dht.getTemp();
                let humidity = this.dht.getHumidity();
                return { temperature: temperature, humidity: humidity };
            }
        }
        return sensor;
    } else {
        return false;
    }
};

hal.wifi = {};

hal.wifi.getStationSettings = function () {
    let ssid = hal.cfg.get('wifi.station.ssid');
    let password = hal.cfg.get('wifi.station.pass');
    let isEnabled = hal.cfg.get('wifi.station.enabled');
    return {ssid: ssid, password: password, isEnabled: isEnabled};
};

hal.wifi.setStationSettings = function (ssid, password, isEnabled) {
    hal.logString('UPDATING STATION WIFI');
    hal.cfg.set({ wifi: { station: { ssid: ssid, pass: password, isEnabled: isEnabled } } });
    return true;
};

hal.wifi.getAccessPointSettings = function () {
    let ssid = hal.cfg.get('wifi.ap.ssid');
    let password = hal.cfg.get('wifi.ap.pass');
    let isEnabled = hal.cfg.get('wifi.ap.enabled');
    return {ssid: ssid, password: password, isEnabled: isEnabled};
};

hal.wifi.setAccessPointSettings = function (ssid, password, isEnabled) {
    hal.logString('UPDATING WIFI');
    hal.cfg.set({ wifi: { ap: { ssid: ssid, pass: password, isEnabled: isEnabled } } });
    return true;
};


hal.restart = function() {
    Sys.reboot(500);
}

hal.logString = function (message) {
    print('LOG: ' + message);
};

hal.getCurrentInternalSeconds = function() {
    return Sys.uptime();
};
hal.timer = {};

hal.timer.add = function(millisecondsDelay, isRepeat, callback, userdata) {
    let flags = isRepeat ? Timer.REPEAT : 0;
    return Timer.set(millisecondsDelay, flags, callback, userdata);
};

hal.timer.remove = function(timerId) {
    Timer.del(timerId);
    return true;
};

hal.rpc = {};
hal.rpc.registerCallback = function(name, callback) {
    RPC.addHandler(name, callback);
};

hal.rpc.call = function(name, input, callback, userdata) {
    RPC.call(RPC.LOCAL, name, input, callback, userdata);
};


hal.sys = {};
hal.sys.getFreeRam = function() {
    return Sys.free_ram();
};
hal.sys.getTotalRam = function() {
    return Sys.total_ram();
};

module.exports = hal;
//hal = null;