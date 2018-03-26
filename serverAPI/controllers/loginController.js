'use strict'
var mongoose = require('mongoose')
User = mongoose.model('userlogin')

exports.checkRole = function(req, res){
    var login = req.body
    User.findOne({username: login.username, password: login.password}, function(err, user){
        if(err) console.log("Error in checkUser")
        if(user){
            var response = {
                role: user.role,
                id: user._id
            }
        }else{
            response = {
                role: "none",
                id: "none"
            }
        }
        res.json(response)
    })
}

exports.addUser = function(req, res){
    var login = req.body
    var newUser = User({firstname: login.firstname,lastname: login.lastname,email: login.email,username: login.username, password: login.password, role: "customer"})
    newUser.save(function(err, user){
        if(err) console.log("Error in addUser")
        console.log(user)
        res.json(user)
    })
}