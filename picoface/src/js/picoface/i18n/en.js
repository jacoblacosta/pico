export const i18n = {
    splash: {
        saved: 'saved',
    },
    widgetElement: {
        manualOverride: {
            auto: 'auto',
            manualOn: 'on',
            manualOff: 'off',
        },
        boolean: {
            yes: 'yes',
            no: 'no',
        },
        footer: {
            caption: 'powered by picochip ver. ' + prebundled.version.picochip,
            comment: 'via picoface ver. ' + prebundled.version.picoface,
        },
    },
    widget: {
        index: {
            title: {
                caption: 'all settings',
            },
            automation: {
                caption: 'automation settings',
                comment: 'regular settings and duty schemas: timers, thresholds an so on',
                lightSettings: {
                    caption: 'light settings',
                    comment: 'light duty schema: timer, indoor temperature threshold',
                },
                fanSettings: {
                    caption: 'fan settings',
                    comment: 'fan duty schema: timer, indoor temperature threshold',
                },
                waterSettings: {
                    caption: 'water settings',
                    comment: 'water duty schema: timer, periodic control',
                },
                heaterSettings: {
                    caption: 'heater settings',
                    comment: 'heater duty schema: timer, indoor temperature threshold',
                },
                vaporizerSettings: {
                    caption: 'vaporizer settings',
                    comment: 'vaporizer duty schema: timer, indoor humidity threshold',
                },
            },
            other: {
                caption: 'other settings',
                comment: 'maybe it will be splited in more meandingful sections',
                webInterfaceSettings: {
                    caption: 'web interface settings',
                    comment: 'web client UI options',
                },
                powerSettings: {
                    caption: 'power settings',
                    comment: 'safe indoor temperature threshold',
                },
                timeSettings: {
                    caption: 'time settings',
                    comment: 'time and time-zone syncronisation',
                },
                wifiSettings: {
                    caption: 'wifi settings',
                    comment: 'this chip wifi access point settings: ssid and password',
                },
                sensorSettings: {
                    caption: 'sensor settings',
                    comment: 'sensor management',
                },
                peripheralSettings: {
                    caption: 'peripheral settings',
                    comment: 'peripheral management',
                },
            },
            stats: {
                caption: 'statistics',
                comment: 'and telemetry',
                basicStats: {
                    caption: 'basic stats',
                    comment: 'chip health and current state of devices and sensors',
                },
            },
            scape: {
                caption: 'scape visualization',
                comment: 'for debug purposes',
            },
        },

        ///// interface
        webInterfaceSettings: {
            title: {
                caption: 'web interface settings',
            },
            isVerbose: {
                caption: 'show verbose hints',
                comment: 'show info below each UI element, or hide to become compact "pro" mode',
            },
            liveApiDelay: {
                caption: 'live data refresh delay',
                comment: 'in seconds, how fast statistics and telemetry refreshes in web-interface',
            },
            liveApiFailDelay: {
                caption: 'live data refresh fail delay',
                comment: 'in seconds, how long web-interface wait\'s for live data to be received before fail to error',
            },
            save: {
                saveButton: {
                    caption: 'save interface settings to chip',
                    comment: 'will apply settings without reboot',
                },
            },
        },


        ///// light
        lightSettings: {
            title: {
                caption: 'light settings',
            },
            manualOverride: {
                caption: 'mode',
                comment: 'switch between manual override and automatic mode',
            },
            cyclicTimer: {
                caption: 'daytimer',
                comment: '24h cyclic timer',
                timespan24: {
                    from: {
                        caption: 'active period from',
                        comment: 'active period start time (cyclic time once per 24 hours)',
                    },
                    to: {
                        caption: 'active period to',
                        comment: 'active period end time (cyclic time once per 24 hours; if start = end then full 24 on)',
                    },
                },
            },
            indoorTemperatureThreshold: {
                caption: 'temperature',
                comment: 'threshold to fit optimal conditions',
                temperatureThreshold: {
                    caption: 'indoor hemperature high threshold',
                    comment: 'it indoor temperature is HIGHER than threshold, then light will be DISABLED',
                }
            },
            switchCooldown: {
                caption: 'switch cooldown',
                comment: 'prevent from reswitching',
                seconds: {
                    caption: 'seconds of cooldown',
                    comment: 'delay before switch can change it\'s state',
                }
            },
            save: {
                saveButton: {
                    caption: 'save light settings to chip',
                    comment: 'will apply settings without reboot',
                },
            },
        },

        ///// fan
        fanSettings: {
            title: {
                caption: 'fan settings',
            },
            manualOverride: {
                caption: 'mode',
                comment: 'switch between manual override and automatic mode',
            },
            cyclicTimer: {
                caption: 'daytimer',
                comment: '24h cyclic timer',
                timespan24: {
                    from: {
                        caption: 'active period from',
                        comment: 'active period start time (cyclic time once per 24 hours)',
                    },
                    to: {
                        caption: 'active period to',
                        comment: 'active period end time (cyclic time once per 24 hours; if start = end then full 24 on)',
                    },
                },
            },
            indoorTemperatureThreshold: {
                caption: 'temperature',
                comment: 'threshold to fit optimal conditions',
                temperatureThreshold: {
                    caption: 'indoor hemperature low threshold',
                    comment: 'it indoor temperature is LOWER than threshold, then fan will be DISABLED',
                }
            },
            switchCooldown: {
                caption: 'switch cooldown',
                comment: 'prevent from reswitching',
                seconds: {
                    caption: 'seconds of cooldown',
                    comment: 'delay before switch can change it\'s state',
                }
            },
            save: {
                saveButton: {
                    caption: 'save fan settings to chip',
                    comment: 'will apply settings without reboot',
                },
            },
        },

        ///// water
        waterSettings: {
            title: {
                caption: 'water settings',
            },
            manualOverride: {
                caption: 'mode',
                comment: 'switch between manual override and automatic mode',
            },
            periodicDuty: {
                caption: 'periodic duty',
                comment: 'big periodic sessions of active duty',
                count: {
                    caption: 'spillings count',
                    comment: 'number of sessions',
                },
                duration: {
                    caption: 'session duration',
                    comment: 'one splilling duration in seconds',
                },
            },
            cyclicTimer: {
                caption: 'daytimer',
                comment: '24h cyclic timer',
                timespan24: {
                    from: {
                        caption: 'active period from',
                        comment: 'active period start time (cyclic time once per 24 hours)',
                    },
                    to: {
                        caption: 'active period to',
                        comment: 'active period end time (cyclic time once per 24 hours; if start = end then full 24 on)',
                    },
                },
            },
            dutyModulation: {
                caption: 'duty modulation',
                comment: 'small pwm pulses during each session',
                ratio: {
                    caption: 'ratio',
                    comment: 'pwm alike duty-cicle',
                },
                duration: {
                    caption: 'modulation duration',
                    comment: 'one pwm modilation duration in seconds',
                },
            },
            save: {
                saveButton: {
                    caption: 'save water settings to chip',
                    comment: 'will apply settings without reboot',
                },
            },
        },

        ///// heater
        heaterSettings: {
            title: {
                caption: 'heater settings',
            },
            manualOverride: {
                caption: 'mode',
                comment: 'switch between manual override and automatic mode',
            },
            cyclicTimer: {
                caption: 'daytimer',
                comment: '24h cyclic timer',
                timespan24: {
                    from: {
                        caption: 'active period from',
                        comment: 'active period start time (cyclic time once per 24 hours)',
                    },
                    to: {
                        caption: 'active period to',
                        comment: 'active period end time (cyclic time once per 24 hours; if start = end then full 24 on)',
                    },
                },
            },
            indoorTemperatureThreshold: {
                caption: 'temperature',
                comment: 'threshold to fit optimal conditions',
                temperatureThreshold: {
                    caption: 'indoor hemperature high threshold',
                    comment: 'it indoor temperature is HIGHER than threshold, then heater will be DISABLED',
                }
            },
            switchCooldown: {
                caption: 'switch cooldown',
                comment: 'prevent from reswitching',
                seconds: {
                    caption: 'seconds of cooldown',
                    comment: 'delay before switch can change it\'s state',
                }
            },
            save: {
                saveButton: {
                    caption: 'save heater settings to chip',
                    comment: 'will apply settings without reboot',
                },
            },
        },

        ///// vaporizer
        vaporizerSettings: {
            title: {
                caption: 'vaporizer settings',
            },
            manualOverride: {
                caption: 'mode',
                comment: 'switch between manual override and automatic mode',
            },
            cyclicTimer: {
                caption: 'daytimer',
                comment: '24h cyclic timer',
                timespan24: {
                    from: {
                        caption: 'active period from',
                        comment: 'active period start time (cyclic time once per 24 hours)',
                    },
                    to: {
                        caption: 'active period to',
                        comment: 'active period end time (cyclic time once per 24 hours; if start = end then full 24 on)',
                    },
                },
            },
            indoorHumidityThreshold: {
                caption: 'humidity',
                comment: 'threshold to fit optimal conditions',
                humidityThreshold: {
                    caption: 'indoor humidity high threshold',
                    comment: 'it indoor humidity is HIGHER than threshold, then vaporizer will be DISABLED',
                },
            },
            switchCooldown: {
                caption: 'switch cooldown',
                comment: 'prevent from reswitching',
                seconds: {
                    caption: 'seconds of cooldown',
                    comment: 'delay before switch can change it\'s state',
                }
            },
            save: {
                saveButton: {
                    caption: 'save vaporizer settings to chip',
                    comment: 'will apply settings without reboot',
                },
            },
        },

        ///// power
        powerSettings: {
            title: {
                caption: 'power settings',
            },
            generalPowerOffTemperatureThreshold: {
                caption: 'general power-off by high temperature',
                comment: 'shutdown chip as a last resort when things go so wrong',

                temperatureThreshold: {
                    caption: 'temperature high threshold',
                    comment: 'it indoor or outdoor temperature is HIGHER than threshold, then power will be DISABLED',
                },
            },
            save: {
                saveButton: {
                    caption: 'save power settings to chip',
                    comment: 'will apply settings without reboot',
                },
            },
        },

        ///// time
        timeSettings: {
            title: {
                caption: 'time settings',
            },
            currentTime: {
                caption: 'current chip time',
                comment: 'date and time on a device',
                currentUnixSeconds: {
                    caption: 'last accured chip date and time',
                    comment: 'date and time with timezone',
                },
                tz: {
                    caption: 'time-zone',
                    comment: 'be careful to sync not only a "good" time, but a "good" timezone also, because indoor 24h timers are based on local time. And they may be, simple say, become "shifted" when interperted by other user because of time-zone discrepancy',
                },
            },
            save: {
                saveButton: {
                    caption: 'update chip time from host',
                    comment: 'will sync chip time with your device\'s time',
                },
            },
        },

        ///// wifi
        wifiSettings: {
            title: {
                caption: 'wifi settings',
            },
            station: {
                caption: 'station',
                comment: 'works as other regular device: phone, laptop. will try to connect to extisting ssid',
                ssid: {
                    caption: 'access point name (ssid)',
                    comment: 'wifi access point name, where this application (picoface) can be dicovered',
                },
                password: {
                    caption: 'password',
                    comment: 'wifi password, 8 characters min',
                },
            },
            accessPoint: {
                caption: 'access point',
                comment: 'works as wifi-routdoor, creating a new dedicated ssid',
                ssid: {
                    caption: 'access point name (ssid)',
                    comment: 'wifi access point name, where this application (picoface) can be dicovered',
                },
                password: {
                    caption: 'password',
                    comment: 'wifi password, 8 characters min',
                },
            },
            save: {
                saveButton: {
                    caption: 'save wifi settings to chip',
                    comment: 'will apply settings without reboot',
                },
            },
        },

        ///// sensor
        sensorSettings: {
            title: {
                caption: 'sensor settings',
            },
            indoorEnvironment: {
                caption: 'indoor environment',
                sensorType: {
                    caption: 'kill me',
                    caption: 'sensor type',
                    comment: 'will apply settings with reboot',
                },
                virtual: {
                    caption: 'virtual',
                    staticOverride: {
                        temperature: {
                            caption: 'predefined temperature',
                            comment: 'virtual value',
                        },
                        humidity: {
                            caption: 'predefined humidity',
                            comment: 'virtual value',
                        },
                        pressure: {
                            caption: 'predefined pressure',
                            comment: 'virtual value',
                        },
                    }
                },
                dht: {
                    caption: 'dht22',
                    connection: {
                        dataPin: {
                            caption: 'dht sensor data pin',
                            comment: 'harware pin',
                        },
                    },
                    staticOverride: {
                        pressure: {
                            caption: 'predefined pressure',
                            comment: 'virtual value',
                        },
                    }
                },
                bme: {
                    caption: 'bme280',
                    connection: {
                        dataAPin: {
                            caption: 'bme sensor dataA pin',
                            comment: 'harware pin',
                        },
                        dataBPin: {
                            caption: 'bme sensor dataB pin',
                            comment: 'harware pin',
                        },
                    },
                },
                bmp: {
                    caption: 'bmp280',
                    connection: {
                        dataAPin: {
                            caption: 'bmp sensor dataA pin',
                            comment: 'harware pin',
                        },
                        dataBPin: {
                            caption: 'bmp sensor dataB pin',
                            comment: 'harware pin',
                        },
                    },
                    staticOverride: {
                        pressure: {
                            caption: 'predefined pressure',
                            comment: 'virtual value',
                        },
                    }
                },
                ds: {
                    caption: 'ds18b20',
                    connection: {
                        dataPin: {
                            caption: 'onwire data pin',
                            comment: 'harware pin',
                        },
                    },
                    staticOverride: {
                        humidity: {
                            caption: 'predefined humidity',
                            comment: 'virtual value',
                        },
                        pressure: {
                            caption: 'predefined pressure',
                            comment: 'virtual value',
                        },
                    }
                },
            },
            outdoorEnvironment: {
                caption: 'outdoor environment',
                sensorType: {
                    caption: 'kill me',
                    caption: 'sensor type',
                    comment: 'will apply settings with reboot',
                },
                virtual: {
                    caption: 'virtual',
                    staticOverride: {
                        temperature: {
                            caption: 'predefined temperature',
                            comment: 'virtual value',
                        },
                        humidity: {
                            caption: 'predefined humidity',
                            comment: 'virtual value',
                        },
                        pressure: {
                            caption: 'predefined pressure',
                            comment: 'virtual value',
                        },
                    }
                },
                dht: {
                    caption: 'dht22',
                    connection: {
                        dataPin: {
                            caption: 'dht sensor data pin',
                            comment: 'harware pin',
                        },
                    },
                    staticOverride: {
                        pressure: {
                            caption: 'predefined pressure',
                            comment: 'virtual value',
                        },
                    }
                },
                bme: {
                    caption: 'bme280',
                    connection: {
                        dataAPin: {
                            caption: 'bme sensor dataA pin',
                            comment: 'harware pin',
                        },
                        dataBPin: {
                            caption: 'bme sensor dataB pin',
                            comment: 'harware pin',
                        },
                    },
                },
                bmp: {
                    caption: 'bmp280',
                    connection: {
                        dataAPin: {
                            caption: 'bmp sensor dataA pin',
                            comment: 'harware pin',
                        },
                        dataBPin: {
                            caption: 'bmp sensor dataB pin',
                            comment: 'harware pin',
                        },
                    },
                    staticOverride: {
                        pressure: {
                            caption: 'predefined pressure',
                            comment: 'virtual value',
                        },
                    }
                },
                ds: {
                    caption: 'ds18b20',
                    connection: {
                        dataPin: {
                            caption: 'onwire data pin',
                            comment: 'harware pin',
                        },
                    },
                    staticOverride: {
                        humidity: {
                            caption: 'predefined humidity',
                            comment: 'virtual value',
                        },
                        pressure: {
                            caption: 'predefined pressure',
                            comment: 'virtual value',
                        },
                    }
                },
            },
            save: {
                saveButton: {
                    caption: 'save sensor settings to chip and reboot',
                    comment: 'will apply settings with reboot',
                },
            },
        },

        ///// peripheral
        peripheralSettings: {
            title: {
                caption: 'peripheral settings',
            },
            input: {
                caption: 'input peripheral settings',
                extender: {
                    caption: 'input peripheral extender',
                    isEnabled: {
                        caption: 'is input extender enabled'
                    },
                    dataAPin: {
                        caption: 'data a pin',
                    },
                    dataBPin: {
                        caption: 'data b pin',
                    },
                    dataCPin: {
                        caption: 'data c pin',
                    },
                    capacity: {
                        caption: 'capacity',
                    },
                }
            },
            output: {
                caption: 'output peripheral settings',
                extender: {
                    caption: 'output peripheral extender',
                    isEnabled: {
                        caption: 'is output extender enabled'
                    },
                    dataAPin: {
                        caption: 'data a pin',
                    },
                    dataBPin: {
                        caption: 'data b pin',
                    },
                    dataCPin: {
                        caption: 'data c pin',
                    },
                    capacity: {
                        caption: 'capacity',
                    },
                },
                relay : {
                    light: {
                        caption: 'light',
                        comment: 'TODO',
                        isEnabled: {
                            caption: 'is light relay enabled'
                        },
                        dataPin: {
                            caption: 'light pin'
                        },
                    },
                    fan: {
                        caption: 'fan',
                        comment: 'TODO',
                        isEnabled: {
                            caption: 'is fan relay enabled'
                        },
                        dataPin: {
                            caption: 'fan pin'
                        },
                    },
                    water: {
                        caption: 'water',
                        comment: 'TODO',
                        isEnabled: {
                            caption: 'is water relay enabled'
                        },
                        dataPin: {
                            caption: 'water pin'
                        },
                    },
                    heater: {
                        caption: 'heater',
                        comment: 'TODO',
                        isEnabled: {
                            caption: 'is heater relay enabled'
                        },
                        dataPin: {
                            caption: 'heater pin'
                        },
                    },
                    vaporizer: {
                        caption: 'vaporizer',
                        comment: 'TODO',
                        isEnabled: {
                            caption: 'is vaporizer relay enabled'
                        },
                        dataPin: {
                            caption: 'vaporizer pin'
                        },
                    },
                }
            },
            save: {
                saveButton: {
                    caption: 'save peripheral settings to chip and reboot',
                    comment: 'will apply settings with reboot',
                },
            },
        },

        ///// basicStats
        basicStats: {
            title: {
                caption: 'basic stats',
            },
            time: {

                caption: 'time',
                comment: 'TODO',

                secondsSinceRestart: {
                    caption: 'seconds since last restart',
                    comment: 'health status, kinda',
                },
                currentUnixSeconds: {
                    caption: 'chip date and time',
                    comment: 'date and time with timezone',
                },
                tz: {
                    caption: 'chip time-zone',
                    comment: 'chip time-zone',
                },
            },
            environment: {
                caption: 'environment sensors readings',
                comment: 'TODO',


                currentIndoorTemperature: {
                    caption: 'current indoor temperature',
                    comment: 'in C degrees',
                },
                currentIndoorHumidity: {
                    caption: 'current indoor humidity',
                    comment: 'in relative %',
                },
                currentOutdoorTemperature: {
                    caption: 'current outdoorTemperature',
                    comment: 'in C degrees',
                },
                currentOutdoorHumidity: {
                    caption: 'current outdoorHumidity',
                    comment: 'in relative %',
                },
            },
            relay: {
                caption: 'relay switches',
                comment: 'TODO',

                isLightActive: {
                    caption: 'light status',
                    comment: 'state of light relay switch',
                },
                isFanActive: {
                    caption: 'fan status',
                    comment: 'state of fan relay switch',
                },
                isWaterActive: {
                    caption: 'water status',
                    comment: 'state of water relay switch',
                },
                isHeaterActive: {
                    caption: 'heater status',
                    comment: 'state of heater relay switch',
                },
                isVaporizerActive: {
                    caption: 'vaporizer status',
                    comment: 'state of vaporizer relay switch',
                },
            }
        },
    }
}