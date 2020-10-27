//load('api_aws.js');
//load('api_azure.js');
load('api_config.js');
//load('api_dash.js');
load('api_events.js');
//load('api_gcp.js');
load('api_gpio.js');
//load('api_mqtt.js');
//load('api_shadow.js');
load('api_timer.js');
load('api_sys.js');
//load('api_watson.js');

load('api_rpc.js');

load('api_dht.js');

load('require.js');
let global = {}; // TODO this or smth...
let hal = require('./hal.js');
let firmware = require('./firmwareProxy.js');
firmware.start();
