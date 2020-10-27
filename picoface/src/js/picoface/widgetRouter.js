'use strict';
import {
    LightSettingsEditorWidget,
    WebInterfaceSettingsEditorWidget,
    FanSettingsEditorWidget,
    WaterSettingsEditorWidget,
    HeaterSettingsEditorWidget,
    VaporizerSettingsEditorWidget,
    PowerSettingsEditorWidget,
    TimeSettingsEditorWidget,
    WifiSettingsEditorWidget,
    PinSettingsEditorWidget,
    SensorSettingsEditorWidget,
    PeripheralSettingsEditorWidget,
    BasicStatsViewerWidget,
    IndexWidget,
} from './widget/widget.js';

export class WidgetRouter {
    static widgetConstructorsDictionary = {
        'settings/light': LightSettingsEditorWidget,
        'settings/webInterface': WebInterfaceSettingsEditorWidget,
        'settings/fan': FanSettingsEditorWidget,
        'settings/water': WaterSettingsEditorWidget,
        'settings/heater': HeaterSettingsEditorWidget,
        'settings/vaporizer': VaporizerSettingsEditorWidget,
        'settings/power': PowerSettingsEditorWidget,
        'settings/time': TimeSettingsEditorWidget,
        'settings/wifi': WifiSettingsEditorWidget,
        'settings/pin': PinSettingsEditorWidget,
        'settings/sensor': SensorSettingsEditorWidget,
        'settings/peripheral': PeripheralSettingsEditorWidget,
        'stats/basic': BasicStatsViewerWidget,
        'settings/index': IndexWidget,
    }
    constructor($parent) {
        this.$parent = $parent;
        this.buildDom();
        this.initNavigationOnStart();
        picoface.localApi.ee.on('webInterfaceSettings', (webInterfaceSettings) => {
            this.updateVerboseState(webInterfaceSettings.isVerbose);
        });
        const webInterfaceSettings = picoface.localApi.getWebInterfaceSettings();
        this.updateVerboseState(webInterfaceSettings.isVerbose);
    }
    initNavigationOnStart() {
        if (!this.navigateByHash()) {
            location.hash = '#settings/index';
            this.navigateByHash();
        };
    }
    buildDom() {
        this.$container = document.createElement('div')
        this.$container.classList.add('app-container');
        // no widgets at start, need to rebuildInnerDom to dom be ready to use
        this.$parent.appendChild(this.$container);
        window.addEventListener('hashchange', () => {
            this.navigateByHash();
        }, false);
    }
    rebuildInnerDom(newRouteKey) {
        if (this.currentWidget) {
            if (this.currentWidget.destroy) {
                this.currentWidget.destroy();
            } else {
                this.currentWidget.level4_destroy();
            }
        }
        this.$container.innerHTML = '';
        const widgetConsructor = WidgetRouter.widgetConstructorsDictionary[newRouteKey];
        this.currentWidget = new widgetConsructor(this.$container);
    }
    navigateByHash() {
        const keyFromHash = location.hash.slice(1);
        if (WidgetRouter.widgetConstructorsDictionary[keyFromHash]) {
            this.rebuildInnerDom(keyFromHash);
            window.scrollTo(0, 0);
            return true;
        } else {
            return false;
        }
    }
    updateVerboseState(isVerbose) {
        this.$container.classList.toggle('hide-verbose', !isVerbose);
    }
}