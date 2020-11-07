'use strict';
import { AbstractWidget } from './abstractWidget.js';
import { i18n } from '../i18n/current.js';
import { Ladder } from '../ladder.js';
import { BooleanWidgetElement, FooterWidgetElement, HardwarePinWidgetElement, IndexTitleWidgetElement, IntegerRangeWidgetElement, ManualOverrideElement, ScapeWidgetElement, TitleWidgetElement } from './widgetElement.js';
import { CyclicTimerWidgetSection, DutyModulationWidgetSection, EnvironmentReadingsWidgetSection, HumidityThrersholdWidgetSection, IndexAutomationWidgetSection, IndexOtherWidgetSection, IndexStatsWidgetSection, PeriodicDutyWidgetSection, RelayStateWidgetSection, SaveSettingsWidgetSection, SwitchCooldownWidgetSection, TemperatureThrersholdWidgetSection, TimeTelemetryWidgetSection, CurrentTimeWidgetSection, EnvironmentSensorWidgetSection, InputPeripheralWidgetSection, OutputPeripheralWidgetSection } from './widgetSection.js';


export class IndexWidget extends AbstractWidget {
    constructor($parent) {
        const ladder = new Ladder();
        super($parent, ladder, i18n.widget.index, {isLadderRoot: true});
    }
    easy_buildDom() {
        this.$container.classList.add('root-widget-container');
        this.$container.classList.add('widget-container');
        this.managed.title = new IndexTitleWidgetElement(this.$container, this.ladder, this.i18nSubtree.title);
        this.managed.scape = new ScapeWidgetElement(this.$container, this.ladder, {});
        this.managed.automation = new IndexAutomationWidgetSection(this.$container, this.ladder, this.i18nSubtree.automation);
        this.managed.other = new IndexOtherWidgetSection(this.$container, this.ladder, this.i18nSubtree.other);
        this.managed.stats = new IndexStatsWidgetSection(this.$container, this.ladder, this.i18nSubtree.stats);
        this.managed.footer = new FooterWidgetElement(this.$container, this.ladder, i18n.widgetElement.footer);
    }
    easy_destroy() {
        //do nothing TODO: wipe dom
    }
    easy_fromBindedRestToBindedState() {
        //do nothing
    }

    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true
    }

    easy_fromUnmanagedDomToBindedRest() {
        // do nothing, all managed
    }

    easy_fromBindedToUnmanagedDom() {
        // do nothing, all managed
    }

    async easy_saveToRestApi() {
        //do nothing
    }

    async easy_loadFromRestApi() {
        //do nothing
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

export class LightSettingsEditorWidget extends AbstractWidget {
    constructor($parent) {
        const ladder = new Ladder();
        super($parent, ladder, i18n.widget.lightSettings, {isLoadFromRestApi: true, isSaveToRestApi: true, isLadderRoot: true});
    }
    easy_buildDom() {
        this.$container.classList.add('root-widget-container');
        this.managed.title = new TitleWidgetElement(this.$container, this.ladder, this.i18nSubtree.title);
        this.managed.scape = new ScapeWidgetElement(this.$container, this.ladder, {}, {highlight: 'light'});
        this.managed.manualOverride = new ManualOverrideElement(this.$container, this.ladder, this.i18nSubtree.manualOverride);
        this.managed.cyclicTimer = new CyclicTimerWidgetSection(this.$container, this.ladder, this.i18nSubtree.cyclicTimer);
        this.managed.indoorTemperatureThreshold = new TemperatureThrersholdWidgetSection(this.$container, this.ladder, this.i18nSubtree.indoorTemperatureThreshold);
        this.managed.switchCooldown = new SwitchCooldownWidgetSection(this.$container, this.ladder, this.i18nSubtree.switchCooldown);
        this.managed.save = new SaveSettingsWidgetSection(this.$container, this.ladder, this.i18nSubtree.save);
        this.managed.footer = new FooterWidgetElement(this.$container, this.ladder, i18n.widgetElement.footer);
        this.managed.save.ee.on('save', () => {this.ee.emit('save'); });
        this.managed.manualOverride.ee.on('save', () => {this.ee.emit('save'); });
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
        // do nothing, all managed
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        await picoface.restApi.setLightSettings(this.binded.rest);
    }
    async easy_loadFromRestApi() {
        return await picoface.restApi.getLightSettings();
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

export class FanSettingsEditorWidget extends AbstractWidget {
    constructor($parent) {
        const ladder = new Ladder();
        super($parent, ladder, i18n.widget.fanSettings, {isLoadFromRestApi: true, isSaveToRestApi: true, isLadderRoot: true});
    }
    easy_buildDom() {
        this.$container.classList.add('root-widget-container');
        this.managed.title = new TitleWidgetElement(this.$container, this.ladder, this.i18nSubtree.title);
        this.managed.scape = new ScapeWidgetElement(this.$container, this.ladder, {}, {highlight: 'fan'});
        this.managed.manualOverride = new ManualOverrideElement(this.$container, this.ladder, this.i18nSubtree.manualOverride);
        this.managed.cyclicTimer = new CyclicTimerWidgetSection(this.$container, this.ladder, this.i18nSubtree.cyclicTimer);
        this.managed.indoorTemperatureThreshold = new TemperatureThrersholdWidgetSection(this.$container, this.ladder, this.i18nSubtree.indoorTemperatureThreshold);
        this.managed.switchCooldown = new SwitchCooldownWidgetSection(this.$container, this.ladder, this.i18nSubtree.switchCooldown);
        this.managed.save = new SaveSettingsWidgetSection(this.$container, this.ladder, this.i18nSubtree.save);
        this.managed.footer = new FooterWidgetElement(this.$container, this.ladder, i18n.widgetElement.footer);
        this.managed.save.ee.on('save', () => {this.ee.emit('save'); });
        this.managed.manualOverride.ee.on('save', () => {this.ee.emit('save'); });
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
        // do nothing, all managed
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        await picoface.restApi.setFanSettings(this.binded.rest);
    }
    async easy_loadFromRestApi() {
        return await picoface.restApi.getFanSettings();
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

export class WaterSettingsEditorWidget extends AbstractWidget {
    constructor($parent) {
        const ladder = new Ladder();
        super($parent, ladder, i18n.widget.waterSettings, {isLoadFromRestApi: true, isSaveToRestApi: true, isLadderRoot: true});
    }
    easy_buildDom() {
        this.$container.classList.add('root-widget-container');
        this.managed.title = new TitleWidgetElement(this.$container, this.ladder, this.i18nSubtree.title);
        this.managed.scape = new ScapeWidgetElement(this.$container, this.ladder, {}, {highlight: 'water'});
        this.managed.manualOverride = new ManualOverrideElement(this.$container, this.ladder, this.i18nSubtree.manualOverride);
        this.managed.periodicDuty = new PeriodicDutyWidgetSection(this.$container, this.ladder, this.i18nSubtree.periodicDuty);
        this.managed.cyclicTimer = new CyclicTimerWidgetSection(this.$container, this.ladder, this.i18nSubtree.cyclicTimer);
        this.managed.dutyModulation = new DutyModulationWidgetSection(this.$container, this.ladder, this.i18nSubtree.dutyModulation);
        this.managed.save = new SaveSettingsWidgetSection(this.$container, this.ladder, this.i18nSubtree.save);
        this.managed.footer = new FooterWidgetElement(this.$container, this.ladder, i18n.widgetElement.footer);
        this.managed.save.ee.on('save', () => { this.ee.emit('save'); });
        this.managed.manualOverride.ee.on('save', () => {this.ee.emit('save'); });
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
        // do nothing, all managed
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        await picoface.restApi.setWaterSettings(this.binded.rest);
    }
    async easy_loadFromRestApi() {
        return await picoface.restApi.getWaterSettings();
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

export class HeaterSettingsEditorWidget extends AbstractWidget {
    constructor($parent) {
        const ladder = new Ladder();
        super($parent, ladder, i18n.widget.heaterSettings, {isLoadFromRestApi: true, isSaveToRestApi: true, isLadderRoot: true});
    }
    easy_buildDom() {
        this.$container.classList.add('root-widget-container');
        this.managed.title = new TitleWidgetElement(this.$container, this.ladder, this.i18nSubtree.title);
        this.managed.scape = new ScapeWidgetElement(this.$container, this.ladder, {}, {highlight: 'heater'});
        this.managed.manualOverride = new ManualOverrideElement(this.$container, this.ladder, this.i18nSubtree.manualOverride);
        this.managed.cyclicTimer = new CyclicTimerWidgetSection(this.$container, this.ladder, this.i18nSubtree.cyclicTimer);
        this.managed.indoorTemperatureThreshold = new TemperatureThrersholdWidgetSection(this.$container, this.ladder, this.i18nSubtree.indoorTemperatureThreshold);
        this.managed.switchCooldown = new SwitchCooldownWidgetSection(this.$container, this.ladder, this.i18nSubtree.switchCooldown);
        this.managed.save = new SaveSettingsWidgetSection(this.$container, this.ladder, this.i18nSubtree.save);
        this.managed.footer = new FooterWidgetElement(this.$container, this.ladder, i18n.widgetElement.footer);
        this.managed.save.ee.on('save', () => {this.ee.emit('save'); });
        this.managed.manualOverride.ee.on('save', () => {this.ee.emit('save'); });
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
        // do nothing, all managed
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        await picoface.restApi.setHeaterSettings(this.binded.rest);
    }
    async easy_loadFromRestApi() {
        return await picoface.restApi.getHeaterSettings();
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

export class VaporizerSettingsEditorWidget extends AbstractWidget {
    constructor($parent) {
        const ladder = new Ladder();
        super($parent, ladder, i18n.widget.vaporizerSettings, {isLoadFromRestApi: true, isSaveToRestApi: true, isLadderRoot: true});
    }
    easy_buildDom() {
        this.$container.classList.add('root-widget-container');
        this.managed.title = new TitleWidgetElement(this.$container, this.ladder, this.i18nSubtree.title);
        this.managed.scape = new ScapeWidgetElement(this.$container, this.ladder, {}, {highlight: 'vaporizer'});
        this.managed.manualOverride = new ManualOverrideElement(this.$container, this.ladder, this.i18nSubtree.manualOverride);
        this.managed.cyclicTimer = new CyclicTimerWidgetSection(this.$container, this.ladder, this.i18nSubtree.cyclicTimer);
        this.managed.indoorHumidityThreshold = new HumidityThrersholdWidgetSection(this.$container, this.ladder, this.i18nSubtree.indoorHumidityThreshold);
        this.managed.switchCooldown = new SwitchCooldownWidgetSection(this.$container, this.ladder, this.i18nSubtree.switchCooldown);
        this.managed.save = new SaveSettingsWidgetSection(this.$container, this.ladder, this.i18nSubtree.save);
        this.managed.footer = new FooterWidgetElement(this.$container, this.ladder, i18n.widgetElement.footer);
        this.managed.save.ee.on('save', () => {this.ee.emit('save'); });
        this.managed.manualOverride.ee.on('save', () => {this.ee.emit('save'); });
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
        // do nothing, all managed
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        await picoface.restApi.setVaporizerSettings(this.binded.rest);
    }
    async easy_loadFromRestApi() {
        return await picoface.restApi.getVaporizerSettings();
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

export class WebInterfaceSettingsEditorWidget extends AbstractWidget {
    constructor($parent) {
        const ladder = new Ladder();
        super($parent, ladder, i18n.widget.webInterfaceSettings, {isLoadFromRestApi: true, isSaveToRestApi: true, isLadderRoot: true});
    }
    easy_buildDom() {
        this.$container.classList.add('root-widget-container');
        this.managed.title = new TitleWidgetElement(this.$container, this.ladder, this.i18nSubtree.title);
        this.managed.isVerbose = new BooleanWidgetElement(this.$container, this.ladder, this.i18nSubtree.isVerbose);
        this.managed.liveApiDelay = new IntegerRangeWidgetElement(this.$container, this.ladder, this.i18nSubtree.liveApiDelay, {min: 0, max: 60000});
        this.managed.liveApiFailDelay = new IntegerRangeWidgetElement(this.$container, this.ladder, this.i18nSubtree.liveApiFailDelay, {min: 5000, max: 60000});
        this.managed.save = new SaveSettingsWidgetSection(this.$container, this.ladder, this.i18nSubtree.save);
        this.managed.footer = new FooterWidgetElement(this.$container, this.ladder, i18n.widgetElement.footer);
        this.managed.save.ee.on('save', () => {this.ee.emit('save'); });
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
        // do nothing, all managed
    }

    easy_fromBindedToUnmanagedDom() {
    }

    async easy_saveToRestApi() {
        await picoface.localApi.setWebInterfaceSettings(this.binded.rest);
    }

    async easy_loadFromRestApi() {
        return await picoface.localApi.getWebInterfaceSettings();
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

export class PowerSettingsEditorWidget extends AbstractWidget {
    constructor($parent) {
        const ladder = new Ladder();
        super($parent, ladder, i18n.widget.powerSettings, {isLoadFromRestApi: true, isSaveToRestApi: true, isLadderRoot: true});
    }
    easy_buildDom() {
        this.$container.classList.add('root-widget-container');
        this.managed.title = new TitleWidgetElement(this.$container, this.ladder, this.i18nSubtree.title);
        this.managed.generalPowerOffTemperatureThreshold = new TemperatureThrersholdWidgetSection(this.$container, this.ladder, this.i18nSubtree.generalPowerOffTemperatureThreshold);
        this.managed.save = new SaveSettingsWidgetSection(this.$container, this.ladder, this.i18nSubtree.save);
        this.managed.footer = new FooterWidgetElement(this.$container, this.ladder, i18n.widgetElement.footer);
        this.managed.save.ee.on('save', () => {this.ee.emit('save'); });
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
        // do nothing, all managed
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        await picoface.restApi.setPowerSettings(this.binded.rest);
    }
    async easy_loadFromRestApi() {
        return await picoface.restApi.getPowerSettings();
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

export class WifiSettingsEditorWidget extends AbstractWidget {
    constructor($parent) {
        const ladder = new Ladder();
        super($parent, ladder, i18n.widget.wifiSettings, {isLoadFromRestApi: true, isSaveToRestApi: true, isLadderRoot: true});
    }
    easy_buildDom() {
        this.$container.classList.add('root-widget-container');
        this.managed.title = new TitleWidgetElement(this.$container, this.ladder, this.i18nSubtree.title);
        this.managed.station = new WifiStationWidgetSection(this.$container, this.ladder, this.i18nSubtree.station);
        this.managed.accessPoint = new WifiAccessPointWidgetSection(this.$container, this.ladder, this.i18nSubtree.accessPoint);
        this.managed.save = new SaveSettingsWidgetSection(this.$container, this.ladder, this.i18nSubtree.save);
        this.managed.footer = new FooterWidgetElement(this.$container, this.ladder, i18n.widgetElement.footer);
        this.managed.save.ee.on('save', () => {this.ee.emit('save'); });
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
        // do nothing, all managed
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        await picoface.restApi.setWifiSettings(this.binded.rest);
    }
    async easy_loadFromRestApi() {
        return await picoface.restApi.getWifiSettings();
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

export class TimeSettingsEditorWidget extends AbstractWidget {
    constructor($parent) {
        const ladder = new Ladder();
        super($parent, ladder, i18n.widget.timeSettings, {isLoadFromRestApi: true, isSaveToRestApi: true, isLadderRoot: true});
    }
    easy_buildDom() {
        this.$container.classList.add('root-widget-container');
        this.managed.title = new TitleWidgetElement(this.$container, this.ladder, this.i18nSubtree.title);
        this.managed.currentTime = new CurrentTimeWidgetSection(this.$container, this.ladder, this.i18nSubtree.currentTime);
        this.managed.save = new SaveSettingsWidgetSection(this.$container, this.ladder, this.i18nSubtree.save);
        this.managed.footer = new FooterWidgetElement(this.$container, this.ladder, i18n.widgetElement.footer);
        this.managed.save.ee.on('save', () => {this.onSaveCurrentTime(); this.ee.emit('save'); });
    }
    onSaveCurrentTime() {
        const currentDateAndTime = new Date();
        this.binded.rest.currentTime.currentUnixSeconds = currentDateAndTime;
        this.binded.rest.currentTime.tz = currentDateAndTime.getTimezoneOffset() / -60;
        console.log(this.binded.rest.currentTime);
        this.ee.emit('binded.rest.drown', this.binded.rest); // drown rest
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
        // do nothimg
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        await picoface.restApi.setTimeSettings(this.binded.rest);
    }
    async easy_loadFromRestApi() {
        return await picoface.restApi.getTimeSettings();
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
export class SensorSettingsEditorWidget extends AbstractWidget {
    constructor($parent) {
        const ladder = new Ladder();
        super($parent, ladder, i18n.widget.sensorSettings, {isLoadFromRestApi: true, isSaveToRestApi: true, isLadderRoot: true});
    }
    easy_buildDom() {
        this.$container.classList.add('root-widget-container');
        this.managed.title = new TitleWidgetElement(this.$container, this.ladder, this.i18nSubtree.title);
        this.managed.indoorEnvironment = new EnvironmentSensorWidgetSection(this.$container, this.ladder, this.i18nSubtree.indoorEnvironment);
        this.managed.outdoorEnvironment = new EnvironmentSensorWidgetSection(this.$container, this.ladder, this.i18nSubtree.outdoorEnvironment);
        this.managed.save = new SaveSettingsWidgetSection(this.$container, this.ladder, this.i18nSubtree.save);
        this.managed.footer = new FooterWidgetElement(this.$container, this.ladder, i18n.widgetElement.footer);
        this.managed.save.ee.on('save', () => {this.ee.emit('save'); });
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
        // do nothimg
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        await picoface.restApi.setSensorSettings(this.binded.rest);
    }
    async easy_loadFromRestApi() {
        return await picoface.restApi.getSensorSettings();
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

export class PeripheralSettingsEditorWidget extends AbstractWidget {
    constructor($parent) {
        const ladder = new Ladder();
        super($parent, ladder, i18n.widget.peripheralSettings, {isLoadFromRestApi: true, isSaveToRestApi: true, isLadderRoot: true});
    }
    easy_buildDom() {
        this.$container.classList.add('root-widget-container');
        this.managed.title = new TitleWidgetElement(this.$container, this.ladder, this.i18nSubtree.title);
        this.managed.input = new InputPeripheralWidgetSection(this.$container, this.ladder, this.i18nSubtree.input);
        this.managed.output = new OutputPeripheralWidgetSection(this.$container, this.ladder, this.i18nSubtree.output);
        this.managed.save = new SaveSettingsWidgetSection(this.$container, this.ladder, this.i18nSubtree.save);
        this.managed.footer = new FooterWidgetElement(this.$container, this.ladder, i18n.widgetElement.footer);
        this.managed.save.ee.on('save', () => {this.ee.emit('save'); });
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
        // do nothimg
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        await picoface.restApi.setPeripheralSettings(this.binded.rest);
    }
    async easy_loadFromRestApi() {
        return await picoface.restApi.getPeripheralSettings();
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


export class BasicStatsViewerWidget extends AbstractWidget {
    constructor($parent) {
        const ladder = new Ladder();
        super($parent, ladder, i18n.widget.basicStats, {isLoadOnceFromLiveApi: true, isSubscribeToLiveApi: true, isLadderRoot: true});
    }
    easy_buildDom() {
        this.$container.classList.add('root-widget-container');
        this.managed.title = new TitleWidgetElement(this.$container, this.ladder, this.i18nSubtree.title);
        const scape = new ScapeWidgetElement(this.$container, this.ladder, {});
        this.managed.environment = new EnvironmentReadingsWidgetSection(this.$container, this.ladder, this.i18nSubtree.environment);
        this.managed.relay = new RelayStateWidgetSection(this.$container, this.ladder, this.i18nSubtree.relay);
        this.managed.time = new TimeTelemetryWidgetSection(this.$container, this.ladder, this.i18nSubtree.time);

        this.managed.footer = new FooterWidgetElement(this.$container, this.ladder, i18n.widgetElement.footer);
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
        // do nothimg
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
        return await picoface.liveApi.getBasicStats();
    }
    easy_subscribeToLiveApi(callback) {
        picoface.liveApi.ee.on('basicStats', callback);
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        return liveApiValue;
    }
}
