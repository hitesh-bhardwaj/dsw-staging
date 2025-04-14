import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const KeepScrolling = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (scrolling) {
        gsap.to(".scroll-content", {
          yPercent: 200,
          duration: 1,
          ease: "power3.inOut"
        })
        gsap.to(".arrow-container", {
          yPercent: 50,
          duration: 1,
          repeatDelay: 3,
        })
      }
      else {
        gsap.to(".arrow-container", {
          yPercent: 130,
          duration: 1,
          repeatDelay: 3,
          repeat: -1
        })
        gsap.from(".scroll-content", {
          yPercent: 200,
          duration: 1,
          ease: "power3.inOut"
        })
      }
    });
    return () => ctx.revert()

  }, [scrolling])
  useEffect(()=>{
    const ctx = gsap.context(()=>{
     gsap.from(".scrolling",{
      opacity:0,
      delay:14,
      duration:1,
     })

    })
    return()=>ctx.revert()

  })
  // Detect scroll
  useEffect(() => {


    let timeout;

    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrolling(false);
      }, 7000); // adjust delay as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-[99999] pointer-events-none ">
      <div className="text-[1vw] h-fit relative overflow-hidden flex gap-[1vw] scrolling">
        <div className="scroll-content flex gap-[1vw]">
          <span className={`inline-block shimmer`}>
            Keep scrolling to discover more
          </span>
          <div className="flex flex-col gap-[0.5vw] w-fit h-[1vw] -translate-y-[100%] arrow-container">
            <Image src="/assets/icons/arrow-left.svg" width={20} height={20} className={`h-[1vw] w-[1vw] -rotate-90 opacity-80 relative z-10 ${scrolling ? "hidden" : "translate-y-0"}`} alt="Previous" />
            <Image src="/assets/icons/arrow-left.svg" width={20} height={20} className={`h-[1vw] w-[1vw] -rotate-90 opacity-80 relative z-10 `} alt="Previous" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeepScrolling;
