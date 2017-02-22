'use strict';
let express = require('express');
let router = express.Router();
let passport = require('passport');

class ContactRoutes{
    constructor(){
		this.router = router;
        this.init();
    }
    
    init(){
    
       // console.log("inc ontact");
        
        this.router.get('/demo',function(req,res){
            console.log("nbfnbngbsdngbdnbgndsbgndbsgndsbgnbsdgnbdsgn");
			res.render('login');
        });
	

        
        
        
        
    }
}


module.exports = ContactRoutes;
