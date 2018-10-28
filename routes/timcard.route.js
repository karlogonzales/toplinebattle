const express = require('express');
const router = express.Router();

const timcard_controller = require('../controllers/timcard.controller');

router.get('/', timcard_controller.test);

module.exports = router;