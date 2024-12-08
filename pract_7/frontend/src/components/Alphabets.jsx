import React from 'react';

const Alphabets = () => {
  const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <div className="grid grid-cols-5 gap-4 text-white text-center">
      {alphabets.map((letter) => (
        <div
          key={letter}
          className="bg-blue-600 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
        >
          <p className="text-4xl font-bold">{letter}</p>
          <p className="text-2xl">{letter.toLowerCase()}</p>
        </div>
      ))}
    </div>
  );
};

export default Alphabets;
