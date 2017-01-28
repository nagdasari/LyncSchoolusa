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


class App {

constructor(){
this.root = '/../';
this.app= app;
this.config();
this.templates();
this.middlewares();
this.routes();
this.mongoConnect();
   }

config(){
  this.app.use(passport.initialize());

  // persistent login sessions
 this.app.use(passport.session());


}

templates(){

  this.app.set('views', path.join(__dirname, this.root, 'views'));
         this.app.engine('html', ejs.renderFile);
         this.app.set('view engine', 'html');
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
  camo.connect(dbConfig.mongoUrl).then(function(conn) {

              console.log("Mongo connected to ", dbConfig.mongoUrl, "successfully");
          }, function(err) {

              console.log("Mongo connected to ", dbConfig.mongoUrl, "failed");
          });
  }





}
module.exports = new App().app;
