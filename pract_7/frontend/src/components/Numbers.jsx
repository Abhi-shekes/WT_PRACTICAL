import React from 'react';

const Numbers = () => {
  const numbers = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div className="grid grid-cols-5 gap-4 text-white text-center">
      {numbers.map((number) => (
        <div
          key={number}
          className="bg-green-600 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-green-700"
        >
          <p className="text-4xl font-bold">{number}</p>
        </div>
      ))}
    </div>
  );
};

export default Numbers;
