'use strict';
let  express = require('express');
//var MongoClient = require('mongodb').MongoClient;
let chapterUser = require('../models/chapters');

//let videoUser = require('../models/vidoes');
//let applicationUser = require('../models/application_form');
let promise = require('promise');
//let configuration = require('../configurations/database/db.js');




class UserVideos{
   
    
    getUserVideos(request,response,next){
        var data ={};
        console.log("In videos");
        var video_token = JSON.stringify(request.body.var1);
        console.log("sanju"+ video_token);
  //  var vi = new require('mongodb').ObjectID(video_token);
    //    console.log("hey"+vi);
        var video_token_final = video_token.replace('"',"").replace('"',"");
        console.log(" final token value " + video_token_final);
        var vi = new require('mongodb').ObjectID(video_token_final);
        console.log("helloworld" + vi);
        chapterUser.findOne({_id:vi},(err1,obj1)=>{
          if(obj1){
              console.log(" in obj1");
    data.chapterid = obj1._id;
    console.log("california" +  data.chapterid);
    data.chapterheading = obj1.chapterheading;
    console.log("california" +  data.chapterheading);
    data.chaptersubheading = obj1.chaptersubheading;
    console.log("california" +  data.chaptersubheading);
    data.videourl = JSON.stringify(obj1.url);
    console.log("california" +  data.videourl);
    data.videodetails = JSON.stringify(obj1.videodetails);
    console.log("california" +  data.videodetails);
data.videoviewmorecontent =  JSON.stringify(obj1.viewmorecontent);
console.log("california" +  data.videoviewmorecontent);
                response.send(data);
            }else{
                console.log(err1);
            }               
                            
        
});


    }
}
        
     /*  videoUser.findOne({chapterid:video_token_final},(err1,obj1)=>{
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
        
        */
        
/*chapterUser.aggregate([
    { "$lookup": { 
        "from": videoUser, 
        "localField": chapterUser._id, 
        "foreignField": videoUser.chapterid, 
        "as": "collection2_doc"
    }}, 
    { "$unwind": "$collection2_doc" },
     
    { "$project": { 
        
        "chapterheading": 1, 
        "chaptersubheading": 1, 
        
        "url": "$collection2_doc.url", 
        "videodetails": "$collection2_doc.videodetails",
        "viewmorecontent": "$collection2_doc.viewmorecontent"
    }}
],(err,obj)=>{
    if(obj){
                //console.log(obj1.videodetails);
                 //data.videoid = obj._id;
        data.chaptername = obj.chapterheading;
        data.chaptersubheading= obj.chaptersubheading;
        data.videourl = obj.url;
                data.videodetails = obj.videodetails;
                data.videoviewmorecontent =  obj.viewmorecontent;
        console.log("Data from  aggregate: "+JSON.stringify(data));
                response.send(data);
            }else{
                console.log(err);
            }
});    
        
      
                                }
                              }  */

module.exports = new UserVideos();



//db.chapters.aggregate([
//    { "$lookup": { 
//        "from": "videos", 
//        "localField": "_id", 
//        "foreignField": "chapterid", 
//        "as": "collection2_doc"
//    }}, 
//    { "$unwind": "$collection2_doc" },
//     
//    { "$project": { 
//        "chapterheading": 1, 
//        "chaptersubheading": 1, 
//        "url": "$collection2_doc.url", 
//        "videodetails": "$collection2_doc.videodetails",
//        "viewmorecontent": "$collection2_doc.viewmorecontent"
//    }}
//])