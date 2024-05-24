const express = require("express");

const router = express.Router();

const LapbaocaoController = require("../controllers/lapbaocaoController")

router.use('/', LapbaocaoController.index)

module.exports = router;