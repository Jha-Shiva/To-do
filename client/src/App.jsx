import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import SignUp from './component/SignUp'

function App() {

  return (
    <>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <Header/>
        <SignUp/>
      </div>
    </>
  )
}

export default App
