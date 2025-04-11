import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import WhiteButton from "../Button/WhiteButton";
gsap.registerPlugin(ScrollTrigger);

const UnifyAiG = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".unify-img",{
            scale:0.2,
            yPercent:200,
            ease:"none",
            scrollTrigger:{
                trigger:"#unifyAi",
                start:"top bottom",
                end:"75% bottom",
                scrub:true,
                // markers:true
            }
        })
      gsap.fromTo(".unify-img",{
        scale:1,
        yPercent:0
      }, {
        scale:180,
        yPercent:2550,
        xPercent:-90,
        ease:"none",
        scrollTrigger:{
            trigger:'#unifyAi',
            start:"top top",
            end:'+500 top',
            scrub:0,
            pin:true,
            // markers:true
        }
      });
      gsap.to(".unify-content",{
        opacity:1,
        ease:"power4.out",
        scrollTrigger:{
            trigger:".unify-content",
            start:"top top",
            end:"+750 top",
            scrub:true,
            markers:true,
         
        }
      })
    //   gsap.to("#unifyAi",{
    //     opacity:0,
    //     scrollTrigger:{
    //         trigger:"#unifyAi",
    //         start:"+700 bottom",
    //         end:"+850 bottom",
    //         scrub:true,
         
    //     }
    //   })
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="w-screen h-[55vw] relative z-[40] bg-[#070707] pointer-events-none overflow-hidden " id="unifyAi">
      <div className="w-full h-full flex justify-center  pt-[10vw] overflow-hidden unify-container">
        <div className="w-[20vw] h-[10vw] relative left-[-0.12%] ">
          <Image
            src={"/assets/images/UnifyAI.svg"}
            className="object-contain w-full h-full unify-img"
            width={300}
            height={100}
            alt="UnifyAI"
          />
        </div>
        <div className="w-[58%] ml-auto mr-auto text-center space-y-10 pb-32 absolute top-[55%] opacity-0 z-[41] left-[50%] translate-x-[-50%] translate-y-[-50%] unify-content">
          <p className="text-white content-p font-light">
            UnifyAI is a cutting-edge AI/ML platform that empowers businesses to
            develop, test, and deploy AI solutions with ease. Built for both
            traditional AI and Generative AI, it provides a unified ecosystem to
            accelerate AI adoption in industries like insurance, finance,
            healthcare, and retail.
          </p>
          <div>
            <WhiteButton text={"Book a demo"} href={"#"} className="border-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifyAiG;
