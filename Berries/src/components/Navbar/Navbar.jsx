import { motion } from 'framer-motion';
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navbar = ({setShowSideBar,showSideBar}) => {
  const containerVariants={
    hidden:{
      opacity:0,
      y:-200
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        type:'spring',
        stiffness: 200,
        damping: 10,
        
      }
    }
  }
  return (
    <div>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="container absolute left-0 top-0 w-full z-20 py-2 flex justify-between items-center">
            <div className='flex items-center'>
                <h1 className='text-4xl tracking-tight uppercase font-bold '>straw </h1> <h1 className='font-normal text-4xl uppercase'>berries</h1>
            </div>
            <div>
                <ul className=' items-center gap-5 capitalize hidden md:flex '>
                    {["home","where to find","Contact"].map((item,index)=>(
                        <motion.li whileHover={{scale:1.1,y:-1}}  className='text-xl cursor-pointer font-medium' key={index}>{item}</motion.li>
                    ))}
                </ul>

            </div>
            <motion.div className='cursor-pointer ' >
              {showSideBar ? <motion.span whileHover={{scale:1.1,color:"red"}}> <RxCross2 size={24} onClick={()=>setShowSideBar(!showSideBar)}/></motion.span> : (
              <motion.span whileHover={{scale:0.2,color:"red"}}> <GiHamburgerMenu size={24} onClick={()=>setShowSideBar(!showSideBar)} /></motion.span> 
              )}  
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Navbar