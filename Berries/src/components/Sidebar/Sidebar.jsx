import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { AnimatePresence, motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: 200
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const Sidebar = () => {
  return (
    <div>
      <AnimatePresence mode='wait'>
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          exit="exit"  
          className='bg-gradient-to-b from-primary to-secondary w-24 px-5 h-full absolute top-0 right-0'
        >
          <div className='flex flex-col justify-center items-center mt-20 gap-4'>
            <div className='px-2 text-center space-y-3'>
              {["home", "where to find", "contact"].map((item, index) => (
                <motion.li whileHover={{x:10}} className='list-none cursor-pointer text-xs uppercase font-bold text-shadow' key={index}>{item}</motion.li>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.3 }} className='w-[1px] h-20 bg-gray-300'></motion.div>

            {/* Icon animations */}
            <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 200 }}>
              <FaFacebookF className='border-[1px] p-1 border-white rounded-full' size={30} />
            </motion.div>

            <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 200 }}>
              <AiOutlineInstagram className='border-[1px] p-1 border-white rounded-full' size={30} />
            </motion.div>

            <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 200 }}>
              <GrLinkedinOption className='border-[1px] p-1 border-white rounded-full' size={30} />
            </motion.div>

            <div className='w-[1px] h-20 bg-gray-300'></div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
