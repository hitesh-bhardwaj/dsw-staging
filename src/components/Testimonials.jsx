import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/thumbs';
import Image from 'next/image';


const TestimonialCard = ()=>{
    return(
        <>
        <div className='w-full h-full flex flex-col items-center space-y-20 rounded-4xl p-15 border border-stone-700 text-center'>
            <div className='space-y-5'>
            <p className='text-[2.6vw] text-[#F16B0D]'>Michael Carter</p>
            <p className='font-medium text-[1.145vw] text-[#CACACA]'>Chief Technology Officer, Quantum Insurance</p>
            </div>
            <div className='w-[65%] space-y-5 '>
                <p className='text-[1.145vw] text-[#CACACA]'>"Revolutionized Our AI Workflow"</p>
<p className='text-[1.145vw] text-[#CACACA]'>"UnifyAI seamlessly integrated into our existing infrastructure, cutting our 
AI deployment time by 60%. The flexibility to manage multiple AI models in 
one place has been a game-changer!"</p>
            </div>
            
        </div>
        </>
    )
}
const Testimonials = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
   const swiperRef = useRef(null);  
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
   <section className='h-full w-screen py-20 relative'>
    <div className='w-full flex flex-col items-center space-y-20'>
        <div className='w-[55%]'>
        <h2 className='text-[5.2vw] font-head leading-[1.2] text-center'>
        Don&apos;t Take It from Us, Take It from Our Clients
        </h2>
        </div>
        <div className='h-full text-white w-[60%] py-10'>
        <Swiper thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}  onSwiper={(swiper) => (swiperRef.current = swiper)} className="mySwiper">
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
        // onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>

       <div
                            className={`px-[1.2vw] py-[1.2vw] absolute z-[5] bottom-[2%] right-[46%] mobile:bottom-[6%] mobile:top-auto mobile:right-auto mobile:left-[62%] translate-x-[-65%]  tablet:top-[93%] tablet:right-[35%] tablet:bottom-auto tablet:translate-y-[-70%] overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full next-button  border border-stone-700/50 cursor-pointer  mobile:block group`}
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
                            className={`px-[1.2vw] py-[1.2vw] bottom-[2%] right-[52%] absolute z-[5] mobile:bottom-[6%] mobile:top-auto mobile:left-[37%] mobile:right-auto  translate-x-[-38%]  tablet:top-[93%] tablet:right-[48%] tablet:bottom-auto tablet:translate-y-[-70%] overflow-hidden  mobile:p-[5vw] tablet:p-[2vw] rounded-full prev-button cursor-pointer  mobile:block border border-stone-700/50`}
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

export default Testimonials