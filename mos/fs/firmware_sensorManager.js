module.exports = {
    dht22: {
        init: function(hardwarePinIdx) {
            let dht22 = hal.sensor.dht22.init(hardwarePinIdx);
            return dht22;
        }
    }

};
