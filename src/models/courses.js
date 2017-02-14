'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


let coursesSchema  = mongoose.Schema({
    course_name : {
        type:String,
        unique:false
       
    },
    
    course_image : {
        type:String,
        unique:false
      
    },
    
    course_description : {
        type:String,
        unique:false
    },
    
    alt:{
        type: String,
        unique: false
        
    },
                                  
    url_name :{
        type: String,
        unique:false
    }
    
});

module.exports  =  mongoose.model('courses', coursesSchema);