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
  const { email, password, name, age, grade } = req.body;
  
  if (!email || !password || !name || !age || !grade) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  const newUser = new User({ email, password, name, age, grade });
  await newUser.save();
  
  return res.status(201).json({ message: 'User created successfully' });
};




const profile =  async (req, res) => {
  const email = req.query.email;  

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);  
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data', error: error.message });
  }
};


module.exports = { signup, login , profile};
