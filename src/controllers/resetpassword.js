'use strict';
let User = require('../models/user');
class ResetPassword{
    
    
    
    reset(request,response){
        let url_email = request.query.id;
        response.render('enterpassword',{url_email:url_email});
    }
    
    
    
    
    
    
    
    
    
    resetP(request,response){
        let password = request.body.password;
        let re_enter_password =request.body.password1;
        let url_email = request.body.password2;
        User.findOneAndUpdate({email:url_email},{$set: {password:password}},(err,obj) =>{
            if(!obj){
                console.log(err);
                response.render('login');
            }else{
                response.render('thankyou_resetpassword');
            }
        });
       
    }
    
}



module.exports = new ResetPassword();