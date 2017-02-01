'use strict';
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


class App {

constructor(){
this.root = '/../../';
this.app= app;
this.config();
this.templates();
this.middlewares();
this.routes();
this.mongoConnect();
   }

config(){
  //  let env = process.env.NODE_ENV || 'developement';
//    let root = this.root;
  this.app.use(passport.initialize());
 //this.app.use(express.static(join(__dirname, root, 'assests')));
  // persistent login sessions
 this.app.use(passport.session());
   // app.use(flash());

}

templates(){

         this.app.engine('html', ejs.renderFile);
         this.app.set('view engine', 'html');
         this.app.use(express.static('views'));
     }


middlewares(){
  this.app.use(bodyParser.json());
  this.app.use(bodyParser.urlencoded({ extended: false }));
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





}
module.exports = new App().app;
