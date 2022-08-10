import React from 'react'

import Youtube from '../../assets/logos/yutube.png'
function Cards() {
  return (
    <div>


            <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a className={`flex flex-col bg-white items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3`} href="#0">
                    <div className='w-2 h-2 mx-4 rounded-full sm:block'>
                        {/* <img className={`rounded-full h-16 w-16 flex items-center justify-center sm:block`} src={Youtube} alt="photo"/> */}
                    </div>
                  <div>
                    <div className="font-bold text-black leading-snug tracking-tight mb-1">Netflix</div>
                    <div className="text-gray-600">Ежемесячно</div>
                  </div>
                  <div className="flex text-red justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <span className='tex'>7.99 €</span>
                  </div>
                </a>
               
              </div>
            </div>
        </div>
        </div>
  )
}

export default Cards



// <div className=' mx-auto py-10 bg-black'>
// <div className="max-w-6xl px-4  mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
    

//     <div className="mt-2">
//         <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
    
//         <div className="flex items-center justify-between mt-4">
//             <div className="flex items-center">
//                 <img className="hidden object-cover w-11 h-11 mx-4 rounded-full sm:block" src={Youtube} alt="photo"/>
//                 {/* <a href="https://www.freepnglogos.com/pics/youtube-logo-png">Youtube Logo from freepnglogos.com</a> */}
//             <div class="w-fit p-4 md:p-4">
//                 <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Netflix</h1>
//                 <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Категория: Подписки</p>
//             </div>
//             </div>
//             <div className="flex items-center justify-between">
        
//                 <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10</span>
//                 <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">333</a>
//             </div>
//         </div>
//     </div>
// </div>
// </div>