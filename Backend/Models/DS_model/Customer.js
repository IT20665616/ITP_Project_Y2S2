const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const customerSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },

    
    Reviews:{
        type : String,
        required : true
    },
   
    contactno:{
        type : Number,
        required : true
    }

    
    
})

const Customer = mongoose.model("Customer",customerSchema);

module.exports = Customer;
