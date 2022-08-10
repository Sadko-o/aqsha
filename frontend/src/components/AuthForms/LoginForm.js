import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt';
import { Button } from "@material-tailwind/react";
import { ReactComponent as Logo } from "../../assets/aqsha-logo.svg";
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from '../../firebase/config'
import {useAuthValue} from '../../context/AuthContext'


export default function LoginForm(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          navigate('/verify-email')
        })
      .catch(err => alert(err.message))
    }else{
      navigate('/')
    }
    })
    .catch(err => setError(err.message))
  }
    
  return (
  <div className="App bg-violet-100 h-screen w-screen relative overflow-hidden flex justify-center items-center md:h-48 md:w-48 md:text-xl" style={{width:"100vw", height:"100vh"}}>
      <div className='h-45-r w-45-r bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full absolute left-3/4 -bottom-1/4 animate-[wiggle_1s_ease-in-out_infinite] blur-lg md:w-screen md:h-screen'></div>
      <div className='h-50-r w-50-r bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full absolute top-2/4 -left-1/4 animate-[wiggle_1s_ease-in-out_infinite] blur-lg'></div>

      <Tilt>
        <div className=" h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm md:h-48  md:w-screen md:text-xl" >
          <form className='h-full w-full flex flex-col justify-evenly items-center md:h-48 md:w-screen  md:text-xl' onSubmit={login}>
            <Logo/>
            <div className=" text-black text-2xl tracking-wider md:text-xl">Войти</div>
            {error && <div className='auth__error'>{error}</div>}

            <input  type='email' 
                    required
                    onChange={e => setEmail(e.target.value)}
                    name='email' 
                    placeholder='Логин'
                    className='w-80 text-black bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 my-4 ' 
                    style={{width:"80%"}}
                    value={email}/>
                      
            <input  type='password'
                    required
                    onChange={e => setPassword(e.target.value)}
                    name='password'
                    placeholder="Пароль" 
                    className=' w-5/6 text-black bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wider my-4'
                    style={{width:"80%"}}
                    value={password}/>
      
              <Button placeholder="Войти" className='font-poppins text-center text-black bg-black cursor-pointer px-5 py-1 rounded-full bg-opacity-50 bg-white drop-shadow-2xl ' >Войти</Button> 
              <span className=' inline-flex cursor-pointer text-sm py-3 rounded-full text-gray-500  bg-opacity-50 hover:text-slate-900 md:flex-col'> Нет аккаунта? <p className='text-slate-500 hover:text-slate-1000"' onClick={()=>navigate('/register')}> Создай аккаунт </p> </span>
          </form>
        </div>
      </Tilt> 
  </div>
  );
};

