const express = require('express');
const db = require('../config/db');

const router = express.Router();

router.get('/menu-items', (req, res) => {
  db.query('SELECT * FROM Menu WHERE available = TRUE', (err, results) => {
    if (err) return res.status(500).json({ message: 'Error retrieving menu.' });
    res.json(results);
  });
});

module.exports = router;
