const express = require('express'); 
const loginRouter = express.Router();
//const user = require('../data/user');
const userdata = require('../model/UserModel');

loginRouter.get('/',function(req,res){

    res.render('login',{});
    
})


loginRouter.post("/check",function(req,res){
    var checkuser = {
        uid:req.body.uid,
        pwd:req.body.pwd
    };
    
    console.log(checkuser);

//    var flagg = user.find((e)=>{

    userdata.find({uid:req.body.uid,pwd:req.body.pwd}, function (err, data) {
       
        if (err) {
            res.json({ status: "Failed" });
        }
        else if (data.n == 0) {
            res.redirect("/signup");
        }
        else {
            res.redirect("/home")
        }

    }) 


});




module.exports = loginRouter;


