const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connection');
const userRoutes = require('./routes/userRoutes');
const testRoutes = require('./routes/testRoutes');
const leaderRoutes = require('./routes/leaderboard');
const cors = require('cors'); 

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/test', testRoutes);
app.use('/api/leaderboard', leaderRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
