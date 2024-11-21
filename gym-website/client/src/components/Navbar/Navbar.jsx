import React from 'react';
import { HiOutlinePhone } from "react-icons/hi";
import DarkMode from './DarkMode';
import { motion } from 'framer-motion';

const Navbar = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 10
      }
    }
  };

  const listVariants = {
    hover: {
      scale: 1.1,
      color: "#FE9808",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className='shadow-md'>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='container dark:bg-black  dark:text-white relative flex justify-between items-center flex-wrap'
      >
        {/* Phone Contact */}
        <div className='flex items-center gap-2 group cursor-pointer'>
          <span><HiOutlinePhone size={26} className='animate-pulse text-primary group-hover:scale-105' /></span>
          <span className='text-primary'>+977 9812457681</span>
        </div>

        {/* Logo */}
        <div className='flex justify-center w-full sm:w-auto'>
          <img className='w-28 absolute top-0 sm:static' src="https://gym-tcj.netlify.app/assets/logo-tsOiz05y.png" alt="Logo" />
        </div>

        {/* Navigation */}
        <div className='w-full sm:w-auto mt-4 sm:mt-0'>
          <motion.ul className='flex flex-col sm:flex-row items-center gap-5'>
            {["Home", "Services", "About", "Join"].map((item, index) => (
              <motion.li
                variants={listVariants}
                whileHover="hover"
                key={index}
                className='hover:text-primary duration-300 uppercase cursor-pointer text-md font-medium'
              >
                {item}
              </motion.li>
            ))}
            <motion.li variants={listVariants} whileHover="hover" whileTap={{ scale: 0.9 }}>
              <DarkMode />
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
