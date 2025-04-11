import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const UnifyAiG = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".unify-img", {
        scale:180,
        yPercent:1650,
        xPercent:-90,
        ease:"none",
        scrollTrigger:{
            trigger:'#unifyAi',
            start:"top 50%",
            end:'+1000 top',
            scrub:true,
            pin:true,
        
        }
      });
      gsap.to("#unifyAi",{
        opacity:0,
        scrollTrigger:{
            trigger:"#unifyAi",
            start:"+1000 bottom",
            end:"+1200 top",
            scrub:true,
            // markers:true
        }
      })
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="w-screen h-[30vw] relative z-[40] bg-[#070707] " id="unifyAi">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[20vw] h-[10vw] relative left-[-0.12%] ">
          <Image
            src={"/assets/images/UnifyAI.svg"}
            className="object-contain w-full h-full unify-img"
            width={300}
            height={100}
            alt="UnifyAI"
          />
        </div>
      </div>
    </section>
  );
};

export default UnifyAiG;
