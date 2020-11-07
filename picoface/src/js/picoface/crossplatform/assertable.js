'use strict';
export class AbstractAssertable {
    assert() {
        if (!this.validate()) {
            throw new Error(this.constructor.name + ' is not fit validation constraints');
        };
    }
}

export class Time24 extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        return new Time24(plainTree.h, plainTree.m, plainTree.s);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            h: this.h,
            m: this.m,
            s: this.s,
        }
        return plainTree;
    }
    constructor(h = 0, m = 0, s = 0) {
        super();
        this.h = h;
        this.m = m;
        this.s = s;
    }
    validate() {
        return (typeof this.h === 'number' && this.h >= 0 && this.h < 24 && typeof this.m === 'number' && this.m >= 0 && this.m < 60 && typeof this.s === 'number' && this.s >= 0 && this.s < 60);
    }
}
export class Timespan24 extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const from = Time24.fromPlainTree(plainTree.from);
        const to = Time24.fromPlainTree(plainTree.to);
        return new Timespan24(from, to);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            from: this.from.toPlainTree(),
            to: this.to.toPlainTree(),
        }
        return plainTree;
    }
    constructor(from = new Time24(8), to = new Time24(20)) {
        super();
        this.from = from;
        this.to = to;
    }
    validate() {
        return (
            this.from && this.from instanceof Time24 && this.from.validate() &&
            this.to && this.to instanceof Time24 && this.to.validate()
        );
    }
}

export class HardwarePin extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        return new HardwarePin(plainTree.idx);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            idx: this.idx,
        }
        return plainTree;
    }
    constructor(idx = 0) {
        super();
        this.idx = idx;
    }
    validate() {
        return (typeof this.idx === 'number' && this.idx >= 0 && this.idx < 32);
    }
}
export class SmartOutputPin extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        return new SmartOutputPin(plainTree.modeKey, plainTree.idx);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            modeKey: this.modeKey,
            idx: this.idx,
        }
        return plainTree;
    }
    constructor(modeKey = 'raw', idx = 0) {
        super();
        this.modeKey = modeKey;
        this.idx = idx;
    }
    validate() {
        return (
            typeof this.idx === 'number' && this.idx >= 0 && this.idx < 32 &&
            typeof this.modeKey === 'string' && (this.modeKey === 'raw' || this.modeKey === 'extended')
        );
    }
}


export class CyclicTimerSettingsSection extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const timespan24 = Timespan24.fromPlainTree(plainTree.timespan24);
        return new CyclicTimerSettingsSection(timespan24, plainTree.isEnabled);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            timespan24: this.timespan24.toPlainTree(),
            isEnabled: this.isEnabled,
        }
        return plainTree;
    }
    constructor(timespan24 = new Timespan24(new Time24(8), new Time24(20)), isEnabled = true) {
        super();
        this.timespan24 = timespan24;
        this.isEnabled = isEnabled;
    }
    validate() {
        return (
            this.timespan24 && this.timespan24 instanceof Timespan24 && this.timespan24.validate() &&
            typeof this.isEnabled === 'boolean'
        );
    }
}
export class TemperatureThresholdSettingsSection extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        return new TemperatureThresholdSettingsSection(plainTree.temperatureThreshold, plainTree.isEnabled);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            temperatureThreshold: this.temperatureThreshold,
            isEnabled: this.isEnabled,
        }
        return plainTree;
    }
    constructor(temperatureThreshold = 25, isEnabled = true) {
        super();
        this.temperatureThreshold = temperatureThreshold;
        this.isEnabled = isEnabled;
    }
    validate() {
        return (
            typeof this.temperatureThreshold === 'number' && this.temperatureThreshold >= -270 && this.temperatureThreshold <= 270 &&
            typeof this.isEnabled === 'boolean'
        );
    }
}
export class HumidityThresholdSettingsSection extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        return new HumidityThresholdSettingsSection(plainTree.humidityThreshold, plainTree.isEnabled);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            humidityThreshold: this.humidityThreshold,
            isEnabled: this.isEnabled,
        }
        return plainTree;
    }
    constructor(humidityThreshold = 25, isEnabled = true) {
        super();
        this.humidityThreshold = humidityThreshold;
        this.isEnabled = isEnabled;
    }
    validate() {
        return (
            typeof this.humidityThreshold === 'number' && this.humidityThreshold >= 0 && this.humidityThreshold <= 100 &&
            typeof this.isEnabled === 'boolean'
        );
    }
}

export class SwitchCooldownSettingsSection extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        return new SwitchCooldownSettingsSection(plainTree.seconds, plainTree.isEnabled);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            seconds: this.seconds,
            isEnabled: this.isEnabled,
        }
        return plainTree;
    }
    constructor(seconds = 60, isEnabled = false) {
        super();
        this.seconds = seconds;
        this.isEnabled = isEnabled;
    }
    validate() {
        return (
            typeof this.seconds === 'number' && this.seconds > 0 && this.seconds <= 900 &&
            typeof this.isEnabled === 'boolean'
        );
    }
}

export class PeriodicDutySettingsSection extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        return new PeriodicDutySettingsSection(plainTree.count, plainTree.duration);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            count: this.count,
            duration: this.duration,
        }
        return plainTree;
    }
    constructor(count = 4, duration = 30) {
        super();
        this.count = count;
        this.duration = duration;
    }
    validate() {
        return (
            typeof this.count === 'number' && this.count >= 0 && this.count < 100 &&
            typeof this.duration === 'number' && this.duration >= 0 && this.duration < 300
        );
    }
}

export class DutyModulationSettingsSection extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        return new DutyModulationSettingsSection(plainTree.ratio, plainTree.duration, plainTree.isEnabled);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            ratio: this.ratio,
            duration: this.duration,
            isEnabled: this.isEnabled,
        }
        return plainTree;
    }
    constructor(ratio = 0.2, duration = 10, isEnabled = false) {
        super();
        this.ratio = ratio;
        this.duration = duration;
        this.isEnabled = isEnabled;
    }
    validate() {
        return (
            typeof this.ratio === 'number' && this.ratio > 0 && this.ratio <= 1 &&
            typeof this.duration === 'number' && this.duration >= 0 && this.duration < 300 &&
            typeof this.isEnabled === 'boolean'
        );
    }
}

export class WifiSettingsSection extends AbstractAssertable {
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            ssid: this.ssid,
            password: this.password,
            isEnabled: this.isEnabled,
        }
        return plainTree;
    }
    constructor(ssid = 'picoface', password = 'gigabutt', isEnabled = true) {
        super();
        this.ssid = ssid;
        this.password = password;
        this.isEnabled = isEnabled;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            typeof this.ssid === 'string' && this.isSafeString(this.ssid) &&
            typeof this.password === 'string' && this.isSafeString(this.password) &&
            typeof this.isEnabled === 'boolean'
        );
    }
    isSafeString(unsafeString) {
        if (unsafeString.length > 0 && unsafeString.length < 32) {
            const safeChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_';
            for (let unsafeCharIdx = 0; unsafeCharIdx < unsafeString.length; unsafeCharIdx++) {
                const unsafeChar = unsafeString[unsafeCharIdx];
                if (!safeChars.includes(unsafeChar)) {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    }
}
export class WifiStationSettingsSection extends WifiSettingsSection {
    static fromPlainTree(plainTree) {
        return new WifiStationSettingsSection(plainTree.ssid, plainTree.password, plainTree.isEnabled);
    }
}
export class WifiAccessPointSettingsSection extends WifiSettingsSection {
    static fromPlainTree(plainTree) {
        return new WifiAccessPointSettingsSection(plainTree.ssid, plainTree.password, plainTree.isEnabled);
    }
}

export class CurrentTimeSettingsSection extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        return new CurrentTimeSettingsSection(new Date(plainTree.currentUnixSeconds * 1000), plainTree.tz);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            currentUnixSeconds: this.currentUnixSeconds.valueOf() / 1000,
            tz: this.tz,
        }
        return plainTree;
    }
    constructor(currentUnixSeconds = new Date(), tz = (new Date()).getTimezoneOffset() / -60 ) {
        super();
        this.currentUnixSeconds = currentUnixSeconds;
        this.tz = tz;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.currentUnixSeconds && this.currentUnixSeconds instanceof Date &&
            typeof this.tz === 'number' && this.tz >= -12 && this.tz <= 12
        );
    }
}

export class TimeTelemetryStatsSection extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const secondsSinceRestart = plainTree.secondsSinceRestart;
        const currentUnixSeconds = new Date(plainTree.currentUnixSeconds * 1000);
        const tz = currentUnixSeconds.getTimezoneOffset() / -60;
        return new TimeTelemetryStatsSection(
            secondsSinceRestart,
            currentUnixSeconds,
            tz,
        );
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            secondsSinceRestart: this.secondsSinceRestart,
            currentUnixSeconds: this.currentUnixSeconds.valueOf() / 1000,
            tz: this.tz,
        }
        return plainTree;
    }
    constructor(secondsSinceRestart = 0, currentUnixSeconds = new Date(), tz = (new Date()).getTimezoneOffset() / -60) {
        super();
        this.secondsSinceRestart = secondsSinceRestart;
        this.currentUnixSeconds = currentUnixSeconds;
        this.tz = tz;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            typeof this.secondsSinceRestart === 'number' && this.secondsSinceRestart >= 0 &&
            this.currentUnixSeconds && this.currentUnixSeconds instanceof Date &&
            typeof this.tz === 'number' && this.tz >= -12 && this.tz <= 12
        );
    }
}


export class EnvironmentReadingsStatsSection extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const currentIndoorTemperature = plainTree.currentIndoorTemperature;
        const currentIndoorHumidity = plainTree.currentIndoorHumidity;
        const currentOutdoorTemperature = plainTree.currentOutdoorTemperature;
        const currentOutdoorHumidity = plainTree.currentOutdoorHumidity;
        return new EnvironmentReadingsStatsSection(
            currentIndoorTemperature,
            currentIndoorHumidity,
            currentOutdoorTemperature,
            currentOutdoorHumidity,
        );
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            currentIndoorTemperature: this.currentIndoorTemperature,
            currentIndoorHumidity: this.currentIndoorHumidity,
            currentOutdoorTemperature: this.currentOutdoorTemperature,
            currentOutdoorHumidity: this.currentOutdoorHumidity,
        }
        return plainTree;
    }
    constructor(currentIndoorTemperature = 0, currentIndoorHumidity = 0, currentOutdoorTemperature = 0, currentOutdoorHumidity = 0) {
        super();
        this.currentIndoorTemperature = currentIndoorTemperature;
        this.currentIndoorHumidity = currentIndoorHumidity;
        this.currentOutdoorTemperature = currentOutdoorTemperature;
        this.currentOutdoorHumidity = currentOutdoorHumidity;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            typeof this.currentIndoorTemperature === 'number' && this.currentIndoorTemperature >= -270 && this.currentIndoorTemperature <= 270 &&
            typeof this.currentIndoorHumidity === 'number' && this.currentIndoorHumidity >= 0 && this.currentIndoorHumidity <= 100 &&
            typeof this.currentOutdoorTemperature === 'number' && this.currentOutdoorTemperature >= -270 && this.currentOutdoorTemperature <= 270 &&
            typeof this.currentOutdoorHumidity === 'number' && this.currentOutdoorHumidity >= 0 && this.currentOutdoorHumidity <= 100
        );
    }
}


export class RelayStateStatsSection extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const isLightActive = plainTree.isLightActive;
        const isFanActive = plainTree.isFanActive;
        const isWaterActive = plainTree.isWaterActive;
        const isHeaterActive = plainTree.isHeaterActive;
        const isVaporizerActive = plainTree.isVaporizerActive;
        return new RelayStateStatsSection(
            isLightActive,
            isFanActive,
            isWaterActive,
            isHeaterActive,
            isVaporizerActive,
        );
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            isLightActive: this.isLightActive,
            isFanActive: this.isFanActive,
            isWaterActive: this.isWaterActive,
            isHeaterActive: this.isHeaterActive,
            isVaporizerActive: this.isVaporizerActive,
        }
        return plainTree;
    }
    constructor(isLightActive = false, isFanActive = false, isWaterActive = false, isHeaterActive = false, isVaporizerActive = false) {
        super();
        this.isLightActive = isLightActive;
        this.isFanActive = isFanActive;
        this.isWaterActive = isWaterActive;
        this.isHeaterActive = isHeaterActive;
        this.isVaporizerActive = isVaporizerActive;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            typeof this.isLightActive === 'boolean' &&
            typeof this.isFanActive === 'boolean' &&
            typeof this.isWaterActive === 'boolean' &&
            typeof this.isHeaterActive === 'boolean' &&
            typeof this.isVaporizerActive === 'boolean'
        );
    }
}



export class LightSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const cyclicTimer = CyclicTimerSettingsSection.fromPlainTree(plainTree.cyclicTimer);
        const indoorTemperatureThreshold = TemperatureThresholdSettingsSection.fromPlainTree(plainTree.indoorTemperatureThreshold);
        const switchCooldown = SwitchCooldownSettingsSection.fromPlainTree(plainTree.switchCooldown);
        return new LightSettings(cyclicTimer, indoorTemperatureThreshold, switchCooldown, plainTree.manualOverride);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            cyclicTimer: this.cyclicTimer.toPlainTree(),
            indoorTemperatureThreshold: this.indoorTemperatureThreshold.toPlainTree(),
            switchCooldown: this.switchCooldown.toPlainTree(),
            manualOverride: this.manualOverride,
        }
        return plainTree;
    }
    constructor(cyclicTimer = new CyclicTimerSettingsSection(), indoorTemperatureThreshold = new TemperatureThresholdSettingsSection(), switchCooldown = new SwitchCooldownSettingsSection(), manualOverride = undefined) {
        super();
        this.cyclicTimer = cyclicTimer;
        this.indoorTemperatureThreshold = indoorTemperatureThreshold;
        this.switchCooldown = switchCooldown;
        this.manualOverride = manualOverride;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.cyclicTimer && this.cyclicTimer instanceof CyclicTimerSettingsSection && this.cyclicTimer.validate() &&
            this.indoorTemperatureThreshold && this.indoorTemperatureThreshold instanceof TemperatureThresholdSettingsSection && this.indoorTemperatureThreshold.validate() &&
            this.switchCooldown && this.switchCooldown instanceof SwitchCooldownSettingsSection && this.switchCooldown.validate() &&
            (typeof this.manualOverride === 'undefined' || typeof this.manualOverride === 'boolean')
        );
    }
}

export class FanSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const cyclicTimer = CyclicTimerSettingsSection.fromPlainTree(plainTree.cyclicTimer);
        const indoorTemperatureThreshold = TemperatureThresholdSettingsSection.fromPlainTree(plainTree.indoorTemperatureThreshold);
        const switchCooldown = SwitchCooldownSettingsSection.fromPlainTree(plainTree.switchCooldown);
        return new FanSettings(cyclicTimer, indoorTemperatureThreshold, switchCooldown, plainTree.manualOverride);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            cyclicTimer: this.cyclicTimer.toPlainTree(),
            indoorTemperatureThreshold: this.indoorTemperatureThreshold.toPlainTree(),
            switchCooldown: this.switchCooldown.toPlainTree(),
            manualOverride: this.manualOverride,
        }
        return plainTree;
    }
    constructor(cyclicTimer = new CyclicTimerSettingsSection(), indoorTemperatureThreshold = new TemperatureThresholdSettingsSection(), switchCooldown = new SwitchCooldownSettingsSection(), manualOverride = undefined) {
        super();
        this.cyclicTimer = cyclicTimer;
        this.indoorTemperatureThreshold = indoorTemperatureThreshold;
        this.switchCooldown = switchCooldown;
        this.manualOverride = manualOverride;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.cyclicTimer && this.cyclicTimer instanceof CyclicTimerSettingsSection && this.cyclicTimer.validate() &&
            this.indoorTemperatureThreshold && this.indoorTemperatureThreshold instanceof TemperatureThresholdSettingsSection && this.indoorTemperatureThreshold.validate() &&
            this.switchCooldown && this.switchCooldown instanceof SwitchCooldownSettingsSection && this.switchCooldown.validate() &&
            (typeof this.manualOverride === 'undefined' || typeof this.manualOverride === 'boolean')
        );
    }
}

export class WaterSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const periodicDuty = PeriodicDutySettingsSection.fromPlainTree(plainTree.periodicDuty);
        const cyclicTimer = CyclicTimerSettingsSection.fromPlainTree(plainTree.cyclicTimer);
        const dutyModulation = DutyModulationSettingsSection.fromPlainTree(plainTree.dutyModulation);
        return new WaterSettings(periodicDuty, cyclicTimer, dutyModulation, plainTree.manualOverride);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            periodicDuty: this.periodicDuty.toPlainTree(),
            cyclicTimer: this.cyclicTimer.toPlainTree(),
            dutyModulation: this.dutyModulation.toPlainTree(),
            manualOverride: this.manualOverride,
        }
        return plainTree;
    }
    constructor(periodicDuty = new PeriodicDutySettingsSection(), cyclicTimer = new CyclicTimerSettingsSection(), dutyModulation = new DutyModulationSettingsSection(), manualOverride = undefined) {
        super();
        this.periodicDuty = periodicDuty;
        this.cyclicTimer = cyclicTimer;
        this.dutyModulation = dutyModulation;
        this.manualOverride = manualOverride;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.periodicDuty && this.periodicDuty instanceof PeriodicDutySettingsSection && this.periodicDuty.validate() &&
            this.cyclicTimer && this.cyclicTimer instanceof CyclicTimerSettingsSection && this.cyclicTimer.validate() &&
            this.dutyModulation && this.dutyModulation instanceof DutyModulationSettingsSection && this.dutyModulation.validate() &&
            (typeof this.manualOverride === 'undefined' || typeof this.manualOverride === 'boolean')
        );
    }
}

export class HeaterSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const cyclicTimer = CyclicTimerSettingsSection.fromPlainTree(plainTree.cyclicTimer);
        const indoorTemperatureThreshold = TemperatureThresholdSettingsSection.fromPlainTree(plainTree.indoorTemperatureThreshold);
        const switchCooldown = SwitchCooldownSettingsSection.fromPlainTree(plainTree.switchCooldown);
        return new HeaterSettings(cyclicTimer, indoorTemperatureThreshold, switchCooldown, plainTree.manualOverride);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            cyclicTimer: this.cyclicTimer.toPlainTree(),
            indoorTemperatureThreshold: this.indoorTemperatureThreshold.toPlainTree(),
            switchCooldown: this.switchCooldown.toPlainTree(),
            manualOverride: this.manualOverride,
        }
        return plainTree;
    }
    constructor(cyclicTimer = new CyclicTimerSettingsSection(), indoorTemperatureThreshold = new TemperatureThresholdSettingsSection(), switchCooldown = new SwitchCooldownSettingsSection(), manualOverride = undefined) {
        super();
        this.cyclicTimer = cyclicTimer;
        this.indoorTemperatureThreshold = indoorTemperatureThreshold;
        this.switchCooldown = switchCooldown;
        this.manualOverride = manualOverride;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.cyclicTimer && this.cyclicTimer instanceof CyclicTimerSettingsSection && this.cyclicTimer.validate() &&
            this.indoorTemperatureThreshold && this.indoorTemperatureThreshold instanceof TemperatureThresholdSettingsSection && this.indoorTemperatureThreshold.validate() &&
            this.switchCooldown && this.switchCooldown instanceof SwitchCooldownSettingsSection && this.switchCooldown.validate() &&
            (typeof this.manualOverride === 'undefined' || typeof this.manualOverride === 'boolean')
        );
    }
}

export class VaporizerSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const cyclicTimer = CyclicTimerSettingsSection.fromPlainTree(plainTree.cyclicTimer);
        const indoorHumidityThreshold = HumidityThresholdSettingsSection.fromPlainTree(plainTree.indoorHumidityThreshold);
        const switchCooldown = SwitchCooldownSettingsSection.fromPlainTree(plainTree.switchCooldown);
        return new VaporizerSettings(cyclicTimer, indoorHumidityThreshold, switchCooldown, plainTree.manualOverride);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            cyclicTimer: this.cyclicTimer.toPlainTree(),
            indoorHumidityThreshold: this.indoorHumidityThreshold.toPlainTree(),
            switchCooldown: this.switchCooldown.toPlainTree(),
            manualOverride: this.manualOverride,
        }
        return plainTree;
    }
    constructor(cyclicTimer = new CyclicTimerSettingsSection(), indoorHumidityThreshold = new HumidityThresholdSettingsSection(), switchCooldown = new SwitchCooldownSettingsSection(), manualOverride = undefined) {
        super();
        this.cyclicTimer = cyclicTimer;
        this.indoorHumidityThreshold = indoorHumidityThreshold;
        this.switchCooldown = switchCooldown;
        this.manualOverride = manualOverride;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.cyclicTimer && this.cyclicTimer instanceof CyclicTimerSettingsSection && this.cyclicTimer.validate() &&
            this.indoorHumidityThreshold && this.indoorHumidityThreshold instanceof HumidityThresholdSettingsSection && this.indoorHumidityThreshold.validate() &&
            this.switchCooldown && this.switchCooldown instanceof SwitchCooldownSettingsSection && this.switchCooldown.validate() &&
            (typeof this.manualOverride === 'undefined' || typeof this.manualOverride === 'boolean')
        );
    }
}

export class PowerSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const generalPowerOffTemperatureThreshold = TemperatureThresholdSettingsSection.fromPlainTree(plainTree.generalPowerOffTemperatureThreshold);
        return new PowerSettings(generalPowerOffTemperatureThreshold);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            generalPowerOffTemperatureThreshold: this.generalPowerOffTemperatureThreshold.toPlainTree(),
        }
        return plainTree;
    }
    constructor(generalPowerOffTemperatureThreshold = new TemperatureThresholdSettingsSection(70)) {
        super();
        this.generalPowerOffTemperatureThreshold = generalPowerOffTemperatureThreshold;
        // old strict assert: this.assert();
    }
    validate() {
        return this.generalPowerOffTemperatureThreshold && this.generalPowerOffTemperatureThreshold instanceof TemperatureThresholdSettingsSection && this.generalPowerOffTemperatureThreshold.validate()
    }
}

export class TimeSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const currentTime = CurrentTimeSettingsSection.fromPlainTree(plainTree.currentTime);
        return new TimeSettings(currentTime);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            currentTime: this.currentTime.toPlainTree(),
        }
        return plainTree;
    }
    constructor(currentTime = new CurrentTimeSettingsSection()) {
        super();
        this.currentTime = currentTime;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.currentTime && this.currentTime instanceof CurrentTimeSettingsSection && this.currentTime.validate()
        );
    }
}

export class WifiSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const station = WifiStationSettingsSection.fromPlainTree(plainTree.station);
        const accessPoint = WifiAccessPointSettingsSection.fromPlainTree(plainTree.accessPoint);
        return new WifiSettings(station, accessPoint);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            station: this.station.toPlainTree(),
            accessPoint: this.accessPoint.toPlainTree(),
        }
        return plainTree;
    }
    constructor(station = new WifiStationSettingsSection(), accessPoint = new WifiAccessPointSettingsSection()) {
        super();
        this.station = station;
        this.accessPoint = accessPoint;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.station && this.station instanceof WifiStationSettingsSection && this.station.validate() &&
            this.accessPoint && this.accessPoint instanceof WifiAccessPointSettingsSection && this.accessPoint.validate()
        );
    }
}



// StaticOverrideSettings

export class EnvironmentSensorVirtualStaticOverrideSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        return new EnvironmentSensorVirtualStaticOverrideSettings(plainTree.temperature, plainTree.humidity, plainTree.pressure);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            temperature: this.temperature,
            humidity: this.humidity,
            pressure: this.pressure,
        }
        return plainTree;
    }
    constructor(
        temperature = 25,
        humidity = 50,
        pressure = 1500,
    ) {
        super();
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            typeof this.temperature === 'number' && this.temperature >= -270 && this.temperature <= 270 &&
            typeof this.humidity === 'number' && this.humidity >= 0 && this.humidity <= 100 &&
            typeof this.pressure === 'number' && this.pressure >= 0 && this.pressure <= 3000
        );
    }
}
export class EnvironmentSensorDhtStaticOverrideSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        return new EnvironmentSensorDhtStaticOverrideSettings(plainTree.pressure);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            pressure: this.pressure,
        }
        return plainTree;
    }
    constructor(
        pressure = 1500,
    ) {
        super();
        this.pressure = pressure;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            typeof this.pressure === 'number' && this.pressure >= 0 && this.pressure <= 3000
        );
    }
}
export class EnvironmentSensorBmpStaticOverrideSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        return new EnvironmentSensorBmpStaticOverrideSettings(plainTree.pressure);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            pressure: this.pressure,
        }
        return plainTree;
    }
    constructor(
        pressure = 1500,
    ) {
        super();
        this.pressure = pressure;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            typeof this.pressure === 'number' && this.pressure >= 0 && this.pressure <= 3000
        );
    }
}
export class EnvironmentSensorDsStaticOverrideSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        return new EnvironmentSensorDsStaticOverrideSettings(plainTree.humidity, plainTree.pressure);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            humidity: this.humidity,
            pressure: this.pressure,
        }
        return plainTree;
    }
    constructor(
        humidity = 50,
        pressure = 1500,
    ) {
        super();
        this.humidity = humidity;
        this.pressure = pressure;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            typeof this.humidity === 'number' && this.humidity >= 0 && this.humidity <= 100 &&
            typeof this.pressure === 'number' && this.pressure >= 0 && this.pressure <= 3000
        );
    }
}

// ConnectionSettings

export class EnvironmentSensorDhtConnectionSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const dataHardwarePin = HardwarePin.fromPlainTree(plainTree.dataHardwarePin);
        return new EnvironmentSensorDhtConnectionSettings(dataHardwarePin);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            dataHardwarePin: this.dataHardwarePin.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        dataHardwarePin = new HardwarePin(14),
    ) {
        super();
        this.dataHardwarePin = dataHardwarePin;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.dataHardwarePin && this.dataHardwarePin instanceof HardwarePin && this.dataHardwarePin.validate()
        );
    }
}
export class EnvironmentSensorBmConnectionSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const dataAHardwarePin = HardwarePin.fromPlainTree(plainTree.dataAHardwarePin);
        const dataBHardwarePin = HardwarePin.fromPlainTree(plainTree.dataBHardwarePin);
        return new EnvironmentSensorBmConnectionSettings(dataAHardwarePin, dataBHardwarePin);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            dataAHardwarePin: this.dataAHardwarePin.toPlainTree(),
            dataBHardwarePin: this.dataBHardwarePin.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        dataAHardwarePin = new HardwarePin(14),
        dataBHardwarePin = new HardwarePin(15),
    ) {
        super();
        this.dataAHardwarePin = dataAHardwarePin;
        this.dataBHardwarePin = dataBHardwarePin;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.dataAHardwarePin && this.dataAHardwarePin instanceof HardwarePin && this.dataAHardwarePin.validate() &&
            this.dataBHardwarePin && this.dataBHardwarePin instanceof HardwarePin && this.dataBHardwarePin.validate()
        );
    }
}
export class EnvironmentSensorDsConnectionSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const dataHardwarePin = HardwarePin.fromPlainTree(plainTree.dataHardwarePin);
        return new EnvironmentSensorDsConnectionSettings(dataHardwarePin);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            dataHardwarePin: this.dataHardwarePin.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        dataHardwarePin = new HardwarePin(14),
    ) {
        super();
        this.dataHardwarePin = dataHardwarePin;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.dataHardwarePin && this.dataHardwarePin instanceof HardwarePin && this.dataHardwarePin.validate()
        );
    }
}

// EnvironmentSensorSettings

export class EnvironmentSensorVirtualSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const staticOverride = EnvironmentSensorVirtualStaticOverrideSettings.fromPlainTree(plainTree.staticOverride);
        return new EnvironmentSensorVirtualSettings(staticOverride);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            staticOverride: this.staticOverride.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        staticOverride = new EnvironmentSensorVirtualStaticOverrideSettings(),
        ) {
        super();
        this.staticOverride = staticOverride;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.staticOverride && this.staticOverride instanceof EnvironmentSensorVirtualStaticOverrideSettings && this.staticOverride.validate()
        );
    }
}
export class EnvironmentSensorDhtSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const connection = EnvironmentSensorDhtConnectionSettings.fromPlainTree(plainTree.connection);
        const staticOverride = EnvironmentSensorDhtStaticOverrideSettings.fromPlainTree(plainTree.staticOverride);
        return new EnvironmentSensorDhtSettings(connection, staticOverride);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            connection: this.connection.toPlainTree(),
            staticOverride: this.staticOverride.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        connection = new EnvironmentSensorDhtConnectionSettings(),
        staticOverride = new EnvironmentSensorDhtStaticOverrideSettings(),
        ) {
        super();
        this.connection = connection;
        this.staticOverride = staticOverride;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.connection && this.connection instanceof EnvironmentSensorDhtConnectionSettings && this.connection.validate() &&
            this.staticOverride && this.staticOverride instanceof EnvironmentSensorDhtStaticOverrideSettings && this.staticOverride.validate()
            );
    }
}
export class EnvironmentSensorBmeSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const connection = EnvironmentSensorBmConnectionSettings.fromPlainTree(plainTree.connection);
        return new EnvironmentSensorBmeSettings(connection);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            connection: this.connection.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        connection = new EnvironmentSensorBmConnectionSettings(),
        ) {
        super();
        this.connection = connection;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.connection && this.connection instanceof EnvironmentSensorBmConnectionSettings && this.connection.validate()
            );
    }
}
export class EnvironmentSensorBmpSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const connection = EnvironmentSensorBmConnectionSettings.fromPlainTree(plainTree.connection);
        const staticOverride = EnvironmentSensorBmpStaticOverrideSettings.fromPlainTree(plainTree.staticOverride);
        return new EnvironmentSensorBmpSettings(connection, staticOverride);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            connection: this.connection.toPlainTree(),
            staticOverride: this.staticOverride.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        connection = new EnvironmentSensorBmConnectionSettings(),
        staticOverride = new EnvironmentSensorBmpStaticOverrideSettings(),
        ) {
        super();
        this.connection = connection;
        this.staticOverride = staticOverride;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.connection && this.connection instanceof EnvironmentSensorBmConnectionSettings && this.connection.validate() &&
            this.staticOverride && this.staticOverride instanceof EnvironmentSensorBmpStaticOverrideSettings && this.staticOverride.validate()
            );
    }
}
export class EnvironmentSensorDsSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const connection = EnvironmentSensorDsConnectionSettings.fromPlainTree(plainTree.connection);
        const staticOverride = EnvironmentSensorDsStaticOverrideSettings.fromPlainTree(plainTree.staticOverride);
        return new EnvironmentSensorDsSettings(connection, staticOverride);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            connection: this.connection.toPlainTree(),
            staticOverride: this.staticOverride.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        connection = new EnvironmentSensorDsConnectionSettings(),
        staticOverride = new EnvironmentSensorDsStaticOverrideSettings(),
        ) {
        super();
        this.connection = connection;
        this.staticOverride = staticOverride;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.connection && this.connection instanceof EnvironmentSensorDsConnectionSettings && this.connection.validate() &&
            this.staticOverride && this.staticOverride instanceof EnvironmentSensorDsStaticOverrideSettings && this.staticOverride.validate()
            );
    }
}




export class EnvironmentSensorType extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        return new EnvironmentSensorType(plainTree.typeKey);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            typeKey: this.typeKey,
        }
        return plainTree;
    }
    constructor(
        typeKey = 'virtual',
    ) {
        super();
        this.typeKey = typeKey;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.typeKey && typeof this.typeKey === 'string' &&
            (this.typeKey === 'virtual' || this.typeKey === 'dht' || this.typeKey === 'bme' || this.typeKey === 'bmp' || this.typeKey === 'ds')
        );
    }
}

export class EnvironmentSensorSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const virtual = EnvironmentSensorVirtualSettings.fromPlainTree(plainTree.virtual);
        const dht = EnvironmentSensorDhtSettings.fromPlainTree(plainTree.dht);
        const bme = EnvironmentSensorBmeSettings.fromPlainTree(plainTree.bme);
        const bmp = EnvironmentSensorBmpSettings.fromPlainTree(plainTree.bmp);
        const ds = EnvironmentSensorDsSettings.fromPlainTree(plainTree.ds);
        const sensorType = EnvironmentSensorType.fromPlainTree(plainTree.sensorType);
        return new EnvironmentSensorSettings(virtual, dht, bme, bmp, ds, sensorType);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            virtual: this.virtual.toPlainTree(),
            dht: this.dht.toPlainTree(),
            bme: this.bme.toPlainTree(),
            bmp: this.bmp.toPlainTree(),
            ds: this.ds.toPlainTree(),
            sensorType: this.sensorType.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        virtual = new EnvironmentSensorVirtualSettings(),
        dht = new EnvironmentSensorDhtSettings(),
        bme = new EnvironmentSensorBmeSettings(),
        bmp = new EnvironmentSensorBmpSettings(),
        ds = new EnvironmentSensorDsSettings(),
        sensorType = new EnvironmentSensorType(),
        ) {
        super();
        this.virtual = virtual;
        this.dht = dht;
        this.bme = bme;
        this.bmp = bmp;
        this.ds = ds;
        this.sensorType = sensorType;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.virtual && this.virtual instanceof EnvironmentSensorVirtualSettings && this.virtual.validate() &&
            this.dht && this.dht instanceof EnvironmentSensorDhtSettings && this.dht.validate() &&
            this.bme && this.bme instanceof EnvironmentSensorBmeSettings && this.bme.validate() &&
            this.bmp && this.bmp instanceof EnvironmentSensorBmpSettings && this.bmp.validate() &&
            this.ds && this.ds instanceof EnvironmentSensorDsSettings && this.ds.validate() &&
            this.sensorType && this.sensorType instanceof EnvironmentSensorType && this.sensorType.validate()
            );
    }
}
export class SensorSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const indoorEnvironment = EnvironmentSensorSettings.fromPlainTree(plainTree.indoorEnvironment);
        const outdoorEnvironment = EnvironmentSensorSettings.fromPlainTree(plainTree.outdoorEnvironment);
        return new SensorSettings(indoorEnvironment, outdoorEnvironment);

    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            indoorEnvironment: this.indoorEnvironment.toPlainTree(),
            outdoorEnvironment: this.outdoorEnvironment.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        indoorEnvironment = new EnvironmentSensorSettings(),
        outdoorEnvironment = new EnvironmentSensorSettings(),
    ) {
        super();
        this.indoorEnvironment = indoorEnvironment;
        this.outdoorEnvironment = outdoorEnvironment;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.indoorEnvironment && this.indoorEnvironment instanceof EnvironmentSensorSettings && this.indoorEnvironment.validate() &&
            this.outdoorEnvironment && this.outdoorEnvironment instanceof EnvironmentSensorSettings && this.outdoorEnvironment.validate()
        );
    }
}

export class PeripheralSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const input = InputPeripheralSettings.fromPlainTree(plainTree.input);
        const output = OutputPeripheralSettings.fromPlainTree(plainTree.output);
        return new PeripheralSettings(input, output);

    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            input: this.input.toPlainTree(),
            output: this.output.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        input = new InputPeripheralSettings(),
        output = new OutputPeripheralSettings(),
    ) {
        super();
        this.input = input;
        this.output = output;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.input && this.input instanceof InputPeripheralSettings && this.input.validate() &&
            this.output && this.output instanceof OutputPeripheralSettings && this.output.validate()
        );
    }
}
export class InputPeripheralSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const extender = PeripheralExtenderSettings.fromPlainTree(plainTree.extender);
        return new InputPeripheralSettings(extender);

    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            extender: this.extender.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        extender = new PeripheralExtenderSettings(),
    ) {
        super();
        this.extender = extender;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.extender && this.extender instanceof PeripheralExtenderSettings && this.extender.validate()
        );
    }
}
export class OutputPeripheralSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const extender = PeripheralExtenderSettings.fromPlainTree(plainTree.extender);
        const relay = OutputPeripheralRelaySettings.fromPlainTree(plainTree.relay);
        return new OutputPeripheralSettings(extender, relay);

    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            extender: this.extender.toPlainTree(),
            relay: this.relay.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        extender = new PeripheralExtenderSettings(),
        relay = new OutputPeripheralRelaySettings(),
    ) {
        super();
        this.extender = extender;
        this.relay = relay;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.extender && this.extender instanceof PeripheralExtenderSettings && this.extender.validate() &&
            this.relay && this.relay instanceof OutputPeripheralRelaySettings && this.relay.validate()
        );
    }
}

export class PeripheralExtenderSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const isEnabled = plainTree.isEnabled;
        const dataAHardwarePin = HardwarePin.fromPlainTree(plainTree.dataAHardwarePin);
        const dataBHardwarePin = HardwarePin.fromPlainTree(plainTree.dataBHardwarePin);
        const dataCHardwarePin = HardwarePin.fromPlainTree(plainTree.dataCHardwarePin);
        const capacity = plainTree.capacity;
        return new PeripheralExtenderSettings(isEnabled, dataAHardwarePin, dataBHardwarePin, dataCHardwarePin, capacity);

    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            isEnabled: this.isEnabled,
            dataAHardwarePin: this.dataAHardwarePin.toPlainTree(),
            dataBHardwarePin: this.dataBHardwarePin.toPlainTree(),
            dataCHardwarePin: this.dataCHardwarePin.toPlainTree(),
            capacity: this.capacity,
        }
        return plainTree;
    }
    constructor(
        isEnabled = false,
        dataAHardwarePin = new HardwarePin(14),
        dataBHardwarePin = new HardwarePin(15),
        dataCHardwarePin = new HardwarePin(16),
        capacity = 1,
    ) {
        super();
        this.isEnabled = isEnabled;
        this.dataAHardwarePin = dataAHardwarePin;
        this.dataBHardwarePin = dataBHardwarePin;
        this.dataCHardwarePin = dataCHardwarePin;
        this.capacity = capacity;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            typeof this.isEnabled === 'boolean' &&
            this.dataAHardwarePin && this.dataAHardwarePin instanceof HardwarePin && this.dataAHardwarePin.validate() &&
            this.dataBHardwarePin && this.dataBHardwarePin instanceof HardwarePin && this.dataBHardwarePin.validate() &&
            this.dataCHardwarePin && this.dataCHardwarePin instanceof HardwarePin && this.dataCHardwarePin.validate() &&
            typeof this.capacity === 'number' && this.capacity > 0 && this.capacity <= 64
        );
    }
}

export class OutputPeripheralRelaySettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const light = OutputPeripheralRelayChannelSettings.fromPlainTree(plainTree.light);
        const fan = OutputPeripheralRelayChannelSettings.fromPlainTree(plainTree.fan);
        const water = OutputPeripheralRelayChannelSettings.fromPlainTree(plainTree.water);
        const heater = OutputPeripheralRelayChannelSettings.fromPlainTree(plainTree.heater);
        const vaporizer = OutputPeripheralRelayChannelSettings.fromPlainTree(plainTree.vaporizer);
        return new OutputPeripheralRelaySettings(light, fan, water, heater, vaporizer);

    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            light: this.light.toPlainTree(),
            fan: this.fan.toPlainTree(),
            water: this.water.toPlainTree(),
            heater: this.heater.toPlainTree(),
            vaporizer: this.vaporizer.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        light = new OutputPeripheralRelayChannelSettings(),
        fan = new OutputPeripheralRelayChannelSettings(),
        water = new OutputPeripheralRelayChannelSettings(),
        heater = new OutputPeripheralRelayChannelSettings(),
        vaporizer = new OutputPeripheralRelayChannelSettings(),
    ) {
        super();
        this.light = light;
        this.fan = fan;
        this.water = water;
        this.heater = heater;
        this.vaporizer = vaporizer;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.light && this.light instanceof OutputPeripheralRelayChannelSettings && this.light.validate() &&
            this.fan && this.fan instanceof OutputPeripheralRelayChannelSettings && this.fan.validate() &&
            this.water && this.water instanceof OutputPeripheralRelayChannelSettings && this.water.validate() &&
            this.heater && this.heater instanceof OutputPeripheralRelayChannelSettings && this.heater.validate() &&
            this.vaporizer && this.vaporizer instanceof OutputPeripheralRelayChannelSettings && this.vaporizer.validate()
        );
    }
}

export class OutputPeripheralRelayChannelSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const isEnabled = plainTree.isEnabled;
        const dataSmartOutputPin = SmartOutputPin.fromPlainTree(plainTree.dataSmartOutputPin);
        return new OutputPeripheralRelayChannelSettings(isEnabled, dataSmartOutputPin);

    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            isEnabled: this.isEnabled,
            dataSmartOutputPin: this.dataSmartOutputPin.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        isEnabled = false,
        dataSmartOutputPin = new SmartOutputPin('raw', 14),
    ) {
        super();
        this.isEnabled = isEnabled;
        this.dataSmartOutputPin = dataSmartOutputPin;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            typeof this.isEnabled === 'boolean' &&
            this.dataSmartOutputPin && this.dataSmartOutputPin instanceof SmartOutputPin && this.dataSmartOutputPin.validate()
        );
    }
}

export class WebInterfaceSettings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        return new WebInterfaceSettings(plainTree.isVerbose, plainTree.liveApiDelay, plainTree.liveApiFailDelay);
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            isVerbose: this.isVerbose,
            liveApiDelay: this.liveApiDelay,
            liveApiFailDelay: this.liveApiFailDelay,
        }
        return plainTree;
    }
    constructor(
        isVerbose = true,
        liveApiDelay = 500,
        liveApiFailDelay = 5000,
    ) {
        super();
        this.isVerbose = isVerbose;
        this.liveApiDelay = liveApiDelay;
        this.liveApiFailDelay = liveApiFailDelay;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            typeof this.isVerbose === 'boolean' &&
            typeof this.liveApiDelay === 'number' && this.liveApiDelay >= 0 && this.liveApiDelay <= 60000 &&
            typeof this.liveApiFailDelay === 'number' && this.liveApiFailDelay >= 5000 && this.liveApiFailDelay <= 60000 &&
            this.liveApiDelay < this.liveApiFailDelay
        );
    }
}

export class Settings extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const light = LightSettings.fromPlainTree(plainTree.light);
        const fan = FanSettings.fromPlainTree(plainTree.fan);
        const water = WaterSettings.fromPlainTree(plainTree.water);
        const heater = HeaterSettings.fromPlainTree(plainTree.heater);
        const vaporizer = VaporizerSettings.fromPlainTree(plainTree.vaporizer);
        const power = PowerSettings.fromPlainTree(plainTree.power);
        const time = TimeSettings.fromPlainTree(plainTree.time);
        const wifi = WifiSettings.fromPlainTree(plainTree.wifi);
        const webInterface = WebInterfaceSettings.fromPlainTree(plainTree.webInterface);
        return new Settings(
            light,
            fan,
            water,
            heater,
            vaporizer,
            power,
            time,
            wifi,
            webInterface,
        );
    }
    toPlainTree() {
        const lightPlainTree = this.light.toPlainTree();
        const fanPlainTree = this.fan.toPlainTree();
        const waterPlainTree = this.water.toPlainTree();
        const heaterPlainTree = this.heater.toPlainTree();
        const vaporizerPlainTree = this.vaporizer.toPlainTree();
        const powerPlainTree = this.power.toPlainTree();
        const timePlainTree = this.time.toPlainTree();
        const wifiPlainTree = this.wifi.toPlainTree();
        const webInterfacePlainTree = this.webInterface.toPlainTree();

        const plainTree = {
            light: lightPlainTree,
            fan: fanPlainTree,
            water: waterPlainTree,
            heater: heaterPlainTree,
            vaporizer: vaporizerPlainTree,
            power: powerPlainTree,
            time: timePlainTree,
            wifi: wifiPlainTree,
            webInterface: webInterfacePlainTree,
        }

        return plainTree;
    }
    constructor(
        light = new LightSettings(),
        fan = new FanSettings(),
        water = new WaterSettings(),
        heater = new HeaterSettings(),
        vaporizer = new VaporizerSettings(),
        power = new PowerSettings(),
        time = new TimeSettings(),
        wifi = new WifiSettings(),
        webInterface = new WebInterfaceSettings(),
    ) {
        super();
        this.light = light;
        this.fan = fan;
        this.water = water;
        this.heater = heater;
        this.vaporizer = vaporizer;
        this.power = power;
        this.time = time;
        this.wifi = wifi;
        this.webInterface = webInterface;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.light && this.light instanceof LightSettings && this.light.validate() &&
            this.fan && this.fan instanceof FanSettings && this.fan.validate() &&
            this.water && this.water instanceof WaterSettings && this.water.validate() &&
            this.heater && this.heater instanceof HeaterSettings && this.heater.validate() &&
            this.vaporizer && this.vaporizer instanceof VaporizerSettings && this.vaporizer.validate() &&
            this.power && this.power instanceof PowerSettings && this.power.validate() &&
            this.time && this.time instanceof TimeSettings && this.time.validate() &&
            this.wifi && this.wifi instanceof WifiSettings && this.wifi.validate() &&
            this.webInterface && this.webInterface instanceof WebInterfaceSettings && this.webInterface.validate()
        );
    }
}

export class BasicStats extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const environment = EnvironmentReadingsStatsSection.fromPlainTree(plainTree.environment);
        const relay = RelayStateStatsSection.fromPlainTree(plainTree.relay);
        const time = TimeTelemetryStatsSection.fromPlainTree(plainTree.time);
        return new BasicStats(
            environment,
            relay,
            time,
        );
    }
    toPlainTree() {
        // old strict assert: this.assert();
        const plainTree = {
            environment: this.environment.toPlainTree(),
            relay: this.relay.toPlainTree(),
            time: this.time.toPlainTree(),
        }
        return plainTree;
    }
    constructor(
        environment = new EnvironmentReadingsStatsSection(),
        relay = new RelayStateStatsSection(),
        time = new TimeTelemetryStatsSection(),
        ) {
        super();
        this.environment = environment;
        this.relay = relay;
        this.time = time;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.environment && this.environment instanceof EnvironmentReadingsStatsSection && this.environment.validate() &&
            this.relay && this.relay instanceof RelayStateStatsSection && this.relay.validate() &&
            this.time && this.time instanceof TimeTelemetryStatsSection && this.time.validate()
        );
    }
}
export class Stats extends AbstractAssertable {
    static fromPlainTree(plainTree) {
        const basic = BasicStats.fromPlainTree(plainTree.basic);
        return new Settings(
            basic,
        );
    }
    toPlainTree() {
        const basicPlainTree = this.basic.toPlainTree();

        const plainTree = {
            basic: basicPlainTree,
        }

        return plainTree;
    }
    constructor(
        basic = new BasicStats(),
    ) {
        super();
        this.basic = basic;
        // old strict assert: this.assert();
    }
    validate() {
        return (
            this.basic && this.basic instanceof BasicStats && this.basic.validate()
        );
    }
}