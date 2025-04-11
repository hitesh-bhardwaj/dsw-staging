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
            <h2 className='font-head text-[5.2vw] leading-[1.2] text-center headingAnim'>Trusted by Innovators, <br/>
            Built for Industry Disruptors.</h2>
            </div>
            <div  ref={el => imageRefs.current[0] = el} className='absolute top-5 left-10 blur-xs'>
                <Image quality={100}  src="/assets/images/manipal.png" height={145} width={276} alt='manipal'/>
            </div>
            <div  ref={el => imageRefs.current[1] = el} className='absolute top-2 right-190 blur-xs'>
                <Image quality={100} src="/assets/images/edgeverve.png" height={150} width={290} alt='edgeverve'/>
            </div>
            <div  ref={el => imageRefs.current[2] = el} className='absolute top-5 right-40'>
                <Image quality={100} src="/assets/images/sodexo.png" height={89} width={277} alt='sodexo'/>
            </div>
            <div  ref={el => imageRefs.current[3] = el} className='absolute bottom-4 right-20 blur-xs'>
                <Image quality={100} src="/assets/images/canara.png" height={65} width={218} alt='canara'/>
            </div>
            <div  ref={el => imageRefs.current[4] = el} className='absolute bottom-5 right-170 blur-sm'>
                <Image quality={100} src="/assets/images/bon-prix.png" height={102} width={111} alt='bon-prix'/>
            </div>
            <div  ref={el => imageRefs.current[5] = el} className='absolute bottom-4 left-20'>
                <Image quality={100} src="/assets/images/ciek.png" height={68} width={216} alt='ciek'/>
            </div>

        </div>

    </section>
  )
}

export default Clients