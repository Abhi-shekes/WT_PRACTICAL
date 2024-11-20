const express = require('express');
const session = require('express-session');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const authRoutes = require('./controllers/userController');
const cartRoutes = require('./controllers/cartController');
const orderRoutes = require('./controllers/orderController');
const menuRoutes = require('./controllers/menuController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));


app.use('/auth', authRoutes);
app.use('/cart', cartRoutes);
app.use('/order', orderRoutes);
app.use('/menu', menuRoutes);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'loginPage.html'));
});

app.get('/signup', (req, res) => {
  console.log('Rendering signup page');
  res.sendFile(path.join(__dirname, 'views', 'signupPage.html'));
});



app.get('/menu', (req, res) => {
  console.log('Rendering menu page');
  res.sendFile(path.join(__dirname, 'views', 'menuPage.html'));
});

app.get('/cart', (req, res) => {
  console.log('Rendering cart page');
  res.sendFile(path.join(__dirname, 'views', 'cartPage.html'));
});

app.get('/order', (req, res) => {
  console.log('Rendering order page');
  res.sendFile(path.join(__dirname, 'views', 'orderPage.html'));
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  const serverUrl = `http://localhost:${PORT}`;
  console.log(`Server running at ${serverUrl}`);
});