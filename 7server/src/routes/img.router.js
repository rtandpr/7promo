const express = require("express");
const {
  createImg,
  getImgByidUser
} = require("../controller/img.controller");
const router = express.Router();

//router.get("/totalUsuarios", getUsers);
router.post("/createImg", createImg);
router.post("/getImgByidUser", getImgByidUser);


module.exports = router;