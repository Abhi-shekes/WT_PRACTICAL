const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const session = require('express-session');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());



app.get('/', (req, res) => {
    console.log('Rendering login page');
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/signup', (req, res) => {
    console.log('Rendering signup page');
    res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

app.get('/menu', (req, res) => {
    console.log('Rendering menu page');
    res.sendFile(path.join(__dirname, 'views', 'menu.html'));
});

app.get('/cart', (req, res) => {
    console.log('Rendering cart page');
    res.sendFile(path.join(__dirname, 'views', 'cart.html'));
});

app.get('/order', (req, res) => {
    console.log('Rendering order page');
    res.sendFile(path.join(__dirname, 'views', 'order.html'));
});

app.get('/order-confirmation', (req, res) => {
    console.log('Rendering order confirmation page');
    res.sendFile(path.join(__dirname, 'views', 'order_confirmation.html'));
});

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('MySQL connected...');
});

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  console.log('Received data:', { username, email, password });

  if (!username || !email || !password) {
    console.log('Validation failed: Missing fields');
    return res.status(400).json({ message: 'Please fill all fields.' });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).json({ message: 'Error processing request.' });
    }
    console.log('Password hashed:', hashedPassword);

    const query = 'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error saving user to database:', err);
        return res.status(500).json({ message: 'Error signing up user. Please try again.' });
      }
      console.log('User signed up successfully:', result);
      res.status(200).json({ success: true, message: 'User signed up successfully!' });
    });
  });
});


app.get('/menu-items', (req, res) => {
    db.query('SELECT * FROM Menu WHERE available = TRUE', (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error retrieving menu.' });
      }
      res.json(results); 
    });
  });
  
  app.post('/loginreq', (req, res) => {
    console.log('Login attempt received:', req.body);

    const { email, password } = req.body;

    const query = 'SELECT * FROM Users WHERE email = ?';
    db.query(query, [email], (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).json({ message: 'Error logging in.' });
      }

      if (results.length === 0) {
        console.log('User not found:', email);
        return res.status(404).json({ message: 'User not found.' });
      }

      bcrypt.compare(password, results[0].password, (err, match) => {
        if (err) {
          console.error('Password comparison error:', err);
          return res.status(500).json({ message: 'Error comparing passwords.' });
        }

        if (match) {
          req.session.user = { id: results[0].id, username: results[0].username };
          console.log('Login successful for:', email);
          res.status(200).json({ message: 'Login successful!', user: req.session.user });
        } else {
          console.log('Incorrect password for:', email);
          res.status(401).json({ message: 'Incorrect password.' });
        }
      });
    });
});

app.get('/cart-items', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'User not logged in.' });
  }

  const userId = req.session.user.id;
  const query = `
    SELECT Cart.*, Menu.item_name, Menu.price 
    FROM Cart 
    JOIN Menu ON Cart.menu_id = Menu.menu_id 
    WHERE Cart.user_id = ?
  `;
  
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error retrieving cart.' });
    }
    res.json(results);  
  });
});

app.post('/add-to-cart', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ success: false, message: 'User not logged in' });
  }

  const userId = req.session.user.id;
  const { item_id, quantity } = req.body;

  const query = `INSERT INTO Cart (user_id, menu_id, quantity) VALUES (?, ?, ?)`;
  db.query(query, [userId, item_id, quantity], (err, result) => {
    if (err) {
      console.error('Error adding to cart:', err);
      return res.json({ success: false, message: 'Failed to add item to cart' });
    }
    res.json({ success: true, message: 'Item added to cart' });
  });
});

app.post('/place-order', (req, res) => {
  const userId = req.session.user.id;
  
  if (!userId) {
    return res.status(401).json({ success: false, message: 'User not logged in' });
  }

  const getCartSQL = 'SELECT * FROM Cart WHERE user_id = ?';
  
  db.query(getCartSQL, [userId], (err, cartItems) => {
    if (err || cartItems.length === 0) {
      return res.json({ success: false, message: 'Cart is empty' });
    }

    const totalAmount = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
    const insertOrderSQL = 'INSERT INTO Orders (user_id, total_amount) VALUES (?, ?)';

    db.query(insertOrderSQL, [userId, totalAmount], (err, result) => {
      if (err) {
        return res.json({ success: false, message: 'Failed to place order' });
      }

      const orderId = result.insertId;
      const insertOrderItemsSQL = 'INSERT INTO Order_Items (order_id, menu_id, quantity) VALUES ?';
      const orderItemsData = cartItems.map(item => [orderId, item.menu_id, item.quantity]);

      db.query(insertOrderItemsSQL, [orderItemsData], (err) => {
        if (err) {
          return res.json({ success: false, message: 'Failed to add order items' });
        }

        const clearCartSQL = 'DELETE FROM Cart WHERE user_id = ?';
        db.query(clearCartSQL, [userId], (err) => {
          if (err) {
            return res.json({ success: false, message: 'Failed to clear cart' });
          }
          res.json({ success: true, message: 'Order placed successfully', orderId });
        });
      });
    });
  });
});

app.get('/order-confirmation/:orderId', (req, res) => {
  const orderId = req.params.orderId;

  const query = `
    SELECT Menu.item_name, Order_Items.quantity, Menu.price 
    FROM Order_Items 
    JOIN Menu ON Order_Items.menu_id = Menu.menu_id 
    WHERE Order_Items.order_id = ?
  `;

  db.query(query, [orderId], (err, results) => {
    if (err) {
      console.error('Error fetching order details:', err);
      return res.json({ success: false, message: 'Failed to load order details' });
    }

    res.json({ success: true, orderItems: results });
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  const serverUrl = `http://localhost:${PORT}`;
  console.log(`Server running at ${serverUrl}`);
});
