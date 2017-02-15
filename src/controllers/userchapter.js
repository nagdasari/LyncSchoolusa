'use strict';
let chapterUser = require('../models/chapters');
let applicationUser = require('../models/application_form');
let promise = require('promise');



class UserChapters{
   //let elements =[]; 
    constructor(){
     //   this.elements = elements;
    }
    
    
    getUserChapters(request,response,next){
        console.log("In chapters");
        let session_id = request.session.passport.user._id;
        console.log("user session" + session_id);
        applicationUser.find({userid:session_id},(err,obj) =>{ if(!obj){
            console.log(err);
        }else{
            let did = new require('mongodb').ObjectID(obj.course);
            chapter.find({courseid:did}).each((error,object)=>{
                if(object){
                    chapterid= object._id;
                    console.log("In userchapters" + chapterid);
                    chapterheading= object.chapterheading;
                    console.log("In userchapters" + chapterheading);
                    chaptersubheading= object.chaptersubheading;
                    console.log("In userchapters" + chaptersubheading);
                    chapterdescription = object.chapterdescription;
                    console.log("In userchapters" + chapterdescription);
elements.push({chapterid:chapterid,chapterheading:chapterheading,chaptersubheading:chaptersubheading,chapterdescription:chapterdescription}).then(function(){
   response.send(elements); 
});
                    
                    
                    
                }else{
                    console.log("In userchapter.js file" + error);
                }
            });
            
        }
                                
                                });

    }
    
}


module.exports = new UserChapters();