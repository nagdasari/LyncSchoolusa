
let express = require('express');
let bodyParser = require('body-parser');
let ejs = require('ejs');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let camo = require('camo');
let Router = require('./router.js');
//let ContactUsRouter = require('./contactus/contactus_route');
let Api = require('./api.js');
let dbConfig = require('./configurations/database/db.js');
let app = express();
let path = require('path');
let mongoose = require('mongoose');
let session = require('express-session');
let RedisStore = require('connect-redis')(session);
let cookieParser = require('cookie-parser');
let User=require('./models/user');
let flash=require("connect-flash");
require('./configurations/passport/passport')(passport);

class App {

constructor(){
this.root = '/../../';
this.app= app;
this.config();
this.templates();
this.middlewares();

this.routes();
this.mongoConnect();
this.initSessionStorage();
   }

config(){
  //  let env = process.env.NODE_ENV || 'developement';
//    let root = this.root;
  this.app.use(passport.initialize());
 //this.app.use(express.static(join(__dirname, root, 'assests')));
  // persistent login sessions
 this.app.use(passport.session());
   this.app.use(flash());

}

templates(){

         this.app.engine('html', ejs.renderFile);
         this.app.set('view engine', 'html');
         this.app.use(express.static('views'));
     }


middlewares(){
  this.app.use(bodyParser.json());
  this.app.use(bodyParser.urlencoded({ extended: false }));
  this.app.use(cookieParser());
	this.app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
this.app.use(passport.initialize());
//this.app.use(flash());
this.app.use(passport.session());
}


routes(){
let router;
let api;
let contact;
router = new Router().router;
api = new Api().router;
//contact = new ContactUsRouter();
this.app.use(router);
this.app.use(api);
//this.app.use(new ContactUsRouter());
}


mongoConnect(){

    
    mongoose.connect(dbConfig.mongoUrl, function(err){
        if(err){
        console.log("Mongo connection failed" + err);}else{
            console.log("successfully connected");
        }
    });

    
    
  }

initSessionStorage(){
/*app.use(session({  
  store: new RedisStore({
    url: config.redisStore.url
  }),
  secret: config.redisStore.secret,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())  
app.use(passport.session())
*/
//passport.use(new LocalStrategy(User.authenticate()));
/*passport.use(new LocalStrategy( {
    usernameField: 'Email',
    passwordField: 'password',
	//passReqToCallback : true
  }, 
  function(username, password, done) {
	  console.log(username);
    User.findOne({ email: username }, function (err, user) {
      if (err) {
		  console.log(err);
        return done(err)
      }
      if (!user) {
        return done(null, false,req.flash('login', 'That email is wrong.'))
      }
      if (user.password!=password  ) {
        return done(null, false,req.flash('login', 'Oops !! Wrong password.'))
      }
	  else{
		  passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
      return done(null, user)}
    })
  }
));*/
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

}



}
module.exports = new App().app;
