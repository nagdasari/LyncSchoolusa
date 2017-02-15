
let express = require('express');
let bodyParser = require('body-parser');
let ejs = require('ejs');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let camo = require('camo');
let Router = require('./router.js');
let UserRoutes = require('./controllers/users/usersroutes.js');
//let UserRoutes = require('./usersroutes.js');
let ContactRoutes = require('./controllers/contact/contactroutes.js');
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
//this.initSessionStorage();
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
let userroutes;
let contact;
router = new Router().router;
api = new Api().router;
userroutes = new UserRoutes().router;
contact = new ContactRoutes().router;
this.app.use(contact);    
this.app.use(userroutes);
this.app.use(router);
this.app.use(api);
}


mongoConnect(){

    
    mongoose.connect(dbConfig.mongoUrl, function(err){
        if(err){
        console.log("Mongo connection failed" + err);}else{
            console.log("successfully connected");
        }
    });

    
    
  }




}
module.exports = new App().app;
