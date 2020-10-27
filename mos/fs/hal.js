let hal = {};
hal.state = {};

hal.state.relaySwitch = {
    lightPin: undefined,
    fanPin: undefined,
    waterPin: undefined,
    heaterPin: undefined,
    vaporizerPin: undefined,
};

hal.state.innerDhtSensor = {
    dht: undefined,
};
hal.state.outerDhtSensor = {
    dht: undefined,
};

hal.cfg = {};

hal.cfg.get = function (key) {
    return Cfg.get(key);
};

hal.cfg.set = function (value, isSaveToFlash) {
    return Cfg.set(value, isSaveToFlash);
};

hal.relaySwitch = {};
hal.relaySwitch.light = {};
hal.relaySwitch.fan = {};
hal.relaySwitch.water = {};
hal.relaySwitch.heater = {};
hal.relaySwitch.vaporizer = {};

hal.relaySwitch.light.init = function (pin, initialState) {
    hal.state.relaySwitch.lightPin = pin;
    GPIO.setup_output(pin, initialState);
    return true;
};

hal.relaySwitch.light.write = function (value) {
    if (hal.state.relaySwitch.lightPin === undefined) {
        return false;
    } else {
        GPIO.write(hal.state.relaySwitch.lightPin, value);
        return true;
    };
};


hal.relaySwitch.fan.init = function (pin, initialState) {
    hal.state.relaySwitch.fanPin = pin;
    GPIO.setup_output(pin, initialState);
    return true;
};

hal.relaySwitch.fan.write = function (value) {
    if (hal.state.relaySwitch.fanPin === undefined) {
        return false;
    } else {
        GPIO.write(hal.state.relaySwitch.fanPin, value);
        return true;
    };
};


hal.relaySwitch.water.init = function (pin, initialState) {
    hal.state.relaySwitch.waterPin = pin;
    GPIO.setup_output(pin, initialState);
    return true;
};

hal.relaySwitch.water.write = function (value) {
    if (hal.state.relaySwitch.waterPin === undefined) {
        return false;
    } else {
        GPIO.write(hal.state.relaySwitch.waterPin, value);
        return true;
    };
};


hal.relaySwitch.heater.init = function (pin, initialState) {
    hal.state.relaySwitch.heaterPin = pin;
    GPIO.setup_output(pin, initialState);
    return true;
};

hal.relaySwitch.heater.write = function (value) {
    if (hal.state.relaySwitch.heaterPin === undefined) {
        return false;
    } else {
        GPIO.write(hal.state.relaySwitch.heaterPin, value);
        return true;
    };
};


hal.relaySwitch.vaporizer.init = function (pin, initialState) {
    hal.state.relaySwitch.vaporizerPin = pin;
    GPIO.setup_output(pin, initialState);
    return true;
};

hal.relaySwitch.vaporizer.write = function (value) {
    if (hal.state.relaySwitch.vaporizerPin === undefined) {
        return false;
    } else {
        GPIO.write(hal.state.relaySwitch.vaporizerPin, value);
        return true;
    };
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
    hal.cfg.set({ wifi: { station: { ssid: ssid, pass: password } } });
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

hal.sensor = {};
hal.sensor.innerDht = {};

hal.sensor.innerDht.init = function (pin) {
    let dht = DHT.create(pin, DHT.DHT22);
    hal.state.innerDhtSensor.dht = dht;
    if (dht === null) {
        return false;
    } else {
        return true;
    }
};

hal.sensor.innerDht.read = function () {
    let indoorTemperature = hal.state.innerDhtSensor.dht.getTemp();
    let indoorHumidity = hal.state.innerDhtSensor.dht.getHumidity();
    return { indoorTemperature: indoorTemperature, indoorHumidity: indoorHumidity };
};

hal.sensor.outerDht = {};

hal.sensor.outerDht.init = function (pin) {
    let dht = DHT.create(pin, DHT.DHT22);
    hal.state.outerDhtSensor.dht = dht;
    if (dht === null) {
        return false;
    } else {
        return true;
    }
};

hal.sensor.outerDht.read = function () {
    let outdoorTemperature = hal.state.outerDhtSensor.dht.getTemp();
    let outdoorHumidity = hal.state.outerDhtSensor.dht.getHumidity();
    return { outdoorTemperature: outdoorTemperature, outdoorHumidity: outdoorHumidity };
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


// fake

hal.sensor.fakeInnerDht = {};
hal.sensor.fakeInnerDht.init = function(pin) {
    return (pin >= 0 && pin < 32);
};
hal.sensor.fakeInnerDht.read = function() {
    return {indoorTemperature: Math.random() * 10 + 20, indoorHumidity: Math.random() * 50 + 25};
};

hal.sensor.innerDht = hal.sensor.fakeInnerDht;

hal.sensor.fakeOuterDht = {};
hal.sensor.fakeOuterDht.init = function(pin) {
    return (pin >= 0 && pin < 32);
};
hal.sensor.fakeOuterDht.read = function() {
    return {outdoorTemperature: Math.random() * 40, outdoorHumidity: Math.random() * 50 + 25};
};

hal.sensor.outerDht = hal.sensor.fakeOuterDht;


module.exports = hal;
hal = null;