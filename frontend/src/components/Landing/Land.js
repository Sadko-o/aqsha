import React from 'react';
import "./land.css"
import Header from './Header';
import HeroHome from './Hero';
// import FeaturesHome from './partials/Features';
// import FeaturesBlocks from './partials/FeaturesBlocks';
// import Testimonials from './partials/Testimonials';
// import Newsletter from './partials/Newsletter';
import Footer from './Footer';


export default function Land() {
  return (

    <div id="scroll-animate">
        <div id="scroll-animate-main">
            <div class="wrapper-parallax">
            
            <div className="main overflow-hidden" >
            <Header />
            <main className="flex-grow">
                <HeroHome />
            </main>
            <Footer />
            </div>
            </div>
        </div>
    </div>

    // <div className="main overflow-hidden" >
    //   <Header />
    //   <main className="flex-grow">
    //     <HeroHome />
    //   </main>
    //   <Footer />
    // </div>
  );
}