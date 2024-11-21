import React from 'react'

const PriceCard = ({data}) => {
    const{title,price,duration,features}=data
  return (
    <div className='group  '>
    <div className='bg-gray-100  dark:bg-gray-900/90 dark:text-white rounded-md  shadow-md group-hover:bg-primary/50  duration-300 transition-colors p-12 text-center space-y-3 '>
        <h1 className='sm:text-3xl text-2xl text-primary/80 group-hover:text-primary font-bold'>{title}</h1>
        <h6 className='sm:text-4xl text-xl text-primary group-hover:text-green-500'>{price}</h6>
        {
            features.map((feature,index)=>(
                <p key={index} className='group-hover:text-white font-bold   '>{feature}</p>
            ))
        }
        
        <h4 className='group-hover:text-white font-bold   '>Duration : {duration}</h4>
        <button className='primary-btn'>Learn More</button>
    </div>

</div>
  )
}

export default PriceCard