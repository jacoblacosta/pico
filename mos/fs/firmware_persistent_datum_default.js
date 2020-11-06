module.exports = {
    settings: {
        light: {
            cyclicTimer: {
                timespan24: {
                    from: {
                        h: 8,
                        m: 0,
                        s: 0
                    },
                    to: {
                        h: 20,
                        m: 0,
                        s: 0
                    }
                },
                isEnabled: true
            },
            indoorTemperatureThreshold: {
                temperatureThreshold: 25,
                isEnabled: true
            },
            switchCooldown: {
                seconds: 60,
                isEnabled: false
            }
        },
        fan: {
            cyclicTimer: {
                timespan24: {
                    from: {
                        h: 8,
                        m: 0,
                        s: 0
                    },
                    to: {
                        h: 20,
                        m: 0,
                        s: 0
                    }
                },
                isEnabled: true
            },
            indoorTemperatureThreshold: {
                temperatureThreshold: 25,
                isEnabled: true
            },
            switchCooldown: {
                seconds: 60,
                isEnabled: false
            }
        },
        water: {
            periodicDuty: {
                count: 4,
                duration: 30
            },
            cyclicTimer: {
                timespan24: {
                    from: {
                        h: 8,
                        m: 0,
                        s: 0
                    },
                    to: {
                        h: 20,
                        m: 0,
                        s: 0
                    }
                },
                isEnabled: true
            },
            dutyModulation: {
                ratio: 0.2,
                duration: 10,
                isEnabled: false
            }
        },
        heater: {
            cyclicTimer: {
                timespan24: {
                    from: {
                        h: 8,
                        m: 0,
                        s: 0
                    },
                    to: {
                        h: 20,
                        m: 0,
                        s: 0
                    }
                },
                isEnabled: true
            },
            indoorTemperatureThreshold: {
                temperatureThreshold: 25,
                isEnabled: true
            },
            switchCooldown: {
                seconds: 60,
                isEnabled: false
            }
        },
        vaporizer: {
            cyclicTimer: {
                timespan24: {
                    from: {
                        h: 8,
                        m: 0,
                        s: 0
                    },
                    to: {
                        h: 20,
                        m: 0,
                        s: 0
                    }
                },
                isEnabled: true
            },
            indoorHumidityThreshold: {
                humidityThreshold: 25,
                isEnabled: true
            },
            switchCooldown: {
                seconds: 60,
                isEnabled: false
            }
        },
        power: {
            generalPowerOffTemperatureThreshold: {
                temperatureThreshold: 70,
                isEnabled: true
            }
        },
        time: {
            currentTime: {
                currentUnixSeconds: 0,
                tz: 7
            }
        },
        wifi: {
            station: {
                ssid: 'picoface',
                password: 'gigabutt',
                isEnabled: true
            },
            accessPoint: {
                ssid: 'my-home-wifi',
                password: 'my-home-wifi-password',
                isEnabled: false
            }
        },
        pin: {
            lightRelaySwitchPin: {
                idx: 1
            },
            fanRelaySwitchPin: {
                idx: 2
            },
            waterRelaySwitchPin: {
                idx: 3
            },
            heaterRelaySwitchPin: {
                idx: 4
            },
            vaporizerRelaySwitchPin: {
                idx: 5
            },
            indoorDhtDataPin: {
                idx: 14
            },
            outdoorDhtDataPin: {
                idx: 15
            }
        },
        sensor: {
            indoorEnvironment: {
                virtual: {
                    staticOverride: {
                        temperature: 25,
                        humidity: 50,
                        pressure: 1500
                    }
                },
                dht: {
                    connection: {
                        dataPin: { idx: 14 }
                    },
                    staticOverride: { pressure: 1500 }
                },
                bme: {
                    connection: {
                        dataAPin: { idx: 14 },
                        dataBPin: { idx: 15 }
                    }
                },
                bmp: {
                    connection: {
                        dataAPin: { idx: 14 },
                        dataBPin: { idx: 15 }
                    },
                    staticOverride: { pressure: 1500 }
                },
                ds: {
                    connection: {
                        dataPin: { idx: 14 }
                    },
                    staticOverride: {
                        humidity: 50,
                        pressure: 1500
                    }
                },
                sensorType: {
                    typeKey: 'virtual',
                }
            },
            outdoorEnvironment: {
                virtual: {
                    staticOverride: {
                        temperature: 25,
                        humidity: 50,
                        pressure: 1500
                    }
                },
                dht: {
                    connection: {
                        dataPin: { idx: 14 }
                    },
                    staticOverride: { pressure: 1500 }
                },
                bme: {
                    connection: {
                        dataAPin: { idx: 14 },
                        dataBPin: { idx: 15 }
                    }
                },
                bmp: {
                    connection: {
                        dataAPin: { idx: 14 },
                        dataBPin: { idx: 15 }
                    },
                    staticOverride: { pressure: 1500 }
                },
                ds: {
                    connection: {
                        dataPin: { idx: 14 }
                    },
                    staticOverride: {
                        humidity: 50,
                        pressure: 1500
                    }
                },
                sensorType: {
                    typeKey: 'virtual',
                }
            }
        },
        peripheral: {
            input: {
                extender: {
                    isEnabled: false,
                    dataAPin: {idx: 14},
                    dataBPin: {idx: 15},
                    dataCPin: {idx: 16},
                    capacity: 1
                },
            },
            output: {
                extender: {
                    isEnabled: false,
                    dataAPin: {idx: 14},
                    dataBPin: {idx: 15},
                    dataCPin: {idx: 16},
                    capacity: 1
                },
                relay: {
                    light: {
                        isEnabled: false,
                        dataPin: {modeKey: 'raw', idx: 14},
                    },
                    fan: {
                        isEnabled: false,
                        dataPin: {modeKey: 'raw', idx: 14},
                    },
                    water: {
                        isEnabled: false,
                        dataPin: {modeKey: 'raw', idx: 14},
                    },
                    heater: {
                        isEnabled: false,
                        dataPin: {modeKey: 'raw', idx: 14},
                    },
                    vaporizer: {
                        isEnabled: false,
                        dataPin: {modeKey: 'raw', idx: 14},
                    },
                }
            }
        }
    },
    stats: {
        basic: {
            environment: {
                currentIndoorTemperature: 0,
                currentIndoorHumidity: 0,
                currentOutdoorTemperature: 0,
                currentOutdoorHumidity: 0,
            },
            relay: {
                isLightActive: false,
                isFanActive: false,
                isWaterActive: false,
                isHeaterActive: false,
                isVaporizerActive: false,
            },
            time: {
                secondsSinceRestart: 0,
                currentUnixSeconds: 0,
                tz: 0,
            }
        }
    }
}