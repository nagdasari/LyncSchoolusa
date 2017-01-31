'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


let userSchema  = mongoose.Schema({
    firstname : {
        type:String,
        unique:false
       
    },
    
    lastname : {
        type:String,
        unique:false
      
    },
    
    email : {
        type:String,
        unique:true
    },
    
    password : {
        type:String,
        unique:false
    },
    
           
                                  
    createdat :{
        type: String,
        unique:false
    }
    
});

module.exports  =  mongoose.model('users', userSchema);