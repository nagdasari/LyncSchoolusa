'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let passportLocalMongoose = require('passport-local-mongoose');


let applicationSchema  = mongoose.Schema({
    
    
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
    resume_location:{
        type: String,
        unique:false
    },
    
                                  
    createdat :{
        type: String,
        unique:false
    }
    
});
userSchema.plugin(passportLocalMongoose);
module.exports  =  mongoose.model('applications', userSchema);