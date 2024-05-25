const express = require("express");

const router = express.Router();

const CaygiaphaController = require("../controllers/caygiaphaController")

router.use('/', CaygiaphaController.index)

module.exports = router;