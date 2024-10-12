import React from 'react'

const Services = ({data}) => {
  
  return (
    <div>
      <div className='container'>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>

    {
      data.map(service => (
            <div key={service.id} className='p-8 rounded-md space-y-3 gap-2 shadow-md hover:shadow-2xl'>
              <div className='flex justify-center'>  {service.icon}</div>
                <h3 className='text-xl font-bold flex justify-center'>{service.title}</h3>
                <p className='text-md text-gray-600'>{service.description}</p>
            </div>
        ))
 
    }


</div>
      </div>

    </div>
  )
}

export default Services