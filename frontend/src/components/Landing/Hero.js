import React from 'react'
import Photo from '../../assets/icons/Investment.svg';
import Cards from './Cards';

function Hero() {
  return (
    
  <div className="bg-transparent pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center px-20">
    <div className="text-white md:flex-1 md:mr-10">
      <h1 className="font-pt-serif text-5xl font-bold mb-7">
        Возьми под 
        <span className="bg-underline bg-left-bottom bg-no-repeat pb-2 bg-100%">
          контроль
        </span>
      </h1>
    </div>

      <Cards/>
    

    {/* <div class="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
      <div class="relative">
        <img src={Photo} alt="" class="absolute -top-16 -left-10" />
      </div>
      <img src='dist/assets/MacBook Pro.png' alt="Macbook" />
      <div class="relative">
        <img src='dist/assets/Highlight2.svg' alt="" class="absolute -bottom-10 -right-6" />
      </div>
    </div> */}
    </div>
  )
}

export default Hero