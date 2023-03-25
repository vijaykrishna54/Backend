// const Instructor = require("../models/Instructor");
// const jwt = require("jsonwebtoken");

// const requiresAuth = async (req, res, next) => {
//   const token = req.cookies["access-token"];
//   let isAuthed = false;

//   if (token) {
//     //our logic is written here
//     try {
//       const { instructorId } = jwt.verify(token, process.env.JWT_SECRET);

//       try {
//         const instructor = await Instructor.findById(instructorId);

//         if (instructor) {
//           const instructorToRetun = { ...instructor._doc };
//           delete instructorToRetun.password;
//           req.instructor = instructorToRetun;
//           isAuthed = true;
//         }
//       } catch {
//         isAuthed = false;
//       }
//     } catch {
//       isAuthed = false;
//     }
//   }

//   if (isAuthed) {
//     return next();
//   } else {
//     return res.status(401).send("Unauthorized Access!");
//   }
// };

// module.exports = requiresAuth;
