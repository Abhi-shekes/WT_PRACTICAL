import React from 'react';
import { useParams } from 'react-router-dom';
import Alphabets from '../components/Alphabets';
import Numbers from '../components/Numbers';
import Shapes from '../components/Shapes';
import Colors from '../components/Colors';

const Learning = () => {
  const { type } = useParams();
  const learningType = type || 'alphabet'; 

  const renderContent = () => {
    switch (learningType) {
      case 'alphabet':
        return <Alphabets />;
      case 'numbers':
        return <Numbers />;
      case 'color':
        return <Colors />;
      case 'shape':
        return <Shapes />;
      default:
        return <Alphabets />;
    }
  };

  return (
    <div className="bg-gradient-to-r from-pink-400 to-purple-500 min-h-screen flex flex-col justify-between">
      <header className="text-center p-6">
        <h1 className="text-5xl font-extrabold text-white">Learning Screen</h1>
        <p className="text-xl text-white mt-2">Let's dive into learning!</p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center space-y-6">
        <h2 className="text-4xl font-semibold text-white capitalize">
          Learn {learningType}
        </h2>
        <p className="text-lg text-white">
          {learningType === 'alphabet' && 'Explore the letters of the alphabet and their sounds!'}
          {learningType === 'numbers' && 'Learn the numbers and their usage!'}
          {learningType === 'color' && 'Discover various colors and their names!'}
          {learningType === 'shape' && 'Identify shapes and their characteristics!'}
        </p>

        <div className="w-full max-w-4xl mt-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Learning;
