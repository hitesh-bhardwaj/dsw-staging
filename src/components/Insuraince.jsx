'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Insuraince = () => {
    const cardRefs = useRef([]);
    const sectionRef = useRef();
    const spanRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });

            spanRefs.current.forEach((span, i) => {
                tl.fromTo(
                    span,
                    {
                        scaleX: 0,
                        transformOrigin: 'left center',
                    },
                    {
                        scaleX: 1,
                        duration: 4.8,
                        ease: 'power3.out',
                    },
                    i * 3
                );

                tl.fromTo(
                    cardRefs.current[i],
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: 'power3.out',
                    },
                    i * 3.3
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="w-screen h-full pb-[10vw] overflow-hidden" ref={sectionRef}>
            <div className="w-full py-15 space-y-20 px-20">
                <div className="text-center space-y-2">
                    <h3 className="bg-gradient-to-r from-[#F16B0D] to-[#E61216] bg-clip-text text-transparent text-[5.2vw] font-medium">
                        InsurAInce
                    </h3>
                    <p data-para-anim className="text-[#CACACA] content-p">
                        Fast-track your Insurance Use Cases with InsurAInce
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    {content.map((data, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className="w-[28%] opacity-0"
                        >
                            <Card data={data} spanRef={(el) => (spanRefs.current[index] = el)} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Insuraince;

const Card = ({ data, spanRef }) => {
    return (
        <div className="w-full space-y-5 relative">
            <div>
                <Image
                    src={data.icon}
                    height={98}
                    width={98}
                    alt={data.title}
                    className="w-[5vw] h-[5vw] object-contain"
                />
            </div>
            <h4 className="text-[2.6vw] text-[#E8E8E8] leading-[1.25]">{data.title}</h4>
            <p className="text-[#CACACA] content-p h-30">{data.desc}</p>
            <div className="relative w-full h-[2px] bg-[#616161] mt-30">
                <span
                    ref={spanRef}
                    className="absolute top-0 left-0 h-full bg-[#F26B0D] w-full scale-x-0 origin-left "
                />
            </div>
        </div>
    );
};

const content = [
    {
        title: 'Rapid AI/ML Deployment',
        desc: 'Bring use cases into production in as little as 3-4 weeks.',
        icon: '/assets/icons/rapid.svg',
    },
    {
        title: 'Scalability & Transparency',
        desc: 'Enterprise-grade infrastructure that offers complete control over deployment, monitoring, and retraining.',
        icon: '/assets/icons/scalability.svg',
    },
    {
        title: 'Future-Proofed Innovation',
        desc: 'Stay at the forefront of technology with a solution that seamlessly integrates with the latest advancements in AI and data science.',
        icon: '/assets/icons/rapid.svg',
    },
];
