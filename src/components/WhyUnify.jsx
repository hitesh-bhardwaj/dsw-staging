import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import WhiteButton from "./Button/WhiteButton";

gsap.registerPlugin(ScrollTrigger);

const WhyUnify = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text block
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "50% 5%",
          end: "+=3000",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      for (let i = 0; i < 3; i++) {
        timeline
          .fromTo(
            textRef.current,
            { y: 0, opacity: 1 },
            { y: -50, opacity: 0, duration: 1, ease: "power2.out" }
          )
          .fromTo(
            textRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
            "<+=0.2"
          );
      }

      // Animate body background color
      // ScrollTrigger.create({
      //   trigger: sectionRef.current,
      //   start: "top 50%",
      //   end: "+=2000 50%",
      //   markers:true,
      //   onEnter: () => {
      //     gsap.to(document.body, {
      //       background: "linear-gradient(to right, #F16B0D, #E61216)",
      //       duration: 1,
      //       ease: "power2.out",
      //     });
      //   },
      //   onLeaveBack: () => {
      //     gsap.to(document.body, {
      //       background: "linear-gradient(to right, #F16B0D, #E61216)",
      //       duration: 1,
      //       ease: "power2.out",
      //     });
      //   },
      //   onLeave: () => {
      //     gsap.to(document.body, {
      //       background: "#070707",
      //       duration: 1,
      //       ease: "power2.out",
      //     });
      //   },
      // });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="h-full w-screen relative pb-[15vw] mt-[-150vw] pt-[35vw]"
      ref={sectionRef}
    >
      {/* Gradient BG layer */}
      <div className="absolute top-0 left-0 h-full w-screen z-0 pointer-events-none bg-gradient-to-r from-[#F16B0D] to-[#E61216] " />

      <div className="flex flex-col items-center w-full py-30 space-y-30 px-10 relative z-[2]">
        <div className="w-[58%] ml-auto mr-auto text-center space-y-10 pb-32">
          <p className="text-white content-p font-light">
            UnifyAI is a cutting-edge AI/ML platform that empowers businesses to
            develop, test, and deploy AI solutions with ease. Built for both
            traditional AI and Generative AI, it provides a unified ecosystem to
            accelerate AI adoption in industries like insurance, finance,
            healthcare, and retail.
          </p>
          <div>
            <WhiteButton
              text={"Book a demo"}
              href={"#"}
              className="border-none"
            />
          </div>
        </div>

        <div className="space-y-15">
          <h3 className="text-[5.2vw] text-white text-center font-light headingAnim">
            Why Choose UnifyAI?
          </h3>
          <div className="w-full flex items-center justify-between ">
            <div className="flex w-[15%] gap-5">
              <div>
                <Image
                  src="/assets/icons/whychoose-navigation.svg"
                  height={518}
                  width={20}
                  alt="navigation"
                />
              </div>
              <div className="text-white space-y-6 content-p">
                <p>End-to-End AI Lifecycle Management</p>
                <p>Multi-Model AI Support</p>
                <p>Seamless Enterprise Integration</p>
                <p>Scalable Infrastructure</p>
              </div>
            </div>
            <div className="w-[30%] flex flex-col gap-[1.5vw]">
              <div className="rounded-2xl overflow-hidden h-fit w-fit">
                <Image
                  src="/assets/images/homepage/whyunify-img-1.png"
                  height={390}
                  width={382}
                  className="h-[14vw] w-[16vw] object-cover"
                  alt="why unify image 1"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-fit w-fit ml-[7vw]">
                <Image
                  src="/assets/images/unify-dashboard-2.png"
                  height={247}
                  width={283}
                  className="h-[13vw] w-[15vw] object-cover"
                  alt="dashboard"
                />
              </div>
            </div>
            <div className="space-y-10 w-[44%]" ref={textRef}>
              <p className="text-[2.6vw] text-white overflow-hidden font-light">
                End-to-End AI Lifecycle Management – From Model Training to
                Production Deployment
              </p>
              <p className="text-white content-p w-[88%] overflow-hidden">
                UnifyAI provides a complete AI development ecosystem, allowing
                businesses to build, test, optimize, and deploy AI/ML models
                seamlessly. From data ingestion and preprocessing to model
                training, evaluation, and real-time inference, UnifyAI ensures a
                streamlined workflow, reducing time-to-market and eliminating
                inefficiencies.
              </p>
              <WhiteButton
                text={"Know More"}
                href={"#"}
                className="border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUnify;
