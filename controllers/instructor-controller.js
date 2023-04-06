const Instructor = require("../models/Instructor");


//This is a controller funtion to get all instructors
const getAllInstructors = async (req, res, next) => {
  let instructors;
  try {
    instructors = await Instructor.find();
  } catch (err) {
    console.log(err);
  }

  if (!instructors) {
    return res.status(404).json({ message: "No Instructors found" });
  }
  return res.status(200).json({ instructors });
};

//This is a controller funtion to get instructor by ID
const getById = async (req, res, next) => {
  const id = req.params.id;
  let instructor;
  try {
    instructor = await Instructor.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!instructor) {
    return res.status(404).json({ message: "No instructors found" });
  }
  return res.status(200).json({ instructor });
};


//This is a controller funtion to add instructor to database
const addInstructor = async (req, res, next) => {
  const { name, email, description, available, image, contact } = req.body;
  let instructor;
  try {
    instructor = new Instructor({
      name,
      email,
      description,
      available,
      image,
      contact,
    });
    await instructor.save();
  } catch (err) {
    console.log(err);
  }

  if (!instructor) {
    return res.status(500).json({ message: "Unable To add Instructor" });
  }
  return res.status(201).json({ instructor });
};

//This controller funtion is to find instructor by ID and update details
const updateInstructor = async (req, res, next) => {
  const id = req.params.id;
  const { name, email , description, available, image, contact } = req.body;
  let instructor;
  try {
    instructor = await Instructor.findByIdAndUpdate(id, {
        name,
        email,
        description,
        available,
        image,
        contact,
    });
    instructor = await instructor.save();
  } catch (err) {
    console.log(err);
  }
  if (!instructor) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ instructor });
};


//This controller funtion is to find instructor by Id and remove the profile
const deleteInstructor = async (req, res, next) => {
  const id = req.params.id;
  let instructor;
  try {
    instructor = await Instructor.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!instructor) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Instructor profile is  Successfully removed" });
};


//Export all the above controller functions to other files of this project
exports.getAllInstructors = getAllInstructors;
exports.addInstructor = addInstructor;
exports.getById = getById;
exports.updateInstructor = updateInstructor;
exports.deleteInstructor = deleteInstructor;
