const express = require("express");

const router = express.Router();

const TracuuController = require("../controllers/tracuuController")

router.use('/', TracuuController.index)

module.exports = router;