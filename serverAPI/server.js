var express = require('express')
app = express()
port = process.env.PORT || 3000
mongoose = require('mongoose')
bodyParser = require('body-parser')
User = require('./models/userModel')
User2 = require('./models/productModel')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/local', function(error){
    if(error) throw error
    console.log('Successfully connected')
})

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routes = require('./routes/serverRoute')
routes(app)

app.listen(port)
console.log("Connect to server port: " + port)