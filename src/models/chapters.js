'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


let chaptersSchema  = mongoose.Schema({
    courseid : {
        type:String,
        unique:false
       
    },
    
    chapterid:{
        type:Number,
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
                                  
     url:{
        type: String,
        unique: false
        
    },
      videodetails:{
        type: String,
        unique: false
        
    },
      viewmorecontent:{
        type: String,
        unique: false
        
    }
    
});

module.exports  =  mongoose.model('chapters', chaptersSchema);