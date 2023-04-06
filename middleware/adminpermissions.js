const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

const requiresAuth = async (req, res, next) => {
  const token = req.cookies["access-token"];
  let isAuthed = false;

  if (token) {
    //our logic is written here
    try {
      const { adminId } = jwt.verify(token, process.env.JWT_SECRET);

      try {
        const admin = await Admin.findById(adminId);

        if (admin) {
          const adminToRetun = { ...admin._doc };
          delete adminToRetun.password;
          req.admin = adminToRetun;
          isAuthed = true;
        }
      } catch {
        isAuthed = false;
      }
    } catch {
      isAuthed = false;
    }
  }

  if (isAuthed) {
    return next();
  } else {
    return res.status(401).send("Unauthorized Access!");
  }
};

module.exports = requiresAuth;
