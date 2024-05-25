const express = require("express");

const router = express.Router();

const UserController = require("../controllers/userController")

router.use('/', UserController.index)

module.exports = router;