'use strict';

let express = require('express');
let router = express.Router();
let reg = require('./controllers/register');

class Api{

constructor(){
this.router = router;
this.init();
}

init(){


this.router.post('/reg', reg.registerUser.bind(express)); 

}


}

module.exports = Api;
