import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import BannerImg from "./assets/rocket.png"
import HeroImg from "./assets/hero.jpg"
import { LuTimerReset } from "react-icons/lu";
import { IoMdPerson } from "react-icons/io";
import { IoRocket } from "react-icons/io5";
import { GiBookPile } from "react-icons/gi";
import { TiSortAlphabeticallyOutline } from "react-icons/ti";
import { IoDiamondOutline } from "react-icons/io5";
import FamilyImg from "./assets/family.jpg"

const App = () => {
  const ServicesData=[
    {
        id:1,
        icon:<IoRocket size={50} color='red' />,
        title:'Title 1',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy mi in neque tristique tincidunt.'
    },
    {
        id:2,
        icon:<IoMdPerson size={50} color='blue' />,
        title:'Title 2',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy mi in neque tristique tincidunt.'
    },{
        id:3,
        icon:<LuTimerReset size={50} color='green' />,
        title:'Title 3',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy mi in neque tristique tincidunt.'
    }

]
const TypographyData=[
  {
    id:1,
    icon:<GiBookPile  size={50} color='green'/>,
    title:"Easy to use",
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy mi in neque tristique tincidunt.'


  },
  {
    id:2,
    icon:< TiSortAlphabeticallyOutline size={50} color='red' />,
    title:"Quality Fonts",
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy mi in neque tristique tincidunt.'


  },
  {
    id:3,
    icon:< IoDiamondOutline size={50} color='pink' />,
    title:"Quality Icons",
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy mi in neque tristique tincidunt.'

  }
]
  return (
    <div className="">
      <Navbar/>
      <Hero image={HeroImg} title="Get an amazing logo for your startup in 60 seconds" />
      <Services data={ServicesData} />
      <Hero reverse={true} image={BannerImg} title="Fast Grow And Be Smarter" />
      <Services data={TypographyData} />
      <Hero image={FamilyImg} title="Save Time, Save Money,Do It Your Way"  />
      <Footer/>
    </div>
  )
}

export default App