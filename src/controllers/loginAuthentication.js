'use strict'
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
  let User = require('../models/user');

  class LoginAuthentication{
	  authenticatePassport(request,response,next){
		  
	  let username = request.body.Email;
        let password = request.body.password;
		
	let output=	passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ email: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
console.log(output);
	  }
  }
  
  module.exports=new LoginAuthentication();