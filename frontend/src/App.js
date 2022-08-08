import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/AuthForms/LoginForm';
import RegisterForm from './components/AuthForms/RegisterForm';
import HomePage from "./components/Home/HomePage"
import CalendarPage from "./components/pages/CalendarPage"
import AnalysisPage from "./components/pages/AnalysisPage"
import ProfilePage from "./components/pages/ProfilePage"
import "./index.css";
import Navbar from './components/Navbar/Navbar';
import modal4 from "./components/Adding/AddTransaction";
import { ModalProvider } from "react-simple-modal-provider";
import Error from './components/pages/Error';
import VerifyEmail from './components/AuthForms/VerifyEmail';
import {AuthProvider} from './context/AuthContext'
import {auth} from './firebase/config'
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from './context/PrivateRoute'
import Land from './components/Landing/Land';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <div className="App">
    <ModalProvider value={[modal4]}>
      {currentUser && <Navbar/>}
      
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        <Routes>
          <Route exact path='/' element={<Land/>}/>
          <Route exact path='/home' element={ <PrivateRoute> <HomePage/> </PrivateRoute>}/> 
          <Route exact path="/login" element={!currentUser?.emailVerified? <LoginForm/>: <HomePage/>} />
          <Route exact path="/register" element={!currentUser?.emailVerified? <RegisterForm/>: <HomePage/>} />
          <Route exact path='/dashboard' element={<HomePage/>}/> 
          <Route exact path='/calendar' element={<CalendarPage/>}/> 
          <Route exact path='/analysis' element={<AnalysisPage/>}/> 
          <Route exact path='/profile' element={<ProfilePage/>}/> 
          <Route exact path='/verify-email' element={<VerifyEmail/>}/> 
          <Route exact path="/login" element={<LoginForm />}/> 
          <Route exact path="/register" element={<RegisterForm/>}/>
          <Route exact path="/*" element={ <Error/> }/> 
        </Routes>
      </AuthProvider>
    </ModalProvider>
    </div>
  );
}

export default App;