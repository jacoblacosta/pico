'use strict';
import { AbstractWidget } from './abstractWidget.js';
import { i18n } from '../i18n/current.js';
import { Collapser } from '../collapser.js';
import { BooleanViewerElement, BooleanWidgetElement, DateViewerElement, EnvironmentSensorSensorTypeWidgetElement, GpioPinWidgetElement, IntegerRangeWidgetElement, LinkWidgetElement, NumberViewerElement, RatioRangeWidgetElement, SaveSettingsButtonWidgetElement, SectionHrWidgetElement, SectionTitleWidgetElement, SectionTitleWithCheckboxWidgetElement, SmartOutputPinWidgetElement, TextViewerElement, Timespan24WidgetMultiElement, TzViewerElement } from './widgetElement.js';


export class CyclicTimerWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.isEnabled = new SectionTitleWithCheckboxWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.collapser = new Collapser();
        this.$collapser = this.collapser.createElementContainer(this.$container);
        this.managed.timespan24 = new Timespan24WidgetMultiElement(this.$collapser, this.ladder, this.i18nSubtree.timespan24);
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        this.binded.state.shared.isDisabled = !this.binded.rest.isEnabled;
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        if (this.binded.state.shared.isDisabled) {
            this.collapser.hide();
        } else {
            this.collapser.show();
        }
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class TemperatureThrersholdWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.isEnabled = new SectionTitleWithCheckboxWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.collapser = new Collapser();
        this.$collapser = this.collapser.createElementContainer(this.$container);
        this.managed.temperatureThreshold = new IntegerRangeWidgetElement(this.$collapser, this.ladder, this.i18nSubtree.temperatureThreshold, {min: 0, max: 70});
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        this.binded.state.shared.isDisabled = !this.binded.rest.isEnabled;
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        if (this.binded.state.shared.isDisabled) {
            this.collapser.hide();
        } else {
            this.collapser.show();
        }
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class HumidityThrersholdWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.isEnabled = new SectionTitleWithCheckboxWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.collapser = new Collapser();
        this.$collapser = this.collapser.createElementContainer(this.$container);
        this.managed.humidityThreshold = new IntegerRangeWidgetElement(this.$collapser, this.ladder, this.i18nSubtree.humidityThreshold, {min: 0, max: 100});
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        this.binded.state.shared.isDisabled = !this.binded.rest.isEnabled;
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        if (this.binded.state.shared.isDisabled) {
            this.collapser.hide();
        } else {
            this.collapser.show();
        }
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class SwitchCooldownWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.isEnabled = new SectionTitleWithCheckboxWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.collapser = new Collapser();
        this.$collapser = this.collapser.createElementContainer(this.$container);
        this.managed.seconds = new IntegerRangeWidgetElement(this.$collapser, this.ladder, this.i18nSubtree.seconds, {min: 1, max: 900});
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        this.binded.state.shared.isDisabled = !this.binded.rest.isEnabled;
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        if (this.binded.state.shared.isDisabled) {
            this.collapser.hide();
        } else {
            this.collapser.show();
        }
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class SaveSettingsWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.hr = new SectionHrWidgetElement(this.$container, this.ladder);
        this.managed.saveButton = new SaveSettingsButtonWidgetElement(this.$container, this.ladder, this.i18nSubtree.saveButton);
        this.managed.saveButton.ee.on('save', () => {this.ee.emit('save'); });
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}

export class PeriodicDutyWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.title = new SectionTitleWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.managed.count = new IntegerRangeWidgetElement(this.$container, this.ladder, this.i18nSubtree.count, {min: 1, max: 10});
        this.managed.duration = new IntegerRangeWidgetElement(this.$container, this.ladder, this.i18nSubtree.duration, {min: 1, max: 60*60});
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}

export class DutyModulationWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.isEnabled = new SectionTitleWithCheckboxWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.collapser = new Collapser();
        this.$collapser = this.collapser.createElementContainer(this.$container);
        this.managed.ratio = new RatioRangeWidgetElement(this.$collapser, this.ladder, this.i18nSubtree.ratio);
        this.managed.duration = new IntegerRangeWidgetElement(this.$collapser, this.ladder, this.i18nSubtree.duration, {min: 0, max: 70});
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        this.binded.state.shared.isDisabled = !this.binded.rest.isEnabled;
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        if (this.binded.state.shared.isDisabled) {
            this.collapser.hide();
        } else {
            this.collapser.show();
        }
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}


export class IndexAutomationWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        const entries = [
            {
                routeKey: 'settings/light',
                i18nSubtree: i18n.widget.index.automation.lightSettings,
            },
            {
                routeKey: 'settings/fan',
                i18nSubtree: i18n.widget.index.automation.fanSettings,
            },
            {
                routeKey: 'settings/water',
                i18nSubtree: i18n.widget.index.automation.waterSettings,
            },
            {
                routeKey: 'settings/heater',
                i18nSubtree: i18n.widget.index.automation.heaterSettings,
            },
            {
                routeKey: 'settings/vaporizer',
                i18nSubtree: i18n.widget.index.automation.vaporizerSettings,
            },
        ];
        super($parent, ladder, i18nSubtree, {entries: entries});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.title = new SectionTitleWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.options.entries.forEach((entry) => {
            const routeKey = entry.routeKey;
            const i18nSubtree = entry.i18nSubtree;
            const linkWidgetElement = new LinkWidgetElement(this.$container, this.ladder, i18nSubtree, { routeKey: routeKey });
            //linkWidgetElement.ee.on('link', (routeKey) => { this.ee.emit(link, routeKey); });
        });
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true;
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}

export class IndexOtherWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        const entries = [
            {
                routeKey: 'settings/webInterface',
                i18nSubtree: i18n.widget.index.other.webInterfaceSettings,
            },
            {
                routeKey: 'settings/power',
                i18nSubtree: i18n.widget.index.other.powerSettings,
            },
            {
                routeKey: 'settings/time',
                i18nSubtree: i18n.widget.index.other.timeSettings,
            },
            {
                routeKey: 'settings/wifi',
                i18nSubtree: i18n.widget.index.other.wifiSettings,
            },
            {
                routeKey: 'settings/sensor',
                i18nSubtree: i18n.widget.index.other.sensorSettings,
            },
            {
                routeKey: 'settings/peripheral',
                i18nSubtree: i18n.widget.index.other.peripheralSettings,
            },
        ];
        super($parent, ladder, i18nSubtree, {entries: entries});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.title = new SectionTitleWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.options.entries.forEach((entry) => {
            const routeKey = entry.routeKey;
            const i18nSubtree = entry.i18nSubtree;
            const linkWidgetElement = new LinkWidgetElement(this.$container, this.ladder, i18nSubtree, { routeKey: routeKey });
            //linkWidgetElement.ee.on('link', (routeKey) => { this.ee.emit(link, routeKey); });
        });
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true;
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class IndexStatsWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        const entries = [
            {
                routeKey: 'stats/basic',
                i18nSubtree: i18n.widget.index.stats.basicStats,
            },
        ];
        super($parent, ladder, i18nSubtree, {entries: entries});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.title = new SectionTitleWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.options.entries.forEach((entry) => {
            const routeKey = entry.routeKey;
            const i18nSubtree = entry.i18nSubtree;
            const linkWidgetElement = new LinkWidgetElement(this.$container, this.ladder, i18nSubtree, { routeKey: routeKey });
            //linkWidgetElement.ee.on('link', (routeKey) => { this.ee.emit(link, routeKey); });
        });
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true;
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}

export class WifiStationWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.isEnabled = new SectionTitleWithCheckboxWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.collapser = new Collapser();
        this.$collapser = this.collapser.createElementContainer(this.$container);
        this.managed.ssid = new TextWidgetElement(this.$collapser, this.ladder, this.i18nSubtree.ssid, {maxLength: 32});
        this.managed.password = new TextWidgetElement(this.$collapser, this.ladder, this.i18nSubtree.password, {maxLength: 32});
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        this.binded.state.shared.isDisabled = !this.binded.rest.isEnabled;
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        if (this.binded.state.shared.isDisabled) {
            this.collapser.hide();
        } else {
            this.collapser.show();
        }
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}

export class WifiAccessPointWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.isEnabled = new SectionTitleWithCheckboxWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.collapser = new Collapser();
        this.$collapser = this.collapser.createElementContainer(this.$container);
        this.managed.ssid = new TextWidgetElement(this.$collapser, this.ladder, this.i18nSubtree.ssid, {maxLength: 32});
        this.managed.password = new TextWidgetElement(this.$collapser, this.ladder, this.i18nSubtree.password, {maxLength: 32});
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        this.binded.state.shared.isDisabled = !this.binded.rest.isEnabled;
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        if (this.binded.state.shared.isDisabled) {
            this.collapser.hide();
        } else {
            this.collapser.show();
        }
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}

export class CurrentTimeWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.title = new SectionTitleWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.managed.currentUnixSeconds = new DateViewerElement(this.$container, this.ladder, this.i18nSubtree.currentUnixSeconds);
        this.managed.tz = new TzViewerElement(this.$container, this.ladder, this.i18nSubtree.tz);
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}

export class EnvironmentSensorWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.title = new SectionTitleWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.managed.sensorType = new EnvironmentSensorSensorTypeWidgetElement(this.$container, this.ladder, this.i18nSubtree.sensorType);
        this.collapser = new Collapser(true);
        this.$collapserVirtual = this.collapser.createElementContainer(this.$container, 'virtual');
        this.managed.virtual = new EnvironmentSensorVirtualWidgetSection(this.$collapserVirtual, this.ladder, this.i18nSubtree.virtual);
        this.$collapserDht = this.collapser.createElementContainer(this.$container, 'dht');
        this.managed.dht = new EnvironmentSensorDhtWidgetSection(this.$collapserDht, this.ladder, this.i18nSubtree.dht);
        this.$collapserBme = this.collapser.createElementContainer(this.$container, 'bme');
        this.managed.bme = new EnvironmentSensorBmeWidgetSection(this.$collapserBme, this.ladder, this.i18nSubtree.bme);
        this.$collapserBmp = this.collapser.createElementContainer(this.$container, 'bmp');
        this.managed.bmp = new EnvironmentSensorBmpWidgetSection(this.$collapserBmp, this.ladder, this.i18nSubtree.bmp);
        this.$collapserDs = this.collapser.createElementContainer(this.$container, 'ds');
        this.managed.ds = new EnvironmentSensorDsWidgetSection(this.$collapserDs, this.ladder, this.i18nSubtree.ds);
        this.collapser.hide();
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        this.collapser.hide();
        const key = this.binded.rest.sensorType.typeKey;
        this.collapser.show(key);
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}


export class EnvironmentSensorVirtualWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.staticOverride = new EnvironmentSensorVirtualStaticOverrideWidgetSection(this.$container, this.ladder, this.i18nSubtree.staticOverride);
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class EnvironmentSensorDhtWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.connection = new EnvironmentSensorDhtConnectionWidgetSection(this.$container, this.ladder, this.i18nSubtree.connection);
        this.managed.staticOverride = new EnvironmentSensorDhtStaticOverrideWidgetSection(this.$container, this.ladder, this.i18nSubtree.staticOverride);
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class EnvironmentSensorBmeWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.connection = new EnvironmentSensorBmConnectionWidgetSection(this.$container, this.ladder, this.i18nSubtree.connection);
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class EnvironmentSensorBmpWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.connection = new EnvironmentSensorBmConnectionWidgetSection(this.$container, this.ladder, this.i18nSubtree.connection);
        this.managed.staticOverride = new EnvironmentSensorBmpStaticOverrideWidgetSection(this.$container, this.ladder, this.i18nSubtree.staticOverride);
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class EnvironmentSensorDsWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.connection = new EnvironmentSensorDsConnectionWidgetSection(this.$container, this.ladder, this.i18nSubtree.connection);
        this.managed.staticOverride = new EnvironmentSensorDsStaticOverrideWidgetSection(this.$container, this.ladder, this.i18nSubtree.staticOverride);
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}

export class EnvironmentSensorVirtualStaticOverrideWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.temperature = new IntegerRangeWidgetElement(this.$container, this.ladder, this.i18nSubtree.temperature, {min: 0, max: 70});
        this.managed.humidity = new IntegerRangeWidgetElement(this.$container, this.ladder, this.i18nSubtree.humidity, {min: 0, max: 100});
        this.managed.pressure = new IntegerRangeWidgetElement(this.$container, this.ladder, this.i18nSubtree.pressure, {min: 0, max: 3000});
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class EnvironmentSensorDhtStaticOverrideWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.pressure = new IntegerRangeWidgetElement(this.$container, this.ladder, this.i18nSubtree.pressure, {min: 0, max: 3000});
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class EnvironmentSensorBmpStaticOverrideWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.pressure = new IntegerRangeWidgetElement(this.$container, this.ladder, this.i18nSubtree.pressure, {min: 0, max: 3000});
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class EnvironmentSensorDsStaticOverrideWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.humidity = new IntegerRangeWidgetElement(this.$container, this.ladder, this.i18nSubtree.humidity, {min: 0, max: 100});
        this.managed.pressure = new IntegerRangeWidgetElement(this.$container, this.ladder, this.i18nSubtree.pressure, {min: 0, max: 3000});
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}


export class EnvironmentSensorDhtConnectionWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.dataPin = new GpioPinWidgetElement(this.$container, this.ladder, this.i18nSubtree.dataPin);
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class EnvironmentSensorBmConnectionWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.dataAPin = new GpioPinWidgetElement(this.$container, this.ladder, this.i18nSubtree.dataAPin);
        this.managed.dataBPin = new GpioPinWidgetElement(this.$container, this.ladder, this.i18nSubtree.dataBPin);
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class EnvironmentSensorDsConnectionWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.dataPin = new GpioPinWidgetElement(this.$container, this.ladder, this.i18nSubtree.dataPin);
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class InputPeripheralWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.title = new SectionTitleWidgetElement(this.$container, this.ladder, this.i18nSubtree, {level: 2});
        this.managed.extender = new PeripheralExtenderWidgetSection(this.$container, this.ladder, this.i18nSubtree.extender);
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class OutputPeripheralWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.title = new SectionTitleWidgetElement(this.$container, this.ladder, this.i18nSubtree, {level: 2});
        this.managed.extender = new PeripheralExtenderWidgetSection(this.$container, this.ladder, this.i18nSubtree.extender);
        this.managed.relay = new OutputPeripheralRelayWidgetSection(this.$container, this.ladder, this.i18nSubtree.relay);
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        this.binded.state.shared.isExtenderEnabled = this.binded.rest.extender.isEnabled;
        this.binded.state.shared.extenderCapacity = this.binded.rest.extender.capacity;
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();

    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}


export class PeripheralExtenderWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.isEnabled = new SectionTitleWithCheckboxWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.collapser = new Collapser();
        this.$collapser = this.collapser.createElementContainer(this.$container);
        this.managed.dataAPin = new GpioPinWidgetElement(this.$collapser, this.ladder, this.i18nSubtree.dataAPin);
        this.managed.dataBPin = new GpioPinWidgetElement(this.$collapser, this.ladder, this.i18nSubtree.dataBPin);
        this.managed.dataCPin = new GpioPinWidgetElement(this.$collapser, this.ladder, this.i18nSubtree.dataCPin);
        this.managed.capacity = new IntegerRangeWidgetElement(this.$collapser, this.ladder, this.i18nSubtree.capacity, {min: 1, max: 4});
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        this.binded.state.shared.isDisabled = !this.binded.rest.isEnabled;
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        if (this.binded.state.shared.isDisabled) {
            this.collapser.hide();
        } else {
            this.collapser.show();
        }
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}


export class OutputPeripheralRelayWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.light = new OutputPeripheralRelayChannelWidgetSection(this.$container, this.ladder, this.i18nSubtree.light);
        this.managed.fan = new OutputPeripheralRelayChannelWidgetSection(this.$container, this.ladder, this.i18nSubtree.fan);
        this.managed.water = new OutputPeripheralRelayChannelWidgetSection(this.$container, this.ladder, this.i18nSubtree.water);
        this.managed.heater = new OutputPeripheralRelayChannelWidgetSection(this.$container, this.ladder, this.i18nSubtree.heater);
        this.managed.vaporizer = new OutputPeripheralRelayChannelWidgetSection(this.$container, this.ladder, this.i18nSubtree.vaporizer);
        //this.collapser = new Collapser();
        //this.$collapser = this.collapser.createElementContainer(this.$container);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}

export class OutputPeripheralRelayChannelWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.isEnabled = new SectionTitleWithCheckboxWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.collapser = new Collapser();
        this.$collapser = this.collapser.createElementContainer(this.$container);
        this.managed.dataPin = new SmartOutputPinWidgetElement(this.$collapser, this.ladder, this.i18nSubtree.dataPin);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        this.binded.state.shared.isDisabled = !this.binded.rest.isEnabled;
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        if (this.binded.state.shared.isDisabled) {
            this.collapser.hide();
        } else {
            this.collapser.show();
        }
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}



export class EnvironmentReadingsWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.title = new SectionTitleWidgetElement(this.$container, this.ladder, this.i18nSubtree);
        this.managed.currentIndoorTemperature = new NumberViewerElement(this.$container, this.ladder, this.i18nSubtree.currentIndoorTemperature, { apiKey:'live' });
        this.managed.currentIndoorHumidity = new NumberViewerElement(this.$container, this.ladder, this.i18nSubtree.currentIndoorHumidity, { apiKey:'live' });
        this.managed.currentOutdoorTemperature = new NumberViewerElement(this.$container, this.ladder, this.i18nSubtree.currentOutdoorTemperature, { apiKey:'live' });
        this.managed.currentOutdoorHumidity = new NumberViewerElement(this.$container, this.ladder, this.i18nSubtree.currentOutdoorHumidity, { apiKey:'live' });
    }

    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true;
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}

export class RelayStateWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.title = new SectionTitleWidgetElement(this.$container, this.ladder, this.i18nSubtree);

        this.managed.isLightActive = new BooleanViewerElement(this.$container, this.ladder, this.i18nSubtree.isLightActive, { apiKey:'live' });
        this.managed.isFanActive = new BooleanViewerElement(this.$container, this.ladder, this.i18nSubtree.isFanActive, { apiKey:'live' });
        this.managed.isWaterActive = new BooleanViewerElement(this.$container, this.ladder, this.i18nSubtree.isWaterActive, { apiKey:'live' });
        this.managed.isHeaterActive = new BooleanViewerElement(this.$container, this.ladder, this.i18nSubtree.isHeaterActive, { apiKey:'live' });
        this.managed.isVaporizerActive = new BooleanViewerElement(this.$container, this.ladder, this.i18nSubtree.isVaporizerActive, { apiKey:'live' });
    }

    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true;
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class TimeTelemetryWidgetSection extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-section-container');
        this.managed.title = new SectionTitleWidgetElement(this.$container, this.ladder, this.i18nSubtree);

        this.managed.secondsSinceRestart = new TextViewerElement(this.$container, this.ladder, this.i18nSubtree.secondsSinceRestart, { apiKey:'live' });
        this.managed.currentUnixSeconds = new DateViewerElement(this.$container, this.ladder, this.i18nSubtree.currentUnixSeconds, { apiKey:'live' });
        this.managed.tz = new TzViewerElement(this.$container, this.ladder, this.i18nSubtree.tz, { apiKey:'live' });
    }

    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true;
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
