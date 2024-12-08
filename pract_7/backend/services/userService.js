const User = require('../models/User');

const login = async (req, res) => {
  const { email, password } = req.body;
  
  const existingUser = await User.findOne({ email });
  console.log(existingUser);
  if (!existingUser) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  if (existingUser.password !== password) {
    return res.status(400).json({ message: 'Incorrect password' });
  }
  
  return res.status(200).json({ message: 'Login successful' });
};



const signup = async (req, res) => {
  const { email, password } = req.body;
  
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  const newUser = new User({ email, password });
  await newUser.save();
  
  return res.status(201).json({ message: 'User created successfully' });
};


module.exports = { signup, login };
