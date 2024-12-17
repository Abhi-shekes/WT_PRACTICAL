import React from 'react';
import { Link } from 'react-router-dom';

const Video = () => {
  
  return (
    <div className="bg-gradient-to-r from-pink-400 to-purple-600 min-h-screen flex flex-col p-8">
      <h1 className="text-5xl font-bold text-center text-white mb-16">Suggested Videos</h1>

      {/* Alphabet Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-semibold text-white mb-8">Alphabet Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/hq3yfQnllfQ/hqdefault.jpg"
              alt="A for Apple"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/hq3yfQnllfQ?si=dSSKQkEPeHRSleLd"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                A for Apple (Alphabet Song)
              </Link>
              <p className="text-gray-600 mt-2">Learn the alphabet with a fun "A for Apple" video.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/C7oebqj3PCY/hqdefault.jpg"
              alt="B for Ball"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/C7oebqj3PCY?si=DflzWDz3PAR7tKfc"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                B for Ball
              </Link>
              <p className="text-gray-600 mt-2">A fun video to teach kids the letter "B" and its sound.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/jlzX8jt0Now/hqdefault.jpg"
              alt="Shapes Song for Kids"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/jlzX8jt0Now?si=bT9b8tOWiPIGiJji"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Shapes Song for Kids
              </Link>
              <p className="text-gray-600 mt-2">Sing along to a fun song to learn different shapes!</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/OnJlGMgqBes/hqdefault.jpg"
              alt="Counting Numbers 1 to 10"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/OnJlGMgqBes?si=jctT8O0Nj_qNasRO"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Counting Numbers 1 to 10
              </Link>
              <p className="text-gray-600 mt-2">A simple counting video for beginners.</p>
            </div>
          </div>

          
        </div>
      </div>

      {/* Numbers Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-semibold text-white mb-8">Numbers Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/OnJlGMgqBes/hqdefault.jpg"
              alt="Counting Numbers 1 to 10"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/OnJlGMgqBes?si=jctT8O0Nj_qNasRO"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Counting Numbers 1 to 10
              </Link>
              <p className="text-gray-600 mt-2">A simple counting video for beginners.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/hq3yfQnllfQ/hqdefault.jpg"
              alt="A for Apple"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/hq3yfQnllfQ?si=dSSKQkEPeHRSleLd"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                A for Apple (Alphabet Song)
              </Link>
              <p className="text-gray-600 mt-2">Learn the alphabet with a fun "A for Apple" video.</p>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/hq3yfQnllfQ/hqdefault.jpg"
              alt="A for Apple"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/hq3yfQnllfQ?si=dSSKQkEPeHRSleLd"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                A for Apple (Alphabet Song)
              </Link>
              <p className="text-gray-600 mt-2">Learn the alphabet with a fun "A for Apple" video.</p>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/o-aUOUQYx4g/hqdefault.jpg"
              alt="Learn Numbers with Animals"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/o-aUOUQYx4g?si=apkkF3QgTPi7ppbG"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Learn Numbers with Animals
              </Link>
              <p className="text-gray-600 mt-2">Count numbers from 1 to 10 with the help of cute animals!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Colors Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-semibold text-white mb-8">Colors Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/K8vOi41kUmU/hqdefault.jpg"
              alt="Learning Colors for Kids"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/K8vOi41kUmU?si=z_dQtkYF6pSKM46l"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Learning Colors for Kids
              </Link>
              <p className="text-gray-600 mt-2">A colorful video to introduce kids to different colors.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/jlzX8jt0Now/hqdefault.jpg"
              alt="Shapes Song for Kids"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/jlzX8jt0Now?si=bT9b8tOWiPIGiJji"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Shapes Song for Kids
              </Link>
              <p className="text-gray-600 mt-2">Sing along to a fun song to learn different shapes!</p>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/hq3yfQnllfQ/hqdefault.jpg"
              alt="A for Apple"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/hq3yfQnllfQ?si=dSSKQkEPeHRSleLd"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                A for Apple (Alphabet Song)
              </Link>
              <p className="text-gray-600 mt-2">Learn the alphabet with a fun "A for Apple" video.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/FiC3ClDnsG0/hqdefault.jpg"
              alt="Color Song for Children"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/FiC3ClDnsG0?si=jg14yNLrlad76PAO"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Color Song for Children
              </Link>
              <p className="text-gray-600 mt-2">Sing along and learn colors in a fun way!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Shapes Section */}
      <div>
        <h2 className="text-4xl font-semibold text-white mb-8">Shapes Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/FKI-P-7lopM/hqdefault.jpg"
              alt="Learn Shapes for Kids"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/FKI-P-7lopM?si=l2Nopg_Qyqvfd6bJ"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Learn Shapes for Kids
              </Link>
              <p className="text-gray-600 mt-2">An educational video to introduce children to shapes.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/hq3yfQnllfQ/hqdefault.jpg"
              alt="A for Apple"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/hq3yfQnllfQ?si=dSSKQkEPeHRSleLd"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                A for Apple (Alphabet Song)
              </Link>
              <p className="text-gray-600 mt-2">Learn the alphabet with a fun "A for Apple" video.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/hq3yfQnllfQ/hqdefault.jpg"
              alt="A for Apple"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/hq3yfQnllfQ?si=dSSKQkEPeHRSleLd"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                A for Apple (Alphabet Song)
              </Link>
              <p className="text-gray-600 mt-2">Learn the alphabet with a fun "A for Apple" video.</p>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://img.youtube.com/vi/jlzX8jt0Now/hqdefault.jpg"
              alt="Shapes Song for Kids"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Link
                to="https://youtu.be/jlzX8jt0Now?si=bT9b8tOWiPIGiJji"
                target="_blank"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Shapes Song for Kids
              </Link>
              <p className="text-gray-600 mt-2">Sing along to a fun song to learn different shapes!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16"></div>

    </div>

  );
};

export default Video;
