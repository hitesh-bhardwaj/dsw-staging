import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhyUnify = () => {
    return (
        <section className='h-full w-screen bg-white'>
            <div className='flex flex-col items-center w-full py-30 space-y-30 px-10' >
                <div className='w-[48%] ml-auto mr-auto text-center space-y-10'>
                <p className='text-[#111111]'>UnifyAI is a cutting-edge AI/ML platform that empowers businesses to develop, test, and deploy AI solutions with ease. Built for both traditional AI and Generative AI, it provides a unified ecosystem to accelerate AI adoption in industries like insurance, finance, healthcare, and retail.</p>
                <div>
                    <Link
                        href="/"
                        className="relative inline-flex items-center gap-2 rounded-4xl bg-gradient-to-r from-[#f16b0d] to-[#e61216] text-white px-8 py-4"
                    >
                        <span className="bg-white rounded-full h-2 w-2"></span>
                        <span>Book a demo</span>
                    </Link>
                </div>
                </div>
                <div className='space-y-25'>
                    <h3 className='text-[5.2vw] text-[#111111] text-center'>Why Choose UnifyAI?</h3>
                    <div className='w-full flex items-center justify-between '>
                        <div className='flex w-[20%] gap-5'>
                            <div>
                                <Image src="/assets/icons/whychoose-navigation.svg" height={318} width={15} alt='navigation'/>
                            </div>
                            <div className=' text-[#111111] space-y-13'>
                                <p>End-to-End AI Lifecycle Management</p>
                                <p>Multi-Model AI Support</p>
                                <p>Seamless Enterprise Integration</p>
                                <p>Scalable Infrastructure</p>
                            </div>

                        </div>
                        <div className=''>
                            <div className='rounded-4xl border-[0.25px] h-[14vw] w-[15vw]'>
                                <Image src="/assets/images/unify-dashboard-1.png" height={290} width={252} className='h-full w-full object-cover'/>
                            </div>
                            <div>
                                <Image src="/assets/images/unify-dashboard-2.png" height={247} width={283}/>
                            </div>
                        </div>
                        <div className='space-y-10 w-[44%]'>
                            <p className='text-[2.6vw] text-[#111111]'>End-to-End AI Lifecycle Management – From Model Training to Production Deployment</p>
                            <p className='text-[#111111] text-[1.145vw] w-[88%]'>UnifyAI provides a complete AI development ecosystem, allowing businesses to build, test, optimize, and deploy AI/ML models seamlessly. From data ingestion and preprocessing to model training, evaluation, and real-time inference, UnifyAI ensures a streamlined workflow, reducing time-to-market and eliminating inefficiencies.</p>
                            <Link
                            href="/"
                            className="relative inline-flex items-center gap-2 rounded-4xl px-8 py-4 border border-black bg-white text-black"
                        >
                            <span className="bg-black rounded-full h-2 w-2 "></span>
                            <span>Know More</span>
                        </Link>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default WhyUnify