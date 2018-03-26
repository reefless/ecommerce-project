'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var UserScheme = new Schema({
    firstname: {
        type: String,
        Required: 'Please enter'
    },
    lastname: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type: String,
        Required: 'Please enter'
    },
    username: {
        type: String,
        Required: 'Please enter'
    },
    password: {
        type: String,
        Required: 'Please enter'
    },
    role: {
        type: String,
    }
})
module.exports = mongoose.model("userlogin", UserScheme)
