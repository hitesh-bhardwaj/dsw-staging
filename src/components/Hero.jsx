import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className='h-screen w-screen' id='hero'>
            <div className='flex flex-col items-center p-10  w-full'>
                <div className='w-[70%] text-center space-y-10 py-10'>
                    <h1 className='text-[5.2vw] font-head leading-[1.2]'>
                        AI-Powered Innovation
                        with Data Science Wizards
                    </h1>
                    <p className='text-[#CACACA] w-[73%] ml-auto mr-auto'>Whether you're in insurance, finance, healthcare, or retail, our AI solutions accelerate your journey from concept to production: AI/ML Use Cases in 3-4 weeks  and GenAI in 2-4 hours </p>
                    <div className='flex items-center justify-center space-x-15' >
                        <Link
                            href="/"
                            className="relative inline-flex items-center gap-2 rounded-4xl bg-gradient-to-r from-[#f16b0d] to-[#e61216] text-white px-8 py-4"
                        >
                            <span className="bg-white rounded-full h-2 w-2"></span>
                            <span>start Walkthrough</span>
                        </Link>
                        <Link
                            href="/"
                            className="relative inline-flex items-center gap-2 rounded-4xl px-8 py-4 bg-white text-black"
                        >
                            <span className="bg-black rounded-full h-2 w-2 "></span>
                            <span>Schedule a call</span>
                        </Link>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero