import React from 'react'

const Hero = () => {
  return (
    <div className=' relative'>
        <div className="container mt-12 md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center min-h-[85vh]">
                <div className='space-y-10'>
                    <div >
                    <h1 className='text-6xl font-bold'>N-SERIES</h1>
                    <h5 className='text-primary text-xl font-bold uppercase'>smart escooter</h5>

                    </div>
                    <div className='p-5  border-l-4  border-l-black '>
                        <h2 className='text-md '>70 KM</h2>
                        <p className='text-lg'>EXTENDED URBAN RANGE LITHIUM-ION 

</p>
<p className='text-lg'>REVOLUTION</p>
                    </div>
                </div>
                <div className=''>
                    <img className=' md:scale-150 ' src="https://electric-bike-tcj.netlify.app/assets/bike-_zGJPi91.png" alt="" />
                </div>
                <div className='space-y-4'>
                    <div>
                        <h1 className='text-3xl font-semibold'>
                            29 AH
                        </h1>
                        <p className='text-gray-400/70 font-medium text-2xl'>Compact Capacity</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-semibold'>
                        10 kg
                        </h1>
                        <p className='text-gray-400/70  text-2xl'>Impossible Light</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-semibold'>
                        06 hrs
                        </h1>
                        <p className='text-gray-400/70  text-2xl'>Recharging Time</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-semibold'>
                        02 yr

                        </h1>
                        <p className='text-gray-400/70  text-2xl'>Gurantee</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center gap-5'>
                <h1 className='uppercase text-gray-400 text-2xl hover:text-gray-500 duration-200 cursor-pointer'>prev</h1>
                <h1 className='uppercase text-gray-400 text-2xl  hover:text-gray-500 duration-200 cursor-pointer'>next</h1>
            </div>
        </div>
    </div>
  )
}

export default Hero