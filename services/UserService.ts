
import {ModelService} from "./ModelService";
import { Injectable } from 'can-i/IOC';





@Injectable
export class UserService extends ModelService{
    constructor(){
        super();
        this.name= "user";
    }
}