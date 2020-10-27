module.exports = {
    drawStartBanner: function(hal) {
        hal.logString('                                                ');
        hal.logString('  ********************************************  ');
        hal.logString('  *                                          *  ');
        hal.logString('  *    picochip HAL test-suite ----------    *  ');
        hal.logString('  *                                          *  ');
        hal.logString('  *    ***     *** ***********  ********     *  ');
        hal.logString('  *    ***     *** *********** ****   ***    *  ');
        hal.logString('  *    ***     ***     ***      ***          *  ');
        hal.logString('  *    ***********     ***        ****       *  ');
        hal.logString('  *    ***********     ***           ***     *  ');
        hal.logString('  *    ***     ***     ***     ***   ****    *  ');
        hal.logString('  *    ***     ***     ***      ********     *  ');
        hal.logString('  *                                          *  ');
        hal.logString('  ********************************************  ');
        hal.logString('       --------  s t a r t e d  --------        ');
        hal.logString('                                                ');
    },
    drawRebootBanner: function(hal) {
        hal.logString('                                                ');
        hal.logString('        ------- going to reboot -------         ');
        hal.logString('  ********************************************  ');
        hal.logString('  *                                          *  ');
        hal.logString('  *                 H T S                    *  ');
        hal.logString('  *                                          *  ');
        hal.logString('  *             P L A N N E D                *  ');
        hal.logString('  *              R E B O O T                 *  ');
        hal.logString('  *                                          *  ');
        hal.logString('  *                                          *  ');
        hal.logString('  ********************************************  ');
    },
    drawShutdownBanner: function(hal) {
        hal.logString('                                                ');
        hal.logString('       ------- going to shutdown -------        ');
        hal.logString('  ********************************************  ');
        hal.logString('  *                                          *  ');
        hal.logString('  *                 H T S                    *  ');
        hal.logString('  *                                          *  ');
        hal.logString('  *             P L A N N E D                *  ');
        hal.logString('  *            S H U T D O W N               *  ');
        hal.logString('  *                                          *  ');
        hal.logString('  *                                          *  ');
        hal.logString('  ********************************************  ');
    }
}