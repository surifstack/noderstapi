const mongoose = require("mongoose");
const { default: validator } = require("validator");
const validate = require("validator");

const stduentsSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
        minlength : 4,

    },
    email : {
        type : String,
        required : true,
        unique : [true , "The Email is Registered"],
       

    },

    phone : {
        type : Number,
        required : true,
         minlength:10,
        
        unique : [true , "The Mobile Number is Reistered"]
    },
    address : {
        type : String,
        required : true

    }

});
const Students = new mongoose.model("StudentData" , stduentsSchema);

module.exports = Students;