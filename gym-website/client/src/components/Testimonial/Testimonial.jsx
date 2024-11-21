import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
    const testimonialData = [
        {
            name: 'John Doe',
            title: 'Owner',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien et nunc mollis semper. Nulla facilisi. Donec vel velit at velit dignissim molestie ac in felis. Nullam in ipsum at velit tincidunt gravida.'
        },
        {
            name: 'Jane Smith',
            title: 'Trainer',
            text: 'Morbi non neque non ex fringilla vulputate. Sed vel neque vel nunc mollis tincidunt. Sed vel neque vel nunc mollis tincidunt. Sed vel neque vel nunc mollis tincidunt.'
        },
        {
            name: 'Mark Johnson',
            title: 'Client',
            text: 'Proin non purus et felis gravida ultricies. Nulla facilisi. Donec vel velit at velit dignissim molestie ac in felis. Nullam in ipsum at velit'
        },
        {
            name: 'Alice Brown',
            title: 'Coach',
            text: 'Curabitur at arcu a neque consectetur bibendum. Donec vel velit at velit dignissim molestie ac in felis. Nullam in ipsum at velit tincidunt gravida.'
        }
    ]
  return (
    <div>
        <div className='container dark:bg-black   dark:text-white py-10'>
            <h1 className='text-6xl text-primary text-center font-bold'>Testimonial</h1>
<div className='grid  grid-cols gap-5 p-2 sm:grid-cols-2 md:grid-cols-4'>
    {
        testimonialData.map((testimonial,index)=>(
            <TestimonialCard data={testimonial} key={index} />
        ))
    }

</div>
        </div>
    </div>
  )
}

export default Testimonial