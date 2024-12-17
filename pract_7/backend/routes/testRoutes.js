
const express = require('express');
const { submitTest } = require('../services/testServices');

const router = express.Router();

router.post('/submit', submitTest);

module.exports = router;
