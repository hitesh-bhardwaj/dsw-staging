import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
import Image1 from "../../../public/assets/images/footer/image-1.png";
import Image2 from "../../../public/assets/images/footer/image-2.png";
import { motion } from "motion/react";

const FooterCTA = () => {
    return (
        <div className="px-20 flex items-center justify-between h-[80vh] w-screen overflow-hidden">
            <div className="w-1/2">
                <h5 className="text-[5.2vw] leading-[1.2] font-head mb-3 headingAnim">Ready to Transform Your AI Strategy?</h5>
                <p data-para-anim className="text-white-300 w-4/5 mb-12">Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security.</p>
                <div className="flex gap-6">
                    <PrimaryButton text="Book a Demo" href="#" className="fadeup"/>
                    <WhiteButton text="Schedule a Call" href="#" className="fadeup"/>
                </div>
            </div>
            <div className="relative w-1/2 h-[50vw]">
                <motion.div 
                    className="absolute top-1/2 -translate-y-1/2 right-0 -z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    >
                    <svg className="w-[95%] ml-auto" width="778" height="778" viewBox="0 0 778 778" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="389.094" cy="388.916" r="388.781" stroke="url(#paint0_linear_232_8167)" stroke-opacity="0.5" stroke-width="0.25" />
                        <circle cx="389.094" cy="388.915" r="302.668" stroke="url(#paint1_linear_232_8167)" stroke-opacity="0.5" stroke-width="0.25" />
                        <circle cx="389.095" cy="389.237" r="210.959" stroke="url(#paint2_linear_232_8167)" stroke-opacity="0.5" stroke-width="0.25" />
                        <defs>
                            <linearGradient id="paint0_linear_232_8167" x1="0.188477" y1="27.2433" x2="781.305" y2="30.8303" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="#999999" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_232_8167" x1="86.3008" y1="107.325" x2="694.461" y2="110.118" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="#999999" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_232_8167" x1="178.011" y1="192.935" x2="601.973" y2="194.882" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="#999999" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
                <Image className="absolute w-[45%] top-[15%] left-[20%]" src={Image1} loading="lazy" placeholder="blur" />
                <Image className="absolute w-[45%] bottom-[10%] left-[45%]" src={Image2} loading="lazy" placeholder="blur" />
            </div>
        </div>
    )
}

export default FooterCTA;