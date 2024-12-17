

const express = require('express');
const { leaderboard } = require('../services/leaderboard');

const router = express.Router();

router.get('/table', leaderboard);

module.exports = router;


