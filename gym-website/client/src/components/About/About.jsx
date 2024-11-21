import { motion, useScroll, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const About = ({ image, reverse }) => {
    // Create a reference to the page 2 section
    const sectionRef = useRef(null);
    
    // Use useInView to track when the section comes into view
    const isInView = useInView(sectionRef, { margin: "-50% 0px" }); // Adjust margin to trigger earlier or later

    return (
        <div ref={sectionRef} className={`py-14 dark:bg-black ${reverse ? 'dark:bg-gray-950' : 'dark:bg-black'} duration-200 ${reverse ? "bg-white" : "bg-slate-100"} dark:text-white`}>
            <div className="container">
                <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 gap-3">
                    {/* image section */}
                    <div>
                        <motion.img
                            initial={{ x: reverse?70:-70, opacity: 0 }} // Start off-screen to the right
                            animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate to visible when in view
                            transition={{ duration: 1.5 }} // Adjust timing as needed
                            className={`max-h-[300px] mx-auto drop-shadow-md sm:scale-125 ${reverse ? 'order-last' : ""}`}
                            src={image}
                            alt=""
                        />
                    </div>

                    {/* text section */}
                    <div className={`${reverse ? 'order-first' : ""}`}>
                        <div className='flex gap-4 items-center'>
                            <div className='text-7xl text-primary'>
                                <h1 className='font-bold'>01</h1>
                            </div>
                            <div>
                                <p className='text-x font-semibold'>Fitness Club</p>
                                <h1 className='text-primary text-2xl sm:text-4xl'>ABOUT US</h1>
                            </div>
                        </div>
                        <div className='space-y-6 py-8'>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id non pariatur eveniet repudiandae est excepturi.</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum consectetur officia, mollitia repellendus sapiente. Obcaecati accusamus voluptas maiores necessitatibus?</p>
                            </div>
                        </div>
                        <button className='outline-btn'>GET STARTED</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
