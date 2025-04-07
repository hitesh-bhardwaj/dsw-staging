import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/thumbs';
import Image from 'next/image';
import styles from "./testimonials.module.css"


const data =[
  {
    img:"/assets/images/testimonial-1.png",
    name:"Michael Carter",
    designation:"Chief Technology Officer, Quantum Insurance",
    title:"Revolutionized Our AI Workflow",
    para:"UnifyAI seamlessly integrated into our existing infrastructure, cutting our AI deployment time by 60%. The flexibility to manage multiple AI models in one place has been a game-changer!"
  },
  {
    img:"/assets/images/testimonial-2.png",
    name:"Michael Carter",
    designation:"Chief Technology Officer, Quantum Insurance",
    title:"Revolutionized Our AI Workflow",
    para:"UnifyAI seamlessly integrated into our existing infrastructure, cutting our AI deployment time by 60%. The flexibility to manage multiple AI models in one place has been a game-changer!"
  },
  {
    img:"/assets/images/testimonial-3.png",
    name:"Michael Carter",
    designation:"Chief Technology Officer, Quantum Insurance",
    title:"Revolutionized Our AI Workflow",
    para:"UnifyAI seamlessly integrated into our existing infrastructure, cutting our AI deployment time by 60%. The flexibility to manage multiple AI models in one place has been a game-changer!"
  },
  {
    img:"/assets/images/testimonial-4.png",
    name:"Michael Carter",
    designation:"Chief Technology Officer, Quantum Insurance",
    title:"Revolutionized Our AI Workflow",
    para:"UnifyAI seamlessly integrated into our existing infrastructure, cutting our AI deployment time by 60%. The flexibility to manage multiple AI models in one place has been a game-changer!"
  },
  {
    img:"/assets/images/testimonial-5.png",
    name:"Michael Carter",
    designation:"Chief Technology Officer, Quantum Insurance",
    title:"Revolutionized Our AI Workflow",
    para:"UnifyAI seamlessly integrated into our existing infrastructure, cutting our AI deployment time by 60%. The flexibility to manage multiple AI models in one place has been a game-changer!"
  },
  {
    img:"/assets/images/testimonial-6.png",
   name:"Michael Carter",
    designation:"Chief Technology Officer, Quantum Insurance",
    title:"Revolutionized Our AI Workflow",
    para:"UnifyAI seamlessly integrated into our existing infrastructure, cutting our AI deployment time by 60%. The flexibility to manage multiple AI models in one place has been a game-changer!"
  },
  {
    img:"/assets/images/testimonial-7.png",
    name:"Michael Carter",
    designation:"Chief Technology Officer, Quantum Insurance",
    title:"Revolutionized Our AI Workflow",
    para:"UnifyAI seamlessly integrated into our existing infrastructure, cutting our AI deployment time by 60%. The flexibility to manage multiple AI models in one place has been a game-changer!"
  },
]
const TestimonialCard = ({name,designation,title,para})=>{
    return(
        <>
        <div className='w-full h-full flex flex-col items-center space-y-20 rounded-4xl p-15 border border-stone-700 text-center bg-white/5 pt-30'>
            <div className='space-y-5'>
            <p className='text-[2.6vw] text-[#F16B0D]'>{name}</p>
            <p className='font-medium text-[1.145vw] text-[#CACACA]'>{designation}</p>
            </div>
            <div className='w-[65%] space-y-5 '>
                <p className='text-[1.145vw] text-[#CACACA]'>{title}</p>
<p className='text-[1.145vw] text-[#CACACA]'>{para}</p>
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
        modules={[FreeMode, Thumbs]}  onSwiper={(swiper) => (swiperRef.current = swiper)} className="mySwiper testimonial-swiper">
          {data.map((items,index)=>(
             <SwiperSlide key={index}>
              <TestimonialCard name={items.name} designation={items.designation} title={items.title} para={items.para}/>
              </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={-300}
        slidesPerView={data.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className={`mySwiper ${styles.testimonialThumbs}`}
        // onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
         {data.map((items,index)=>(
             <SwiperSlide key={index} className={`${styles.testimonialThumbsSlide} h-full w-full`}>
               <img src={items.img} />
              </SwiperSlide>
          ))}
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