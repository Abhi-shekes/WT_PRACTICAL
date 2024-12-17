import React, { useState } from 'react';

const Colors = () => {
  const [selectedColor, setSelectedColor] = useState(null); // Track the selected color
  const [isModalOpen, setIsModalOpen] = useState(false); // Control the modal visibility

  // List of colors with their names and hex values
  const colors = [
    { name: 'RED', hex: '#FF0000' },
    { name: 'GREEN', hex: '#00FF00' },
    { name: 'BLUE', hex: '#0000FF' },
    { name: 'YELLOW', hex: '#FFFF00' },
    { name: 'ORANGE', hex: '#FFA500' },
    { name: 'PURPLE', hex: '#800080' },
    { name: 'PINK', hex: '#FFC0CB' },
    { name: 'BROWN', hex: '#A52A2A' },
    { name: 'BLACK', hex: '#000000' },
    { name: 'WHITE', hex: '#FFFFFF' },
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color); // Set the clicked color
    setIsModalOpen(true); // Open the modal

    // Speak the color name
    const utterance = new SpeechSynthesisUtterance(color.name);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedColor(null);
  };

  return (
    <div>
      {/* Color grid */}
      <div className="grid grid-cols-5 gap-4 text-center">
        {colors.map((color) => (
          <div
            key={color.name}
            className="p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            style={{ backgroundColor: color.hex }}
            onClick={() => handleColorClick(color)}
          >
            <p className="text-white text-xl font-bold" style={{ color: color.name === 'WHITE' ? 'black' : 'white' }}>
              {color.name}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedColor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-12 w-96 h-80 rounded-lg shadow-lg text-center relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            {/* Show color name and a preview */}
            <div
              className="w-24 h-24 mx-auto rounded-full mt-4"
              style={{ backgroundColor: selectedColor.hex }}
            ></div>
            <p className="text-4xl font-bold mt-4">{selectedColor.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Colors;
