'use strict';
let express = require('express');
let router = express.Router();

class ContactUsRouter {

   constructor(){
     this.router = router;
     this.contactUsInit();

   }


  contactUsInit(){
      
      this.router.get('/footerContact',function(request,response){
         console.log("spandana"); 
      });
      
      
  }
    
}
    
    
module.exports =  new ContactUsRouter(); 