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
               let count = chapterUser.find({"courseid":applicationcourseid});
               count.exec(function (err, course) {
                   if (err) return handleError(err);
                   console.log("Number of courses: "+course.length) ;
               });
            
               
               
           } else{
               console.log(err);
           }
        });
        
                                }
                                }

module.exports = new UserChapters();