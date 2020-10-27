module.exports = {
    drawSmile: function(hal, ratio) {
        if (ratio >= 1) {
            this.draw100Smile(hal);
        } else if (ratio >= 0.8) {
            this.draw80Smile(hal);
        } else if (ratio >= 0.6) {
            this.draw60Smile(hal);
        } else if (ratio >= 0.4) {
            this.draw40Smile(hal);
        } else if (ratio >= 0.2) {
            this.draw20Smile(hal);
        } else {
            this.draw0Smile(hal);
        }
    },
    draw100Smile: function(hal) {
        hal.logString('                                               ');
        hal.logString('                 ##         ##                 ');
        hal.logString('               ######     ######               ');
        hal.logString('               ######     ######               ');
        hal.logString('                 ##         ##                 ');
        hal.logString('                                               ');
        hal.logString('            #                     #            ');
        hal.logString('             ######          #####             ');
        hal.logString('               ################                ');
        hal.logString('                  ##########                   ');
        hal.logString('                                               ');
    },
    draw80Smile: function(hal) {
        hal.logString('                                               ');
        hal.logString('                 ##                            ');
        hal.logString('               ######                          ');
        hal.logString('               ######     ######               ');
        hal.logString('                 ##                            ');
        hal.logString('                                               ');
        hal.logString('               ###                             ');
        hal.logString('                 ############                  ');
        hal.logString('                    ######                     ');
        hal.logString('                                               ');
    },
    draw60Smile: function(hal) {
        hal.logString('                                               ');
        hal.logString('                ####      ####                 ');
        hal.logString('                ####      ####                 ');
        hal.logString('                ####      ####                 ');
        hal.logString('                                               ');
        hal.logString('                     ####                      ');
        hal.logString('                  ##########                   ');
        hal.logString('                                               ');
    },
    draw40Smile: function(hal) {
        hal.logString('                                               ');
        hal.logString('               ##  ##    ##  ##                ');
        hal.logString('                ####      ####                 ');
        hal.logString('               ##  ##    ##  ##                ');
        hal.logString('                                               ');
        hal.logString('                  ##########                   ');
        hal.logString('                ###        ###                 ');
        hal.logString('                                               ');
    },
    draw20Smile: function(hal) {
        hal.logString('                                               ');
        hal.logString('               ##  ##    ##  ##                ');
        hal.logString('                 ##       ####                 ');
        hal.logString('               ##  ##    ##  ##                ');
        hal.logString('                                               ');
        hal.logString('                  ##########                   ');
        hal.logString('                           ###                 ');
        hal.logString('                                               ');
    },
    draw0Smile: function(hal) {
        hal.logString('                                               ');
        hal.logString('               ##  ##    ##  ##                ');
        hal.logString('                 ##        ##                  ');
        hal.logString('               ##  ##    ##  ##                ');
        hal.logString('                                               ');
        hal.logString('                 ############                  ');
        hal.logString('                  ##  ##  ##                   ');
        hal.logString('                                               ');
    }
}