const express = require('express')
const route = express.Router()

const{createProduct, update, remove, read} = require('../controllers/product')

route
.post('/add-product',createProduct)
.post("/read", read)
.put("/update", update)
.delete("/delete", remove)

module.exports = route