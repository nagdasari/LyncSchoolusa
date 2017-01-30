'use strict';

let User = require('../models/user');
let nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');
let promise = require('promise');




class SaveUser{
    
      registerUser(request,response,next){
       
        
        let firstname = request.body.Name;
        let lastname =  request.body.LastName;
        let email = request.body.Email;
        let password = request.body.password;
        let createdat = new Date();

                  let new_user = new User({
                          firstname:firstname,
                          lastname: lastname,
                          email:email,
                          password : password,
                          createdat: createdat

                         }).save((error)=>{
                             if(error) {
                                 console.log(error);
                                    }else{
                                      console.log("User has been saved successfully");
                                  }
            
                   }).then(()=>{
response.render('login');
                      
                  });
  
        
        
        }
    
}


module.exports = new SaveUser();