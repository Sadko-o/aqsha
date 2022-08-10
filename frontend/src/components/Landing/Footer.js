import React from 'react'
import './land.css'
import { ReactComponent as Logo } from "../../assets/logo-white.svg";

function Footer() {
  return (
    <footer class="p-4 bg-black shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Made by Ruana. nfactorial Incubator</span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">Git</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Linkedin</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Insta</a>
        </li>
    </ul>
  </footer>

  )
}

export default Footer


