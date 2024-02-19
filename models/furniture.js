const mongoose = require("mongoose");

const FurnitureSchema = new mongoose.Schema({
    product:{
        type: String,
        required:true
    },
    color:{
        type: String,
    },
    material:{
        type:String
    },
    brand:{
        type:String
    },
    description:{
       type:String
    },
    price:{
        type:Number
    }
    
})
module.exports= Furniture = mongoose.model('furniture',FurnitureSchema)