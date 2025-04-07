import Image from 'next/image'
import React from 'react'

const Insuraince = () => {
  return (
   <section className='w-screen h-full pb-[10vw]'>
    <div className='w-full py-15 space-y-20 px-20 '>
        <div className='text-center space-y-2'>
    <h3 className="bg-gradient-to-r from-[#F16B0D] to-[#E61216] bg-clip-text text-transparent text-[5.2vw] font-medium">
    InsurAInce
</h3>
<p className='text-[#CACACA]'>Fast-track your Insurance Use Cases with InsurAInce</p>
</div>
<div className='flex items-center justify-between'>
    <div className='w-1/4 space-y-5'>
<div>
    <Image src="/assets/icons/rapid.svg" height={98} width={98}/>
</div>
<h4 className='text-[2.6vw] text-[#E8E8E8]'>Rapid AI/ML Deployment</h4>
<p className='text-[#CACACA]'>Bring use cases into production in as little as 3-4 weeks.</p>
<span className='h-0.5 bg-[#F26B0D] w-1/4 absolute mt-30'/>

    </div>
    <div  className='w-1/4 space-y-5'>
<div>
    <Image src="/assets/icons/scalability.svg" height={98} width={98}/>
</div>
<h4 className='text-[2.6vw] text-[#E8E8E8]'>Scalability & Transparency</h4>
<p className='text-[#CACACA]'>Enterprise-grade infrastructure that offers complete control over deployment, monitoring, and retraining.</p>
<span className='h-0.5 bg-[#CACACA75] w-1/4 absolute mt-30'/>

    </div>
    <div className='w-1/4 space-y-5'>
<div>
    <Image src="/assets/icons/rapid.svg" height={98} width={98}/>
</div>
<h4 className='text-[2.6vw] text-[#E8E8E8]'>Future-Proofed Innovation</h4>
<p className='text-[#CACACA]'>Stay at the forefront of technology with a solution that seamlessly integrates with the latest advancements in AI and data science.</p>
<span className='h-0.5 bg-[#CACACA75] w-1/4 absolute mt-30'/>

    </div>

</div>
    </div>

   </section>
  )
}

export default Insuraince