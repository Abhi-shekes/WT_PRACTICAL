import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profileImage from '../assets/images.jpeg';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem('userEmail');

    if (!email) {
      setError('No user found. Please log in.');
      setLoading(false);
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/profile?email=${email}`);
        
        setUser(response.data); 
      } catch (error) {
        setError('Failed to load profile');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gradient-to-r from-pink-400 to-purple-500 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <div className="relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full shadow-md border-4 border-pink-400 object-cover object-center"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-4">{user.name}</h2>
        <p className="text-gray-600 text-lg mt-2">Age: {user.age}</p>
        <p className="text-gray-600 text-lg">Grade: {user.grade}</p>

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

      </div>
    </div>
  );
};

export default Profile;
