const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const wCustomerSchema = new Schema({

    Business_name :{
        type : String,
        //backend validations
        required :true
    },
    phone :{
        type: Number,
        required : true
    },
    Email :{
        type: String,
        required :true
    },
    Website :{
        type: String,
        required :false
    },
    Shipping_address :{
        type : String,
        required : true
    },
    Tranding_since:{
        type : String,
        required : true
    },
    Type_of_Businss:{
        type : String,
        required: true
    },
    Preferred_Payment:{
        type : String,
        required : true
    },
    Business_Representative_name :{
        type: String,
        required : true
    },
    Business_Representative_address :{
        type : String,
        required : true
    },
    Business_Representative_Tel:{
        type: Number,
        required: true
    },
    Business_Representative_Signature:{
        type: String,
        required : true
    },


})

const wCustomer = mongoose.model("wholesaleCustomer_DB",wCustomerSchema);
module.exports = wCustomer;

