'use strict';

let express = require('express');
let router = express.Router();
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let reg = require('./controllers/register');
let foo = require('./controllers/footercontact');

class Api{

constructor(){
this.router = router;
this.init();
}

init(){


    
    
this.router.post('/reg', reg.registerUser.bind(express)); 
this.router.post('/footerContact',foo.FooterContact1.bind(express) );
    


}

    

}



module.exports = Api;
