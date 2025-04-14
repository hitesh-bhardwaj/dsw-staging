import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import WhiteButton from "../Button/WhiteButton";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const WhyUnify = () => {
  const sectionRef = useRef(null);
  const progressLineRef = useRef(null);

  // Refs for each content block
  const contentRefs = useRef([]);
  contentRefs.current = [];

  // Refs for each SVG circle (the progress indicator)
  const svgCircleRefs = useRef([]);
  svgCircleRefs.current = [];

  // Ref for the GSAP timeline
  const timelineRef = useRef(null);

  const addToContentRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  const addToCircleRefs = (el) => {
    if (el && !svgCircleRefs.current.includes(el)) {
      svgCircleRefs.current.push(el);
    }
  };

  useEffect(() => {
    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "10% 10%",
        end: "+=3000",
        scrub: 1,
        pin: true,
        // Example snap configuration.
        // Adjust the snap value based on how many snaps (content blocks) you have.
        snap: 1 / (contentRefs.current.length - 1),
        onUpdate: (self) => {
          const totalSteps = contentRefs.current.length;
          const activeIndex = Math.min(
            totalSteps - 1,
            Math.floor(self.progress * totalSteps)
          );
          svgCircleRefs.current.forEach((circle, i) => {
            gsap.to(circle, {
              fill: i === activeIndex ? "#FFFFFF" : "#EF5F0E",
              duration: 0.3,
            });
          });
        },
      },
    });

    const totalLength = progressLineRef.current.getTotalLength();
    const segments = contentRefs.current.length - 1;
    const segmentLength = totalLength / segments;

    gsap.set(progressLineRef.current, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength,
    });
    gsap.set(contentRefs.current[0], { opacity: 1, y: 0, zIndex: 1 });
    svgCircleRefs.current.forEach((circle, i) => {
      gsap.set(circle, { fill: i === 0 ? "#FFFFFF" : "#EF5F0E" });
    });

    for (let i = 1; i < contentRefs.current.length; i++) {
      const currentOffset = totalLength - segmentLength * i;
      timelineRef.current.to(progressLineRef.current, {
        strokeDashoffset: currentOffset,
        duration: 1,
        ease: "none",
      });
      timelineRef.current.to(
        contentRefs.current[i - 1],
        {
          opacity: 0,
          y: -50,
          zIndex: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<"
      );
      timelineRef.current.fromTo(
        contentRefs.current[i],
        { opacity: 0, y: 50, zIndex: 0 },
        {
          opacity: 1,
          zIndex: 2,
          y: 0,
          duration: 0.5,
          ease: "power2.inOut",
          delay: 0.5,
        },
        "<"
      );
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.scrollTrigger.kill();
        timelineRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const bgAnim = gsap.to(".gradientClassBackground", {
      scrollTrigger: {
        trigger: ".gradientClassBackground",
        start: "+3500 50%",
        end: "+4400 50%",
        scrub: 0.5,
      },
      yPercent: -15,
    });

    return () => {
      bgAnim.kill();
    };
  }, []);

  // Handler for the skip button using ScrollToPlugin to move to the last snap.
  const handleSkip = () => {
    if (timelineRef.current) {
      const st = timelineRef.current.scrollTrigger;
      // Animate the scroll position to the end (last snap) of the trigger.
      gsap.to(window, {
        scrollTo: { y: st.end, autoKill: true },
        duration: 1,
        onComplete: () => {
          // Ensure the timeline is at its final state.
          timelineRef.current.progress(1);
          // Optionally, disable just this scrollTrigger instance.
          // st.disable();
          // Refresh all triggers in case others need to adjust.
          // ScrollTrigger.refresh();
        },
      });
    }
  };

  return (
    <section
      className="h-full w-screen relative pb-[15vw] z-[10]"
      ref={sectionRef}
    >
      {/* Gradient Background Layer */}
      <div className="absolute top-0 left-0 h-full w-screen z-0 pointer-events-none bg-linear-to-r from-primary-1 to-primary-2 gradientClassBackground">
        <Image
          src="/assets/images/homepage/black-svg.svg"
          alt="black svg section break"
          width={1920}
          height={500}
          className="absolute bottom-[-1px] left-0 right-0 z-10"
        />
      </div>

      <div className="flex flex-col items-center w-full py-30 space-y-30 px-10 relative z-[2]">
        <div className="space-y-24 w-full">
          <h3 className="text-[5.2vw] text-foreground text-center font-light headingAnim">
            Why Choose UnifyAI?
          </h3>

          <div className="w-full flex items-start justify-between">
            {/* Left: SVG navigation with progress indicator */}
            <div className="flex w-[15%] gap-5">
              <div className="py-4">
                <svg
                  width="16"
                  height="319"
                  viewBox="0 0 16 319"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="8.08081"
                    y1="7.56641"
                    x2="8.08082"
                    y2="310.975"
                    stroke="#E8E8E8"
                    strokeOpacity="0.46"
                    strokeWidth="1"
                  />
                  <line
                    x1="8.08081"
                    y1="7.56641"
                    x2="8.08082"
                    y2="310.975"
                    stroke="white"
                    strokeWidth="1"
                    ref={progressLineRef}
                  />
                  <circle
                    cx="7.5808"
                    cy="7.56615"
                    r="6.5681"
                    fill="#EF5F0E"
                    stroke="#E8E8E8"
                    ref={addToCircleRefs}
                  />
                  <circle
                    cx="7.5808"
                    cy="108.702"
                    r="7.0681"
                    fill="#EF5F0E"
                    stroke="#E8E8E8"
                    ref={addToCircleRefs}
                  />
                  <circle
                    cx="7.5808"
                    cy="209.838"
                    r="7.0681"
                    fill="#EF5F0E"
                    stroke="#E8E8E8"
                    ref={addToCircleRefs}
                  />
                  <circle
                    cx="7.5808"
                    cy="310.975"
                    r="7.0681"
                    fill="#EF5F0E"
                    stroke="#E8E8E8"
                    ref={addToCircleRefs}
                  />
                </svg>
              </div>
              <div className="text-foreground space-y-14 content-p font-light">
                <p>End-to-End AI Lifecycle Management</p>
                <p>Multi-Model AI Support</p>
                <p>Seamless Enterprise Integration</p>
                <p>Scalable Infrastructure</p>
              </div>
            </div>

            {/* Middle: Images */}
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

            {/* Right: Content Blocks */}
            <div className="w-[40vw] relative">
              <div ref={addToContentRefs} className="step-block absolute top-0 left-0">
                <p className="text-[2.6vw] text-foreground font-head leading-[1.2]">
                  End-to-End AI Lifecycle Management - From Model Training to Production Deployment
                </p>
                <p className="text-foreground content-p w-[88%] py-8">
                  UnifyAI provides a complete AI development ecosystem, allowing
                  businesses to build, test, optimize, and deploy AI/ML models seamlessly.
                </p>
                <WhiteButton circleColor={"bg-white"} text="Know More" href="#" className="border-white border text-white bg-transparent" />
              </div>

              <div ref={addToContentRefs} className="step-block absolute top-10 left-0">
                <p className="text-[2.6vw] text-foreground font-head leading-[1.2]">
                  Multi-Model AI Support
                </p>
                <p className="text-foreground content-p w-[88%] py-8">
                  UnifyAI provides a complete AI development ecosystem, allowing
                  businesses to build, test, optimize, and deploy AI/ML models seamlessly.
                </p>
                <WhiteButton circleColor={"bg-white"} text="Know More" href="#" className="border-white border text-white bg-transparent" />
              </div>

              <div ref={addToContentRefs} className="step-block absolute top-10 left-0">
                <p className="text-[2.6vw] text-foreground font-head leading-[1.2]">
                  Seamless Enterprise Integration
                </p>
                <p className="text-foreground content-p w-[88%] py-8">
                  UnifyAI provides a complete AI development ecosystem, allowing
                  businesses to build, test, optimize, and deploy AI/ML models seamlessly.
                </p>
                <WhiteButton circleColor={"bg-white"} text="Know More" href="#" className="border-white border text-white bg-transparent" />
              </div>

              <div ref={addToContentRefs} className="step-block absolute top-10 left-0">
                <p className="text-[2.6vw] text-foreground font-head leading-[1.2]">
                  Scalable Infrastructure
                </p>
                <p className="text-foreground content-p w-[88%] py-8">
                  UnifyAI provides a complete AI development ecosystem, allowing
                  businesses to build, test, optimize, and deploy AI/ML models seamlessly.
                </p>
                <WhiteButton circleColor={"bg-white"} text="Start Free Trial" href="#" className="border-white border text-white bg-transparent" />
              </div>
            </div>
          </div>
          {/* Skip Button triggers scroll to the last snap */}
          <div className="mt-10 flex justify-center absolute right-10 bottom-20">
            <button
              className="px-6 py-2 rounded-full text-foreground font-light hover:scale-95 text-[1vw] transition duration-500"
              onClick={handleSkip}
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUnify;

