
import {BootStrap,Listen} from "can-i/win";
import {Configure} from "can-i/Config";
import {Event} from "can-i/Event";



BootStrap();
Configure();
Listen(3000,function(){
    Event.emit("can-i:booted");
    console.log("Server Booted");
})