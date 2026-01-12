import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import SignUp from './pages/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Home from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
