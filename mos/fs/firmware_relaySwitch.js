module.exports = {
    start() {
        //let pertipheralSettings = firmware.persistent.datum.settings.pertipheral;
        firmware.relaySwitch.light = firmware.relaySwitchManager.init(1, false);
        firmware.relaySwitch.fan = firmware.relaySwitchManager.init(2, false);
        firmware.relaySwitch.water = firmware.relaySwitchManager.init(3, false);
        firmware.relaySwitch.heater = firmware.relaySwitchManager.init(4, false);
        //firmware.relaySwitch.vaporizer = firmware.relaySwitchManager.init(5, false);
        firmware.relaySwitch.extender = firmware.relaySwitchExtenderManager.init(16, 10, 11, 12);
        firmware.relaySwitch.vaporizer = firmware.relaySwitch.extender.init(6, false);
    },
};
