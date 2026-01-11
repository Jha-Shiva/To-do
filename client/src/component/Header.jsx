import React, { useEffect, useState } from 'react'
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";


const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  useEffect(()=>{
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  },[theme]);

  const handleTheme = ()=>{
    setTheme(prev =>(prev === 'dark' ? 'light' : 'dark'));
  };
  // const handleTheme = ()=>{
    //! 
    // const html = document.querySelector('html');
    // const isDark = html.classList.toggle('dark');
    // localStorage.setItem('theme', isDark ? 'dark' : 'light');

    //!old code
  //   const html = document.documentElement;
  //   const isDark = html.classList.contains('dark');
  //   if(isDark){
  //     html.classList.remove('dark');
  //     // html.classList.add('light');
  //     localStorage.setItem('theme', 'light');
  //   }else{
  //     // html.classList.remove('light');
  //     html.classList.add('dark');
  //     localStorage.setItem('theme', 'dark');
  //   }
  // };
  // useEffect(()=>{
  //   const theme = localStorage.getItem('theme') || 'light'
  //   document.documentElement.classList.add(theme)
  // },[])
  return (
    <div className='shadow-lg rounded-b-lg p-3 Roboto flex justify-between bg-white dark:bg-gray-800'>
        <h1 className='sm:text-3xl ml-5 bg'>To Do</h1>
        <div className="sm:text-xl ml-5 flex gap-5 sm:gap-10 font-normal">
            <div className="cursor-pointer p-2 ring-1 px-4  rounded-lg " onClick={handleTheme}>
                <p>
                  {theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
                </p>
            </div>
            <div className="cursor-pointer">
                <p>Sign-Up</p>
            </div>
        </div>
    </div>
  )
}

export default Header