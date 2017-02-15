'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


let chaptersSchema  = mongoose.Schema({
    courseid : {
        type:String,
        unique:false
       
    },
    
    chapterheading : {
        type:String,
        unique:false
      
    },
    
    chaptersubheading : {
        type:String,
        unique:false
    },
    
    chapterdescription:{
        type: String,
        unique: false
        
    },
                                  
    createdat :{
        type: String,
        unique:false
    }
    
});

module.exports  =  mongoose.model('chapters', chaptersSchema);