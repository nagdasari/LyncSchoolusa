'use strict';
let  express = require('express');
//var MongoClient = require('mongodb').MongoClient;
let chapterUser = require('../models/chapters');

let videoUser = require('../models/vidoes');
//let applicationUser = require('../models/application_form');
let promise = require('promise');
//let configuration = require('../configurations/database/db.js');




class UserVideos{
   
    
    getUserVideos(request,response,next){
        var data ={};
        console.log("In videos");
        var video_token = JSON.stringify(request.body.var1);
        var video_token_final = video_token.replace('"',"").replace('"',"");
        console.log(" final token value " + video_token_final);
        videoUser.findOne({chapterid:video_token_final},(err1,obj1)=>{
            if(obj1){
                //console.log(obj1.videodetails);
                 data.videoid = obj1._id;
                data.videourl = obj1.url;
                data.videodetails = obj1.videodetails;
                data.videoviewmorecontent =  obj1.viewmorecontent;
                response.send(data);
            }else{
                console.log(err1);
            }
        });
        
      
                                }
                              }

module.exports = new UserVideos();