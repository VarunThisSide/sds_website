const express = require("express");
const router = express.Router();
const { subscribeUser } = require('../controllers/newsletterController');

router.post('/subscribe', subscribeUser);

module.exports = router;