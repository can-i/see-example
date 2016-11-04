
import { BaseController } from "can-i/Controller";
import { Get, Post } from "can-i/Route/Method";
import { Route } from "can-i/Route/Route";
import { UserService } from '../services/UserService';
import { Stack } from "can-i/Middleware";
import { UserApi } from '../Middleware/middleware';
import { MiddleWare } from "can-i/Middleware";

import {View} from "can-i/Utility/View";
let _ = require("lodash");



@MiddleWare(UserApi)
@Route("/user")
export class UserController extends BaseController {


    constructor(public userservice: UserService) {
        super()
    }

    @View("index")
    @Get("")
    public main(){
        this.send({});
    }
    

    @Post("/create")
    public create() {
        try {
            this.userservice.Create(this.body);
            this.res.redirect("/user/all")
        } catch (e) { 
            console.log(e);
            throw e;
        }
    }

    @Get()
    public find() {
        let users = this.userservice.Find(this.body.id);
        this.completed(users);
    }


    @Get("/all")
    public getAll(){
        this.completed(this.userservice.collection);
    }


    @Post("/update")
    public update() {
        let users = this.userservice.Update(this.body.filter, this.body.update);
        this.completed(users);
    }

    @Post("/delete")
    Delete() {
        let count = this.userservice.Delete(this.body.id);
        this.completed(count);
    }


    protected completed(result?: Object) {
        this.send({
            status: "ok",
            result
        })
    }

}