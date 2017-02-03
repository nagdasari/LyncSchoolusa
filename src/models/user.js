'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let passportLocalMongoose = require('passport-local-mongoose');


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
    
    verify_user:{
        type: Boolean
    },  
    
    provider:{
        type: String,
        unique:false
    },
    
    display_image:{
        type: String,
        unique: false
    },
    
    gender:{
        type: String,
        unique:false
    },
    
    about_me:{
    type: String,
    unique:false
    
    
},
    location:{
        type: String,
        unique:false
    },
    
                                  
    createdat :{
        type: String,
        unique:false
    },
	facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
	google         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }
    
});
userSchema.plugin(passportLocalMongoose);
module.exports  =  mongoose.model('users', userSchema);