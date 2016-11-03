
import {BootStrap,Listen} from "can-i/win";
import {Configure} from "can-i/Config";




BootStrap({});
Configure();
Listen(3000,function(){
    console.log("Server Booted");
})