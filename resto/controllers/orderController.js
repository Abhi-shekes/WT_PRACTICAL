const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Place order route
router.post('/place-order', (req, res) => {
  const userId = req.session.user.id;

  if (!userId) return res.status(401).json({ message: 'User not logged in' });

  const getCartSQL = 'SELECT * FROM Cart WHERE user_id = ?';

  db.query(getCartSQL, [userId], (err, cartItems) => {
    if (err || cartItems.length === 0) return res.json({ message: 'Cart is empty' });

    const totalAmount = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
    const insertOrderSQL = 'INSERT INTO Orders (user_id, total_amount) VALUES (?, ?)';

    db.query(insertOrderSQL, [userId, totalAmount], (err, result) => {
      if (err) return res.json({ message: 'Failed to place order' });

      const orderId = result.insertId;
      const insertOrderItemsSQL = 'INSERT INTO Order_Items (order_id, menu_id, quantity) VALUES ?';
      const orderItemsData = cartItems.map(item => [orderId, item.menu_id, item.quantity]);

      db.query(insertOrderItemsSQL, [orderItemsData], (err) => {
        if (err) return res.json({ message: 'Failed to add order items' });

        const clearCartSQL = 'DELETE FROM Cart WHERE user_id = ?';
        db.query(clearCartSQL, [userId], (err) => {
          if (err) return res.json({ message: 'Failed to clear cart' });
          res.json({ success: true, message: 'Order placed successfully', orderId });
        });
      });
    });
  });
});

// Get order confirmation details
router.get('/order-confirmation/:orderId', (req, res) => {
  const orderId = req.params.orderId;

  const query = `
    SELECT Menu.item_name, Order_Items.quantity, Menu.price 
    FROM Order_Items 
    JOIN Menu ON Order_Items.menu_id = Menu.menu_id 
    WHERE Order_Items.order_id = ?
  `;

  db.query(query, [orderId], (err, results) => {
    if (err) return res.json({ message: 'Failed to load order details' });
    res.json({ success: true, orderItems: results });
  });
});

module.exports = router;
