import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import React, { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  

  useGSAP(() => {
    gsap.from(heroRef.current,{
      opacity:0,
      y:-100,
      duration:1.2,
      delay:2.3
    })
  });
  return (
    <div className="z-40">
      <div className="bg-[url(https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxneW18ZW58MHx8MHx8fDA%3D)]  w-full min-h-[89vh] dark:bg-black duration-200 dark:text-white bg-cover bg-center  ">
        <div className="bg-white/20 h-[89vh] dark:bg-black/30 duration-300 ">
          <div
            ref={heroRef}
            className="  container text-center space-y-3 py-[120px]   "
          >
            <h1 className="text-primary font-bold text-xl md:text-2xl">
              Start Your Fitness Journey
            </h1>
            <p className="text-6xl font-black">
              Your Fitness <br /> Journey Begins!
            </p>
            <p className="text-xl font-medium">
              "Your Fitness Journey Begins!"
            </p>
            <motion.button whileHover={{scale:1.1}} className="primary-btn">Get Started</motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
