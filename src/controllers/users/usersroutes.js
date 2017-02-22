'use strict';
let express = require('express');
let router = express.Router();
let passport = require('passport');

class UserRoutes{
    constructor(){
		this.router = router;
        this.init();
    }
    
    init(){
    
        
	
this.router.get('/register',(request,response) => {
response.render('register'); 
});
      
        
this.router.get('/login',(request,response) => {
response.render('login'); 
});
        
this.router.get('/program',(request,response) => {
if(request.session.passport!=undefined)
    
//if(request.session.passport.user!=undefined)
response.render('programs.ejs',{ name: request.session.passport.user.firstname}); 
else
response.render('programs.ejs',{name:""});
});   
        
        
        
this.router.get('/about',(request,response) => {
if(request.session.passport.user!=undefined)
response.render('about',{ name: request.session.passport.user.firstname}); 
else
response.render('about',{name:""});

});
        
        
        
this.router.get('/thankyou',(request,response) => {
if(request.session.passport.user!=undefined)
response.render('thankyou',{ name: request.session.passport.user.firstname}); 
else
response.render('about',{name:""});

});          
        
        
        
        
        
        
        
        
        
    }
}


module.exports = UserRoutes;
