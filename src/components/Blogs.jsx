import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import PrimaryButton from './Button/PrimaryButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const BlogCard=({title, date,img})=>{
    return(
        <>
        <div className='rounded-3xl border-[0.25px] border-stone-600 pb-10 bg-white/5 w-[27vw] space-y-8 overflow-hidden'>
            <div className='w-full h-full overflow-hidden rounded-3xl'>
                <Image src={img} width={531} height={510} alt='blog-1' className='object-cover h-[20vw] w-[31vw]' />
            </div>
            <div className='space-y-5 px-5'>
            <p className='text-[1.245vw] font-medium text-[#E8E8E8]'>{title}</p>
            <p className='text-[1.145vw] font-medium text-[#E8E8E8]'>{date}</p>
            </div>
        </div>
        </>
    )
}
const Blogs = () => {
  const swiperRef = useRef(null); 
  const blogsRef = useRef(null); 

  useEffect(() => {
    if (blogsRef.current) {
      gsap.from(".swiper-container", {
        x: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: blogsRef.current,
          start: 'top 80%',
        },
      });
    }
  }, []);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); 
    }
  };
  return (
  <section ref={blogsRef} className='h-full w-screen py-20 my-30 relative'>
    <div className='h-full w-full flex items-center justify-between pl-15'>
        <div className='w-1/2 space-y-10'>
         <h2 className='text-[5.2vw] leading-[1.2] w-[90%] headingAnim'>Stay Ahead with AI Insights</h2>
         <p data-para-anim className='content-p text-[#CACACA] w-[72%]'>stay informed with expert insights, industry updates, and real-world use cases from UnifyAI. Whether you&apos;re looking for the latest in Generative AI, AI governance, or enterprise AI adoption, we&apos;ve got you covered.</p>
         <PrimaryButton text={"Know More"} href={"#"} className='fadeup'/>
        </div>
        <div className='w-[55%] text-white ' >
         <Swiper slidesPerView={1.8}  
         className="mySwiper swiper-container"  onSwiper={(swiper) => (swiperRef.current = swiper)}>
        <SwiperSlide><BlogCard img={"/assets/images/blog-1.png"} title={"How Generative AI is Revolutionizing Insurance"} date={"6 March, 2025"}/></SwiperSlide>
        <SwiperSlide><BlogCard img={"/assets/images/blog-2.png"} title={"Best Practices for AI Deployment in Regulated Industries"} date={"6 March, 2025"}/></SwiperSlide>
        <SwiperSlide><BlogCard img={"/assets/images/blog-1.png"} title={"How Generative AI is Revolutionizing Insurance"} date={"6 March, 2025"}/></SwiperSlide>
        <SwiperSlide><BlogCard img={"/assets/images/blog-2.png"} title={"Best Practices for AI Deployment in Regulated Industries"} date={"6 March, 2025"}/></SwiperSlide>
        <SwiperSlide><BlogCard img={"/assets/images/blog-1.png"} title={"How Generative AI is Revolutionizing Insurance"} date={"6 March, 2025"}/></SwiperSlide>
        <SwiperSlide><BlogCard img={"/assets/images/blog-2.png"} title={"Best Practices for AI Deployment in Regulated Industries"} date={"6 March, 2025"}/></SwiperSlide>
       
      </Swiper>

      <div
                      className={`px-[1.2vw] py-[1.2vw] absolute z-[5] bottom-0 right-[42%] mobile:bottom-[6%] mobile:top-auto mobile:right-auto mobile:left-[62%] translate-x-[-65%]  tablet:top-[93%] tablet:right-[35%] tablet:bottom-auto tablet:translate-y-[-70%] overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full next-button  border border-stone-700/50 cursor-pointer  mobile:block group`}
                      onClick={handleNext} 
                    >
                      <div className="w-[1.2vw] h-[1.2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
                        <Image
                          src="/assets/icons/arrow-right.svg"
                          alt="arrow-right"
                          height={20}
                          width={20}
                          className={` h-full w-full`}
                          
                        />
                      </div>
                    </div>
                    <div
                      className={`px-[1.2vw] py-[1.2vw] bottom-0 right-[48%] absolute z-[5] mobile:bottom-[6%] mobile:top-auto mobile:left-[37%] mobile:right-auto  translate-x-[-38%]  tablet:top-[93%] tablet:right-[48%] tablet:bottom-auto tablet:translate-y-[-70%] overflow-hidden  mobile:p-[5vw] tablet:p-[2vw] rounded-full prev-button cursor-pointer  mobile:block border border-stone-700/50`}
                      onClick={handlePrev} 
                    >
                     
                     <div className="w-[1.2vw] h-[1.2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
                        <Image
                          src="/assets/icons/arrow-left.svg"
                          alt="arrow-right"
                          height={20}
                          width={20}
                          className={` h-full w-full`}
                          
                        />
                      </div>
                    </div>

        </div>

    </div>

  </section>
  )
}

export default Blogs