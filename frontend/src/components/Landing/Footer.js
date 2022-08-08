import React from 'react'
import './land.css'
import { ReactComponent as Logo } from "../../assets/logo-white.svg";

function Footer() {
  return (
    <footer className="foot p-4 bg-transparent rounded-lg shadow md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="./" className="flex items-center mb-4 sm:mb-0">
                <div className="mr-3 h-8" >
                    <Logo/>
                </div>
            </a>
            

        <span className="block text-sm text-gray-500 sm:text-center ">© 2022  Made by Ruana 
        </span>
        </div>
    </footer>

  )
}

export default Footer


