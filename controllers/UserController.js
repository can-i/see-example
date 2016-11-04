"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const Controller_1 = require("can-i/Controller");
const Method_1 = require("can-i/Route/Method");
const Route_1 = require("can-i/Route/Route");
const UserService_1 = require('../services/UserService');
const middleware_1 = require('../Middleware/middleware');
const Middleware_1 = require("can-i/Middleware");
const View_1 = require("can-i/Utility/View");
let _ = require("lodash");
let UserController = class UserController extends Controller_1.BaseController {
    constructor(userservice) {
        super();
        this.userservice = userservice;
    }
    main() {
        this.send({});
    }
    create() {
        try {
            this.userservice.Create(this.body);
            this.completed(this.body);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
    find() {
        let users = this.userservice.Find(this.body.id);
        this.completed(users);
    }
    update() {
        let users = this.userservice.Update(this.body.filter, this.body.update);
        this.completed(users);
    }
    Delete() {
        let count = this.userservice.Delete(this.body.id);
        this.completed(count);
    }
    completed(result) {
        this.send({
            status: "ok",
            result
        });
    }
};
__decorate([
    View_1.View("index"),
    Method_1.Get(""), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserController.prototype, "main", null);
__decorate([
    Method_1.Post("/create"), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserController.prototype, "create", null);
__decorate([
    Method_1.Get(), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserController.prototype, "find", null);
__decorate([
    Method_1.Post("/update"), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserController.prototype, "update", null);
__decorate([
    Method_1.Post("/delete"), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserController.prototype, "Delete", null);
UserController = __decorate([
    Middleware_1.MiddleWare(middleware_1.UserApi),
    Route_1.Route("/user"), 
    __metadata('design:paramtypes', [UserService_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map