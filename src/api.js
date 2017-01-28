'use strict';

let express = require('express');
let router = express.Router();

class Api{

constructor(){
this.router = router;
this.init();
}

init(){

this.router.post('/home',(request,response) => {
response.render('home');
});
}


}

module.exports = Api;
