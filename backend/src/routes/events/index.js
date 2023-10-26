const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/get', controller.fetchCalenderEvents)

module.exports = router