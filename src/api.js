'use strict';

let express = require('express');
let router = express.Router();
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let reg = require('./controllers/register');
let foo = require('./controllers/footercontact');

class Api{

constructor(){
this.router = router;
this.init();
}

init(){

passport.use(new LocalStrategy(function(username,password,done){
User.getUserByUsername(username,function(err,user){
    if(err) throw err;
    if(!user){
        return done(null,false,{message:'Unknown user'});
    }
    User.comparePassword(password,user.password,function(err,isMatch){
        if(err) throw err;
        if(isMatch){
            return done(null,user);
            
        }else{
            return done(null,false,{message:'Invalid password'});
        }
    });
});
    
}));
    
    
    
    
this.router.post('/reg', reg.registerUser.bind(express)); 
this.router.post('/footerContact',foo.FooterContact1.bind(express) );
    
this.router.post('/login',passport.authenticate('local',{successRedirect:'/',failureRedirect:'/login'}), function(request,response){
    
});    

}

    

}


module.exports.getUserByUsername =  function(username,callback){
    var query = {email:username};
    User.findOne(query,callback);
}

module.exports.comparePassword = function(candidatepassword,callback){
    console.log(hi);
}

module.exports = Api;
