let User = require('../../models/user');
let LocalStrategy = require('passport-local').Strategy;
let FacebookStrategy = require('passport-facebook').Strategy;
let configAuth = require('../config');
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//class PassportConfigs{
module.exports = function(passport) {
        passport.serializeUser(function(user, done) {
            done(null, user);
        });

        passport.deserializeUser(function(user, done) {
            done(null, user);
        });

        passport.use('local', new LocalStrategy({
                usernameField: 'Email',
                passwordField: 'password',
                passReqToCallback: true
            },
            function(req, username, password, done) {
                process.nextTick(function() {
                    //console.log(username);
                    User.findOne({ email: username }, function(err, user) {
                        if (err) {

                            console.log(err);
                            return done(err)
                        }
                        if (!user) {
                            // return done(null, false,req.flash('login', 'That email is wrong.'))
                            return done(null, false)

                        }
                        if (user.password != password) {
                            //return done(null, false,req.flash('login', 'Oops !! Wrong password.'))
                            return done(null, false)

                        } else {

                            return done(null, user)
                        }
                    })
                });
            }
        ));




        passport.use(new FacebookStrategy({

                // pull in our app id and secret from our auth.js file
                clientID: configAuth.facebookAuth.clientID,
                clientSecret: configAuth.facebookAuth.clientSecret,
                profileFields: ['id', 'emails', 'photos', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified'],
                callbackURL: configAuth.facebookAuth.callbackURL

            },

            // facebook will send back the token and profile
            function(req, token, refreshToken, profile, done) {

                // asynchronous
                process.nextTick(function() {

                    // find the user in the database based on their facebook id
                    // User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
                    User.findOne({ 'id': profile.id }, function(err, user) {

                        // if there is an error, stop everything and return that
                        // ie an error connecting to the database
                        if (err)
                            return done(err);

                        // if the user is found, then log them in
                        if (user) {
                            return done(null, user); // user found, return that user
                        } else {
                            // if there is no user found with that facebook id, create them
                            /* var newUser            = new User();

                    // set all of the facebook information in our user model
                   // newUser.facebook.id    = profile.id; // set the users facebook id                   
                    //newUser.facebook.token = token; // we will save the token that facebook provides to the user                    
                   newUser.id    = profile.id; // set the users facebook id                   
                    newUser.token = token; // we will save the token that facebook provides to the user                    
                  
				  //  newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                   // newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
					newUser.provider="facebook";
					console.log(profile);
					//newUser.name= profile.name.givenName + ' ' + profile.name.familyName;
					newUser.first
					//newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
					newUser.email=profile.emails[0].value;
                    // save our user to the database
					
					*/
                            console.log(profile);
                            let new_user = new User({
                                firstname: profile.name.givenName,
                                lastname: profile.name.familyName,
                                email: profile.emails[0].value,
                                password: "",
                                verify_user: true,
                                provider: "facebook",
                                display_image: profile.photos[0].value,
                                gender: profile.gender,
                                about_me: "",
                                location: "",
                                createdat: new Date(),
                                id: profile.id

                            })


                            new_user.save(function(err) {
                                if (err)
                                    throw err;

                                // if successful, return the new user
                                //return done(null, newUser,req.flash('profile', 'Logged in!!'));
                                return done(null, new_user);

                            });
                        }

                    });
                });

            }));





        passport.use(new GoogleStrategy({

                clientID: configAuth.googleAuth.clientID,
                clientSecret: configAuth.googleAuth.clientSecret,
                callbackURL: configAuth.googleAuth.callbackURL,
                profileFields: ['id', 'emails', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified'],

            },
            function(req, token, refreshToken, profile, done) {

                // make the code asynchronous
                // User.findOne won't fire until we have all our data back from Google
                process.nextTick(function() {

                    // try to find the user based on their google id
                    // User.findOne({ 'google.id' : profile.id }, function(err, user) {
                    User.findOne({ 'id': profile.id }, function(err, user) {

                        if (err)
                            return done(err);

                        if (user) {

                            // if a user is found, log them in
                            return done(null, user);
                        } else {
                            // if the user isnt in our database, create a new user
                            /*var newUser          = new User();
console.log(profile);
                    // set all of the relevant information
                    //newUser.google.id    = profile.id;
                    //newUser.google.token = token;
					newUser.id    = profile.id;
                    newUser.token = token;
                    newUser.provider="google";
                    //newUser.google.name  = profile.displayName;
                    //newUser.google.email = profile.emails[0].value; // pull the first email
					newUser.name  = profile.displayName;
                    newUser.email = profile.emails[0].value; // pull the first email
*/

                            console.log(profile);
                            let new_user = new User({
                                firstname: profile.name.givenName,
                                lastname: profile.name.familyName,
                                email: profile.emails[0].value,
                                password: "",
                                verify_user: true,
                                provider: "google",
                                display_image: profile.photos[0].value,
                                gender: profile.gender,
                                about_me: "",
                                location: "",
                                createdat: new Date(),
                                id: profile.id

                            })










                            // save the user
                            new_user.save(function(err) {
                                if (err)
                                    throw err;
                                //  return done(null, newUser,req.flash('profile', 'Logged in!!'));
                                return done(null, new_user);

                            });
                        }
                    });
                });

            }));

    }
    //}
    //module.exports= new PassportConfigs();
