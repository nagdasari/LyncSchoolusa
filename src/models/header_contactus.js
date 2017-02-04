'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


let headercontactSchema  = mongoose.Schema({
    name : {
        type:String,
        unique:false
       
    },
    
    email_address : {
        type:String,
        unique:false
      
    },
    
    message : {
        type:String,
        unique:false
    },
    
    phone:{
        type: String,
        unique: false
        
    },
                                  
    createdat :{
        type: String,
        unique:false
    }
    
});

module.exports  =  mongoose.model('headercontactus', headercontactSchema);