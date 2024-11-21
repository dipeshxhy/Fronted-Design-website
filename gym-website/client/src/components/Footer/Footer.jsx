import React from 'react'
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-slate-100 dark:bg-black dark:text-primary py-3 '>
        <div className="container">
            <div className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 md:grid-cols-3">
                <div className='flex '> 
                    <img className='w-[100px]' src="https://gym-tcj.netlify.app/assets/logo-tsOiz05y.png" alt="" />
                    <div className='flex  items-center gap-5'>

                    <FaInstagram size={30} className='hover:text-primary duration-200 transition-all   ' />
                    <FaTwitter size={30} className='hover:text-primary duration-200 transition-all '/>
                    <FaYoutube size={30} className='hover:text-primary duration-200 transition-all '/>
                    </div>
                </div>
                <div>
                    <p className='text-lg font-semibold text-primary cursor-pointer'>+977 9812457681</p>
                </div>
                <div>
                    <ul className='flex gap-5 text-xl font-semibold '>
                        <li  className='hover:text-primary duration-200 transition-all cursor-pointer  ' >  Home</li>
                        <li  className='hover:text-primary duration-200 transition-all cursor-pointer   ' >About</li>
                        <li  className='hover:text-primary duration-200 transition-all  cursor-pointer  ' >Services</li>

                    </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer