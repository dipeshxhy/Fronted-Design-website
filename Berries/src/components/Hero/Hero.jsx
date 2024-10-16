import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { motion } from "framer-motion";

// Container for staggering
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      staggerChildren: 0.5, // Staggers each child by 0.5 seconds
    },
  },
};

// Button variants
const buttonVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.2,
    },
  },
};

const Hero = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="md:px-8 md:py-4 overflow-hidden bg-[#7E1108]">
      <motion.div className="container bg-gradient-to-r from-primary to-secondary relative min-h-[400px] rounded-3xl w-full">
        <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <div className="container py-24 flex">
          <motion.div
            variants={containerVariants} // Apply container variants for staggering
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3"
          >
            {/* Text section */}
            <div className="col-span-1 space-y-3">
              <motion.h1
                className="text-5xl ml-10 flex items-center"
              >
                01 <div className="w-32 h-[1px] mt-10 bg-white"></div>{" "}
              </motion.h1>
              <motion.div className="space-y-4">
                <motion.h1
                  className="text-6xl text-shadow tracking-tight font-bold uppercase"
                >
                  a healthy <br /> fruit
                </motion.h1>
                <motion.p  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3,duration:1  }}
                  className="text-sm"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                  minima facilis repudiandae repellendus harum aut at mollitia
                  aperiam aliquid asperiores.
                </motion.p>
                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="px-4 box-shadow py-2 border-[1px] capitalize border-white rounded-xl"
                >
                  shop now
                </motion.button>
              </motion.div>
            </div>

            <motion.div className="py-6 text-shadow">
              <motion.img
              initial={{opacity:0,y:'-100vh'}}
              animate={{opacity:1,y:0}}
              transition={{delay:1.2,type:"spring",stiffness:200}}
                drag
                dragConstraints={{ left: -100, right: 100, top: -200, bottom: 200 }}
                className="w-[300px] scale-150 img-shadow relative z-[99]"
                src="https://strawberry-tcj.netlify.app/assets/strawberry-W7ulFOJ_.png"
                alt="strawberry"
              />
            </motion.div>
            <div className="h-full sm:hidden"></div>
          </motion.div>
        </div>

        <motion.h1 initial={{opacity:0,y:200}} animate={{opacity:1,y:0}} transition={{delay:2,duration:1.2}} className="text-[80px] sm:text-[100px] md:text-[110px] z-0 absolute bottom-0 text-center w-full text-shadow font-bold uppercase">
          berries
        </motion.h1>
        {showSideBar && <Sidebar />}
      </motion.div>
    </div>
  );
};

export default Hero;
