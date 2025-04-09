"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import PrimaryButton from "./Button/PrimaryButton";
import { SplitInLineWord } from "@/components/splitTextUtils";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const TurbochargeG = () => {
  const turboChargeContainer = useRef(null);
  //   useEffect(()=>{
  //     const ctx = gsap.context(()=>{

  //         const tl = gsap.timeline({
  //             scrollTrigger:{
  //                 trigger:"#turbo",
  //                 scrub:true,
  //                 pin:true,
  //                 start:"top top",
  //                 end:"200% bottom",
  //                 markers:true

  //             }
  //         })
  //         tl.from(".base-img",{
  //             perspective:"800px",
  //             perspectiveOrigin:"top"
  //         })
  //     })
  //     return()=>ctx.revert()

  //   },[])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // const headingAnim = document.querySelectorAll(".turbo-headingAnim");
      // headingAnim.forEach((headingAnim)=>{
      //     SplitInLineWord(headingAnim);
      //     const headingWord = headingAnim.querySelectorAll(".line-internal");
      //     gsap.fromTo(headingWord,{

      //           maskPosition: "100% 100%",

      //     },{
      //         maskPosition:"0% 100%",
      //         stagger:0.05,
      //         duration:2.5,
      //         ease:"power3.out",
      //         scrollTrigger: {
      //           trigger: ".turbo-headingAnim",
      //           start: '30% top', 
      //           // markers:true,
      //           scrub:true,



      //         },

      // });
      // })      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#turbo",
          scrub: true,
          pin: true,
          start: "top 12%",
          end: "bottom bottom",

        },
      });
      gsap.from(".turbo-img", {
        opacity: 0,
        duration: 0.5,
        stagger: {
          from: "random",
          each: 0.1,
        },
        scrollTrigger: {
          trigger: "#turbo",
          scrub: true,
          start: "top 50%",
          end: "bottom 30%",
        }
      })
      gsap.to(".turbo-content", {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".turbo-content",
          start: "bottom top",
          end: "200% top",
          scrub: true,

        }
      })

      tl.from(".img-1", {
        rotateX: 45,
        yPercent: -30,
        xPercent: -25,

        duration: 1,
      }).from(".base-img", {
        rotateX: 45,
        duration: 1,

      }, "<")
        .from(
          ".img-2",
          {
            rotateX: 45,
            transformOrigin: "top center",
            duration: 1,
          },
          "<"
        )
        .from(
          ".img-3",
          {
            rotateX: 45,
            yPercent: -40,
            scale: 1.4,
            transformOrigin: "bottom center",
            duration: 1,
          },
          "<"
        )
        .from(
          ".img-4",
          {
            yPercent: -30,
            xPercent: 25,
            rotateX: 45,
            transformOrigin: "right center",
            duration: 1,
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="turbo" className="w-screen h-full">
      <div className="flex flex-col items-center p-10 w-full">
        <div className="w-[70%] text-center space-y-15 py-10">
          <div
            className="w-full h-fit rounded-[1vw] relative  perspective-[800px]"
            ref={turboChargeContainer}
          >
            {/* Base background image */}

            <Image
              src={"/assets/images/turbo-charge-base.png"}
              width={1500}
              height={900}
              className="w-full h-full object-contain base-img"
              alt="base"
            />


            {/* Dashboard Image with perspective */}
            <div className="absolute top-0 w-[8.8vw] left-0 z-[1] rounded-[0.5vw] overflow-hidden img-1 turbo-img">
              <Image
                src={"/assets/images/turbo-charge-dsahboard.png"}
                width={120}
                height={900}
                className="w-full h-full object-contain"
                alt="dashboard"
              />
            </div>

            {/* Graph Image */}
            <div className="absolute w-[37vw] top-[10%] left-[15%] z-[1] img-2 turbo-img">
              <Image
                src={"/assets/images/turbo-charge-graph.png"}
                width={500}
                height={800}
                className="w-full h-full object-contain"
                alt="graph"
              />
            </div>

            {/* Details Image */}
            <div className="absolute w-[37vw] bottom-[7%] left-[15%] z-[1] img-3 turbo-img">
              <Image
                src={"/assets/images/turbo-charge-details.png"}
                width={500}
                height={900}
                className="w-full h-full object-contain"
                alt="details"
              />
            </div>

            {/* Ratings Image */}
            <div className="absolute right-0 top-[7%] z-[1] img-4 turbo-img">
              <Image
                src={"/assets/images/turbo-charge-ratings.png"}
                width={200}
                height={700}
                className="w-[19vw] h-[35vw] object-contain"
                alt="ratings"
              />
            </div>
          </div>

          <div className="space-y-10 turbo-content">
            <h2 className="text-[5.2vw] font-head leading-[1.2] turbo-headingAnim headingAnim">
              Turbocharge Your AI/ML Use Cases in 3-4 weeks and GenAI in 2-4
              hours
            </h2>
            <p data-para-anim className="text-[#CACACA] w-[80%] content-p mx-auto">
              Unleash the power of AI and Generative AI with UnifyAI – the
              enterprise-ready platform designed to streamline, scale, and
              deploy AI solutions seamlessly. Whether you're leveraging AI for
              automation, predictive analytics, or fraud detection, UnifyAI
              accelerates your journey from prototype to production with
              unmatched speed and efficiency.
            </p>
            <PrimaryButton text={"Know more"} href={"#"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurbochargeG;
