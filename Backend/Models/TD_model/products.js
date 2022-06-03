const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productCode :{
        type : String,
        required: true
    },
    productName :{
        type : String,
        required: true
    },
    description:{
        type: String,
         required:true
    },
    quantity:{
        type:Number,
        required:true
     
    },
    damagedQuantity:{
        type:Number
    }
    

})
const products = mongoose.model("productstock",productSchema);
module.exports=products; 