import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import PrimaryButton from './Button/PrimaryButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { NextButton, PreviousButton } from './Button/SliderButtons';
gsap.registerPlugin(ScrollTrigger);



const BlogCard = ({ title, date, img }) => {
  return (
    <>
      <div className='rounded-3xl group border-[0.25px] border-stone-600 pb-10 bg-white/5 w-[27vw] space-y-8 overflow-hidden transition-all duration-500 ease group  cursor-pointer'>
        <div className='w-full h-full overflow-hidden rounded-3xl '>
          <Image src={img} width={531} height={510} alt='blog-1' className='object-cover h-[20vw] w-[31vw] group-hover:scale-[1.1] transition-all duration-300 ease' />
        </div>
        <div className='space-y-5 px-5'>
          <p className='text-[1.245vw] font-medium text-[#E8E8E8]'>{title}</p>
          <p className='text-[1.145vw] font-medium text-[#E8E8E8]'>{date}</p>
        </div>
        <div
          className={`h-13 w-13 absolute top-6 right-15 rounded-full flex items-center justify-center transition-all duration-700 border  border-white/50 text-white  group-hover:text-black group-hover:bg-white ease`}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.2587 1.45718C6.2587 2.15617 6.82039 2.70537 7.5069 2.70537H14.4843L0.891464 16.2982C0.404668 16.785 0.404668 17.5714 0.891464 18.0582C1.37826 18.545 2.16462 18.545 2.65142 18.0582L16.2443 4.46533V11.4427C16.2443 12.1292 16.806 12.6909 17.4925 12.6909C18.179 12.6909 18.7407 12.1292 18.7407 11.4427V1.45718C18.7407 0.770672 18.179 0.208984 17.4925 0.208984H7.5069C6.82039 0.208984 6.2587 0.770672 6.2587 1.45718Z"
              fill="currentColor"
            />
          </svg>
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
          <PrimaryButton text={"Know More"} href={"#"} className='fadeup' />
        </div>
        <div className='w-[55%] text-white ' >
          <Swiper slidesPerView={1.8}
            className="mySwiper swiper-container" onSwiper={(swiper) => (swiperRef.current = swiper)}>
            <SwiperSlide><BlogCard img={"/assets/images/blog-1.png"} title={"How Generative AI is Revolutionizing Insurance"} date={"6 March, 2025"} /></SwiperSlide>
            <SwiperSlide><BlogCard img={"/assets/images/blog-2.png"} title={"Best Practices for AI Deployment in Regulated Industries"} date={"6 March, 2025"} /></SwiperSlide>
            <SwiperSlide><BlogCard img={"/assets/images/blog-1.png"} title={"How Generative AI is Revolutionizing Insurance"} date={"6 March, 2025"} /></SwiperSlide>
            <SwiperSlide><BlogCard img={"/assets/images/blog-2.png"} title={"Best Practices for AI Deployment in Regulated Industries"} date={"6 March, 2025"} /></SwiperSlide>
            <SwiperSlide><BlogCard img={"/assets/images/blog-1.png"} title={"How Generative AI is Revolutionizing Insurance"} date={"6 March, 2025"} /></SwiperSlide>
            <SwiperSlide><BlogCard img={"/assets/images/blog-2.png"} title={"Best Practices for AI Deployment in Regulated Industries"} date={"6 March, 2025"} /></SwiperSlide>
          </Swiper>

          <div className='flex gap-6 mt-6'>
            <PreviousButton onClick={handlePrev} />
            <NextButton onClick={handleNext} />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Blogs