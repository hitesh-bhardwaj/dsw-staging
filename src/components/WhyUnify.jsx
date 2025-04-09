import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { motion } from "motion/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

import WhiteButton from './Button/WhiteButton'
import { SplitInLine } from './splitTextUtils';

const WhyUnify = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "50% top",
                    end: "+=3000", 
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    // markers: true,
                }
            });
    //         for (let i = 0; i < 3; i++) {
    //         const paraAnimations = document.querySelectorAll(".unify-title");
    //     paraAnimations.forEach((paraAnimation) => {
    //       SplitInLine(paraAnimation);
    //       const paraLine = paraAnimation.querySelectorAll(".line-internal");
    //       gsap.from(paraLine, {
    //         scrollTrigger: {
    //           trigger: paraAnimation,
    //           start: "top 50%",
    //           end:"bottom bottom",
    //           markers:true,
    //           scrub:true
    //         },
    //         duration: 1.2,
    //         yPercent: 100,
    //         stagger: 0.07,
    //         ease: "power3.out"
    //       });
    //     });
    // };
    
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
            };
    
        },sectionRef);
    
        return () => ctx.revert();
    }, []);
    

    return (
        <section className='h-full w-screen relative pb-[15vw] mt-[-150vw] pt-[35vw] ' ref={sectionRef} >
            <div className='absolute top-0 left-0 h-[85%] w-screen bg-gradient-to-r from-[#F16B0D] to-[#E61216] rounded-bl-[30%] rounded-br-[20%]'>

            </div>
            <div className='w-screen h-full backdrop-blur-3xl absolute top-0 left-0 z-[1]'>

            </div>
            <div className='flex flex-col items-center w-full py-30 space-y-30 px-10 relative z-[2]' >
                <div className='w-[58%] ml-auto mr-auto text-center space-y-10 pb-32'>
                <p className='text-white content-p font-light'>UnifyAI is a cutting-edge AI/ML platform that empowers businesses to develop, test, and deploy AI solutions with ease. Built for both traditional AI and Generative AI, it provides a unified ecosystem to accelerate AI adoption in industries like insurance, finance, healthcare, and retail.</p>
                <div>
                    <WhiteButton text={"Book a demo"} href={"#"} className='border-none'/>
                </div>
                </div>


                <div className='space-y-25' >
                    <h3 className='text-[5.2vw] text-white text-center font-light headingAnim'>Why Choose UnifyAI?</h3>
                    <div className='w-full flex items-center justify-between '>
                        <div className='flex w-[20%] gap-5'>
                            <div>
                                <Image src="/assets/icons/whychoose-navigation.svg" height={318} width={15} alt='navigation'/>
                            </div>
                            <div className=' text-white space-y-13 content-p'>
                                <p>End-to-End AI Lifecycle Management</p>
                                <p>Multi-Model AI Support</p>
                                <p>Seamless Enterprise Integration</p>
                                <p>Scalable Infrastructure</p>
                            </div>

                        </div>
                        <div className=''>
                            <div className='rounded-4xl h-[14vw] w-[15vw]'>
                                <Image src="/assets/images/unify-dashboard-1.png" height={290} width={252} className='h-full w-full object-cover'/>
                            </div>
                            <div>
                                <Image src="/assets/images/unify-dashboard-2.png" height={247} width={283}/>
                            </div>
                        </div>
                        <div className='space-y-10 w-[44%]' ref={textRef}>
                            <p className='text-[2.6vw] text-white overflow-hidden '>End-to-End AI Lifecycle Management – From Model Training to Production Deployment</p>
                            <p className='text-white content-p w-[88%] overflow-hidden'>UnifyAI provides a complete AI development ecosystem, allowing businesses to build, test, optimize, and deploy AI/ML models seamlessly. From data ingestion and preprocessing to model training, evaluation, and real-time inference, UnifyAI ensures a streamlined workflow, reducing time-to-market and eliminating inefficiencies.</p>
                          <WhiteButton text={"Know More"} href={"#"} className='border-none'/>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default WhyUnify