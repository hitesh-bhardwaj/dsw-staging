import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Connects = () => {
  const sectionRef = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  useEffect(() => {
    const circles = [circle1.current, circle2.current, circle3.current];

    circles.forEach((circle) => {
      const length = circle.getTotalLength();
      gsap.set(circle, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(circle, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          end: "bottom 70%",
          scrub:true,
          // markers:true
        },
      });
    });
  }, []);

  return (
   <section   ref={sectionRef} className='h-full w-screen py-20 px-15 relative overflow-hidden'>
    <div className='w-full h-full flex flex-col items-center justify-center relative z-[2]'>
        <div className='text-center w-[40%] space-y-10'>
        <h3 className='text-[5.2vw] leading-[1.2]'>
        Connects with Your Platform
        </h3>
        <p className='text-[1.145vw] text-[#CACACA]'>UnifyAI connects with the platforms you already use.</p>
        </div>
        <div className="w-full flex items-center justify-center gap-20 py-30">
          <div>
            <Image
              src="/assets/images/azure-logo.png"
              height={49}
              width={171}
              alt="azure-logo"
            />
          </div>
          <div>
            <Image
              src="/assets/images/intel-logo.png"
              height={51}
              width={131}
              alt="azure-logo"
            />
          </div>
          <div>
            <Image
              src="/assets/images/IBM-logo.png"
              height={136}
              width={136}
              alt="azure-logo"
            />
          </div>
          <div className="relative flex items-center justify-center w-[20vw] h-[20vw]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-800/60 h-[15vw] w-[15vw] z-[-1]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-800/40 h-[20vw] w-[20vw] z-[-2]" />
            <Image
              src="/assets/images/unify.png"
              height={65}
              width={150}
              alt="azure-logo"
            />
          </div>

          <div>
            <Image
              src="/assets/images/amazon-logo.png"
              height={68}
              width={183}
              alt="azure-logo"
            />
          </div>
          <div>
            <Image
              src="/assets/images/google-logo.png"
              height={58}
              width={335}
              alt="azure-logo"
            />
          </div>
        </div>
      </div>
      <div className="w-screen h-[30vw] bg-gradient-to-t from-transparent to-[#000000] absolute top-0 z-[1]"/>
      <div className="w-screen h-[15vw] bg-gradient-to-b from-transparent to-[#000000] absolute bottom-0 z-[1]"/>
      <div> 
      </div>
      <div className="h-screen w-[90vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] flex items-center justify-center">
  <div className="relative w-fit h-fit flex items-center justify-center">
    <svg
      width="859"
      height="859"
      viewBox="0 0 859 859"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute"
    >
      <circle
       ref={circle1}
        cx="429.5"
        cy="429.601"
        r="428.686"
        stroke="url(#paint0_linear_338_2389)"
        strokeOpacity="0.5"
        strokeWidth="0.25"
      />
      <defs>
        <linearGradient
          id="paint0_linear_338_2389"
          x1="0.688965"
          y1="30.818"
          x2="861.956"
          y2="34.773"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#999999" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      width="1231"
      height="1087"
      viewBox="0 0 1231 1087"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute"
    >
      <circle
       ref={circle2}
        cx="615.5"
        cy="615.949"
        r="614.991"
        stroke="url(#paint0_linear_338_2388)"
        strokeOpacity="0.5"
        strokeWidth="0.25"
      />
      <defs>
        <linearGradient
          id="paint0_linear_338_2388"
          x1="0.383789"
          y1="43.9071"
          x2="1235.84"
          y2="49.5805"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#999999" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      width="1581"
      height="1208"
      viewBox="0 0 1581 1208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute"
    >
      <circle
       ref={circle3}
        cx="790.5"
        cy="736.949"
        r="789.926"
        stroke="url(#paint0_linear_338_2387)"
        strokeOpacity="0.5"
        strokeWidth="0.55"
      />
      <defs>
        <linearGradient
          id="paint0_linear_338_2387"
          x1="0.449219"
          y1="2.22257"
          x2="1587.27"
          y2="9.50943"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#999999" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</div>

    </section>
  );
};

export default Connects;
