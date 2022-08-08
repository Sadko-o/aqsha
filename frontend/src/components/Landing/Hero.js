import React from 'react'
import Photo from '../../assets/icons/Investment.svg';

function Hero() {
  return (
    
    <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Main
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Hero Message
            </span>
            to sell yourself!
          </h1>
        </div>

        <div className="w-full xl:w-3/5 p-12 overflow-hidden">
          <img className="mx-auto w-full md:w-4/5 hover:scale-105 duration-700 ease-in-out hover:rotate-6" src={Photo} />
        </div>
    </div>
  )
}

export default Hero