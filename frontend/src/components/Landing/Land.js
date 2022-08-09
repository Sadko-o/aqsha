import React from 'react';
import Header from './Header';
import HeroHome from './Hero';
// import FeaturesHome from './partials/Features';
// import FeaturesBlocks from './partials/FeaturesBlocks';
// import Testimonials from './partials/Testimonials';
// import Newsletter from './partials/Newsletter';
import Footer from './Footer';
import "./land.css"

export default function Land() {
  return (
    <div  className="flex flex-col min-h-screen w-screen justify-between  overflow-hidden bg-gradient-to-r from-purple-500 via-violet-600 to-purple-500" >
      <Header />
      <HeroHome/>
      </div>
  );
}