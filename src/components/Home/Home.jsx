import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Video */}
      {/* Uncomment the video section if you have a video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Fallback Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full  z-0"></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Syno Electrotec India Pvt Ltd
        </h1>
        <p className="text-lg md:text-xl max-w-3xl text-gray-200 mb-8">
          Your trusted partner in advanced electrical solutions. From control panels to industrial automation,
          we deliver precision, innovation, and unmatched quality to power your business forward.
        </p>
        <button className="mt-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition-all duration-300 shadow-md">
          Explore Our Products
        </button>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 text-white animate-bounce opacity-80">
          <FaArrowDown size={24} />
        </div>
      </div>
    </div>
  );
};

export default Home;
