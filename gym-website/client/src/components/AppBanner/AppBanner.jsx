import React from 'react';
import DumbellImg from '../../assets/dumbell.jpg';

const AppBanner = () => {
  return (
    <div>
      <div className="container dark:bg-black dark:text-white overflow-hidden">
        <div className='bg-[url(https://gym-tcj.netlify.app/assets/dumbell-gHD5KhKR.jpg)] min-h-[55vh] w-full bg-cover rounded-md overflow-hidden'>
        <div className='sm:max-w-[50%] text-center mx-auto'>

          <div className='flex  flex-col items-end space-y-5   justify-center  py-20 pr-10 text-white'>
            <h1 className='text-3xl text-primary text-right'>Get Started with our app</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, at.</p>
            <div className='flex gap-10'>
              <img className='w-[120px]' src="https://gym-tcj.netlify.app/assets/play_store-25MAnoNl.png" alt="" />
              <img className='w-[120px]' src="https://gym-tcj.netlify.app/assets/app_store-aoAyJ2T_.png" alt="" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AppBanner;
