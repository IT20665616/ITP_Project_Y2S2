const mongoose = require('mongoose');
//const { required } = require('nodemon/lib/config');
const Schema=mongoose.Schema;

//create schema
const cashDelSchema = new Schema({

    d_cus:{
        type:String,
        required:true
    },
    dc_phone:{
        type:String,
        required:true
    },
    inputAddress:{
        type:String,
        required:true
    },
    inputAddress2:{
        type:String,
        required:true
    },
    inputCity:{
        type:String,
        required:true
    },
    inputState:{
        type:String,
        required:true
    },
    inputZip:{
        type:String,
        required:true
    },
})
//send schema according to crate table
//"student" =table name
//when table addd to mongo db it should be plural and all are simple letters
const cashDel=mongoose.model("cashDel",cashDelSchema);
module.exports=cashDel;
//we have to export student model.because if not we cant use routes without student model
 