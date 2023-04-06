const express = require("express");
const router = express.Router();
const Trainee = require("../models/trainee");
const traineeController = require("../controllers/trainee-controller");



//These routes are created for CRUD operations on Trainee

router.get("/", traineeController.getAllTrainees);
router.post("/", traineeController.addTrainee);
router.get("/:id", traineeController.getById);
router.put("/:id", traineeController.updateTrainee);
router.delete("/:id", traineeController.deleteTrainee);


module.exports = router;