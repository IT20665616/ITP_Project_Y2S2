const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    first_name :{
        type : String,
        required: true
    },
    last_name :{
        type : String,
        required: true
    },
    email :{
        type: String,
        required: true
    },
    inquiry :{
        type: String,
        required: true
    }

})

const Customer_i = mongoose.model("Inquiry",customerSchema);

module.exports = Customer_i;