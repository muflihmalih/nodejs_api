const express = require('express')
const route = express.Router()

const{createProduct} = require('../controllers/product')

route
.post('/add-product',createProduct)

module.exports = route