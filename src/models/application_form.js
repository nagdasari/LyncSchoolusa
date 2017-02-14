'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let passportLocalMongoose = require('passport-local-mongoose');


let applicationSchema  = mongoose.Schema({
    
    userid :{
        
        type: String,
        unique: false
    },
    firstname :{
        type: String,
        unique:false
    },
    
    lastname :{
        type: String,
        unique:false
    },
    
    email : {
        type: String,
        unique: false
    },
    
    
    mobile : {
        type:String,
        unique:false
    },
    
    address:{
        type: Boolean
    },  
    
    city:{
        type: String,
        unique:false
    },
    
    state:{
        type: String,
        unique: false
    },
    
    course:{
        type: String,
        unique:false
    },
    
    program:{
    type: String,
    unique:false
    
    
},
    /* add resume field here */                            
    createdat :{
        type: String,
        unique:false
    }
    
});
applicationSchema.plugin(passportLocalMongoose);
module.exports  =  mongoose.model('applications', applicationSchema);