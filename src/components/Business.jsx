import Image from 'next/image'
import React from 'react'

const Business = () => {
  return (
   <section className='h-full w-screen py-10'>
    <div className='py-10 px-15 w-full'>
        <div className='w-[50%]'>
        <h2 className='text-[5.2vw] font-head leading-[1.2]'>AI That Works for Your Business</h2>
        <p className='text-[1.145vw] text-[#CACACA]'>UnifyAI is designed to solve real-world business challenges with cutting-edge AI capabilities. Whether you need to enhance fraud prevention, automate workflows, or improve customer interactions, our AI solutions provide scalability, efficiency, and intelligence for enterprises across industries.</p>
        </div>
        <div className='w-full flex items-end justify-end  gap-10 py-10'>
            <div className='border border-gray-800 rounded-3xl p-10 px-20 space-y-20 relative bg-gradient-to-r from-[#F16B0D] to-[#E61216] w-1/4'>
                <div className='h-15 w-15 bg-white rounded-full flex items-center justify-center absolute top-10 right-10'>
                    <span>
                        <Image src="/assets/icons/top-right.svg" height={18} width={18} alt='top-right-arrow'/>
                    </span>
                </div>
                <div className='space-y-10 mt-[8vw]'>
                <p className='text-[2.6vw]'>Insurance</p>
                <ul className='list-disc text-[1.145vw] font-medium space-y-2'>
                    <li>Sales Attrition</li>
                    <li>Persistency</li>
                    <li>Early Claim Prediction</li>
                    <li>Customer Unification</li>
                </ul>
                </div>
            </div>
            <div className='border border-gray-800 rounded-3xl p-10 px-20 space-y-20 relative bg-black/50 w-1/4'>
                <div className='h-15 w-15 bg-white rounded-full flex items-center justify-center absolute top-10 right-10'>
                    <span>
                        <Image src="/assets/icons/top-right.svg" height={18} width={18} alt='top-right-arrow'/>
                    </span>
                </div>
                <div className='space-y-10 mt-[8vw]'>
                <p className='text-[2.6vw]'>Banking</p>
                <ul className='list-disc text-[1.145vw] font-medium space-y-2'>
                    <li>Sales Attrition</li>
                    <li>Persistency</li>
                    <li>Early Claim Prediction</li>
                    <li>Customer Unification</li>
                </ul>
                </div>
            </div>

        </div>
    </div>

   </section>
  )
}

export default Business