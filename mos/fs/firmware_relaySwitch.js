module.exports = {
    start() {
        //let pinSettings = firmware.persistent.datum.settings.pin;
        firmware.relaySwitch.light = firmware.relaySwitchManager.init(1, false);
        firmware.relaySwitch.fan = firmware.relaySwitchManager.init(2, false);
        firmware.relaySwitch.water = firmware.relaySwitchManager.init(3, false);
        firmware.relaySwitch.heater = firmware.relaySwitchManager.init(4, false);
        //firmware.relaySwitch.vaporizer = firmware.relaySwitchManager.init(5, false);
        firmware.relaySwitch.extender = firmware.relaySwitchExtenderManager.init(2, 10, 11, 12);
        firmware.relaySwitch.vaporizer = firmware.relaySwitch.extender.init(7, false);
    },
};
