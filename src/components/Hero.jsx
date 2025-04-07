import Link from 'next/link'
import React from 'react'
import PrimaryButton from './Button/PrimaryButton'
import WhiteButton from './Button/WhiteButton'

const Hero = () => {
    return (
        <section className='h-screen w-screen relative' id='hero'>
            <div className='flex flex-col items-center justify-center p-10  w-full h-full'>
                <div className='w-[62%] text-center space-y-6 py-10'>
                    <h1 className='text-[5.2vw] font-head leading-[1.2]'>
                        AI-Powered Innovation
                        with Data Science Wizards
                    </h1>
                    <p className='text-[#CACACA] w-full content-p font-body ml-auto mr-auto  '>Whether you're in insurance, finance, healthcare, or retail, our AI solutions accelerate your journey from concept to production: AI/ML Use Cases in 3-4 weeks  and GenAI in 2-4 hours </p>
                    <div className='flex items-center justify-center gap-6  mt-10' >
                     
                        <PrimaryButton href={"#"} text={"Start Walkthrough"}/>
                     
                        <WhiteButton href={"#"} text={"Schedule a Call"}/>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className='w-screen h-screen absolute top-0 left-0 z-[-1] flex justify-around'>
               <div className="w-[0.1px] h-full bg-white/12">

               </div>
               <div className="w-[0.1px] h-full bg-white/12">

               </div>
               <div className="w-[0.1px] h-full bg-white/12">

               </div>
               <div className="w-[0.1px] h-full bg-white/12">

               </div>
              
            </div>
        </section>
    )
}

export default Hero