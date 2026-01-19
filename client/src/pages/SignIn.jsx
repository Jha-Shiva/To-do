import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BackgroundWrapper from '../component/BackgroundWrapper';

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // send data to server
        const res = await fetch("/api/v1/user/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if(data.success){
            navigate('/')
        }
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <BackgroundWrapper image={"/leaves.png"}>
      <div className="min-h-screen mt-20">
        <div className="flex mx-7 sm:mx-20 ">
          <div className="flex-1 text-xl sm:text-3xl mt-20 relative">
            <img
              src="https://static.vecteezy.com/system/resources/previews/032/057/372/original/blue-watercolor-leaves-png.png"
              alt="branch"
              className="hidden sm:block sm:w-75 bg-cover mask-t-from-50% mask-b-to-70% rotate-12"
            />
            <p className="sm:absolute sm:top-25 sm:left-30">Sign In</p>
          </div>
          {/* form */}
          <div className="shadow-xl ring-2 ring-rose-500/50 flex-1 p-6 rounded-lg bg-white dark:bg-gray-800 dark:ring-blue-500">
            <form action="" className="" onSubmit={handleSubmit}>
              <div className="">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border-2 m-3 rounded-sm w-full p-1"
                  color="Light"
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border-2 m-3 rounded-sm w-full p-1"
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="border-2 m-3 rounded-sm w-full p-1"
                  onChange={handleChange}
                />
              </div>

              <button className="bg-blue-700 text-white p-2 rounded-lg ml-2 hover:bg-blue-600 cursor-pointer w-25 focus:outline-2 duration-300 ease-in focus:outline-offset-2 focus:outline-blue-500">
                Sign In
              </button>
            </form>
            <p className="mt-5 text-sm">
              Don't have an account ?{" "}
              <Link to={"/sign-up"} className="text-blue-500 cursor-pointer">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default SignIn