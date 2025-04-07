import Image from 'next/image'
import React from 'react'

const Connects = () => {
  return (
   <section className='h-full w-screen py-20 px-15'>
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='text-center w-[40%] space-y-10'>
        <h3 className='text-[5.2vw] leading-[1.2]'>
        Connects with Your Platform
        </h3>
        <p className='text-[1.145vw] text-[#CACACA]'>UnifyAI connects with the platforms you already use.</p>
        </div>
        <div className='w-full flex items-center justify-center gap-20 py-30'>
            <div>
                <Image src="/assets/images/azure-logo.png" height={49} width={171} alt='azure-logo'/>
            </div>
            <div>
                <Image src="/assets/images/intel-logo.png" height={51} width={131} alt='azure-logo'/>
            </div>
            <div>
                <Image src="/assets/images/IBM-logo.png" height={136} width={136} alt='azure-logo'/>
            </div>
            <div className="relative flex items-center justify-center w-[20vw] h-[20vw]">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-800/60 h-[15vw] w-[15vw] z-[-1]" />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-800/40 h-[20vw] w-[20vw] z-[-2]" />

  <Image
    src="/assets/images/unify.png"
    height={65}
    width={150}
    alt="azure-logo"
  />
</div>

            <div>
                <Image src="/assets/images/amazon-logo.png" height={68} width={183} alt='azure-logo'/>
            </div>
            <div>
                <Image src="/assets/images/google-logo.png" height={58} width={335} alt='azure-logo'/>
            </div>


        </div>


    </div>

   </section>
  )
}

export default Connects