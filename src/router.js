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
response.render('home');

    });



  }
}


module.exports = Router;
