import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="container  dark:bg-gray-900/70 bg-slate-200 dark:text-white duration-200
        ">
            <div className="grid grid-cols-1 py-14 sm:grid-cols-3 place-items-center">
                <div className=' col-span-2 '>
                    <h1 className='sm:text-4xl text-2xl font-bold '> <span className='text-primary'>Sweat now, shine later.</span>  Your body is a reflection of your lifestyle choices.</h1>
                </div>
                <div className='col-span-1'>
<button className='primary-btn'>Contact Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact