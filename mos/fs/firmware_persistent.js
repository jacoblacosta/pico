module.exports = {
    plainTreeValidator: require('./firmware_persistent_plainTreeValidator.js'),
    saveToStorage: function() {
        let datumPlainTree = firmware.persistent.datum;
        let isValid = firmware.persistent.plainTreeValidator.datum(datumPlainTree);
        if (isValid) {
            let datumJson = JSON.stringify(datumPlainTree);
            hal.cfg.set( { datum: datumJson } );
        } else {
            firmware.logger.error('invalid datum on saveToStorage');
        }
    },
    loadFromStorage: function() {
        let datumPlainTreeJson = hal.cfg.get('datum');
        let datumPlainTree = JSON.parse(datumPlainTreeJson);
        let isValid = firmware.persistent.plainTreeValidator.datum(datumPlainTree);
        if (isValid) {
            firmware.persistent.datum = datumPlainTree;
        } else {
            firmware.logger.error('invalid datum on loadFromStorage');
        }
    },
    loadFromDefault: function() {
        let datumPlainTree = require('./firmware_persistent_datum_default.js')
        let isValid = firmware.persistent.plainTreeValidator.datum(datumPlainTree);
        if (isValid) {
            firmware.persistent.datum = datumPlainTree;
        } else {
            firmware.logger.error('invalid datum on loadDefault');
        }
    },
    loadFromStorageOrDefault: function() {
        let datumPlainTreeJson = hal.cfg.get('datum');
        if (datumPlainTreeJson === '') {
            firmware.persistent.loadFromStorage();
        } else {
            firmware.persistent.loadFromDefault();
        }
    },
    start: function() {
        firmware.persistent.loadFromStorageOrDefault();
    },
    datum: {},
};
