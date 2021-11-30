const express = require('express');
const router = express.Router();
const storesController = require('../controller/storesController');

router.route('/').get(storesController.getAll)

module.exports = router;