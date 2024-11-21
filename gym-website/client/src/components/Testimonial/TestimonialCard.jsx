import React from 'react'

const TestimonialCard = ({data}) => {
  return (
<div className='group mt-10 '>
    <div className='dark:bg-gray-900/50 min-h-[300px]  duration-300 gap-5 p-5  group-hover:bg-primary/50  transition-colors bg-slate-100 flex  flex-col items-center  rounded-md'>
    <img className='w-[100px]  h-[100px] rounded-full ' src="https://picsum.photos/101/101" alt="" />
    <h1 className='text-primary font-bold text-2xl group-hover:text-red-500'>{data.title}</h1>
    <p className='text-sm text-ellipsis line-clamp-3 group-hover:text-white'>{data.text}
    
    </p>
    <h1 className='text-xl font-bold text-primary group-hover:text-red-500'>{data.name}</h1>
    </div>

</div>

  )
}

export default TestimonialCard