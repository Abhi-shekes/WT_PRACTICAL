import React, { useState } from 'react';

// Import all images for the alphabets
import aImg from '../assets/a.png';
import bImg from '../assets/b.png';
import cImg from '../assets/c.png';
import dImg from '../assets/d.png';
import eImg from '../assets/e.png';
import fImg from '../assets/f.png';
import gImg from '../assets/g.png';
import hImg from '../assets/h.png';
import iImg from '../assets/i.png';
import jImg from '../assets/j.png';
import kImg from '../assets/k.png';
import lImg from '../assets/l.png';
import mImg from '../assets/m.png';
import nImg from '../assets/n.png';
import oImg from '../assets/o.png';
import pImg from '../assets/p.png';
import qImg from '../assets/q.png';
import rImg from '../assets/r.png';
import sImg from '../assets/s.png';
import tImg from '../assets/t.png';
import uImg from '../assets/u.png';
import vImg from '../assets/v.png';
import wImg from '../assets/w.png';
import xImg from '../assets/x.png';
import yImg from '../assets/y.png';
import zImg from '../assets/z.png';

const Alphabets = () => {
  const [selectedAlphabet, setSelectedAlphabet] = useState(null); // To track the clicked alphabet
  const [isModalOpen, setIsModalOpen] = useState(false); // To control the modal visibility

  const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  // Map of alphabet to image
  const alphabetImages = {
    A: aImg,
    B: bImg,
    C: cImg,
    D: dImg,
    E: eImg,
    F: fImg,
    G: gImg,
    H: hImg,
    I: iImg,
    J: jImg,
    K: kImg,
    L: lImg,
    M: mImg,
    N: nImg,
    O: oImg,
    P: pImg,
    Q: qImg,
    R: rImg,
    S: sImg,
    T: tImg,
    U: uImg,
    V: vImg,
    W: wImg,
    X: xImg,
    Y: yImg,
    Z: zImg,
  };

  // Map of alphabet to words starting with that letter
  const alphabetWords = {
    A: ['Apple', 'Ant', 'Astronaut', 'Alligator', 'Airplane', 'Angel'],
    B: ['Ball', 'Bat', 'Banana', 'Boat', 'Bicycle', 'Butterfly'],
    C: ['Cat', 'Car', 'Cup', 'Cow', 'Cake', 'Clock'],
    D: ['Dog', 'Duck', 'Doll', 'Dice', 'Dragon', 'Door'],
    E: ['Elephant', 'Egg', 'Eagle', 'Ear', 'Envelope', 'Eraser'],
    F: ['Fish', 'Flower', 'Frog', 'Fan', 'Fire', 'Fork'],
    G: ['Goat', 'Giraffe', 'Guitar', 'Glove', 'Gate', 'Grass'],
    H: ['House', 'Horse', 'Hat', 'Helicopter', 'Hammer', 'Heart'],
    I: ['Ice', 'Island', 'Insect', 'Igloo', 'Iron', 'Internet'],
    J: ['Jaguar', 'Jam', 'Jacket', 'Jellyfish', 'Jump', 'Jeep'],
    K: ['Kite', 'King', 'Kangaroo', 'Key', 'Koala', 'Keyboard'],
    L: ['Lion', 'Lamp', 'Lemon', 'Leaf', 'Ladder', 'Lollipop'],
    M: ['Monkey', 'Moon', 'Mountain', 'Mango', 'Mouse', 'Muffin'],
    N: ['Nest', 'Nurse', 'Nut', 'Nose', 'Necklace', 'Notebook'],
    O: ['Owl', 'Orange', 'Octopus', 'Oxygen', 'Oasis', 'Onion'],
    P: ['Pencil', 'Penguin', 'Pumpkin', 'Pear', 'Parrot', 'Pizza'],
    Q: ['Queen', 'Question', 'Quilt', 'Quail', 'Quiz', 'Quarter'],
    R: ['Rabbit', 'Rainbow', 'Rock', 'Rose', 'Robot', 'Rug'],
    S: ['Snake', 'Sun', 'Star', 'Sand', 'School', 'Snowman'],
    T: ['Tiger', 'Table', 'Tree', 'Turtle', 'Tomato', 'Television'],
    U: ['Umbrella', 'Unicorn', 'Universe', 'UFO', 'Uniform', 'Up'],
    V: ['Violin', 'Violet', 'Van', 'Vampire', 'Vegetable', 'Vacation'],
    W: ['Wolf', 'Window', 'Whale', 'Watermelon', 'Wagon', 'Wrench'],
    X: ['Xylophone', 'X-ray', 'Xmas', 'Xenon', 'Xenophobia', 'Xylitol'],
    Y: ['Yak', 'Yogurt', 'Yellow', 'Yarn', 'Yawn', 'Yacht'],
    Z: ['Zebra', 'Zoo', 'Zero', 'Zipper', 'Zucchini', 'Zigzag'],
  };

  const handleAlphabetClick = (letter) => {
    setSelectedAlphabet(letter); // Set the clicked letter
    setIsModalOpen(true); // Open the modal

    // Start with saying the alphabet letter
    const utterance = new SpeechSynthesisUtterance(`${letter} For`);
    utterance.lang = 'en-US';
    utterance.rate = 0.1;
    speechSynthesis.speak(utterance);

    const words = alphabetWords[letter];
    words.forEach((word, index) => {
      const wordUtterance = new SpeechSynthesisUtterance(word);
      wordUtterance.lang = 'en-US';
      wordUtterance.rate = 0.8;
      wordUtterance.onend = () => {
        if (index === words.length - 1) {
          setIsModalOpen(false); // Close the modal after the last word
        }
      };
      speechSynthesis.speak(wordUtterance);
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAlphabet(null);
  };

  return (
    <div>
      {/* Alphabet grid */}
      <div className="grid grid-cols-5 gap-4 text-white text-center">
        {alphabets.map((letter) => (
          <div
            key={letter}
            className="bg-blue-600 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-700 cursor-pointer"
            onClick={() => handleAlphabetClick(letter)}
          >
            <p className="text-4xl font-bold">{letter}</p>
            <p className="text-2xl">{letter.toLowerCase()}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
          <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <img
              src={alphabetImages[selectedAlphabet]}
              alt={selectedAlphabet}
              className="w-80 h-170 mx-auto"
            />
            <p className="text-6xl font-bold mt-4">{selectedAlphabet}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alphabets;
