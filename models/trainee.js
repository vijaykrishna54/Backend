const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TraineeSchema = new Schema ({

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
        required : false,
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
        required : true,
        
    },
    available : {
        type : Boolean,
    }
    },
    {
            timestamps : true


});


module.exports = mongoose.model("Trainee", TraineeSchema);