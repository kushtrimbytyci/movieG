const mongoose = require('mongoose')

const UsermSchemaa = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    message:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model('Uses',UsermSchemaa)