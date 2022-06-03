const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CreateWcusSchema = new Schema({

    firstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Username:{
        type:String,
        required:true
    },
    CreatePW:{
        type:String,
        required:true
    },
    ConfirmPW:{
        type:String,
        required:true
    },

})

const CreateWCus = mongoose.model("CreateWCus_DB",CreateWcusSchema);
module.exports=CreateWCus;