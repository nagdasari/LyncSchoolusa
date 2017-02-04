'use strict';
let express = require('express');
let router = express.Router();
let passport = require('passport');

let verify = require('./controllers/verify_user');
let fp = require('./controllers/forgotpassword');
let rp = require('./controllers/resetpassword');

class Router {

   constructor(){
     this.router = router;
     this.init();

   }


  init(){

this.router.get('/', (request,response) => {
response.render('homesource');

    });
      
this.router.get('/login',(request,response) => {
   response.render('login'); 
});


this.router.get('/register',(request,response) => {
   response.render('register'); 
});      
      
this.router.get('/profile',(request,response) => {
   response.render('profile'); 
});   
	  
this.router.get('/thankyou',(request,response) => {
   response.render('thankyou'); 
});
      
      
this.router.get('/forgotpassword',(request,response) => {
    response.render('forgotpswd');
});      
 
this.router.get('/footerContact',(request,response) => {
   response.render('contact_thankyou'); 
});      
      
this.router.get('/verify', verify.verifyUser.bind(express));  
this.router.get('/forgotP',rp.reset.bind(express)); 
      
this.router.get('/contactus',(request,response) => {
    response.render('contact');
}) ;

this.router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
this.router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/login'
        }));

    // route for logging out
this.router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
  
 

this.router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
this.router.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/profile',
                    failureRedirect : '/login'
            }));

 
  }
}


module.exports = Router;
