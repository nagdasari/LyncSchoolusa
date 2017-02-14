'use strict';
let express = require('express');
let router = express.Router();


class UserRoutes{
    constructor(){
        this.init();
    }
    
    init(){
        console.log("hello");
        this.router.get('/sahiti',(req,res)=>{
           console.log("sahiti") ;
        });
    }
}


module.exports = UserRoutes;
