const express = require('express');
const bodyParser = require('body-parser');
const os = require('os');
const path = require('path');


// const { dirname } = require('path');
// const { fileURLToPath } = require('url');
// const __dirname = dirname(fileURLToPath(import.meta.url));

class ExpressAsRpcOverHttpAndStaticHttpServerEmulator {
    registeredCallbacks = {}; // to simulate local call
    port = 3000;
    artificalLag = 100;
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.server = this.app.listen(this.port, () => {
            const host = os.hostname;
            console.log(`Chip emulator http server started and picoface app is listening at http://${host}:${this.port}`)
        });
        this.app.use((req, res, next) => {
            setTimeout(next, this.artificalLag);
        });
        this.app.use(express.static(path.join(__dirname, '../mos/fs')));
    }

    registerCallback(name, callback) {
        this.app.post('/rpc/' + name, (req, res) => {
            const parameter = req.body;
            const result = callback(parameter);
            res.json(result);
            console.log(name + ' rpc call with parameter and result:', JSON.stringify({parameter, result}, null, 2));
        });
        this.registeredCallbacks[name] = callback;
    }

    call(name, input, callback, userdata) {
        const result = this.registeredCallbacks[name](input);
        callback(result, null, null, userdata);
    }

    shutdown() {
        this.server.close();
    }

}

module.exports = ExpressAsRpcOverHttpAndStaticHttpServerEmulator;