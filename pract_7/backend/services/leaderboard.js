const TestResult = require('../models/testResults');
const User = require('../models/User');

const leaderboard = async (req, res) => {
  try {
    console.log('Leaderboard endpoint hit'); // Log when the endpoint is accessed

    // Aggregating results
    const results = await TestResult.aggregate([
      {
        $group: {
          _id: '$userEmail',
          totalScore: { $sum: '$score' },
        },
      },
      {
        $sort: { totalScore: -1 },
      },
      {
        $limit: 10,
      },
    ]);

    console.log('Aggregation results:', results); // Log aggregation results

    if (results.length === 0) {
      console.log('No test results found'); // Log if no results are found
      return res.json([]);
    }

    // Extracting emails for user lookup
    const emails = results.map(entry => entry._id);
    console.log('Emails for user lookup:', emails); // Log the emails being queried

    // Finding users
    const users = await User.find({ email: { $in: emails } });
    console.log('User details fetched:', users); // Log fetched user details

    // Mapping results to leaderboard
    const leaderboard = results.map((entry, index) => {
      const user = users.find(u => u.email === entry._id);
      console.log(`Processing rank ${index + 1}:`, {
        email: entry._id,
        user: user ? user.name : 'Unknown User',
        totalScore: entry.totalScore,
      }); // Log each leaderboard entry being processed

      return {
        rank: index + 1,
        name: user ? user.name : 'Unknown User',
        score: entry.totalScore,
      };
    });

    console.log('Final leaderboard data:', leaderboard); // Log the final leaderboard data
    res.json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error.stack || error); // Log detailed error
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  leaderboard,
};
