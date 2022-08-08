import React from 'react';
import Youtube from "../../assets/logos/yutube.png"


const TransactionCard = () =>  {
    return (
        <div>
            <div className=' mx-auto py-10 bg-black'>
            <div className="max-w-6xl px-4  mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="mt-2">                
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <img className="hidden object-cover w-11 h-11 mx-4 rounded-full sm:block" src={Youtube} alt="avatar"/>
                        <div class="w-fit p-4 md:p-4">
                            <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Netflix</h1>
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Категория: Подписки</p>
                        </div>
                        </div>
                        <div className="flex items-center justify-between">
                    
                            <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10</span>
                            <p className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">333</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}


export default TransactionCard;