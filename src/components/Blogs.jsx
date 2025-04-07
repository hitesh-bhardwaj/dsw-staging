import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';


const BlogCard=({title, date,img})=>{
    return(
        <>
        <div className='rounded-3xl border-[0.25px] border-stone-600 pb-10 bg-black/30 w-[90%] space-y-8 overflow-hidden'>
            <div className='w-full h-full overflow-hidden rounded-3xl'>
                <Image src={img} width={531} height={510} alt='blog-1' className='object-cover h-[20vw] w-[31vw]' />
            </div>
            <div className='space-y-5 px-5'>
            <p className='text-[1.145vw] font-medium text-[#E8E8E8]'>{title}</p>
            <p className='text-[1.145vw] font-medium text-[#E8E8E8]'>{date}</p>
            </div>
        </div>
        </>
    )
}
const Blogs = () => {
  return (
  <section className='h-full w-screen py-20'>
    <div className='h-full w-full flex items-center justify-between pl-15'>
        <div className='w-1/2 space-y-5'>
         <h2 className='text-[5.2vw] leading-[1.2] w-[90%]'>Stay Ahead with AI Insights</h2>
         <p className='text-[1.145vw] text-[#CACACA] w-[72%]'>stay informed with expert insights, industry updates, and real-world use cases from UnifyAI. Whether you&apos;re looking for the latest in Generative AI, AI governance, or enterprise AI adoption, we&apos;ve got you covered.</p>
        </div>
        <div className='w-[60%] text-white'>
        <Swiper navigation={true} modules={[Navigation]} slidesPerView={1.7}
         className="mySwiper">
        <SwiperSlide><BlogCard img={"/assets/images/blog-1.png"} title={"How Generative AI is Revolutionizing Insurance"} date={"6 March, 2025"}/></SwiperSlide>
        <SwiperSlide><BlogCard img={"/assets/images/blog-2.png"} title={"Best Practices for AI Deployment in Regulated Industries"} date={"6 March, 2025"}/></SwiperSlide>
        <SwiperSlide><BlogCard img={"/assets/images/blog-1.png"} title={"How Generative AI is Revolutionizing Insurance"} date={"6 March, 2025"}/></SwiperSlide>
        <SwiperSlide><BlogCard img={"/assets/images/blog-2.png"} title={"Best Practices for AI Deployment in Regulated Industries"} date={"6 March, 2025"}/></SwiperSlide>
        <SwiperSlide><BlogCard img={"/assets/images/blog-1.png"} title={"How Generative AI is Revolutionizing Insurance"} date={"6 March, 2025"}/></SwiperSlide>
        <SwiperSlide><BlogCard img={"/assets/images/blog-2.png"} title={"Best Practices for AI Deployment in Regulated Industries"} date={"6 March, 2025"}/></SwiperSlide>
       
      </Swiper>

        </div>

    </div>

  </section>
  )
}

export default Blogs