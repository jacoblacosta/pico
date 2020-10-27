let firmware = {
    innerDhtGpioPinIdx: 14,
    outerDhtGpioPinIdx: 15,
    halTestCfg: undefined,
    clearHalTestCfg: function() {
        this.halTestCfg = {
            stage: 0,
            halTestPassesCount: 0,
            halTestErrorsCount: 0
        };
    },


    logInfo: function(prefix, message) {
        hal.logString(prefix + ': ' + message);
    },
    logMem: function() {
        hal.logString('MEMSTAT: FREE ' + JSON.stringify(hal.sys.getFreeRam()) + ' of ' + JSON.stringify(hal.sys.getTotalRam()) + ' (' + JSON.stringify(Math.floor(hal.sys.getFreeRam() / hal.sys.getTotalRam() * 100)) + '%)');
    },
    logTestPass: function(prefix, message) {
        this.halTestCfg.halTestPassesCount++;
        hal.logString('[ V ] TEST PASS | ' + JSON.stringify(this.halTestCfg.halTestPassesCount) + ' - ' + JSON.stringify(this.halTestCfg.halTestErrorsCount) +' | ' + prefix);
        hal.logString('      ' + message);
    },
    logTestError: function(prefix, message) {
        this.halTestCfg.halTestErrorsCount++;
        hal.logString('[ X ] TEST ERROR | ' + JSON.stringify(this.halTestCfg.halTestPassesCount) + ' - ' + JSON.stringify(this.halTestCfg.halTestErrorsCount) +' | ' + prefix);
        hal.logString('      ' + message);
    },

    pretestLogString: function() {
        let testLogPrefix = 'hal.logString';
        hal.logString('prettesting hal.logString: you must see this string printed in console');
        this.logTestPass(testLogPrefix, 'logString at least not faliled on run and looks like in works');
    },

    pretestCfg: function() {
        let testLogPrefix = 'hal.cfg';

        let someRandomText = '12345-just-a-test';
        let halTestJson = hal.cfg.get('halTestJson');
        hal.cfg.set({ halTestJson : someRandomText });
        let someRandomFromCfg = hal.cfg.get('halTestJson');
        hal.cfg.set({ halTestJson : halTestJson });

        if (someRandomFromCfg === someRandomText) {
            this.logTestPass(testLogPrefix, 'cfg can store and return values');
        } else {
            this.logTestError(testLogPrefix, 'cfg does not return same value that is putted before');
        }

    },
    pretest: function() {
        this.pretestLogString();
        this.pretestCfg();
    },

    scheduleNextTest: function() {
        let stageHumanReadableNumber = (this.halTestCfg.stage + 1);
        this.logInfo('reboot scheduller', 'next test stage ' + JSON.stringify(stageHumanReadableNumber) + ' scheduled');
        this.logMem();
        this.banner.drawRebootBanner(hal);
        hal.restart();
    },
    saveHalTestCfgToHalTestJson: function() {
        let halTestCfgJson = JSON.stringify(this.halTestCfg);
        hal.cfg.set({ halTestJson: halTestCfgJson });
    },
    loadOrCreateHalTestCfgFromHalTestJson: function() {
        let halTestCfgJson = hal.cfg.get('halTestJson');
        if (halTestCfgJson) {
            this.halTestCfg = JSON.parse(halTestCfgJson);
        } else {
            this.clearHalTestCfg();
        }
    },
    testStageAutomate: function() {
        this.loadOrCreateHalTestCfgFromHalTestJson();
        let stageHumanReadableNumber = (this.halTestCfg.stage + 1);
        let isLast = this.halTestCfg.stage === (this.testStages.length - 1);
        let isFirst = !this.halTestCfg.stage;
        if (isFirst) {
            hal.logString('=================== PRETEST ====================');
            this.pretest();
        }
        hal.logString('================= STAGE ' + JSON.stringify(stageHumanReadableNumber) + ' OF ' + JSON.stringify(this.testStages.length) + ' =================');
        this.logMem();
        let testStage = this.testStages[this.halTestCfg.stage];
        let that = this;
        let endCallback;
        if (isLast) {
            endCallback = function() {
                let endFinalCallback = function() {
                    that.clearHalTestCfg();
                    that.saveHalTestCfgToHalTestJson();
                    let isInfinteMode = true;
                    if (isInfinteMode) {
                        that.logInfo('test-suite looper', 'NOW WILL CLEANUP AND RESTART FROM FIRST STAGE');
                        that.scheduleNextTest();
                    } else {
                        that.logInfo('test-suite ender', 'NOW WILL CLEANUP AND RESTART FROM FIRST STAGE');
                        that.banner.drawSutdownBanner(hal);
                        hal.shutdown();
                    }
                };
                that.testStageFinal(endFinalCallback);
            };
        } else {
            endCallback = function() {
                that.halTestCfg.stage++;
                that.saveHalTestCfgToHalTestJson();
                that.scheduleNextTest();
            };
        }
        testStage(this, endCallback);
    },

    testStages: [
        function testStage1(firmware, endCallback) {
            firmware.testGetCurrentInternalSeconds();
            firmware.testWifiStationConfig();
            firmware.testWifiAccessPointConfig();
            endCallback();
        },
        function testStage2(firmware, endCallback) {
            firmware.testSensorInnerDhtInit();
            firmware.testSensorInnerDhtRead();
            firmware.testSensorOuterDhtInit();
            firmware.testSensorOuterDhtRead();
            firmware.testTimer(endCallback);
        },
        function testStage3(firmware, endCallback) {
            firmware.testRpc(endCallback);
        },
    ],
    testGetCurrentInternalSeconds: function() {
        let testLogPrefix = 'hal.getCurrentInternalSeconds';
        let currentInternalSecondsBefore = hal.getCurrentInternalSeconds();
        let dummyPayload = 0;
        for (let i = 0; i < 100000; i++) {
            dummyPayload += Math.log(i);
            let currentInternalSecondsAfter = hal.getCurrentInternalSeconds();
            let currentInternalSecondsDiff = currentInternalSecondsAfter - currentInternalSecondsBefore;
            if (currentInternalSecondsDiff !== 0) {
                if (currentInternalSecondsDiff > 0 && currentInternalSecondsDiff < 0.5) {
                    this.logTestPass(testLogPrefix, 'timer is good');
                } else {
                    this.logTestError(testLogPrefix, 'timer is bad');
                }
                return;
            }
        }
        this.logTestError(testLogPrefix, 'timer is bad');

    },
    testWifiStationConfig: function() {
        let testLogPrefix = 'hal.wifi.getConfig';
        hal.wifi.setStationConfig('azaza', '12345678', true);
        let stationConfig = hal.wifi.getStationConfig();
        if (stationConfig) {
            let isSsidSame = stationConfig.ssid === 'azaza';
            if (!isSsidSame) {
                this.logTestError(testLogPrefix, 'station ssid not same that was set just before');
            }
            let isPasswordSame = stationConfig.password === '12345678';
            if (!isPasswordSame) {
                this.logTestError(testLogPrefix, 'station password not same that was set just before');
            }
            if (isSsidSame && isPasswordSame) {
                this.logTestPass(testLogPrefix, 'station password and ssid can be set and received');
            }
            if (stationConfig.isEnabled) {
                this.logTestPass(testLogPrefix, 'wifi station is enabled');
            } else {
                this.logTestError(testLogPrefix, 'wifi station is not enabled');
            }
        } else {
            this.logTestError(testLogPrefix, 'no wifi station config object returned');
        }
    },
    testWifiAccessPointConfig: function() {
        let testLogPrefix = 'hal.wifi.getConfig';
        hal.wifi.setAccessPointConfig('hello', '87654321', false);
        let accessPointConfig = hal.wifi.getAccessPointConfig();
        if (accessPointConfig) {
            let isSsidSame = accessPointConfig.ssid === 'hello';
            if (!isSsidSame) {
                this.logTestError(testLogPrefix, 'access point ssid not same that was set just before');
            }
            let isPasswordSame = accessPointConfig.password === '87654321';
            if (!isPasswordSame) {
                this.logTestError(testLogPrefix, 'access point password not same that was set just before');
            }
            if (isSsidSame && isPasswordSame) {
                this.logTestPass(testLogPrefix, 'access point password and ssid can be set and received');
            }
            if (!accessPointConfig.isEnabled) {
                this.logTestPass(testLogPrefix, 'wifi access point is disabled');
            } else {
                this.logTestError(testLogPrefix, 'wifi access point is not disabled');
            }
        } else {
            this.logTestError(testLogPrefix, 'no wifi access point config object returned');
        }
    },
    testSensorInnerDhtInit: function() {
        let testLogPrefix = 'hal.sensor.innerDht.init';

        let badInitState = hal.sensor.innerDht.init(99);
        if (!badInitState) {
            this.logTestPass(testLogPrefix, 'init innerDht on pin 99 returns false');
        } else {
            this.logTestError(testLogPrefix, 'init innerDht on pin 99 does not return false');
        }

        let goodInitState = hal.sensor.innerDht.init(this.innerDhtGpioPinIdx);
        if (goodInitState) {
            this.logTestPass(testLogPrefix, 'init innerDht on pin ' + JSON.stringify(this.innerDhtGpioPinIdx) + ' returns true');
        } else {
            this.logTestError(testLogPrefix, 'init innerDht on pin ' + JSON.stringify(this.innerDhtGpioPinIdx) + ' does not return true');
        }
    },

    testSensorInnerDhtRead: function() {
        let testLogPrefix = 'hal.sensor.innerDht.read';
        hal.sensor.innerDht.init(this.innerDhtGpioPinIdx);
        let indoorTemperatureAndHumidity = hal.sensor.innerDht.read();
        if (indoorTemperatureAndHumidity) {
            if (indoorTemperatureAndHumidity.indoorTemperature === null || indoorTemperatureAndHumidity.indoorTemperature === undefined) {
                this.logTestError(testLogPrefix, 'read innerDht does not returns not an object with .indoorTemperature field');
            }
            if (indoorTemperatureAndHumidity.indoorHumidity === null || indoorTemperatureAndHumidity.indoorHumidity === undefined) {
                this.logTestError(testLogPrefix, 'read innerDht does not returns not an object with .indoorHumidity field');
            }

            if (indoorTemperatureAndHumidity.indoorTemperature === 0 || indoorTemperatureAndHumidity.indoorHumidity === 0) {
                this.logTestError(testLogPrefix, 'read innerDht gets perfect zero value, it is strange');
            }

            let isIndoorTemperatureOk = (indoorTemperatureAndHumidity.indoorTemperature > -50 && indoorTemperatureAndHumidity.indoorTemperature < 50);
            let isIndoorHumidityOk = (indoorTemperatureAndHumidity.indoorTemperature > -50 && indoorTemperatureAndHumidity.indoorTemperature < 50);

            if (isIndoorTemperatureOk && isIndoorHumidityOk) {
                this.logTestPass(testLogPrefix, 'read innerDht get good {indoorTemperature, indoorHumidity} object and values are looks natural');
            } else {
                this.logTestError(testLogPrefix, 'read innerDht get {indoorTemperature, indoorHumidity} object and values are NOT looks natural');
            }
        } else {
            this.logTestError(testLogPrefix, 'read innerDht returns not an object');
        }
    },

    testSensorOuterDhtInit: function() {
        let testLogPrefix = 'hal.sensor.outerDht.init';

        let badInitState = hal.sensor.outerDht.init(99);
        if (!badInitState) {
            this.logTestPass(testLogPrefix, 'init outerDht on pin 99 returns false');
        } else {
            this.logTestError(testLogPrefix, 'init outerDht on pin 99 does not return false');
        }

        let goodInitState = hal.sensor.outerDht.init(this.outerDhtGpioPinIdx);
        if (goodInitState) {
            this.logTestPass(testLogPrefix, 'init outerDht on pin ' + JSON.stringify(this.outerDhtGpioPinIdx) + ' returns true');
        } else {
            this.logTestError(testLogPrefix, 'init outerDht on pin ' + JSON.stringify(this.outerDhtGpioPinIdx) + ' does not return true');
        }
    },

    testSensorOuterDhtRead: function() {
        let testLogPrefix = 'hal.sensor.outerDht.read';
        hal.sensor.outerDht.init(this.outerDhtGpioPinIdx);
        let outdoorTemperatureAndHumidity = hal.sensor.outerDht.read();
        if (outdoorTemperatureAndHumidity) {
            if (outdoorTemperatureAndHumidity.outdoorTemperature === null || outdoorTemperatureAndHumidity.outdoorTemperature === undefined) {
                this.logTestError(testLogPrefix, 'read outerDht does not returns not an object with .outdoorTemperature field');
            }
            if (outdoorTemperatureAndHumidity.outdoorHumidity === null || outdoorTemperatureAndHumidity.outdoorHumidity === undefined) {
                this.logTestError(testLogPrefix, 'read outerDht does not returns not an object with .outdoorHumidity field');
            }

            if (outdoorTemperatureAndHumidity.outdoorTemperature === 0 || outdoorTemperatureAndHumidity.outdoorHumidity === 0) {
                this.logTestError(testLogPrefix, 'read outerDht gets perfect zero value, it is strange');
            }

            let isOutdoorTemperatureOk = (outdoorTemperatureAndHumidity.outdoorTemperature > -50 && outdoorTemperatureAndHumidity.outdoorTemperature < 50);
            let isOutdoorHumidityOk = (outdoorTemperatureAndHumidity.outdoorTemperature > -50 && outdoorTemperatureAndHumidity.outdoorTemperature < 50);

            if (isOutdoorTemperatureOk && isOutdoorHumidityOk) {
                this.logTestPass(testLogPrefix, 'read outerDht get good {outdoorTemperature, outdoorHumidity} object and values are looks natural');
            } else {
                this.logTestError(testLogPrefix, 'read outerDht get {outdoorTemperature, outdoorHumidity} object and values are NOT looks natural');
            }
        } else {
            this.logTestError(testLogPrefix, 'read outerDht returns not an object');
        }
    },

    testTimer: function(endCallback) {
        let userdata = {};
        userdata.testLogPrefix = 'hal.timer';
        userdata.repeatedCounter = 0;
        userdata.isOneshotFired = false;
        userdata.isNeverFiredFired = false;
        userdata.endCallback = endCallback;
        userdata.that = this;
        userdata.repeatedTimerId = undefined;
        let oneshotCallback = function (userdata) {
            let that = userdata.that;
            userdata.isOneshotFired = true;
            if (userdata.repeatedCounter > 20) {
                this.logTestError(userdata.testLogPrefix, 'repeated-loop runs more then 20 times (each of 100 msec), while 1 sec oneshot fires only once, it it stange');
            } else if (userdata.repeatedCounter < 1) {
                that.logTestError(userdata.testLogPrefix, 'repeated-loop does not run for more then 1 seconds');
            } else {
                that.logTestPass(userdata.testLogPrefix, 'repeated mode during one onshot works well and natural');
            }
        };
        let repeatedCallback = function (userdata) {
            let that = userdata.that;
            userdata.repeatedCounter++;
            if (userdata.repeatedCounter === 30) {
                hal.timer.remove(userdata.repeatedTimerId);
                if (!userdata.isOneshotFired) {
                    that.logTestError(userdata.testLogPrefix, 'repeated-loop does not run for more then 1 seconds');
                } if (userdata.isNeverFiredFired) {
                    that.logTestError(userdata.testLogPrefix, 'oneshot timer was not canceled');
                } else {
                    that.logTestPass(userdata.testLogPrefix, 'oneshot and repeated mode works well');
                }
                userdata.endCallback();
            }
        };
        let neverFiredCallback = function (userdata) {
            let that = userdata.that;
            userdata.isNeverFiredFired = true;
        };

        hal.timer.add(1000, false, oneshotCallback, userdata);
        userdata.repeatedTimerId = hal.timer.add(100, true, repeatedCallback, userdata);
        let neverFiredOneshotTimerId = hal.timer.add(10, false, neverFiredCallback, userdata);
        hal.timer.remove(neverFiredOneshotTimerId);
    },


    testRpc: function(endTestCallback) {
        let userdata = {};
        userdata.testLogPrefix = 'hal.rpc';
        userdata.endTestCallback = endTestCallback;
        userdata.isRpcCallWasAnswered = false;
        userdata.that = this;

        let rpcCallback = function (response, errorCode, errorMessage, userdata) {
                let that = userdata.that;
                userdata.isRpcCallWasAnswered = true;
                if (errorCode === null) {
                    that.logTestPass(userdata.testLogPrefix, 'rpc call returns no error');
                } else {
                    that.logTestError(userdata.testLogPrefix, 'rpc call has non-null errorCode');
                };
                if (response === 321) {
                    that.logTestPass(userdata.testLogPrefix, 'rpc can register callback and then call in locally');
                } else {
                    that.logTestError(userdata.testLogPrefix, 'rpc returns unexpected result (must be 321)');
                };
                if (userdata.isTimeoutHappends === true) {
                    that.logTestError(userdata.testLogPrefix, 'rpc does answer to call, but did it too late (more then 1 sec)');
                } else {
                    userdata.endTestCallback();
                };
            };

            let timeoutCallback = function (userdata) {
                userdata.isTimeoutHappends = true;
                if (userdata.isRpcCallWasAnswered === false) {
                    that.logTestError(userdata.testLogPrefix, 'looks like that rpc does not answer to call for more then 1 sec');
                    userdata.endTestCallback();
                }
            };
            let rpcImplementation = function() {
                return 321;
            };

            hal.rpc.registerCallback('HalTest.Get321', rpcImplementation);
            hal.rpc.call('HalTest.Get321', false, rpcCallback, userdata);
            hal.timer.add(1000, false, timeoutCallback, userdata);
    },




    ratioToPercentString: function(ratio) {
        return JSON.stringify(Math.floor(ratio * 100)) + '%';
    },
    testStageFinal: function(endCallback) {
        let halTestAssertsCount = this.halTestCfg.halTestPassesCount + this.halTestCfg.halTestErrorsCount;
        hal.logString('################################################');
        hal.logString('                 F  I  N  A  L                  ');
        hal.logString('################################################');

        if (halTestAssertsCount) {
            let stageHumanReadableNumber = (this.halTestCfg.stage + 1);
            let passRatio = this.halTestCfg.halTestPassesCount / halTestAssertsCount;
            this.smile.drawSmile(hal, passRatio);
            hal.logString('------------------------------------------------');
            this.logInfo('final', 'Total stages: ' + JSON.stringify(stageHumanReadableNumber));
            this.logInfo('final', '');
            this.logInfo('final', 'Test passes: ' + JSON.stringify(this.halTestCfg.halTestPassesCount) + ' of ' + JSON.stringify(halTestAssertsCount) + ' (' + this.ratioToPercentString(this.halTestCfg.halTestPassesCount/halTestAssertsCount) +')');
            this.logInfo('final', 'Test errors: ' + JSON.stringify(this.halTestCfg.halTestErrorsCount) + ' of ' + JSON.stringify(halTestAssertsCount) + ' (' + this.ratioToPercentString(this.halTestCfg.halTestErrorsCount/halTestAssertsCount) +')');
        } else {
            this.logInfo('final', 'WARNING NO ASSERTS PLANNED');
        }
        hal.logString('################################################');
        let coundownUserdata = {
            secondsToReboot: 3,
            that: this,
            countdownCallback: undefined,
            endCallback: endCallback,
        };
        function countdownCallback(userdata) {
            let that = userdata.that;
            if (userdata.secondsToReboot === 0) {
                userdata.endCallback();
            } else {
                hal.timer.add(1000, false, userdata.countdownCallback, userdata);
            }
            that.logInfo('final', 'will reboot in ' + JSON.stringify(userdata.secondsToReboot) + ' seconds...');
            userdata.secondsToReboot--;
        }
        coundownUserdata.countdownCallback = countdownCallback;

        hal.timer.add(15000, false, countdownCallback, coundownUserdata);
    },
    start: function() {
        this.banner.drawStartBanner(hal);
        this.clearHalTestCfg();
        this.testStageAutomate();
    },
};

firmware.smile = require('./smile.js');
firmware.banner = require('./banner.js');
module.exports = firmware;