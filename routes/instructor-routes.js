const express = require("express");
const router = express.Router();
const Instructor = require("../models/Instructor");
const instructorController = require("../controllers/instructor-controller");



//These routes are created for CRUD operations on Instructor

router.get("/", instructorController.getAllInstructors);
router.post("/", instructorController.addInstructor);
router.get("/:id", instructorController.getById);
router.put("/:id", instructorController.updateInstructor);
router.delete("/:id", instructorController.deleteInstructor);


module.exports = router;