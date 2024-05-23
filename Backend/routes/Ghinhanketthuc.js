const express = require("express");

const router = express.Router();

const GhinhanketthucController = require("../controllers/ghinhanketthucController")

router.use('/', GhinhanketthucController.index)

module.exports = router;