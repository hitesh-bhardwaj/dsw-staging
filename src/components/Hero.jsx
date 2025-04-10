import React, { useEffect, useRef } from "react";
import PrimaryButton from "./Button/PrimaryButton";
import WhiteButton from "./Button/WhiteButton";
import { motion } from "motion/react";
import Gradient from "./Gradient";
import gsap from "gsap";
import { SplitInLine, SplitInLineOnly } from "./splitTextUtils";

const lineCount = 4;

const AnimatedLine = ({ delay }) => (
  <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1, transition: { duration: 1.2, delay } }}
    className="w-[0.1px] h-full bg-white/15 origin-top overflow-y-hidden"
  >
    <motion.span
      initial={{ y: 0 }}
      animate={{ y: "38vw" }}
      transition={{ duration: 1.2, delay, repeat: Infinity, repeatDelay: 2 + delay }}
      className="block w-full h-3 bg-white blur-[1px]"
    /> 
  </motion.div>
);

const Hero = () => {
  const heading = useRef(null);
  const para = useRef(null);

  useEffect(() => {
    SplitInLineOnly(heading.current);
    SplitInLine(para.current);
    const lines = heading.current.querySelectorAll(".line");
    const paraLines = para.current.querySelectorAll(".line-internal");
    gsap.fromTo(lines, {
      maskPosition: "100% 100%",
    }, {
      maskPosition: "0% 100%",
      delay: 0.6,
      stagger: 0.2,
      duration: 7,
      ease: "power2.out",
    })
    gsap.from(paraLines, {
      yPercent: 150,
      delay: 2,
      duration: 1.2,
      stagger: 0.05,
      ease: "power3.out"
    });
  }, []);

  return (
    <section className="h-[120vh] w-screen relative" id="hero">
      <div className="flex flex-col items-center justify-start w-full h-full pt-[15vw]">
        <div className="w-[62%] text-center space-y-6 pb-5">
          <motion.h1 animate={{ opacity: 1 }} ref={heading} className="text-[5.2vw] font-head leading-[1.2] heroHeadAnim opacity-0">
            AI-Powered Innovation with Data Science Wizards
          </motion.h1>
          <motion.p animate={{ opacity: 1 }} ref={para} className="text-[#CACACA] w-full content-p font-body mx-auto overflow-hidden heroParaAnim opacity-0">
            Whether you're in insurance, finance, healthcare, or retail, our AI
            solutions accelerate your journey from concept to production: AI/ML
            Use Cases in 3-4 weeks and GenAI in 2-4 hours
          </motion.p>
          <div className="flex items-center justify-center gap-6 mt-10">
            {[{ Component: PrimaryButton, text: "Start Walkthrough" }, { Component: WhiteButton, text: "Schedule a Call" }].map(({ Component, text }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 2.4 } }}
              >
                <Component href="#" text={text} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Vertical Lines */}
      <div className="w-screen h-[38vw] absolute top-0 left-0 z-[-1] flex justify-center gap-[22vw]">
        {[...Array(lineCount)].map((_, i) => (
          <AnimatedLine key={i} delay={i * 0.2} />
        ))}
      </div>

      {/* Gradient Background */}
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="w-screen h-[120vh] absolute bottom-0 left-0 right-0 z-[-2]">
        <Gradient />
      </motion.div>
    </section>
  );
};

export default Hero;
