// routes/index.js

const express = require("express");

const router = express.Router();

const LoginController = require("../controllers/loginController")

router.use('/', LoginController.index)

module.exports = router;  