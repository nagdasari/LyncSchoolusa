'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


let footercontactSchema  = mongoose.Schema({
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
                                  
    createdat :{
        type: String,
        unique:false
    }
    
});

module.exports  =  mongoose.model('footercontactus', footercontactSchema);