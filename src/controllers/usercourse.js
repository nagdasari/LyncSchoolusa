'use strict';
let applicationUser = require('../models/application_form');
let MongoClient = require('mongodb').MongoClient;
//let courses = require('../models/courses');
let configuration = require('../configurations/database/db.js');
   let data={};
   let courseid;

class UserCourse{
 
    getUserCourse(request,response,next){
        let session_id = request.session.passport.user._id;
        console.log("user session" + session_id);
        
        
        MongoClient.connect(configuration.mongoUrl,function (err,db) {
        
            console.log("Biscuit DB Connected");
        
        
        applicationUser.findOne({userid:session_id},(err,obj) => {
            if(!obj) { console.log(err); }
            else { 
                courseid = obj.course;
                var did = new require('mongodb').ObjectID(courseid);
                console.log("course id" + did);
                db.collection('courses').findOne({"_id":did},(error,object)=>{
                    if(!object) {
                        console.log(error);
                    }else{
                       data.coursename = object.course_name;
                       data.courseimage = object.course_image;
                       data.course_description = object.course_description;
                       response.send(data);    
                    }
                });
                
                 }
        });
        
        
        
        
        
        
        });
        
        
        
        
        
        
    }
    
    
}


module.exports = new UserCourse();