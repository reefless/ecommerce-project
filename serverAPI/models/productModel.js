'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var UserScheme = new Schema({
    productName: {
        type: String,
        Required: 'Please enter'
    },
    price: {
        type: String,
        Required: 'Please enter'
    },
    imgURL: {
        type: String,
        Required: 'Please enter'
    },
    desc: {
        type: String,
        Required: 'Please enter'
    }
})
module.exports = mongoose.model("productInfo", UserScheme)
