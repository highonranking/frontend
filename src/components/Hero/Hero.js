import React from 'react';
import src from '../../assets/hero.mp4';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  return (

    <div className="relative w-full h-screen overflow-hidden">
      <Navbar/>
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        
        loop
        muted
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-6xl md:text-8xl md:px-96 text-opacity-80 font-bold mb-6" style={{  fontFamily: 'Denton'}}>
        Your Next Journey Simplified!
        </h1>
        <p className='md:text-3xl text-xl px-12 leading-relaxed md:mt-14 mt-6 text-opacity-80 md:px-[440px]'>Build, personalize, and optimize your itineraries. Designed for vacations, workations, and everyday adventures.</p>
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>
  );
};

export default Hero;
