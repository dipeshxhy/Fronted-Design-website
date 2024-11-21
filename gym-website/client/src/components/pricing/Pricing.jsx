import React from 'react'
import PriceCard from './PriceCard'

const Pricing = () => {
    const priceCardData=[
        {
            title:'Basic Plan',
            price: '$19.99',
            duration:'1 month',
            features:[
                'Unlimited Access',
                'Personal Training',
                'Online Classes',
                'Access to 24/7 Support',
                'Free Trial'
            ]
        },
        {
            title:'Standard Plan',
            price: '$49.99',
            duration:'3 months',
            features:[
                'Unlimited Access',
                'Personal Training',
                'Online Classes',
                'Access to 24/7 Support',
                'Free Trial'
            ]
        },{
            title:'Premium Plan',
            price: '$99.99',
            duration:'12 months',
            features:[
                'Unlimited Access',
                'Personal Training',
                'Online Classes',
                'Access to 24/7 Support',
                'Free Trial'
            ]
        },
    
    ]
  return (
    <div>
        <div className="container dark:bg-black dark:text-white py-7">
            <div className='text-center pb-5'>
                <h1 className='text-5xl font-bold '>Why  <span className='text-primary'> Choose </span> Us </h1>
            </div>
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
                {
                    priceCardData.map((card,index)=>(
                        <PriceCard key={index} data={card}/>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Pricing