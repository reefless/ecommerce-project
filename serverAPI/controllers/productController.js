'use strict'
var mongoose = require('mongoose')
User2 = mongoose.model('productInfo')

exports.addProduct = function(req, res){
    var info = req.body
    var newUser = User2({productName: info.productName, price: info.price, imgURL: info.imgURL, desc: info.desc})
    newUser.save(function(err, user){
        if(err) console.log("Error in checkUser")
        console.log(user)
        res.json(user)
    })
}
exports.getProducts = function(req, res){
    User2.find({},function(err, user){
        if(err) console.log("Error in checkUser")
        console.log("Getting products")
        res.json(user)
    })
}
exports.getAProduct = function(req, res){
    User2.findById(req.params.productId,function(err, user){
        if(err) console.log("Error in checkUser")
        console.log(user)
        res.json(user)
    })
}
