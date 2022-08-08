// import { AppBar } from "@material-ui/core";
import React , { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo-white.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
  return (
    <header className="header">
        <div className="header-inner">
            <div className="cursor-pointer" onClick={()=>navigate("/")}>
                <Logo/>
            </div>

            <button class=" bg-green-500 w-50 font-sans hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" onClick={()=>navigate("/login")}>
                Начать
            </button>
        </div>
    </header>
  );
}