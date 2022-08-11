import React from 'react'
import Photo from '../../assets/icons/Investment.svg';
import Cards from './Cards';

function Hero() {
  return (
    <>
    <section class="text-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Возьми под <span class="bg-clip-text text-transparent  bg-gradient-to-r from-purple-900 via-violet-900 to-purple-700"> контроль</span></h1>
            {/* <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p> */}
            {/* <Cards/> */}
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={Photo} alt="mockup"/>
        </div>                
    </div>
  </section>
  </>
  )
}

export default Hero