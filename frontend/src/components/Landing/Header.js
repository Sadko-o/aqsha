// import { AppBar } from "@material-ui/core";
import React , { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo-white.svg";
import { useNavigate } from "react-router-dom";
import "./header.css"
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(true);
  const navigate = useNavigate();

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header class="headerMain" className={`w-screen justify-between z-30 md:bg-opacity-90 transition duration-300 ease-in-out`}>
      <div class="header-inner" className="w-full justify-between mx-auto px-10  sm:px-6 w-full" style={{width:"100vw"}}>
        <div className="flex items-center w-screen justify-between h-16 md:h-20 py-8" >
          <div className="flex-shrink-0 mr-4 w-screen justify-between ">
            <Link to="/" className="block" aria-label="Cruip">
              <Logo/>
            </Link>
          </div>

          {/* <div className="w-500"></div> */}
          {/* Site navigation */}
          <nav className="flex flex-grow w-screen justify-between ">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <button className="bg-gradient-to-r from-green-500 to-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>navigate('/login')}>
                Начать
                </button>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;