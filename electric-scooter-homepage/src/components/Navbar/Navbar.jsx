import React from 'react'
import { IoMdSearch } from "react-icons/io";
const Navbar = () => {
    const NavLinks=[
        {label:'HOME', href:'/'},
        {label:'ABOUT', href:'/about'},
        {label:'QUICKLOOK', href:'/quicklook'}
 
    ]
  return (
    <div className="container py-2">
        <div className='flex justify-between items-center'>
            {/* logo */}
            <div><h1 className='text-2xl cursor-pointer font-bold text-primary '>NIU</h1></div>
            {/* home link section */}
            <div>
                <ul className='flex items-center gap-4'>
                    {
                        NavLinks.map(link=>(
                          <a href={link.href}>  <li  key={link.label} className='hover:text-primary duration-200 cursor-pointer font-medium text-sm'>{link.label}</li></a>
                        ))
                    }
                   
                </ul>
            </div>
            {/* search bar section icons */}
            <div className='hover:text-primary cursor-pointer'>
                <IoMdSearch size={20}  />
            </div>
        </div>
    </div>
  )
}

export default Navbar