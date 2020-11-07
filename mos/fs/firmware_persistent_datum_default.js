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
                        dataHardwarePin: { idx: 14 }
                    },
                    staticOverride: { pressure: 1500 }
                },
                bme: {
                    connection: {
                        dataAHardwarePin: { idx: 14 },
                        dataBHardwarePin: { idx: 15 }
                    }
                },
                bmp: {
                    connection: {
                        dataAHardwarePin: { idx: 14 },
                        dataBHardwarePin: { idx: 15 }
                    },
                    staticOverride: { pressure: 1500 }
                },
                ds: {
                    connection: {
                        dataHardwarePin: { idx: 14 }
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
                        dataHardwarePin: { idx: 14 }
                    },
                    staticOverride: { pressure: 1500 }
                },
                bme: {
                    connection: {
                        dataAHardwarePin: { idx: 14 },
                        dataBHardwarePin: { idx: 15 }
                    }
                },
                bmp: {
                    connection: {
                        dataAHardwarePin: { idx: 14 },
                        dataBHardwarePin: { idx: 15 }
                    },
                    staticOverride: { pressure: 1500 }
                },
                ds: {
                    connection: {
                        dataHardwarePin: { idx: 14 }
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
                    dataAHardwarePin: {idx: 10},
                    dataBHardwarePin: {idx: 11},
                    dataCHardwarePin: {idx: 12},
                    capacity: 16
                },
            },
            output: {
                extender: {
                    isEnabled: false,
                    dataAHardwarePin: {idx: 13},
                    dataBHardwarePin: {idx: 14},
                    dataCHardwarePin: {idx: 15},
                    capacity: 16
                },
                relay: {
                    light: {
                        isEnabled: false,
                        dataSmartOutputPin: {modeKey: 'raw', idx: 14},
                    },
                    fan: {
                        isEnabled: false,
                        dataSmartOutputPin: {modeKey: 'raw', idx: 14},
                    },
                    water: {
                        isEnabled: false,
                        dataSmartOutputPin: {modeKey: 'raw', idx: 14},
                    },
                    heater: {
                        isEnabled: false,
                        dataSmartOutputPin: {modeKey: 'raw', idx: 14},
                    },
                    vaporizer: {
                        isEnabled: false,
                        dataSmartOutputPin: {modeKey: 'raw', idx: 14},
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