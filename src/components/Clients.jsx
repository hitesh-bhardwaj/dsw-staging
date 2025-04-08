import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <section className='py-20 w-screen h-[60vw] pb-50 relative'>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-[60%] py-10'>
            <h2 className='font-head text-[5.2vw] leading-[1.2] text-center'>Trusted by Innovators, <br/>
            Built for Industry Disruptors.</h2>
            </div>
            <div className='absolute top-35 left-30 blur-xs'>
                <Image src="/assets/images/manipal.png" height={145} width={276} alt='manipal'/>
            </div>
            <div className='absolute top-20 right-150 blur-xs'>
                <Image src="/assets/images/edgeverve.png" height={150} width={290} alt='edgeverve'/>
            </div>
            <div className='absolute top-25 right-30'>
                <Image src="/assets/images/sodexo.png" height={89} width={277} alt='sodexo'/>
            </div>
            <div className='absolute bottom-60 right-30 blur-xs'>
                <Image src="/assets/images/canara.png" height={65} width={218} alt='canara'/>
            </div>
            <div className='absolute bottom-35 right-200 blur-sm'>
                <Image src="/assets/images/bon-prix.png" height={102} width={111} alt='bon-prix'/>
            </div>
            <div className='absolute bottom-60 left-30'>
                <Image src="/assets/images/ciek.png" height={68} width={216} alt='ciek'/>
            </div>

        </div>

    </section>
  )
}

export default Clients