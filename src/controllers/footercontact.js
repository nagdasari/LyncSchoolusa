'use strict';

let footerC = require('../models/footer_contactus');


class FooterContact{
    
    
    FooterContact1(request,response){
        
        console.log(" Hey");
        let name = request.body.name;
        let email =  request.body.email;
        let message = request.body.message;
       
        let new_user = new footerC({
            name:name,
            email:email,
            message:message
        }).save((error) =>{
               if(error){
            console.log('/');
        } else{
            response.render('contact_thankyou');
        }        });
        
    }
    
    
    
}


module.exports = new FooterContact;