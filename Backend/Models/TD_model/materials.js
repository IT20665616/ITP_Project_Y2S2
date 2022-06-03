const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const materialSchema = new Schema({
    materialCode :{
        type : String,
        required: true
    },
    materialName :{
        type : String,
        required: true
    },
    description:{
        type:String,
        required:true
     
    },
    quantity:{
        type: Number,
         required:true
    },
    
    reOrderingLevel:{
        type:Number,
        required:true
    },
    
    reOrderingQuantity:{
        type:Number,
        required:true
    },
    
    damagedQuantity:{
        type:Number
    }
    

})
const materials = mongoose.model("materialstock",materialSchema);
module.exports=materials; 