const express = require("express");

const router = express.Router();

const TracuuController = require("../controllers/tracuuController")

router.post('/', TracuuController.tracuu)

module.exports = router;