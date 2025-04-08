import React, { useEffect } from "react";
import PrimaryButton from "./Button/PrimaryButton";
import WhiteButton from "./Button/WhiteButton";
import gsap from "gsap";
import { motion } from "motion/react";
import Gradient from "./Gradient";

const Hero = () => {
  useEffect(() => {
    gsap.from(".hero-bg-line", {
      scaleY: 0,
      stagger: 0.5,
      duration: 2,
      ease: "power1.out",
    });
  }, []);
  return (
    <>
    <section className="h-[75vw] w-screen relative" id="hero">
      <div className="flex flex-col items-center justify-start  w-full h-full pt-[10vw]">
        <div className="w-[62%] text-center space-y-6 pb-5 p-10">
          <h1 className="text-[5.2vw] font-head leading-[1.2]">
            AI-Powered Innovation with Data Science Wizards
          </h1>
          <p className="text-[#CACACA] w-full content-p font-body ml-auto mr-auto  ">
            Whether you're in insurance, finance, healthcare, or retail, our AI
            solutions accelerate your journey from concept to production: AI/ML
            Use Cases in 3-4 weeks and GenAI in 2-4 hours{" "}
          </p>
          <div className="flex items-center justify-center gap-6  mt-10">
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}}>
            <PrimaryButton href={"#"} text={"Start Walkthrough"}/>

            </motion.div>

            <WhiteButton href={"#"} text={"Schedule a Call"} />
          </div>
          <div></div>
        </div>
        
      </div>

      <div className="w-screen h-[38vw] absolute top-0 left-0 z-[-1] flex justify-around">
        <motion.div
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,

            transition: { duration: 1.2 },
          }}
          className="w-[0.1px] h-full bg-white/15 origin-top"
        />

        <motion.div
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,

            transition: { duration: 1.2, delay: 0.2 },
          }}
          className="w-[0.1px] h-full bg-white/15 origin-top"
        />
        <motion.div
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,

            transition: { duration: 1.2, delay: 0.4 },
          }}
          className="w-[0.1px] h-full bg-white/15 origin-top"
        />
        <motion.div
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,

            transition: { duration: 1.2, delay: 0.6 },
          }}
          className="w-[0.1px] h-full bg-white/15 origin-top"
        />
      </div>
      <div className="w-screen h-screen absolute top-0 left-0 z-[-2]">
        <Gradient/>
      </div>
    </section>
    </>
  );
};

export default Hero;
