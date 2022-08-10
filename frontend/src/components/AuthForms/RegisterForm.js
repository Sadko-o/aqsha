import React , { useState }from 'react'
import Tilt from 'react-parallax-tilt';
import { Button } from "@material-tailwind/react";
import { ReactComponent as Logo } from "../../assets/aqsha-logo.svg";
import { useNavigate } from 'react-router-dom';
// import "./form.css"


import {auth} from '../../firebase/config'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {useAuthValue} from '../../context/AuthContext'

export default function RegisterForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {setTimeActive} = useAuthValue()

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)   
          .then(() => {
            setTimeActive(true)
            navigate('/verify-email')
          }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
  <div className="App bg-violet-100 h-screen w-screen relative overflow-hidden flex justify-center items-center" style={{width:"100vw", height:"100vh"}}>
    <div className='h-45-r w-45-r bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full absolute left-3/4 -bottom-1/4 animate-[wiggle_1s_ease-in-out_infinite] blur-lg'></div>
    <div className='h-50-r w-50-r bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full absolute top-2/4 -left-1/4 animate-[wiggle_1s_ease-in-out_infinite] blur-lg'></div>

    <Tilt>
      <div className="h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
        <form className='h-full w-full flex flex-col justify-evenly items-center' onSubmit={register} >
          <Logo/>
          <div className=" text-black text-2xl tracking-wider">Создай аккаунт</div>
          {error && <div className='auth__error'>{error}</div>}
          
          {/* <input  type="text"
                  onChange={(e) => setDisplayName(e.target.value)}
                  value={displayName}
                  name='username'
                  placeholder='Ваше имя' 
                  className='w-80 text-black bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 my-4 ' 
                  style={{width:"80%"}}/> */}

          <input  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name='email' 
                  placeholder='Логин' 
                  className='w-80 text-black bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 my-4 ' 
                  style={{width:"80%"}}/>

          <input  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name='password' 
                  placeholder="Пароль" 
                  className=' w-5/6 text-black bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wider my-4' 
                  style={{width:"80%"}}/>


          <input  type='password'
                  value={confirmPassword} 
                  required
                  placeholder='Подвердите пароль'
                  onChange={e => setConfirmPassword(e.target.value)}
                  className=' w-5/6 text-black bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wider my-4' 
                  style={{width:"80%"}}/>

          <Button type='submit' placeholder="Войти" className='font-poppins text-center text-black bg-black cursor-pointer px-5 py-1 rounded-full bg-opacity-50 bg-white drop-shadow-2xl '>Создать</Button>
            
          <span className='inline-flex cursor-pointer text-sm my-3 rounded-full text-gray-500 bg-opacity-50 '> Есть аккаунт?  <div className='text-slate-600 group-hover:text-slate-900' onClick={()=>navigate('/')}> Войти   </div>  </span>
        </form>
      </div>
    </Tilt> 
  </div>
  )
};