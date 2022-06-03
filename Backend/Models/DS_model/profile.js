const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const profileSchema = new Schema({
    Fname :{
        type : String,
        required : true
    },
    Lname :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    Pno:{
        type : Number,
        required : true
    },
    nic:{
        type : String,
        required : true
    },
    dob :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    tokens: [{
        token: {
          type: String,
          required: true,
        }
      }]  
 
});
 

 
 const profile = mongoose.model("Adminprofile",profileSchema);

module.exports = profile;
