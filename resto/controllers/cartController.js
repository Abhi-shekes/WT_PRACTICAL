const express = require('express');
const db = require('../config/db');

const router = express.Router();

router.get('/cart-items', (req, res) => {
  if (!req.session.user) return res.status(401).json({ message: 'User not logged in.' });
  
  const userId = req.session.user.id;
  const query = `
    SELECT Cart.*, Menu.item_name, Menu.price 
    FROM Cart 
    JOIN Menu ON Cart.menu_id = Menu.menu_id 
    WHERE Cart.user_id = ?
  `;
  
  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error retrieving cart.' });
    res.json(results);
  });
});


router.post('/add-to-cart', (req, res) => {
    if (!req.session.user) return res.status(401).json({ message: 'User not logged in' });
  
    const userId = req.session.user.id;
    console.log(userId);
    const { menu_id, quantity } = req.body;
  
    const query = `INSERT INTO Cart (user_id, menu_id, quantity) VALUES (?, ?, ?)`;
    db.query(query, [userId, menu_id, quantity], (err) => {
      if (err) return res.json({ success: false, message: 'Failed to add item to cart' });
      res.json({ success: true, message: 'Item added to cart' });
    });
  });
  

module.exports = router;
