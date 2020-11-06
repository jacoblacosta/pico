module.exports = {
    dht22: {
        init: function(pinIdx) {
            let dht22 = hal.sensor.dht22.init(pinIdx);
            return dht22;
        }
    }

};
