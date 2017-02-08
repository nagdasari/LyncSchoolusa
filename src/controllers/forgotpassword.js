'use strict';
let User = require('../models/user');
let nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');
let promise = require('promise');
let userName = 'lyncschoolusa@gmail.com';
let password = 'lyncschool123';
let transport = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
        host: 'smtp.gmail.com',
        port: 587,
        user: userName,
        pass: password
    }
}));

class ForgotPassword{
    
    sendForgotLink(request,response){
        
        let email = request.body.password;
       // let url_email = request.query.id;
        let hostname = request.get('host');
            User.findOne({email:email},(err,obj) =>{
            if(!obj){
                response.render('forgotpswd');
            }else{
        let link = "http://" + hostname + "/forgotP?id=" + email;
        let mailOptions = {
                        from: userName,
                        to: email,
                        subject: "[Lync School]" + " " + " Please click on the link to reset your password",
                        html:  "<a href=" + link + ">Click here </a>", 
			  
        }
        transport.sendMail(mailOptions,  (error, response1) => {
                           if (error) {
                                 console.log(error);
            
                             } else {
                                 response.render('forgotpass_verificationlink');
              
            }
        });
      
                
                
            }
        });
        
    }
    
}

module.exports = new ForgotPassword();