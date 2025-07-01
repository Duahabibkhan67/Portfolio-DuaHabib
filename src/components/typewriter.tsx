import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterEffect = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-7xl mb-4 bg-gradient-to-r from-blue-300 to-pink-400 bg-clip-text text-transparent"


>Hello,</h1>
      <h1 className="text-6xl">
        <Typewriter
          words ={['I am Dua Habib']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h1>
    </div>
  );
};

export default TypewriterEffect;
