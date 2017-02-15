'use strict';
let express = require('express');
let router = express.Router();

class UserRoutes{
    constructor(){
		this.router = router;
        this.init();
    }
    
    init(){
    
        this.router.get('/sahiti',(request,response)=>{
         // console.log("sahiti") ;
		   response.render('login');
        });
	
    }
}


module.exports = UserRoutes;
