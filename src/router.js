'use strict';
let express = require('express');
let router = express.Router();
let verify = require('./controllers/verify_user');

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
      
this.router.get('/thankyou',(request,response) => {
   response.render('thankyou'); 
});
 
this.router.get('/footerContact',(request,response) => {
   response.render('contact_thankyou'); 
});      
      
this.router.get('/verify', verify.verifyUser.bind(express));  
      
      
  }
}


module.exports = Router;
