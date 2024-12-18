import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-pink-400 to-purple-500 min-h-screen flex flex-col items-center justify-center p-6">
      <header className="text-center p-6">
        <h1 className="text-5xl font-extrabold text-white">Children Learning App</h1>
        <p className="text-xl text-white mt-2">Learn Numbers, Alphabets, Colors, and Shapes!</p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center space-y-6">
        <h2 className="text-4xl font-semibold text-white">Let's Learn Together!</h2>
        <p className="text-lg text-white">Choose a category to get started:</p>
        
        <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        <div className="flex flex-wrap justify-center space-x-4 ">

      
          <Link to="/learning/alphabet">
            <button className="px-6 py-3 bg-yellow-400 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300">
              Learn Alphabet
            </button>
          </Link>
          <Link to="/learning/number">
            <button className="px-6 py-3 bg-green-400 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300">
              Learn Numbers
            </button>
          </Link>
          <Link to="/learning/color">
            <button className="px-6 py-3 bg-blue-400 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Learn Colors
            </button>
          </Link>
          <Link to="/learning/shape">
            <button className="px-6 py-3 bg-red-400 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300">
              Learn Shapes
            </button>
          </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
