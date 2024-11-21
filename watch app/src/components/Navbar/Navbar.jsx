import React from 'react'
import { FaCaretDown } from "react-icons/fa";
const navLinks=[
    {name:"Home",link:"/"},
    {name:"Best Sellers",link:"/best-product"},



]
const dropDownMenu=[
    {
        name:"Top Sellers",
        link:"/#"
    },
    {
        name:"New Arrivals",
        link:"/#"
    },{
        name:"Trending Now",
        link:"/#"
    }
]
const Navbar = () => {
  return (
    <div>
        <div>
            <div className="container  bg-white flex justify-between text-black dark:bg-black dark:text-white">
                {/* logo section */}
                <div className='flex items-center '>
<img className='w-10 space-x-3' src="https://watch-store-tcj.netlify.app/assets/logo-mHakmM9x.png" alt="" />
<h1 className='text-3xl flex font-bold' >Watch <span className='font-normal'>Store</span></h1>
                </div>
                {/* //links section */}
                <div className='flex items-center gap-2'>
                    <div>
                        Darkmode
                    </div>
                    <div>
                        <ul className='flex items-center gap-3 '>
                            {navLinks.map((link, index) => (
                                <li className='hover:text-primary' key={index}>
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))}
                            <li className='flex group  relative cursor-pointer items-center h-[72px] gap-2'>Quick Links 
                                <span>
                                    <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                                </span>
                                {/* //drop down menu  */}
                                <div>
                                    
                                    <ul className='absolute z-[9999] top-[60px] hidden group-hover:block left-0 w-32 bg-white dark:bg-black dark:text-white'>
                                        {dropDownMenu.map((link, index) => (
                                            <li className='hover:bg-primary p-2 font-bold ' key={index}>
                                                <a href={link.link}>{link.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar