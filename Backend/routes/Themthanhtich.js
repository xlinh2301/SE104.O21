const express = require("express");

const router = express.Router();

const ThemthanhtichController = require("../controllers/themthanhvienController")

router.use('/', ThemthanhtichController.index)

module.exports = router;