const express = require('express');
const router = express.Router();

const timcard_controller = require('../controllers/timcard.controller');

router.post('/create', timcard_controller.timcard_create);
router.get('/:id', timcard_controller.timcard_read);
router.put('/:id/update', timcard_controller.timcard_update);
router.delete('/:id/delete', timcard_controller.timcard_delete);

module.exports = router;
