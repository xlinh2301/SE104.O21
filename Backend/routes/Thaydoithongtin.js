const express = require("express");
const router = express.Router();
const ThaydoithongtinController = require("../controllers/thaydoithongtinController");

router.use('/search', ThaydoithongtinController.search);
router.use('/update', ThaydoithongtinController.update);

module.exports = router;
