'use strict'
module.exports = function(app){
    var userLogin = require('../controllers/loginController')
    var product = require('../controllers/productController')
    app.route('/login')
        .post(userLogin.checkRole)
    app.route('/register')
        .post(userLogin.addUser)
    app.route('/addProduct')
        .post(product.addProduct)
    app.route('/getProducts')
        .get(product.getProducts)
    app.route('/getProduct/:productId')
        .get(product.getAProduct)
}
