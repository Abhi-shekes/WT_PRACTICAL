
const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
  userEmail: {
    type: String, 
    required: true,
  },
  selectedTest: {
    type: String,
    enum: ['alphabet', 'numbers', 'shapes', 'colors'],
    required: true,
  },
  answers: [
    {
      questionIndex: Number,
      userAnswer: String,
      correctAnswer: String,
    },
  ],
  score: {
    type: Number,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('TestResult', testResultSchema);
