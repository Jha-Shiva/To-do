import React from 'react'
import {  BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

const FooterCom = () => {
  return (
    <footer className='border-t-5 border-teal-400 rounded-xl'>
        <div className='p-5 md:p-10'>
          <div className="flex justify-between gap-2 mb-3">
          {/* to do */}
            <div className="">
              <div className=' text-xl md:text-3xl font-bold'>To Do</div>
            </div>
            {/* links */}
            <div className="flex justify-between gap-10 md:gap-30">
              <div className="flex flex-col">
                <div className='text-md md:text-xl font-bold'>About</div>
                <Link to={'https://jha-shivam.netlify.app/'} target='_blank' className='text-sm md:text-lg hover:text-rose-300 font-semibold'>About Me</Link>
              </div>
              <div className="flex flex-col">
                <div className='text-md md:text-xl font-bold'>Follow Us</div>
                <Link to={'https://github.com/Jha-Shiva'} target='_blank' className='text-sm md:text-lg hover:text-rose-300 mt-2 font-semibold'>Github</Link>
                <Link to={'https://www.linkedin.com/in/shivam-jha-294636318/'} target='_blank' className='text-sm md:text-lg hover:text-rose-300 mt-2 font-semibold'>Linkedin</Link>
              </div>
              <div className="flex flex-col">
                <div className='text-md md:text-xl font-bold'>Contact Us</div>
                <Link to={'mailto:shivamjha625@gmail.com'}  className='text-sm md:text-lg hover:text-rose-300 mt-2 font-semibold'>Mail me</Link>
              </div>
            </div>
          </div>
          <hr />
          {/* Icon section  */}
          <div className="mt-4 flex justify-between">
            <div className="">
              © 2026 Shivam Jha <sup>TM</sup>
            </div>
            <div className="flex gap-2 sm:gap-5">
              <Link to={'#'}><BsFacebook /></Link>
              <Link to={'#'}><BsInstagram/></Link>
              <Link to={'#'}><BsTwitter/></Link>
              <Link to={'https://github.com/Jha-Shiva'} target='_blank'><BsGithub/></Link>
            </div>
          </div>
        </div>
    </footer>
  );
}

export default FooterCom