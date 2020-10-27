'use strict';

import {
    LightSettings,
    FanSettings,
    WaterSettings,
    HeaterSettings,
    VaporizerSettings,
    PowerSettings,
    TimeSettings,
    WifiSettings,
    PinSettings,
    SensorSettings,
    PeripheralSettings,
    //WebInterfaceSettings,
    BasicStats
} from './crossplatform/assertable.js';

export class ClientRestApi {
    async getLightSettings() {
        const response = await fetch('/rpc/getLightSettings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: null,
        });
        const plainTree = await response.json();
        const lightSettings = LightSettings.fromPlainTree(plainTree);
        lightSettings.assert();
        return lightSettings;
    }
    async getFanSettings() {
        const response = await fetch('/rpc/getFanSettings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: null,
        });
        const plainTree = await response.json();
        const fanSettings = FanSettings.fromPlainTree(plainTree);
        fanSettings.assert();
        return fanSettings;
    }
    async getWaterSettings() {
        const response = await fetch('/rpc/getWaterSettings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: null,
        });
        const plainTree = await response.json();
        const waterSettings = WaterSettings.fromPlainTree(plainTree);
        waterSettings.assert();
        return waterSettings;
    }
    async getHeaterSettings() {
        const response = await fetch('/rpc/getHeaterSettings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: null,
        });
        const plainTree = await response.json();
        const heaterSettings = HeaterSettings.fromPlainTree(plainTree);
        heaterSettings.assert();
        return heaterSettings;
    }
    async getVaporizerSettings() {
        const response = await fetch('/rpc/getVaporizerSettings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: null,
        });
        const plainTree = await response.json();
        const vaporizerSettings = VaporizerSettings.fromPlainTree(plainTree);
        vaporizerSettings.assert();
        return vaporizerSettings;
    }
    async getPowerSettings() {
        const response = await fetch('/rpc/getPowerSettings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: null,
        });
        const plainTree = await response.json();
        const powerSettings = PowerSettings.fromPlainTree(plainTree);
        powerSettings.assert();
        return powerSettings;
    }
    async getTimeSettings() {
        const response = await fetch('/rpc/getTimeSettings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: null,
        });
        const plainTree = await response.json();
        const timeSettings = TimeSettings.fromPlainTree(plainTree);
        timeSettings.assert();
        return timeSettings;
    }
    async getWifiSettings() {
        const response = await fetch('/rpc/getWifiSettings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: null,
        });
        const plainTree = await response.json();
        const wifiSettings = WifiSettings.fromPlainTree(plainTree);
        wifiSettings.assert();
        return wifiSettings;
    }
    async getPinSettings() {
        const response = await fetch('/rpc/getPinSettings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: null,
        });
        const plainTree = await response.json();
        const pinSettings = PinSettings.fromPlainTree(plainTree);
        pinSettings.assert();
        return pinSettings;
    }
    async getSensorSettings() {
        const response = await fetch('/rpc/getSensorSettings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: null,
        });
        const plainTree = await response.json();
        const sensorSettings = SensorSettings.fromPlainTree(plainTree);
        sensorSettings.assert();
        return sensorSettings;
    }
    async getPeripheralSettings() {
        const response = await fetch('/rpc/getPeripheralSettings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: null,
        });
        const plainTree = await response.json();
        const peripheralSettings = PeripheralSettings.fromPlainTree(plainTree);
        peripheralSettings.assert();
        return peripheralSettings;
    }
    async getBasicStats() {
        const response = await fetch('/rpc/getBasicStats', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: null,
        });
        const plainTree = await response.json();
        const basicStats = BasicStats.fromPlainTree(plainTree);
        basicStats.assert();
        return basicStats;
    }
    async setLightSettings(lightSettings) {
        lightSettings.assert();
        const plainTree = lightSettings.toPlainTree();
        const plainTreeJson = JSON.stringify(plainTree);
        await fetch('/rpc/setLightSettings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: plainTreeJson,
        });
    }
    async setFanSettings(fanSettings) {
        fanSettings.assert();
        const plainTree = fanSettings.toPlainTree();
        const plainTreeJson = JSON.stringify(plainTree);
        await fetch('/rpc/setFanSettings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: plainTreeJson,
        });
    }
    async setWaterSettings(waterSettings) {
        waterSettings.assert();
        const plainTree = waterSettings.toPlainTree();
        const plainTreeJson = JSON.stringify(plainTree);
        await fetch('/rpc/setWaterSettings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: plainTreeJson,
        });
    }
    async setHeaterSettings(heaterSettings) {
        heaterSettings.assert();
        const plainTree = heaterSettings.toPlainTree();
        const plainTreeJson = JSON.stringify(plainTree);
        await fetch('/rpc/setHeaterSettings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: plainTreeJson,
        });
    }
    async setVaporizerSettings(vaporizerSettings) {
        vaporizerSettings.assert();
        const plainTree = vaporizerSettings.toPlainTree();
        const plainTreeJson = JSON.stringify(plainTree);
        await fetch('/rpc/setVaporizerSettings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: plainTreeJson,
        });
    }
    async setPowerSettings(powerSettings) {
        powerSettings.assert();
        const plainTree = powerSettings.toPlainTree();
        const plainTreeJson = JSON.stringify(plainTree);
        await fetch('/rpc/setPowerSettings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: plainTreeJson,
        });
    }
    async setTimeSettings(timeSettings) {
        timeSettings.assert();
        const plainTree = timeSettings.toPlainTree();
        const plainTreeJson = JSON.stringify(plainTree);
        await fetch('/rpc/setTimeSettings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: plainTreeJson,
        });
    }
    async setWifiSettings(wifiSettings) {
        wifiSettings.assert();
        const plainTree = wifiSettings.toPlainTree();
        const plainTreeJson = JSON.stringify(plainTree);
        await fetch('/rpc/setWifiSettings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: plainTreeJson,
        });
    }
    async setPinSettings(pinSettings) {
        pinSettings.assert();
        const plainTree = pinSettings.toPlainTree();
        const plainTreeJson = JSON.stringify(plainTree);
        await fetch('/rpc/setPinSettings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: plainTreeJson,
        });
    }
    async setSensorSettings(sensorSettings) {
        sensorSettings.assert();
        const plainTree = sensorSettings.toPlainTree();
        const plainTreeJson = JSON.stringify(plainTree);
        await fetch('/rpc/setSensorSettings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: plainTreeJson,
        });
    }
    async setPeripheralSettings(peripheralSettings) {
        peripheralSettings.assert();
        const plainTree = peripheralSettings.toPlainTree();
        const plainTreeJson = JSON.stringify(plainTree);
        await fetch('/rpc/setPeripheralSettings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: plainTreeJson,
        });
    }
}
