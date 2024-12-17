const TestResult = require('../models/testResults');

const submitTest = async (req, res) => {
  try {
    const { userEmail, selectedTest, answers, score } = req.body;

    const existingTestResult = await TestResult.findOne({ userEmail, selectedTest });

    if (existingTestResult) {
      if (existingTestResult.score >= score) {
        return res.status(200).json({
          success: true,
          message: 'Test not updated as the new score is not higher.',
          result: existingTestResult, 
        });
      }

      existingTestResult.answers = answers;
      existingTestResult.score = score;
      existingTestResult.submittedAt = new Date(); 

      await existingTestResult.save();

      return res.status(200).json({
        success: true,
        message: 'Test updated with a higher score.',
        result: existingTestResult,
      });
    }

    const newTestResult = new TestResult({
      userEmail,
      selectedTest,
      answers,
      score,
    });

    await newTestResult.save();

    return res.status(201).json({
      success: true,
      message: 'Test submitted successfully!',
      result: newTestResult,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  submitTest,
};
