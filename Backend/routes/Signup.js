const express = require("express");

const router = express.Router();

const SignupController = require("../controllers/signupController")

router.use('/', SignupController.index)

module.exports = router;  