import React from 'react'

const Header = () => {
  return (
    <div className='shadow-lg rounded-b-lg p-3 Roboto flex justify-between'>
        <h1 className='sm:text-3xl ml-5 bg'>To Do</h1>
        <div className="sm:text-xl ml-5 flex gap-5 sm:gap-10 font-normal">
            <div className="">
                <p>Dark</p>
            </div>
            <div className="">
                <p>Sign-Up</p>
            </div>
        </div>
    </div>
  )
}

export default Header