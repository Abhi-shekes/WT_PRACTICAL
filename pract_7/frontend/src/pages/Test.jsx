import React, { useState } from 'react';

const Test = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const correctAnswers = {
    alphabet: ['D', 'G', 'N', 'A', 'T', 'S', 'A', 'A', 'Z', 'A'],
    numbers: ['6', '2', '6', '8', '12', '9', '3', '20', '0', '7'],
    shapes: ['Square', 'Circle', 'Triangle', 'Rectangle', 'Circle', 'Square', 'Triangle', 'Rectangle', 'Circle', 'Square'],
    colors: ['Blue', 'Red', 'Green', 'Yellow', 'Orange', 'Pink', 'Purple', 'Brown', 'Black', 'White']
  };

  const questions = {
    alphabet: [
      { question: "What letter comes after 'C'?", options: ['A', 'B', 'D', 'E'], correctAnswer: 'D' },
      { question: "Which letter comes before 'H'?", options: ['F', 'G', 'H', 'I'], correctAnswer: 'G' },
      { question: "What letter comes after 'M'?", options: ['L', 'M', 'N', 'O'], correctAnswer: 'N' },
      { question: "Which letter is the first in the alphabet?", options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
      { question: "Which letter comes after 'S'?", options: ['R', 'S', 'T', 'U'], correctAnswer: 'T' },
      { question: "Which letter comes before 'T'?", options: ['S', 'U', 'V', 'W'], correctAnswer: 'S' },
      { question: "Which letter is in the word 'APPLE'?", options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
      { question: "Which of these is a vowel?", options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
      { question: "What is the last letter in the alphabet?", options: ['X', 'Y', 'Z', 'W'], correctAnswer: 'Z' },
      { question: "What letter is shaped like a triangle?", options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    ],
    numbers: [
      { question: "What comes after the number 5?", options: ['4', '6', '5', '7'], correctAnswer: '6' },
      { question: "What comes before the number 3?", options: ['2', '3', '4', '5'], correctAnswer: '2' },
      { question: "What is 2 + 2?", options: ['4', '3', '5', '6'], correctAnswer: '4' },
      { question: "What is 10 - 2?", options: ['8', '9', '7', '10'], correctAnswer: '8' },
      { question: "What is 5 x 2?", options: ['10', '12', '8', '6'], correctAnswer: '10' },
      { question: "What is 12 ÷ 4?", options: ['3', '2', '4', '5'], correctAnswer: '3' },
      { question: "What is 20 - 7?", options: ['13', '14', '12', '15'], correctAnswer: '13' },
      { question: "What is 3 x 3?", options: ['6', '7', '8', '9'], correctAnswer: '9' },
      { question: "What is 15 ÷ 3?", options: ['4', '5', '6', '3'], correctAnswer: '5' },
      { question: "What is 0 + 7?", options: ['7', '8', '9', '6'], correctAnswer: '7' },
    ],
    shapes: [
      { question: "Which shape has 4 equal sides?", options: ['Square', 'Circle', 'Triangle', 'Rectangle'], correctAnswer: 'Square' },
      { question: "Which shape has no straight edges?", options: ['Circle', 'Square', 'Triangle', 'Rectangle'], correctAnswer: 'Circle' },
      { question: "Which shape has 3 sides?", options: ['Square', 'Circle', 'Triangle', 'Rectangle'], correctAnswer: 'Triangle' },
      { question: "Which shape has 4 sides but unequal lengths?", options: ['Rectangle', 'Square', 'Circle', 'Triangle'], correctAnswer: 'Rectangle' },
      { question: "Which shape has no corners?", options: ['Circle', 'Square', 'Triangle', 'Rectangle'], correctAnswer: 'Circle' },
      { question: "Which shape has 4 equal sides?", options: ['Square', 'Circle', 'Rectangle', 'Triangle'], correctAnswer: 'Square' },
      { question: "Which shape has 3 sides?", options: ['Triangle', 'Circle', 'Rectangle', 'Square'], correctAnswer: 'Triangle' },
      { question: "Which shape has 4 corners?", options: ['Rectangle', 'Square', 'Circle', 'Triangle'], correctAnswer: 'Rectangle' },
      { question: "Which shape has no straight edges?", options: ['Circle', 'Square', 'Rectangle', 'Triangle'], correctAnswer: 'Circle' },
      { question: "Which shape has 4 equal sides?", options: ['Square', 'Circle', 'Triangle', 'Rectangle'], correctAnswer: 'Square' },
    ],
    colors: [
      { question: "What color is the sky on a sunny day?", options: ['Blue', 'Red', 'Green', 'Yellow'], correctAnswer: 'Blue' },
      { question: "What color is a ripe tomato?", options: ['Red', 'Green', 'Yellow', 'Purple'], correctAnswer: 'Red' },
      { question: "What color is grass?", options: ['Green', 'Blue', 'Yellow', 'Red'], correctAnswer: 'Green' },
      { question: "What color is the sun?", options: ['Yellow', 'Red', 'Orange', 'Purple'], correctAnswer: 'Yellow' },
      { question: "What color is an orange?", options: ['Orange', 'Yellow', 'Red', 'Green'], correctAnswer: 'Orange' },
      { question: "What color is cotton candy?", options: ['Pink', 'Yellow', 'Red', 'Green'], correctAnswer: 'Pink' },
      { question: "What color is a grape?", options: ['Purple', 'Red', 'Yellow', 'Green'], correctAnswer: 'Purple' },
      { question: "What color is a tree trunk?", options: ['Brown', 'Yellow', 'Green', 'Red'], correctAnswer: 'Brown' },
      { question: "What color is the night sky?", options: ['Black', 'Blue', 'Red', 'Purple'], correctAnswer: 'Black' },
      { question: "What color is snow?", options: ['White', 'Blue', 'Gray', 'Yellow'], correctAnswer: 'White' },
    ]
  };

  const calculateScore = () => {
    const correctAnswersForTest = correctAnswers[selectedTest];  
    let score = 0;

    for (let i = 0; i < questions[selectedTest].length; i++) {
      if (answers[i] === correctAnswersForTest[i]) {
        score += 10;  
      }
    }

    return score;
  };

  
    const handleAnswerChange = (selectedOption) => {
      const updatedAnswers = [...answers];
      updatedAnswers[currentQuestionIndex] = selectedOption;
      setAnswers(updatedAnswers);
    };
  
    const handleNext = () => {
      if (currentQuestionIndex < questions[selectedTest].length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };
  
    const handleSubmit = async () => {
      setSubmitted(true);

      const userEmail = localStorage.getItem('userEmail');
  
  if (!userEmail) {
    console.error('User is not authenticated. Please log in.');
    return; 
  }

    
      const testData = {
        userEmail: userEmail,  
        selectedTest: selectedTest,
        answers: questions[selectedTest].map((question, index) => ({
          questionIndex: index,
          userAnswer: answers[index],
          correctAnswer: question.correctAnswer,
        })),
        score: calculateScore(),
      };
    
      try {
        const response = await fetch('http://localhost:5000/api/test/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(testData),
        });
    
        const result = await response.json();
        console.log('Test submitted:', result);
      } catch (error) {
        console.error('Error submitting test:', error);
      }
    };
    
  
    const getAnswerColor = (option) => {
      if (submitted) {
        const correctAnswer = questions[selectedTest][currentQuestionIndex].correctAnswer;
        if (option === correctAnswer) return 'bg-green-500 text-white';
        if (option === answers[currentQuestionIndex]) return 'bg-red-500 text-white';
      }
      return option === answers[currentQuestionIndex]
        ? 'bg-blue-500 text-white'
        : 'bg-gray-200 hover:bg-gray-300';
    };
  
    return (
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen p-8">
        <h1 className="text-5xl font-bold text-center text-white mb-16 animate-fade-in">
          Learn and Have Fun!
        </h1>
  
        {/* Test Selection Section */}
        <div className="mb-8 text-center">
          {!selectedTest && 
            ['alphabet', 'numbers', 'shapes', 'colors'].map((test) => (
              <button
                key={test}
                className={`p-6 rounded-full shadow-lg m-2 text-2xl w-full sm:w-auto 
                  ${test === 'alphabet' ? 'bg-yellow-400' :
                    test === 'numbers' ? 'bg-blue-400' :
                    test === 'shapes' ? 'bg-green-400' : 'bg-red-400'}
                  text-white hover:scale-105 transform transition-all duration-300`}
                onClick={() => {
                  setSelectedTest(test);
                  setCurrentQuestionIndex(0);
                  setAnswers([]);
                  setSubmitted(false);
                }}
              >
                {test.charAt(0).toUpperCase() + test.slice(1)} Test
              </button>
            ))
          }
        </div>
  
        {selectedTest && (
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white mb-4 animate-fade-in">
              Question {currentQuestionIndex + 1}/{questions[selectedTest].length}
            </h2>
  
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-xl mx-auto animate-slide-up">
              <div className="text-2xl font-semibold mb-6">
                {questions[selectedTest][currentQuestionIndex].question}
              </div>
  
              {questions[selectedTest][currentQuestionIndex].options.map((option, i) => (
                <label
                  key={i}
                  className={`block text-xl p-4 rounded-lg mb-4 cursor-pointer 
                    ${getAnswerColor(option)} transition-all duration-300`}
                >
                  <input
                    type="radio"
                    name={`question${currentQuestionIndex}`}
                    value={option}
                    onChange={() => handleAnswerChange(option)}
                    disabled={submitted}
                    className="hidden"
                  />
                  {option}
                </label>
              ))}
  
              <div className="mt-6 flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="bg-gray-500 text-white p-4 rounded-full text-xl w-full sm:w-auto shadow-lg hover:bg-gray-600 transition-all duration-300"
                >
                  Previous
                </button>
                {currentQuestionIndex === questions[selectedTest].length - 1 ? (
                  <button
                    onClick={handleSubmit}
                    className="bg-green-500 text-white p-4 rounded-full text-xl w-full sm:w-auto shadow-lg hover:bg-green-600 transition-all duration-300"
                  >
                    Submit Test
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white p-4 rounded-full text-xl w-full sm:w-auto shadow-lg hover:bg-blue-600 transition-all duration-300"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
  
        {/* Test Result and Feedback Section */}
        {submitted && (
          <div className="text-center mt-16">
            <h2 className="text-4xl font-semibold text-white animate-bounce">
              Test Completed!
            </h2>
            <p className="text-2xl text-white mt-4">
              You scored: {calculateScore()} / 100
            </p>
          </div>
        )}
      </div>
    );
  };
  
  export default Test;
  