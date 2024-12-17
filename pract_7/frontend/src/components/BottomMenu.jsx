import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaTrophy, FaUser, FaVideo, FaClipboardList } from 'react-icons/fa';

const BottomMenu = () => {
  return (
    <div className="fixed bottom-0 w-full bg-gray-100 border-t border-gray-300 flex justify-around py-3">
      <Link to="/home" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
        <FaHome className="text-xl" />
        <span className="text-xs">Home</span>
      </Link>
      <Link to="/learning" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
        <FaBook className="text-xl" />
        <span className="text-xs">Learn</span>
      </Link>
      
      <Link to="/video" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
        <FaVideo className="text-xl" />
        <span className="text-xs">Video</span>
      </Link>

      <Link to="/test" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
        <FaClipboardList className="text-xl" />
        <span className="text-xs">Test</span>
      </Link>

      <Link to="/leaderboard" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
        <FaTrophy className="text-xl" />
        <span className="text-xs">Leaderboard</span>
      </Link>
      <Link to="/profile" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
        <FaUser className="text-xl" />
        <span className="text-xs">Profile</span>
      </Link>
    </div>
  );
};

export default BottomMenu;
