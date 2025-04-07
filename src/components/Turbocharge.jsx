import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Turbocharge = () => {
  return (
    <section id='turbo' className='w-screen h-full'>
        <div className='flex flex-col items-center p-10  w-full'>
        <div className='w-[70%] text-center space-y-15 py-10'>
            <div className='overflow-hidden border-[0.25px] rounded-4xl p-5 '>
                <Image src="/assets/images/turbocharge-dashboard.png" height={704} width={1253} alt='turbocharge-dashboard' />
            </div>
            <div className='space-y-10'>
                <h2 className='text-[5.2vw] font-head leading-[1.2]'>Turbocharge Your AI/ML Use Cases in 3-4 weeks  and GenAI in 2-4 hours</h2>
                <p className='text-[#CACACA] w-[68%] ml-auto mr-auto'>Unleash the power of AI and Generative AI with UnifyAI – the enterprise-ready platform designed to streamline, scale, and deploy AI solutions seamlessly. Whether you're leveraging AI for automation, predictive analytics, or fraud detection, UnifyAI accelerates your journey from prototype to production with unmatched speed and efficiency.</p>
                <div>
                        <Link
                            href="/"
                            className="relative inline-flex items-center gap-2 rounded-4xl bg-gradient-to-r from-[#f16b0d] to-[#e61216] text-white px-8 py-4"
                        >
                            <span className="bg-white rounded-full h-2 w-2"></span>
                            <span>Know More</span>
                        </Link>
                    </div>
            </div>
        </div>

        </div>

    </section>
  )
}

export default Turbocharge