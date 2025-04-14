import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
    const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tlZ = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+200% bottom',
          scrub: 0.8,
          pin:true,
          // markers:true
        },
      });
      // tlZ.fromTo(
      //   imageRefs.current,
      //   {
      //     transform: 'translateZ(-2000px)',
      //     delay: -0.8,
      //     stagger: { each: 0.05, from: 'random' },
      //   },
      //   {
      //     transform: 'translateZ(1000px)',
      //     scale:0.4,
      //     stagger: { each: 0.05, from: 'random' },
      //     ease: 'none',
      //   }
      // );
      const tlBlur = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: '+100% bottom',
          scrub: true,
          // markers:true
        },
      });
  
      tlBlur.fromTo(
        imageRefs.current,
        {
          transform: 'translateZ(-2000px)',
          delay: -0.8,
          // stagger: { each: 0.02, from: 'random' },
          filter: 'blur(15px)',
          opacity:0,
        },
        {
          transform: 'translateZ(-500px)',
         
          filter: 'blur(0px)',
          opacity:1,
          // stagger: { each: 0.04, from: 'random' },
          ease: 'none',
        }
      )
      const tlblurC = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '100% bottom',
          end: '+200% bottom',
          scrub: true,
          // markers:true
        },
      });
      tlblurC.fromTo(
        imageRefs.current,
        {
          transform: 'translateZ(-500px)',
          delay:-0.5,
       
          filter: 'blur(0px)',
        },
        {
          transform: 'translateZ(700px)',
          scale:1,
          filter: 'blur(15px)',
          opacity:1,
          ease: 'none',
        }
      )
      // .to(
      //   imageRefs.current,
      //   { transform: 'translateZ(1000px)',
      //     filter: 'blur(15px)',
      //     delay:-0.4,
      //     opacity:0,
      //     stagger: { each: 0.05, from: 'random' },
      //     ease: 'none',
      //   }
      // );
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);
  
  

  return (
    <section ref={sectionRef} className='py-20 w-screen h-screen relative overflow-hidden'>
        <div className='w-full h-full flex items-center justify-center' style={{ perspective: '1000px', transformStyle: 'preserve-3d', }}>
            <div className='w-[60%] py-10'>
            <h2 className='font-head text-[5.2vw] leading-[1.2] text-center headingAnim text-white-200'>Trusted by Innovators, <br/>
            Built for Industry Disruptors.</h2>
            </div>
            {imageData.map((img, index) => (
      <div
        key={index}
        ref={el => imageRefs.current[index] = el}
        className={`absolute ${img.style}`}
      >
        <Image
          quality={100}
          src={img.src}
          height={img.height}
          width={img.width}
          alt={img.alt}
        />
      </div>
    ))}
            

        </div>

    </section>
  )
}

export default Clients

const imageData = [
  {
    src: "/assets/images/manipal.png",
    alt: "manipal",
    height: 145,
    width: 276,
    style: "top-5 left-10 blur-xs",
  },
  {
    src: "/assets/images/edgeverve.png",
    alt: "edgeverve",
    height: 150,
    width: 290,
    style: "top-2 left-[40vw] blur-xs",
  },
  {
    src: "/assets/images/sodexo.png",
    alt: "sodexo",
    height: 89,
    width: 277,
    style: "top-5 right-40",
  },
  {
    src: "/assets/images/canara.png",
    alt: "canara",
    height: 65,
    width: 218,
    style: "bottom-4 right-20 blur-xs",
  },
  {
    src: "/assets/images/bon-prix.png",
    alt: "bon-prix",
    height: 102,
    width: 111,
    style: "bottom-[-5vw] right-[43vw] blur-sm", 
  },
  {
    src: "/assets/images/ciek.png",
    alt: "ciek",
    height: 68,
    width: 216,
    style: "bottom-4 left-20",
  },
  {
    src: "/assets/images/manipal.png",
    alt: "manipal",
    height: 145,
    width: 276,
    style: "bottom-[5vw] right-[25vw] blur-xs",

  },
  {
    src: "/assets/images/edgeverve.png",
    alt: "edgeverve",
    height: 150,
    width: 290,
    style: "bottom-[-10vw] left-[25vw] blur-sm", 

  },
  {
    src: "/assets/images/sodexo.png",
    alt: "sodexo",
    height: 89,
    width: 277,
    style: "bottom-[10vw] left-[-7vw]",

  },
  {
    src: "/assets/images/canara.png",
    alt: "canara",
    height: 65,
    width: 218,
    style: "top-[-10vw] left-[20vw] blur-xs",
  },
  {
    src: "/assets/images/bon-prix.png",
    alt: "bon-prix",
    height: 102,
    width: 111,
    style: "top-[-15vw] right-[30vw] blur-xs",

  },
  {
    src: "/assets/images/ciek.png",
    alt: "ciek",
    height: 68,
    width: 216,
    style: "bottom-[20vw] right-[-10vw]",

  },
];
