'use strict';

let User = require('../models/user');

class Verify{
    
    verifyUser(request,response){
        let verifyToken = request.query.id;
        console.log(verifyToken);
        User.findOne({email:verifyToken},(err,obj) =>{
            if(!obj){
                response.render('login');
            }else{
                User.update({"verify_user" : true}, (error,result) =>{
                            if(result) response.render('verify');
                    else response.render('login');
                            });
            }
        });
       
    }
    
}



module.exports = new Verify();