'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


let videosSchema  = mongoose.Schema({
    chapterid : {
        type:String,
        unique:false
       
    },
    
    url : {
        type:String,
        unique:false
      
    },
    
    videodetails : {
        type:String,
        unique:false
    },
    
    
        viewmorecontent:
    {
        type:String,
        unique: false
        
    }
    
});

module.exports  =  mongoose.model('videos', videosSchema);