const mongoose = require('mongoose');
//const { required } = require('nodemon/lib/config');
const Schema=mongoose.Schema;

//create schema
const paymentSchema = new Schema({

    c_name:{
        type:String,
        required:true
    },
    card_num:{
        type:String,
        required:true
    },
    exp_month:{
        type:String,
        required:true
    },
    exp_year:{
        type:String,
        required:true
    },
    cvc_num:{
        type:String,
        required:true
    },
  
    card_type:{
        type:String,
        required:true
    }
  

})
//send schema according to crate table
//"student" =table name
const payment=mongoose.model("payment",paymentSchema);
module.exports=payment;
//we have to export student model.because if not we cant use routes without student model
 