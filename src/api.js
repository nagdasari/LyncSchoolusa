'use strict';

let express = require('express');
let router = express.Router();
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let reg = require('./controllers/register');
let foo = require('./controllers/footercontact');
let login = require('./controllers/loginAuthentication');

class Api{

constructor(){
this.router = router;
this.init();
}

init(){


    
    
this.router.post('/reg', reg.registerUser.bind(express)); 
this.router.post('/footerContact',foo.FooterContact1.bind(express) );
/*this.router.post('/loginAction', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
	//res.render('thankyou');
});
  */
  
//this.router.post('/loginAction',login.authenticatePassport.bind(express) );
this.router.post('/login',
  passport.authenticate('local', { successRedirect: '/profile',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);


}

    

}



module.exports = Api;
