const mongoose = require("mongoose");

const FurnitureSchema = new mongoose.Schema({
    Product:{
        type: String,
        required:true
    },
    Price:{
        type: Number,
        required:true
    },
    Color:{
        type: String,
    },
    Material:{
        type:String
    },
    Brand:{
        type:String
    }
    
})
module.exports= furniture 