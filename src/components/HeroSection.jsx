import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
      {/* Left column */}
      <div className="sm:col-span-1 lg:col-span-6 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Hello,</span> {' '}
          <TypeAnimation
            sequence={[
              "I'm Joel",
              1000,
              "I'm a Student",
              1000,
              "I'm a Data Scientist",
              1000,
              "I'm a Web Developer",
              1000,
              "I'm an AI Engineer",
              1000,
              "I'm a Generative-AI Engineer",
              1000,
              "I'm a Data Analyst",
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: 'inherit', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h1>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl mb-6">
          Im a Developer with a passion for AI and Generative-AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105">Hire Me</button>
          <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-600 hover:bg-gray-200 text-white hover:text-gray-900 border border-gray-300 mt-3 sm:mt-0 transition-all duration-300 transform hover:scale-105">Download CV</button>
        </div>
      </div>

      {/* Right column */}
      <div className="sm:col-span-1 lg:col-span-6 place-self-center mt-4 sm:mt-0 lg:mt-4">
        <div className="rounded-full border-4 border-purple-400 bg-[#0e0e0e] w-full h-[250px] sm:h-[300px] lg:h-[500px] relative flex justify-center items-center overflow-hidden">
          <Image
            src="https://via.placeholder.com/350x500" // Placeholder image URL
            alt="Profile Picture"
            layout="intrinsic"
            width={350}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
