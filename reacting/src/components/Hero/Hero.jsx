import React from 'react'
const Hero = ({reverse,image,title}) => {
  return (
    <>
<main className=''>
    <div className="container min-h-[280px] grid place-items-center  mt-20 ">
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>

        <div className={`${reverse?"order-last":""}`}><img className='w-60 rounded-lg mx-auto sm:m-0' src={image} alt="" /></div>
        <div className={`${reverse?"order-first":""} space-y-4`}>
<h1 className='text-5xl font-bold'>{title} </h1>
<p className='text-lg  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, magni?</p>
<div className='space-x-4'>
    <input type="email" placeholder='Enter Your Email' className='bg-gray-100 border-2 rounded-full focus:outline-none focus:border-1 w-[220px]' />

<button className='bg-blue-500 text-white py-1 px-4 rounded-md '>Notify me</button>
</div>
        </div>
        </div>
    </div>
</main>

    </>
  )
}

export default Hero