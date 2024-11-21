import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import BannerImg from './assets/banner.png'
import Banner2Img from './assets/banner2.png'
import Pricing from './components/pricing/Pricing'
import AppBanner from './components/AppBanner/AppBanner'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'

const App = () => {
  
  return (
    <div className='
    '>
      <Navbar/>
      <Hero  />
      <About image={BannerImg} />
      <About reverse={true} image={Banner2Img} />
      <About  image={BannerImg} />
      <Contact/>
      <Pricing/>
      <AppBanner/>
      <Testimonial/>
      <Footer/>

    </div>
  )
}

export default App