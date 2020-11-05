const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    productName:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    quantity:{
        type: Number,
        required:true
    },
    description:{
        type: String,
        required:true
    }

}, {timestamps:true})

module.exports = mongoose.model('Product', productSchema)