
import {Injectable} from "can-i/IOC";
import _ = require("lodash");


export interface Model{
    id:number
}


let collection = new Map<string,Model[]>()
let primary_key = new Map<string,number>();

export abstract class ModelService{
    public name:string;

    public get collection(){
        return this.getCollection();
    }

    public get primary(){
        return this.nextKey();
    }

    public Create(object:Model):Model{
        object.id = this.nextKey();
        this.collection.push(object);
        return object;
    }


    public Find(id:number):Model[];
    public Find(id:any):Model[]{
        if(_.isNumber(id)){
            return this.Filter({id});
        }else{
            return this.Filter(id);
        }
    }

    Update(id:number,update:Object):Model[]
    Update(id:Object,update:Object):Model[]{
        return this.Filter(id).map(x=>{
            let keys =Object.keys(update);
            for(let key of keys){
                x[key] = update[key];
            }
            return x;
        })
    }

    Delete(id:number):number
    Delete(id:Object):number{
        let count:number=0;
        this.Filter(id).forEach(x=>{
            count++;
            this.collection.splice(this.collection.indexOf(x),1);
        })
        return count;
    }



    private Filter(object:any):Model[]{
        if(!object){
            return []
        }

        let keys = Object.keys(object);

        return this.collection.filter(x=>{
            for(let key of keys){
                if(x[key]!==object[key]){
                    return false
                }
            }
            return true
        })
    }




    private getCollection():Model[]{
        if(collection.has(this.name)){
            return <Model[]>collection.get(this.name)
        }else{
            let arr = [];
            collection.set(this.name,arr);
            return arr;
        }
    }

    private getKey(){
        return primary_key.get(this.name) || 1; 
    }

    private setKey(key:number){
        primary_key.set(this.name,key);
    }

    private nextKey(){
        let key = this.getKey();
        this.setKey(key+1);
        return key;
    }
}