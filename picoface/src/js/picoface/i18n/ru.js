export const i18n = {
    splash: {
        saved: 'сохранено',
    },
    widgetElement: {
        manualOverride: {
            auto: 'авто',
            manualOn: 'вкл',
            manualOff: 'выкл',
        },
        footer: {
            caption: 'прошивка picochip версия ' + prebundled.version.picochip,
            comment: 'веб-клиент picoface версия ' + prebundled.version.picoface,
        },
    },
    widget: {
        index: {
            title: 'Настройки',
            lightSettings: {
                caption: 'Свет',
                comment: 'суточный таймер, отвечающий за смену дня и ночи',
            },
            fanSettings: {
                caption: 'Вентиляция',
                comment: 'суточный таймер, отвечающий за выключение вентиляции в ночное время, для минимизации шума',
            },
            waterSettings: {
                caption: 'Полив',
                comment: 'настраивается промежуток времени, в который производится полив, количество поливов и продолжительность',
            },
            heaterSettings: {
                caption: 'Обогреватель',
                comment: 'настройка периода работы таймера и уставки на отключение обогревателя',
            },
            vaporizerSettings: {
                caption: 'Увлажнитель',
                comment: 'настройка периода работы таймера и уставки на отключение увлажнителя',
            },
            powerSettings: {
                caption: 'Настройка аварийного отключения',
                comment: 'настройка уставки температуры аварийного отключения',
            },
            timeSettings: {
                caption: 'Часы и время',
                comment: 'настройка внутреннего времени контроллера',
            },
            wifiSettings: {
                caption: 'Точка доступа Wifi',
                comment: 'настройка имени и пароля для точки доступа',
            },
            basicStats: {
                caption: 'Базовая телеметрия',
                comment: 'показания датчиков температуры и влажности в боксе, состояние реле, внутреннее время контроллера',
            },
            scape: {
                caption: 'Визуализация',
                comment: 'пока только для разработки и дебага, потом - пойдет в пользовательский интерфейс куда-нибудь',
            },
        },

        ///// light
        lightSettings: {
            title: 'Свет',
            section: {
                timer24: {
                    caption: 'daytimer',
                    comment: '24h cyclic timer',
                },
                temperature: {
                    caption: 'temperature',
                    comment: 'threshold to fit optimal conditions',
                },
            },
            manualOverride: {
                caption: 'Режим',
                comment: 'переход в ручной режим управления и обратно в автоматический',
            },
            cyclicTimer: {
                caption: 'daytimer',
                comment: '24h cyclic timer',
                timespan24: {
                    from: {
                        caption: 'Свет включен с',
                        comment: 'время включения реле, при «с = по» свет постоянно включён',
                    },
                    to: {
                        caption: 'Свет включен по',
                        comment: 'время выключения реле',
                    },
                },
                isEnabled: {
                    caption: 'qweqweqwe',
                    comment: 'qweqweqwe',
                }
            },
            indoorTemperatureThreshold: {
                caption: 'Уставка температуры для предупредительного отключения',
                comment: 'температура в боксе выше которой свет будет выключен',
            },
            saveButton: {
                caption: 'Сохранить изменения в контроллер',
                comment: 'кнопка сохраняет изменения внесённые пользователем в данной вкладке',
            },
        },

        ///// fan
        fanSettings: {
            title: 'Вентиляция',
            manualOverride: {
                caption: 'Режим',
                comment: 'переход в ручной режим управления и обратно в автоматический',
            },
            cyclicTimer: {
                timespan24: {

                    from: {
                        caption: 'Вентиляция включена с',
                        comment: 'время включения реле, при «с = по» вентиляция постоянно включена',
                    },
                    to: {
                        caption: 'Вентиляция включена по',
                        comment: 'время выключения реле',
                    },
                },
                isEnabled: {
                    caption: 'qweqweqwe',
                    comment: 'qweqweqwe',
                }
            },
            indoorTemperatureThreshold: {
                caption: 'Уставка температуры для предупредительного отключения',
                comment: 'температура в боксе ниже которой вентиляция будет выключена',
            },
            saveButton: {
                caption: 'Сохранить изменения в контроллер',
                comment: 'кнопка сохраняет изменения внесённые пользователем в данной вкладке',
            },
        },

        ///// water
        waterSettings: {
            title: 'Полив',
            manualOverride: {
                caption: 'Режим',
                comment: 'переход в ручной режим управления и обратно в автоматический',
            },
            cyclicTimer: {
                timespan24: {

                    from: {
                        caption: 'Период полива включен с',
                        comment: 'время начала периода, при «с = по» период работы полива 24 часа',
                    },
                    to: {
                        caption: 'Период полива включен по',
                        comment: 'время окончания периода',
                    },
                },
                isEnabled: {
                    caption: 'qweqweqwe',
                    comment: 'qweqweqwe',
                }
            },
            count: {
                caption: 'Количество поливов за период',
                comment: 'период делится на равные промежутки',
            },
            duration: {
                caption: 'Продолжительность полива',
                comment: 'время в секундах в течении которого происходить полив',
            },
            saveButton: {
                caption: 'Сохранить изменения в контроллер',
                comment: 'кнопка сохраняет изменения внесённые пользователем в данной вкладке',
            },
        },

        ///// heater
        heaterSettings: {
            title: 'Обогреватель',
            manualOverride: {
                caption: 'Режим',
                comment: 'переход в ручной режим управления и обратно в автоматический',
            },
            cyclicTimer: {
                timespan24: {

                    from: {
                        caption: 'Период обогрева включен с',
                        comment: 'время начала периода, при «с = по» период работы обогревателя 24 часа',
                    },
                    to: {
                        caption: 'Период обогрева включен по',
                        comment: 'время окончания периода',
                    },
                },
                isEnabled: {
                    caption: 'qweqweqwe',
                    comment: 'qweqweqwe',
                }
            },
            indoorTemperatureThreshold: {
                caption: 'Уставка температуры',
                comment: 'температура при которой обогреватель отключится',
            },
            saveButton: {
                caption: 'Сохранить изменения в контроллер',
                comment: 'кнопка сохраняет изменения внесённые пользователем в данной вкладке',
            },
        },

        ///// vaporizer
        vaporizerSettings: {
            title: 'Увлажнитель',
            manualOverride: {
                caption: 'Режим',
                comment: 'переход в ручной режим управления и обратно в автоматический',
            },
            cyclicTimer: {
                timespan24: {

                    from: {
                        caption: 'Период увлажнения включен с',
                        comment: 'время начала периода, при «с = по» период работы увлажнителя 24 часа',
                    },
                    to: {
                        caption: 'Период увлажнения включен с',
                        comment: 'время окончания периода',
                    },
                },
                isEnabled: {
                    caption: 'qweqweqwe',
                    comment: 'qweqweqwe',
                }
            },
            indoorHumidityThreshold: {
                caption: 'Уставка влажности',
                comment: 'влажность при которой увлажнитель отключится',
            },
            saveButton: {
                caption: 'Сохранить изменения в контроллер',
                comment: 'кнопка сохраняет изменения внесённые пользователем в данной вкладке',
            },
        },

        ///// power
        powerSettings: {
            title: 'Настройка аварийного отключения',
            generalPowerOffTemperatureThreshold: {
                caption: 'Уставка температуры аварийного отключения силовой части',
                comment: 'температура в боксе выше которой все реле будут приведены в нормальное состояние (отключены)',
            },
            saveButton: {
                caption: 'Сохранить изменения в контроллер',
                comment: 'кнопка сохраняет изменения внесённые пользователем в данной вкладке',
            },
        },

        ///// time
        timeSettings: {
            title: 'Часы и время',
            currentUnixSeconds: {
                caption: 'Внутреннее время контроллера',
                comment: 'дата и время с учётом часового пояса',
            },
            tz: {
                caption: 'часовой пояс',
                comment: 'будьте осторожны, при синхронизации времени, происходить синхранизация часового пояса, и так как внутренние 24-часовые таймеры основаны на местном времени, то может произойти смещение при вмешательстве другого пользователя из-за несоответствия часовых поясов',
            },
            saveButton: {
                caption: 'Синхронизировать время на контроллере',
                comment: 'кнопка синхранизирует внрутреннее время контроллера с подключенным девайсом',
            },
        },

        ///// wifi
        wifiSettings: {
            title: 'Точка доступа Wifi',
            ssid: {
                caption: 'Имя точки доступа (ssid)',
                comment: 'имя точки доступа для конфигурации контроллера',
            },
            password: {
                caption: 'Новый пароль (password)',
                comment: 'количество символов в пароле на менее 8',
            },
            saveButton: {
                caption: 'Сохранить изменения в контроллер',
                comment: 'кнопка сохраняет изменения внесённые пользователем в данной вкладке, которые вступять в силу после перезагрузки контроллера',
            },
        },

        ///// basicStats
        basicStats: {
            title: 'Базовая телеметрия',
            secondsSinceRestart: {
                caption: 'Количество секунд с начала работы контреллера',
                comment: 'health status, kinda',
            },
            currentUnixSeconds: {
                caption: 'Внутреннее время и дата контроллера',
                comment: 'дата и время с учётом часового пояса',
            },
            tz: {
                caption: 'Часовой пояс',
                comment: 'Часовой пояс',
            },
            currentIndoorTemperature: {
                caption: 'Текущая температура внутри',
                comment: 'в гр.С',
            },
            currentIndoorHumidity: {
                caption: 'Текущая влажность внутри',
                comment: 'в %',
            },
            currentOutdoorTemperature: {
                caption: 'Текущая температура снаружи',
                comment: 'в гр.С',
            },
            currentOutdoorHumidity: {
                caption: 'Текущая влажность снаружи',
                comment: 'в %',
            },
            lightStatus: {
                caption: 'Состояние реле света',
                comment: 'true = включено, false = выключено',
            },
            fanStatus: {
                caption: 'Состояние реле вентиляции',
                comment: 'true = включено, false = выключено',
            },
            waterStatus: {
                caption: 'Состояние реле полива',
                comment: 'true = включено, false = выключено',
            },
            heaterStatus: {
                caption: 'Состояние реле обогревателя',
                comment: 'true = включено, false = выключено',
            },
            vaporizerStatus: {
                caption: 'Состояние реле увлажнителя',
                comment: 'true = включено, false = выключено',
            },
        },
    }
}