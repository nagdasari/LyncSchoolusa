'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


let userStatusSchema  = mongoose.Schema({
    userid : {
        type:String,
        unique:false
       
    },
    
    courseid : {
        type:String,
        unique:false
      
    },
    
    chapternumber : [
       
    ],
    
    
        examid:
    {
        type:String,
        unique: false
        
    },
    
    assignmentid:{
        type: String,
        unique: false
    }
    
});

module.exports  =  mongoose.model('userstatus', userStatusSchema);