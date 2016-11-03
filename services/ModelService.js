"use strict";
const _ = require("lodash");
let collection = new Map();
let primary_key = new Map();
class ModelService {
    get collection() {
        return this.getCollection();
    }
    get primary() {
        return this.nextKey();
    }
    Create(object) {
        object.id = this.nextKey();
        this.collection.push(object);
        return object;
    }
    Find(id) {
        if (_.isNumber(id)) {
            return this.Filter({ id });
        }
        else {
            return this.Filter(id);
        }
    }
    Update(id, update) {
        return this.Filter(id).map(x => {
            let keys = Object.keys(update);
            for (let key of keys) {
                x[key] = update[key];
            }
            return x;
        });
    }
    Delete(id) {
        let count = 0;
        this.Filter(id).forEach(x => {
            count++;
            this.collection.splice(this.collection.indexOf(x), 1);
        });
        return count;
    }
    Filter(object) {
        if (!object) {
            return [];
        }
        let keys = Object.keys(object);
        return this.collection.filter(x => {
            for (let key of keys) {
                if (x[key] !== object[key]) {
                    return false;
                }
            }
            return true;
        });
    }
    getCollection() {
        if (collection.has(this.name)) {
            return collection.get(this.name);
        }
        else {
            let arr = [];
            collection.set(this.name, arr);
            return arr;
        }
    }
    getKey() {
        return primary_key.get(this.name) || 1;
    }
    setKey(key) {
        primary_key.set(this.name, key);
    }
    nextKey() {
        let key = this.getKey();
        this.setKey(key + 1);
        return key;
    }
}
exports.ModelService = ModelService;
//# sourceMappingURL=ModelService.js.map