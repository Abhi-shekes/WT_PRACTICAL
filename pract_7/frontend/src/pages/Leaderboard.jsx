import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/leaderboard/table'); 
        const data = await response.json();
        console.log(data);
        setLeaderboardData(data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []);

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
