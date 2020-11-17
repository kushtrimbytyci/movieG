const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth");
const { register, login, getme } = require("../Controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/me").get(protect, getme);

module.exports = router;
