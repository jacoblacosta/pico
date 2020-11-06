'use strict';
import { ClientLiveApi } from './clientLiveApi.js';
import { ClientRestApi } from './clientRestApi.js';
import { ClientLocalApi } from './clientLocalApi.js';
import { WidgetRoutdoor } from './widgetRoutdoor.js';

document.body.classList.add('calm'); // just an entry animation
const $appRoot = document.getElementById('app-root');
globalThis.picoface = {};
picoface.$appRoot = $appRoot;
picoface.localApi = new ClientLocalApi();
picoface.restApi = new ClientRestApi();
picoface.liveApi = new ClientLiveApi();
picoface.widgetRoutdoor = new WidgetRoutdoor($appRoot);
