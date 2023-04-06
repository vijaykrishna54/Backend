const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  verifyToken,
  getAdmin,
  refreshToken,
  logout,
} = require("../controllers/admin-controller");


//This is to test if auth routers are working
router.get("/test", (req,res)=>{
  res.send("Welcome to Sportify! Authentication routes are working!");
});

router.post("/signup", signup);
router.post("/login", login);
router.get("/admin", verifyToken, getAdmin);
router.get("/refresh", refreshToken, verifyToken, getAdmin);
router.post("/logout", verifyToken, logout);
module.exports = router;
