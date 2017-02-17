'use strict';
let  express = require('express');

let chapterUser = require('../models/chapters');
let applicationUser = require('../models/application_form');
let promise = require('promise');



class UserChapters{
   
    
    getUserChapters(request,response,next){
        var elements= [];
        console.log("In chapters");
        let session_id = request.session.passport.user._id;
        console.log("user session" + session_id);
        applicationUser.findOne({"userid":session_id},function(err,obj){
           if(obj){
               console.log(obj.course);
               let applicationcourseid= obj.course;
               //console.log("Application Course id "+applicationcourseid);
              chapterUser.find({"courseid":applicationcourseid},function(error,object){
                  if(object){
                      for( var i=0; i<object.length;i++){
                          console.log(object[i].chapterheading);
                          elements.push({chapterid: object[i]._id, chapterheading:object[i].chapterheading, chaptersubheading:object[i].chaptersubheading,chapterdescription:object[i].chapterdescription});
                      }
                      console.log(JSON.stringify(elements));
                      response.send(elements);
                  } else{
                      console.log("error" +  error);
                  }
              });
//               count.exec(function (err, object) {
//                   if (err) return handleError(err);
//                   console.log("Number of courses: "+object.length) ;
//               });
//            for(var i=0;i<object.length;i++){
//                console.log(object[i].chapterheading);
//            }
//               
               
           } else{
               console.log(err);
           }
        });
        
                                }
                                }

module.exports = new UserChapters();