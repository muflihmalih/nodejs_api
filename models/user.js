const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    name:{
        type: String,
    }
}, {timestamps:true})

module.exports = mongoose.model('User', userSchema)