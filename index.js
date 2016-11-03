"use strict";
const win_1 = require("can-i/win");
const Config_1 = require("can-i/Config");
const Event_1 = require("can-i/Event");
win_1.BootStrap();
Config_1.Configure();
win_1.Listen(3000, function () {
    Event_1.Event.emit("can-i:booted");
    console.log("Server Booted");
});
//# sourceMappingURL=index.js.map