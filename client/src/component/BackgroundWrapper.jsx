import React from 'react'

const BackgroundWrapper = ({
  image,
  children
}) => {
  return (
    <div className='relative min-h-screen'>
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url(${image})`}}
        ></div>
        {/* overlay */}
        <div className={`absolute inset-0`}></div>
        {/* content */}
        <div className="relative z-10 p-10">
          {children}
        </div>
    </div>
  )
}

export default BackgroundWrapper