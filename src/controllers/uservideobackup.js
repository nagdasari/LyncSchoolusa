'use strict';
let  express = require('express');
var MongoClient = require('mongodb').MongoClient;

let videoUser = require('../models/vidoes');
//let applicationUser = require('../models/application_form');
let promise = require('promise');
let configuration = require('../configurations/database/db.js');




class UserVideos{
   
    
    getUserVideos(request,response,next){
        var elements= [];
        console.log("In videos");
        var video_token = JSON.stringify(request.body.var1);
        var video_token_final = video_token.replace('"',"").replace('"',"");
        console.log(" final token value " + video_token_final);
        MongoClient.connect(configuration.mongoUrl,function (err,db) {
            if(db){
                 db.collection('videos').findOne({"chapterid": video_token_final},function(error,object){
                     if(object){
                         console.log(object.videodetails);
                     }else{
                         console.log(error);
                     }
                     
                     
                 });
 
            }else{
                console.log(err);
            }
        });
        
        
                                }
                              }

module.exports = new UserVideos();