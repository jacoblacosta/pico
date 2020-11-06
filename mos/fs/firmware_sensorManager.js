module.exports = {
    dht22: {
        init: function(pinIdx) {
            let dht22 = hal.dht22.init(pinIdx);
            return dht22;
        }
    }

};
