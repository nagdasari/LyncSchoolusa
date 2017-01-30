'use strict';
let express = require('express');
let router = express.Router();


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
      
      
      
  }
}


module.exports = Router;
