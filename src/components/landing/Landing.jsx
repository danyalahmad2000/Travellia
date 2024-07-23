import React from 'react';
import Header from '../header/Header'; // Replace with the actual path to your Header component
import Hero from '../hero/Hero'; // Replace with the actual path to your Hero component
import bg from '../../assets/images/hero-background-3.jpg';

const Landing = () => {
  return (
    <div className="relative xl:min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden overflow-y-hidden" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Landing;
