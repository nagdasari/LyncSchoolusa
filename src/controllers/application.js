'use strict';

let applyUser = require('../models/application_form');
let promise = require('promise');


class Application{
    
    userApplication(request,response,next){
        console.log("In app");
        let createdat = new Date();
        let apply_user = new applyUser({
            userid: request.session.passport.user._id,
            firstname :request.body.fname,
            lastname : request.body.lname,
            email : request.body.email,
            mobilenumber : request.body.mobile,
           address : request.body.add,
           city : request.body.city,
          state : request.body.state,
          course :request.body.course,
         program : request.body.program,
            createdat : createdat
        }).save((error) => {if(error) {
            console.log(error);
        }else{
            console.log("Application form has been submitted successfully");
            return response.redirect('/user');
        }        });
        
        
        
        
      
    }
    
    
}


module.exports = new Application();