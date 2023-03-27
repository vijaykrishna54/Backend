require('dotenv').config();
const cors = require('cors');
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');


//import routes
const authRoutes = require("./routes/clubAdmin-routes");
const instructorRoutes = require("./routes/instructor-routes");
const traineeRoutes = require("./routes/trainee-routes");



//Middlewares
app.use(express.json()); //alows to pass a JSON
app.use(express.urlencoded());
app.use(cors({credentials: true, origin : "http://localhost:3000"}));
app.use(cookieParser());
app.use("/instructors", instructorRoutes); // Which means => localhost:5000/instructors
app.use("/trainees",traineeRoutes ); // Which means => localhost:5000/trainees
app.use("/auth", authRoutes); //Which means => localhost:5000/auth


//Connection to monogo database

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connection to database is successfull!");

    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
}).catch((error)=>{
    console.log(error);
});
