import React from 'react';
import { useParams } from 'react-router-dom';
import Alphabets from '../components/Alphabets';
import Numbers from '../components/Numbers';

const Learning = () => {
  const { type } = useParams();
  const learningType = type || 'alphabet'; 


  return (
    <div className="bg-gradient-to-r from-pink-400 to-purple-500 min-h-screen flex flex-col justify-between">

      <header className="text-center p-6">
        <h1 className="text-5xl font-extrabold text-white">Learning Screen</h1>
        <p className="text-xl text-white mt-2">Let's dive into learning!</p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center space-y-6">
        <h2 className="text-4xl font-semibold text-white">
          {learningType === 'alphabet' ? 'Learn Alphabets' : 'Learn Numbers'}
        </h2>
        <p className="text-lg text-white">
          {learningType === 'alphabet'
            ? 'Explore the letters of the alphabet and their sounds!'
            : 'Learn the numbers and their usage!'}
        </p>

        <div className="w-full max-w-4xl mt-8">
          {learningType === 'alphabet' ? <Alphabets /> : <Numbers />}
        </div>
      </main>
    </div>
  );
};

export default Learning;
