const express = require('express');
const router = express.Router();

const timcard_controller = require('../controllers/timcard.controller');

router.post('/create', timcard_controller.timcard_create);

module.exports = router;
