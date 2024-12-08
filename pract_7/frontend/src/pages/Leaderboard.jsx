import React from 'react';

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: 'Aarav Sharma', score: 95 },
    { rank: 2, name: 'Isha Patel', score: 92 },
    { rank: 3, name: 'Rohan Gupta', score: 89 },
    { rank: 4, name: 'Priya Singh', score: 85 },
    { rank: 5, name: 'Aditya Verma', score: 80 },
    { rank: 6, name: 'Ananya Desai', score: 78 },
    { rank: 7, name: 'Vikram Rao', score: 75 },
    { rank: 8, name: 'Neha Mehta', score: 72 },
    { rank: 9, name: 'Karan Joshi', score: 70 },
    { rank: 10, name: 'Sanya Gupta', score: 68 },
  ];


  return (
    <div className="bg-gradient-to-r from-pink-400 to-purple-500 min-h-screen flex flex-col justify-between">
      <header className="text-center p-6">
        <h1 className="text-5xl font-extrabold text-white">Leaderboard</h1>
        <p className="text-xl text-white mt-2">Top Performers in the Learning App</p>
      </header>

      <main className="flex-1 p-6 flex justify-center">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-indigo-600">
              <tr>
                <th className="py-3 px-4 text-left text-lg font-semibold text-white">Rank</th>
                <th className="py-3 px-4 text-left text-lg font-semibold text-white">Name</th>
                <th className="py-3 px-4 text-left text-lg font-semibold text-white">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry, index) => (
                <tr
                  key={entry.rank}
                  className={`border-b ${
                    index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                  } hover:bg-indigo-100 transition-colors duration-200`}
                >
                  <td className="py-3 px-4 text-lg text-gray-700">{entry.rank}</td>
                  <td className="py-3 px-4 text-lg text-gray-700 font-medium">{entry.name}</td>
                  <td className="py-3 px-4 text-lg text-gray-700">{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="text-center p-4">
        <p className="text-white text-sm">© 2024 Learning App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Leaderboard;
