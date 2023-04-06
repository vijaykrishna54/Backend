const trainee = require("../models/trainee");
const Trainee = require("../models/trainee");


const getAllTrainees = async (req, res, next) => {
        let trainees;
    try{
        trainees = await Trainee.find();
    }catch(err){
        console.log(err);
    }

    if(!trainee){
        return res.status(400).json({message : "No Trainess found"});
    }
    return res.status(200).json({trainees});
}


//This is a controller funtion to get trainee by ID
const getById = async (req, res, next) => {
    const id = req.params.id;
    let trainee;
    try {
      trainee = await Trainee.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!trainee) {
      return res.status(404).json({ message: "No trainees found" });
    }
    return res.status(200).json({ trainee });
  };
  
  
  //This is a controller funtion to add trainee to database
  const addTrainee = async (req, res, next) => {
    const { name, email, description, contact, image } = req.body;
    let trainee;
    try {
      trainee = new Trainee({
        name,
        email,
        description,
        contact,
        image
      });
      await trainee.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!trainee) {
      return res.status(500).json({ message: "Unable To Trainee" });
    }
    return res.status(201).json({ trainee });
  };
  
  //This controller funtion is to find trainee by ID and update details
  const updateTrainee = async (req, res, next) => {
    const id = req.params.id;
    const { name, email, description, contact, image } = req.body;
    let trainee;
    try {
      trainee = await Trainee.findByIdAndUpdate(id, {
          name,
          email,
          description,
          contact,
          image
      });
      trainee = await trainee.save();
    } catch (err) {
      console.log(err);
    }
    if (!trainee) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ trainee });
  };
  
  
  //This controller funtion is to find trainee by Id and remove the profile
  const deleteTrainee = async (req, res, next) => {
    const id = req.params.id;
    let trainee;
    try {
      trainee = await Trainee.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!trainee) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Trainee profile is  Successfully removed" });
  };
  
  
  //Export all the above controller functions to other files of this project
  exports.getAllTrainees = getAllTrainees;
  exports.addTrainee = addTrainee;
  exports.getById = getById;
  exports.updateTrainee = updateTrainee;
  exports.deleteTrainee = deleteTrainee;
  