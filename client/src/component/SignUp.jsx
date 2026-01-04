import React, { useState } from 'react'
import { TextInput } from 'flowbite-react'
const SignUp = () => {
    const [formData, setFormData] = useState({});
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.id]: e.target.value.trim() });
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res = await fetch('/api/v1/user/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })

        const data = await res.json();
        
    }
  return (
    <div className='min-h-screen mt-20'>
        <div className="flex mx-7 sm:mx-20 ">
            <div className="flex-1 text-xl sm:text-3xl mt-20 relative">
                <img 
                src="https://static.vecteezy.com/system/resources/previews/032/057/372/original/blue-watercolor-leaves-png.png" 
                alt="branch"
                className='hidden sm:block sm:w-75 bg-cover mask-t-from-50% mask-b-to-70% rotate-12'
                />
                <p className='sm:absolute sm:top-25 sm:left-30'>Sign Up</p>
            </div>
            <div className="shadow-xl shadow-rose-500 flex-1 p-6 ">
                <form action="" className='' onSubmit={handleSubmit}>
                    <div className="">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' name='name' className='border-2 m-3 rounded-sm w-full sm:p-1' color='Light' onChange={handleChange} />
                    </div>

                    <div className="">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='email' className='border-2 m-3 rounded-sm w-full sm:p-1' onChange={handleChange} />
                    </div>

                    <div className="">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' className='border-2 m-3 rounded-sm w-full sm:p-1' onChange={handleChange} />
                    </div>

                    <button className='bg-blue-700 text-white p-2 rounded-lg ml-2 hover:bg-blue-600 cursor-pointer w-25'>Sign Up</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp