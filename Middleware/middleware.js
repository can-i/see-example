"use strict";
const Middleware_1 = require('can-i/Middleware');
const bodyparser = require("body-parser");
exports.UserApi = Middleware_1.Stack(bodyparser.json(), bodyparser.urlencoded({ extended: true }));
//# sourceMappingURL=middleware.js.map