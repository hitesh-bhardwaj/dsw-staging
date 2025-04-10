import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import WhiteButton from "./Button/WhiteButton";

gsap.registerPlugin(ScrollTrigger);

const WhyUnify = () => {
  const sectionRef = useRef(null);
  const progressLineRef = useRef(null);

  // Refs for each content block
  const contentRefs = useRef([]);
  contentRefs.current = [];

  // Refs for each SVG circle (the progress indicator)
  const svgCircleRefs = useRef([]);
  svgCircleRefs.current = [];

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
    const ctx = gsap.context(() => {
      const totalLength = progressLineRef.current.getTotalLength();
      // Calculate segments based on the number of transitions,
      // which is one less than the number of content blocks.
      const segments = contentRefs.current.length - 1;
      const segmentLength = totalLength / segments;
  
      // Set up the initial states.
      gsap.set(progressLineRef.current, {
        strokeDasharray: totalLength,
        strokeDashoffset: totalLength,
      });
      // Ensure the first content block is visible.
      gsap.set(contentRefs.current[0], { opacity: 1, y: 0, zIndex: 1 });
      // Set initial circle state: first circle active.
      svgCircleRefs.current.forEach((circle, i) => {
        gsap.set(circle, { fill: i === 0 ? "#FFFFFF" : "#EF5F0E" });
      });
  
      // Function to update the circle highlights.
      function highlightCircle(index) {
        svgCircleRefs.current.forEach((circle, i) => {
          gsap.to(circle, {
            fill: i === index ? "#FFFFFF" : "#EF5F0E",
            duration: 0.3,
          });
        });
      }
  
      // Build a timeline that drives your content and progress line animations.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "50% 5%",
          end: "+=3000",
          scrub: 0.25,
          pin: true,
          // anticipatePin: 1,
          // Use onUpdate to calculate active step based on the scroll progress.
          onUpdate: (self) => {
            // Divide the entire scroll progress into steps for each content block.
            const totalSteps = contentRefs.current.length;
            const activeIndex = Math.min(
              totalSteps - 1,
              Math.floor(self.progress * totalSteps)
            );
            highlightCircle(activeIndex);
          },
        },
      });
  
      // Loop through each transition between content blocks.
      for (let i = 1; i < contentRefs.current.length; i++) {
        const currentOffset = totalLength - segmentLength * i;
  
        // Animate the progress line.
        tl.to(progressLineRef.current, {
          strokeDashoffset: currentOffset,
          duration: 1,
          ease: "none",
        });
  
        // Fade out the previous content.
        tl.to(
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
  
        // Bring in the next content block.
        tl.fromTo(
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
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const bgTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 90%",
      end: "+=5000 90%",
      onEnter: () => {
        gsap.to(document.body, {
          background: "linear-gradient(to right, #F16B0D, #E61216)",
          duration: 0.1,
          ease: "none",
        });
      },
      onEnterBack: () => {
        gsap.to(document.body, {
          background: "linear-gradient(to right, #F16B0D, #E61216)",
          duration: 1,
          ease: "none",
        });
      },
      onLeaveBack: () => {
        gsap.to(document.body, {
          background: "linear-gradient(to right, #070707, #070707)",
          duration: 0.1,
          ease: "none",
        });
      },
      onLeave: () => {
        gsap.to(document.body, {
          background: "linear-gradient(to right, #070707, #070707)",
          duration: 1,
          ease: "none",
        });
      },
    });

    return () => bgTrigger.kill();
  }, []);



  return (
    <section
      className="h-full w-screen relative pb-[15vw] mt-[-150vw] pt-[35vw]"
      ref={sectionRef}
    >
      {/* Gradient Background Layer */}
      <div className="absolute top-0 left-0 h-full w-screen z-0 pointer-events-none" />

      <div className="flex flex-col items-center w-full py-30 space-y-30 px-10 relative z-[2]">
        {/* INTRO: Text & Button */}
        <div className="w-[58%] ml-auto mr-auto text-center space-y-10 pb-32">
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

        {/* PINNED SECTION CONTENT */}
        <div className="space-y-24 w-full">
          <h3 className="text-[5.2vw] text-white text-center font-light headingAnim">
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
                  {/* Static background line */}
                  <line
                    x1="8.08081"
                    y1="7.56641"
                    x2="8.08082"
                    y2="310.975"
                    stroke="#E8E8E8"
                    strokeOpacity="0.46"
                    strokeWidth="1"
                  />
                  {/* Animated progress line */}
                  <line
                    x1="8.08081"
                    y1="7.56641"
                    x2="8.08082"
                    y2="310.975"
                    stroke="white"
                    strokeWidth="1"
                    ref={progressLineRef}
                  />
                  {/* Circle 0 */}
                  <circle
                    cx="7.5808"
                    cy="7.56615"
                    r="6.5681"
                    fill="#EF5F0E"
                    stroke="#E8E8E8"
                    ref={addToCircleRefs}
                  />
                  {/* Circle 1 */}
                  <circle
                    cx="7.5808"
                    cy="108.702"
                    r="7.0681"
                    fill="#EF5F0E"
                    stroke="#E8E8E8"
                    ref={addToCircleRefs}
                  />
                  {/* Circle 2 */}
                  <circle
                    cx="7.5808"
                    cy="209.838"
                    r="7.0681"
                    fill="#EF5F0E"
                    stroke="#E8E8E8"
                    ref={addToCircleRefs}
                  />
                  {/* Circle 3 */}
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
              <div className="text-white space-y-14 content-p font-light">
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
                <p className="text-[2.6vw] text-white font-light mb-4">
                  End-to-End AI Lifecycle Management - From Model Training to Production Deployment
                </p>
                <p className="text-white content-p w-[88%]">
                  UnifyAI provides a complete AI development ecosystem, allowing
                  businesses to build, test, optimize, and deploy AI/ML models
                  seamlessly. From data ingestion and preprocessing to model
                  training, evaluation, and real-time inference, UnifyAI ensures a
                  streamlined workflow, reducing time-to-market and eliminating
                  inefficiencies.
                </p>
                <WhiteButton text="Know More" href="#" className="border-none mt-4" />
              </div>

              <div ref={addToContentRefs} className="step-block absolute top-10 left-0">
                <p className="text-[2.6vw] text-white font-light mb-4">
                  Multi-Model AI Support
                </p>
                <p className="text-white content-p w-[88%]">
                  UnifyAI provides a complete AI development ecosystem, allowing
                  businesses to build, test, optimize, and deploy AI/ML models
                  seamlessly. From data ingestion and preprocessing to model
                  training, evaluation, and real-time inference, UnifyAI ensures a
                  streamlined workflow, reducing time-to-market and eliminating
                  inefficiencies.
                </p>
                <WhiteButton text="Know More" href="#" className="border-none mt-4" />
              </div>

              <div ref={addToContentRefs} className="step-block absolute top-10 left-0">
                <p className="text-[2.6vw] text-white font-light mb-4">
                  Seamless Enterprise Integration
                </p>
                <p className="text-white content-p w-[88%]">
                  UnifyAI provides a complete AI development ecosystem, allowing
                  businesses to build, test, optimize, and deploy AI/ML models
                  seamlessly. From data ingestion and preprocessing to model
                  training, evaluation, and real-time inference, UnifyAI ensures a
                  streamlined workflow, reducing time-to-market and eliminating
                  inefficiencies.
                </p>
                <WhiteButton text="Know More" href="#" className="border-none mt-4" />
              </div>

              <div ref={addToContentRefs} className="step-block absolute top-10 left-0">
                <p className="text-[2.6vw] text-white font-light mb-4">
                  Scalable Infrastructure
                </p>
                <p className="text-white content-p w-[88%]">
                  UnifyAI provides a complete AI development ecosystem, allowing
                  businesses to build, test, optimize, and deploy AI/ML models
                  seamlessly. From data ingestion and preprocessing to model
                  training, evaluation, and real-time inference, UnifyAI ensures a
                  streamlined workflow, reducing time-to-market and eliminating
                  inefficiencies.
                </p>
                <WhiteButton text="Start Free Trial" href="#" className="border-none mt-4" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUnify;
