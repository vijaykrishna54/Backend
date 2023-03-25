const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const InstructorSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        },
    password : {
        type : String,
       },
       
    description : {
        type: String,
        required : false,
        },
    contact : {
        type : Number,
        required : false,
        },
    image : {
        type : String,
        required : false,
    },
    available : {
        type : Boolean,
    },
    },
    {
            timestamps : true
    });

module.exports = mongoose.model("Instructor", InstructorSchema);

//In mongoDB, it will model will be stored as instructors