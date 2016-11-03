import { Event } from 'can-i/Event';
import { BootStrap, Listen } from 'can-i/win';
import { Configure } from 'can-i/Config';
import {Close} from "can-i/win";
import superagent = require("superagent");
let must = require("must");


describe("UserController",function(){
    before(function(done){
        BootStrap();
        Configure();
        Listen(3000,()=>{
            done();
        });
    })


    it("should be able to create a user",function(done){
        superagent.post("http://localhost:3000/user/create").send({
            name:"shavauhn"
        }).end(function(err,r){
            if(err){
                return done(err)
            }
            must(r.body.status).equal("ok");
            done();
        })
    })


    after(Close)
})