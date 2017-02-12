'use strict';

let express = require('express');
let router = express.Router();
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let reg = require('./controllers/register');
let foo = require('./controllers/footercontact');
let login = require('./controllers/loginAuthentication');
let forgotpassword = require('./controllers/forgotpassword');
let resetpassword = require('./controllers/resetpassword');
let head = require('./controllers/headercontact');




class Api{

constructor(){
this.router = router;
this.init();
}

init(){


    
    
this.router.post('/reg', reg.registerUser.bind(express)); 
this.router.post('/footerContact',foo.FooterContact1.bind(express) );
this.router.post('/login',passport.authenticate('local', { successRedirect: '/profileN',failureRedirect: '/login',failureFlash: true }));
this.router.post('/forgotpasscode',forgotpassword.sendForgotLink);
this.router.post('/resetpassword',resetpassword.resetP.bind(express));
this.router.post('/header-contact-us',head.HeaderContact.bind(express));
this.router.post('/api/register',(request,response) => {
   console.log("hello naveen") ;
});

}

    

}



module.exports = Api;
