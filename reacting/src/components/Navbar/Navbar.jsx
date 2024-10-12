import React from 'react'

const Navbar = () => {
  return (
    <div className='shadow-md    '>
        <nav className='flex  container  py-2 justify-between items-center'>
            <h1 className='uppercase font-bold text-xl'>Logo</h1>
            <ul className='flex gap-4'>
                <li><a href="/home" className='hover:text-blue-500'>Home</a></li>
                <li><a href="/contact" className='hover:text-blue-500'>Contact</a></li>
                <li><a href="/about" className='hover:text-blue-500'>About</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar