const mongoose = require('mongoose');
const config = require('../config/config');

async function connectDB() {
    try {
        await mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Successfully connected to MongoDB!");
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
