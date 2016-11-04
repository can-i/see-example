"use strict";
require('source-map-support/register');
const win_1 = require("can-i/win");
const Config_1 = require("can-i/Config");
const Event_1 = require("can-i/Event");
const consolidate = require("consolidate");
win_1.BootStrap({
    engine: {
        engineConfig: consolidate.vash
    }
});
Config_1.Configure();
win_1.Listen(3000, function () {
    Event_1.Event.emit("can-i:booted");
    console.log("Server Booted");
});
//# sourceMappingURL=index.js.map