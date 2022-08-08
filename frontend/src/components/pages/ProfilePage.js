// import React from "react";
// import { useNavigate } from 'react-router-dom';
// import { UserAuth } from '../../context/AuthContext';
// import { Heatmap } from "contribution-heatmap"

// export default function ProfilePage (){
//   const { user, logout } = UserAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await logout();
//       navigate('/');
//       console.log('You are logged out')
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

//   return (
//     <div>
//       <div className='max-w-[600px] mx-auto my-16 p-4'>

//         {/* <CreditCard/> */}
//         <p>User Email: {user && user.email}</p>

//         <button onClick={handleLogout} className='border px-6 py-2 my-4'>
//           Logout
//         </button>
//       </div>

//       <Heatmap />
//     </div>
//   );

// };

import React from 'react'

function ProfilePage() {
  return (
    <div className='place-content-center w-screen'> 
        <div class="bg-transparent w-screen place-content-center flex-1 flex flex-col space-y-0 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
        <div class="flex-1 place-content-center px-2 sm:px-0">

          <div class="mb-10  center sm:mb-0 mt-10 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group bg-opacity-50 shadow-3xl bg-purple-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-purple-900/40 hover:smooth-hover hover:scale-105 transition ">
              <a class="bg-purple-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </a>

              <a class="text-white/90 group-hover:text-white group-hover:smooth-hover text-center" href="#">Создать группу</a>
            </div>

            <div class="relative group bg-opacity-50 shadow-3xl bg-purple-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-purple-900/80 hover:smooth-hover hover:scale-105 transition">
              {/* <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="cuisine" /> */}
              <h4 class="text-white text-2xl font-bold capitalize text-center">Подписки</h4>
              <p class="text-white/50">55 подписок</p>
              <p class="absolute top-2 text-white/20 inline-flex items-center text-xs"> <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
            </div>

            <div class="relative group bg-opacity-50 shadow-3xl bg-purple-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-purple-900/80 hover:smooth-hover hover:scale-105 transition">
              {/* <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="gaming" /> */}
              <h4 class="text-white text-2xl font-bold capitalize text-center">Шоппинг</h4>
              <p class="text-white/50">207 затрат</p>
            </div>

            <div class="relative group bg-opacity-50 shadow-3xl  bg-purple-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-purple-900/80 hover:smooth-hover hover:scale-105 transition">
              {/* <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="song" /> */}
              <h4 class="text-white text-2xl font-bold capitalize text-center">Ремонт</h4>
              <p class="text-white/50">67 затрат</p>
            </div>

            <div class="relative group bg-opacity-50 shadow-3xl  bg-purple-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-purple-900/80 hover:smooth-hover hover:scale-105 transition">
              {/* <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="song" /> */}
              <h4 class="text-white text-2xl font-bold capitalize text-center">Доход</h4>
              <p class="text-white/50">5 доходов</p>
            </div>

            <div class="relative group bg-opacity-50 shadow-3xl  bg-purple-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-purple-900/80 hover:smooth-hover hover:scale-105 transition">
              {/* <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="song" /> */}
              <h4 class="text-white text-2xl font-bold capitalize text-center">Мебель</h4>
              <p class="text-white/50">10 покупок</p>
            </div>

            <div class="relative group bg-opacity-50 shadow-3xl  bg-purple-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-purple-900/80 hover:smooth-hover hover:scale-105 transition">
              {/* <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="song" /> */}
              <h4 class="text-white text-2xl font-bold capitalize text-center">Учеба</h4>
              <p class="text-white/50">12 покупок</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage