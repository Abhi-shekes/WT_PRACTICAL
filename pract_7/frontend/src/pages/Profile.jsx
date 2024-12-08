import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gradient-to-r from-pink-400 to-purple-500 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">

        <div className="relative">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full shadow-md border-4 border-pink-400"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-4">Aarav Sharma</h2>
        <p className="text-gray-600 text-lg mt-2">Age: 7</p>
        <p className="text-gray-600 text-lg">Grade: 2</p>

        <div className="mt-6 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-lg p-4 shadow">
          <h3 className="text-xl font-bold">Learning Progress</h3>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-3xl font-bold">45</p>
              <p className="text-sm">Lessons Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold">92%</p>
              <p className="text-sm">Overall Score</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-800">Achievements</h3>
          <div className="flex justify-center gap-3 mt-3">
            <div className="w-12 h-12 bg-yellow-400 text-white rounded-full flex items-center justify-center shadow">
              ⭐
            </div>
            <div className="w-12 h-12 bg-green-400 text-white rounded-full flex items-center justify-center shadow">
              🏆
            </div>
            <div className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center shadow">
              🎓
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-around">
          <button className="bg-pink-500 text-white py-2 px-4 rounded-full shadow hover:bg-pink-600 transition">
            Edit Profile
          </button>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-full shadow hover:bg-indigo-600 transition">
            View Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
