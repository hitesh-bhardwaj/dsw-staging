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
          end: '+=1000',
          scrub: true,
          pin: true,
        },
      });
      tlZ.fromTo(
        imageRefs.current,
        {
          transform: 'translateZ(400px)',
          delay: -0.8,
          stagger: { each: 0.05, from: 'random' },
        },
        {
          transform: 'translateZ(-300px)',
          stagger: { each: 0.05, from: 'random' },
          ease: 'power3.out',
        }
      );
      const tlBlur = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=1000',
          scrub: true,
          pin: false, 
        },
      });
  
      tlBlur.fromTo(
        imageRefs.current,
        {
          filter: 'blur(10px)',
          opacity:0,
        },
        {
          filter: 'blur(0px)',
          opacity:1,
          stagger: { each: 0.05, from: 'random' },
          ease: 'power3.out',
        }
      ).to(
        imageRefs.current,
        {
          filter: 'blur(10px)',
          opacity:0,
          stagger: { each: 0.05, from: 'random' },
          ease: 'power3.out',
        }
      );
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);
  
  

  return (
    <section ref={sectionRef} className='py-20 w-screen h-[70vw] pb-50 relative overflow-hidden'>
        <div className='w-full h-full flex items-center justify-center' style={{ perspective: '1000px', transformStyle: 'preserve-3d', }}>
            <div className='w-[60%] py-10'>
            <h2 className='font-head text-[5.2vw] leading-[1.2] text-center'>Trusted by Innovators, <br/>
            Built for Industry Disruptors.</h2>
            </div>
            <div  ref={el => imageRefs.current[0] = el} className='absolute top-25 left-20 blur-xs'>
                <Image  src="/assets/images/manipal.png" height={145} width={276} alt='manipal'/>
            </div>
            <div  ref={el => imageRefs.current[1] = el} className='absolute top-20 right-150 blur-xs'>
                <Image src="/assets/images/edgeverve.png" height={150} width={290} alt='edgeverve'/>
            </div>
            <div  ref={el => imageRefs.current[2] = el} className='absolute top-25 right-30'>
                <Image src="/assets/images/sodexo.png" height={89} width={277} alt='sodexo'/>
            </div>
            <div  ref={el => imageRefs.current[3] = el} className='absolute bottom-40 right-20 blur-xs'>
                <Image src="/assets/images/canara.png" height={65} width={218} alt='canara'/>
            </div>
            <div  ref={el => imageRefs.current[4] = el} className='absolute bottom-15 right-170 blur-sm'>
                <Image src="/assets/images/bon-prix.png" height={102} width={111} alt='bon-prix'/>
            </div>
            <div  ref={el => imageRefs.current[5] = el} className='absolute bottom-40 left-20'>
                <Image src="/assets/images/ciek.png" height={68} width={216} alt='ciek'/>
            </div>

        </div>

    </section>
  )
}

export default Clients