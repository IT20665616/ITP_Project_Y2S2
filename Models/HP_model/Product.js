const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name : {
        type : String,
        required : true
    },

    product_code : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    imageUrl:{
        type: String,
        required : true
    },

    price : {
        type : Number,
        required : true
    }
})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;