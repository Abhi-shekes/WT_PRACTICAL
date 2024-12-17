import React, { useState } from 'react';

const Numbers = () => {
  const [selectedNumber, setSelectedNumber] = useState(null); // Track the selected number
  const [isModalOpen, setIsModalOpen] = useState(false); // Control the modal visibility

  const numbers = Array.from({ length: 10 }, (_, i) => i);

  // Word representation for each number
  const numberWords = {
    0: 'ZERO',
    1: 'ONE',
    2: 'TWO',
    3: 'THREE',
    4: 'FOUR',
    5: 'FIVE',
    6: 'SIX',
    7: 'SEVEN',
    8: 'EIGHT',
    9: 'NINE',
  };

  const handleNumberClick = (number) => {
    setSelectedNumber(number); // Set the clicked number
    setIsModalOpen(true); // Open the modal

    // Get the word representation of the number (e.g., 'ONE' for 1)
    const word = numberWords[number];

    // Function to speak each letter in the word separately
    const speakWordSeparately = (word) => {
      const letters = word.split('');
      letters.forEach((letter, index) => {
        const utterance = new SpeechSynthesisUtterance(letter);
        utterance.lang = 'en-US'; // Set the language
        utterance.rate = 1; // Set the speech rate
        utterance.onend = () => {
          // After each letter is spoken, speak the number at the end
          if (index === letters.length - 1) {
            const numberUtterance = new SpeechSynthesisUtterance(`${number}`);
            speechSynthesis.speak(numberUtterance); // Speak the number
          }
        };
        speechSynthesis.speak(utterance); // Speak the letter
      });
    };

    // Start speaking the word and number
    speakWordSeparately(word);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNumber(null);
  };

  return (
    <div>
      {/* Number grid */}
      <div className="grid grid-cols-5 gap-4 text-white text-center">
        {numbers.map((number) => (
          <div
            key={number}
            className="bg-green-600 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-green-700 cursor-pointer"
            onClick={() => handleNumberClick(number)}
          >
            <p className="text-4xl font-bold">{number}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-12 w-96 h-80 rounded-lg shadow-lg text-center relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            {/* Show number and corresponding word */}
            <p className="text-6xl font-bold">{selectedNumber}</p>
            <p className="text-3xl mt-4">{numberWords[selectedNumber]}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Numbers;