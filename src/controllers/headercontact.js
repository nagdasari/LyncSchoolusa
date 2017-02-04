'use strict';

let headerC = require('../models/header_contactus');


class HeaderContact{
    
    
    HeaderContact(request,response){
        
        let name = request.body.name;
        let email =  request.body.email;
        let message = request.body.message;
        let phone = request.body.Phone-Number;
       
        let new_user = new headerC({
            name:name,
            email:email,
            message:message,
            phone:phone
        }).save((error) =>{
               if(error){
            console.log('/');
        } else{
            response.render('contact_thankyou');
        }        });
        
    }
    
    
    
}


module.exports = new HeaderContact;