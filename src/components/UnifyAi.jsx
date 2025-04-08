import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

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
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

  const translate = useTransform(scrollYProgress,[0,0.7],[0,5500])

  return (
    <motion.section
      ref={unifyContainer}
      style={{
        opacity,
        position: "sticky"
      }}
      className="h-[250vw] w-screen bg-black relative z-[4]"
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
        <div className="w-[20vw] h-[10vw] relative left-[-0.12%]">
          <Image
            src={"/assets/images/UnifyAI.svg"}
            className="object-contain w-full h-full"
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
