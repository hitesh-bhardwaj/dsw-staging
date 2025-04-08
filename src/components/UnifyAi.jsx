import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const UnifyAi = () => {
  const unifyContainer = useRef(null);

  // Scroll tracking relative to this section
  const { scrollYProgress } = useScroll({
    target: unifyContainer,
    offset: ["start 30%", "end end"],
  });

  // Scale early in scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 250]);
  
  // Fade out at the end
  const opacity = useTransform(scrollYProgress, [0.6, 0.7], [1, 0]);
  const zIndex = useTransform(scrollYProgress,[0.6,0.7],[4,0]);
  const translate = useTransform(scrollYProgress,[0,0.7],[0,5500])
  useEffect(()=>{
   const ctx = gsap.context(()=>{
     gsap.fromTo(".unify-img",{
      opacity:0,
      scale:0.5,
      yPercent:100
     },{
      opacity:1,
      scale:1,
      yPercent:0,
      scrollTrigger:{
        trigger:".unify-img",
        start:"top bottom",
        end:"bottom 70%",
        scrub:true
      }
        
     })
   })
   return()=>ctx.revert();
  },[])

  return (
    <motion.section
      ref={unifyContainer}
      style={{
        opacity,
        z:zIndex,
        position: "sticky"
      }}
      className="h-[250vw] w-screen bg-black relative z-[4] overflow-hidden pointer-events-none"
    >
      <motion.div
        style={{
          scale,
          y:translate,        
          top: "25%",
          left: "-20%",
          height: "50vh",
        }}
        className="flex items-center justify-center"
      >
        <div className="w-[20vw] h-[10vw] relative left-[-0.12%] ">
          <Image
            src={"/assets/images/UnifyAI.svg"}
            className="object-contain w-full h-full unify-img"
            width={300}
            height={100}
            alt="UnifyAI"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default UnifyAi;
