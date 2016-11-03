import { Stack } from 'can-i/Middleware';



import bodyparser = require("body-parser");



export let UserApi = Stack(bodyparser.json());
