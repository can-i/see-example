"use strict";
const win_1 = require('can-i/win');
const Config_1 = require('can-i/Config');
const win_2 = require("can-i/win");
const superagent = require("superagent");
let must = require("must");
describe("UserController", function () {
    before(function (done) {
        win_1.BootStrap();
        Config_1.Configure();
        win_1.Listen(3000, () => {
            done();
        });
    });
    it("should be able to create a user", function (done) {
        superagent.post("http://localhost:3000/user/create").send({
            name: "shavauhn"
        }).end(function (err, r) {
            if (err) {
                return done(err);
            }
            must(r.body.status).equal("ok");
            done();
        });
    });
    after(win_2.Close);
});
//# sourceMappingURL=user.spec.js.map