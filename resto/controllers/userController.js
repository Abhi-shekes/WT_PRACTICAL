const express = require('express');
const db = require('../config/db');

const router = express.Router();

router.post('/loginreq', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM Users WHERE email = ?';
  
  db.query(query, [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error logging in.' });
    if (results.length === 0) return res.status(404).json({ message: 'User not found.' });
    
    if (password === results[0].password) {
      req.session.user = { id: results[0].id, username: results[0].username };
      res.status(200).json({ message: 'Login successful!', user: req.session.user });
    } else {
      res.status(401).json({ message: 'Incorrect password.' });
    }
  });
});

router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please fill all fields.' });
  }

  const query = 'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)';
  db.query(query, [username, email, password], (err, result) => {
    if (err) return res.status(500).json({ message: 'Error signing up user.' });
    res.status(200).json({ success: true, message: 'User signed up successfully!' });
  });
});

module.exports = router;
