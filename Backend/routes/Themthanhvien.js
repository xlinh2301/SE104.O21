const express = require("express");

const router = express.Router();

const ThemthanhvienController = require("../controllers/themthanhvienController")

router.use('/', ThemthanhvienController.index)

module.exports = router;