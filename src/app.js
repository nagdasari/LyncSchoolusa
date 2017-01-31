'use strict';
let express = require('express');
let bodyParser = require('body-parser');
let ejs = require('ejs');
let passport = require('passport');
let camo = require('camo');
let Router = require('./router.js');
let Api = require('./api.js');
let dbConfig = require('./configurations/database/db.js');
let app = express();
let path = require('path');
let mongoose = require('mongoose');

//import es6Promise from 'es6-promise';
//mongoose.Promise = es6Promise.Promise;


class App {

constructor(){
//this.root = '/../';
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
router = new Router().router;
api = new Api().router;
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
