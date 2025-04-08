'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import PrimaryButton from './Button/PrimaryButton'
import { motion , useScroll , useTransform } from "framer-motion";

const Turbocharge = () => {
    const turboChargeContainer = useRef(null);
    const { scrollYProgress } = useScroll({
      target: turboChargeContainer,
      offset: ["start 70%", "200% end"],
    });
  
    // Scale early in scroll
    const scale = useTransform(scrollYProgress, [0, 1], [1, 250]);
    const perspective = useTransform(scrollYProgress,[0,1],[1000,500])
    // Fade out at the end
    const rotateX = useTransform(scrollYProgress,[0,1],[50,0]);
    const opacity = useTransform(scrollYProgress, [0.6, 0.7], [1, 0]);
    const zIndex = useTransform(scrollYProgress,[0.6,0.7],[4,0]);
    const translateY = useTransform(scrollYProgress,[0,1],[-20,0])
  
  return (
    <section id='turbo' className='w-screen h-full' >
      <div className='flex flex-col items-center p-10 w-full'>
        <div className='w-[70%] text-center space-y-15 py-10'>
          <motion.div style={{ transformStyle: 'preserve-3d' ,perspective  , perspectiveOrigin:"top" }} className='w-full h-fit rounded-[1vw] relative ' ref={turboChargeContainer}>
            {/* Base background image */}
            <motion.div   transition={{ duration: 1 }}
              className='absolute top-0 left-0 z-[1] rounded-[1vw] overflow-hidden'
              style={{ transformStyle: 'preserve-3d'  , rotateX:rotateX , perspectiveOrigin:"top" , translateY:translateY }}>

            <Image 
              src={"/assets/images/turbo-charge-base.png"} 
              width={1500} 
              height={900} 
              className='w-full h-full object-contain ' 
              alt='base'
            />

            </motion.div>
              
        

            {/* Dashboard Image with perspective */}
            <motion.div 
              
              transition={{ duration: 1 }}
              className='absolute top-0 left-0 z-[1] rounded-[1vw] overflow-hidden'
              style={{ transformStyle: 'preserve-3d', perspective: 1800 , rotateX:rotateX , perspectiveOrigin:"top" , translateY:translateY }}
            >
              <Image 
                src={"/assets/images/turbo-charge-dsahboard.png"} 
                width={120} 
                height={900} 
                className='w-full h-full object-contain' 
                alt='dashboard'
              />
            </motion.div>

            {/* Graph Image */}
            <motion.div 
            
              transition={{ duration: 1 }}
              className='absolute top-[10%] left-[15%] z-[1]' 
              style={{ transformStyle: 'preserve-3d', perspective: 1800 , rotateX:rotateX , perspectiveOrigin:"top" , translateY:translateY  }}
            >
              <Image 
                src={"/assets/images/turbo-charge-graph.png"} 
                width={500} 
                height={800} 
                className='w-full h-full object-contain' 
                alt='graph'
              />
            </motion.div>

            {/* Details Image */}
            <motion.div 
             
              transition={{ duration: 1 }}
              className='absolute bottom-[7%] left-[15%] z-[1]' 
              style={{ transformStyle: 'preserve-3d', perspective: 1800 , rotateX:rotateX , perspectiveOrigin:"top" , translateY:translateY  }}
            >
              <Image 
                src={"/assets/images/turbo-charge-details.png"} 
                width={500} 
                height={900} 
                className='w-full h-full object-contain' 
                alt='details'
              />
            </motion.div>

            {/* Ratings Image */}
            <motion.div 
             
              transition={{ duration: 1 }}
              className='absolute right-0 top-[7%] z-[1]' 
              style={{ transformStyle: 'preserve-3d', perspective: 1800 , rotateX:rotateX , perspectiveOrigin:"top" , translateY:translateY  }}
            >
              <Image 
                src={"/assets/images/turbo-charge-ratings.png"} 
                width={200} 
                height={700} 
                className='w-[19vw] h-[35vw] object-contain' 
                alt='ratings'
              />
            </motion.div>
          </motion.div>

          <div className='space-y-10'>
            <h2 className='text-[5.2vw] font-head leading-[1.2]'>
              Turbocharge Your AI/ML Use Cases in 3-4 weeks and GenAI in 2-4 hours
            </h2>
            <p className='text-[#CACACA] w-[80%] content-p mx-auto'>
              Unleash the power of AI and Generative AI with UnifyAI – the enterprise-ready platform designed to streamline, scale, and deploy AI solutions seamlessly. Whether you're leveraging AI for automation, predictive analytics, or fraud detection, UnifyAI accelerates your journey from prototype to production with unmatched speed and efficiency.
            </p>
            <PrimaryButton text={"Know more"} href={"#"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Turbocharge
