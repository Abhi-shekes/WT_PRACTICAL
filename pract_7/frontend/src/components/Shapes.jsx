import React, { useState } from 'react';

const Shapes = () => {
  const [selectedShape, setSelectedShape] = useState(null); // Track the selected shape
  const [isModalOpen, setIsModalOpen] = useState(false); // Control the modal visibility

  // List of shapes with their names and styles
  const shapes = [
    { name: 'CIRCLE', style: { borderRadius: '50%', width: '80px', height: '80px', backgroundColor: '#FF5733' } },
    { name: 'SQUARE', style: { width: '80px', height: '80px', backgroundColor: '#33FF57' } },
    { name: 'TRIANGLE', style: { 
      width: '0', 
      height: '0', 
      borderLeft: '40px solid transparent', 
      borderRight: '40px solid transparent', 
      borderBottom: '80px solid #3357FF' 
    } },
    { name: 'RECTANGLE', style: { width: '120px', height: '60px', backgroundColor: '#FF33A6' } },
    { name: 'OVAL', style: { borderRadius: '50%', width: '100px', height: '60px', backgroundColor: '#FFC300' } },
  ];

  const handleShapeClick = (shape) => {
    setSelectedShape(shape); // Set the clicked shape
    setIsModalOpen(true); // Open the modal

    // Speak the shape name
    const utterance = new SpeechSynthesisUtterance(shape.name);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedShape(null);
  };

  return (
    <div>
      {/* Shape grid */}
      <div className="grid grid-cols-5 gap-4 text-center">
        {shapes.map((shape) => (
          <div
            key={shape.name}
            className="flex items-center justify-center p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            style={{ ...shape.style }}
            onClick={() => handleShapeClick(shape)}
          >
            <p className="text-white text-xl font-bold" style={{ color: '#000' }}>{shape.name}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedShape && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-12 w-96 h-80 rounded-lg shadow-lg text-center relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            {/* Show shape name and a preview */}
            <div
              className="mx-auto mt-4 flex items-center justify-center"
              style={{ ...selectedShape.style, width: '100px', height: '100px' }}
            ></div>
            <p className="text-4xl font-bold mt-4">{selectedShape.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shapes;
