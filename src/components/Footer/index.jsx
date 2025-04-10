import Image from "next/image"
import Link from "next/link"
import Newsletter from "./Newsletter";
import FooterCTA from "./FooterCta";
import { Links, NavLink, SocialLinks } from "../Header/NavLink";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const footerGlassRef = useRef(null);
    useEffect(()=>{
        gsap.from(footerGlassRef.current,{
            scale:1.1,
            opacity:0,
            ease:"power3.out",
            // duration:2,
            scrollTrigger:{
                trigger: footerRef.current,
                start: "top 40%",
                end:"bottom bottom",
                // markers:true,
                scrub: 0.25,
            }
        })
    })


    return (
        <>
            <FooterCTA />
            <footer className="relative overflow-hidden px-20 pt-[15vw]" ref={footerRef}>
                <Image src="/assets/images/footer-bg.svg" width={1920} height={900} alt="Footer Background" loading="lazy" className="absolute -bottom-20 left-0 right-0 w-full" />
                <div className="relative z-[1]">
                    <div className="rounded-3xl bg-black/20 border border-white/30 backdrop-blur-2xl px-12 py-12 flex justify-between" ref={footerGlassRef}>
                        {/* Logo and Contact Info */}
                        <div className="flex flex-col justify-between items-start gap-24">
                            <Image src="/dsw-logo.svg" width={338} height={172} alt="Logo" loading="lazy" className="w-2/3" />
                            <div className="">
                                <h6 className="font-medium mb-5">CONTACT US</h6>
                                <ul className="space-y-2">
                                    <li className="under-multi-parent">
                                        <a href="tel:+91 96640 56847" className="under-multi">+91 96640 56847</a>
                                    </li>
                                    <li className="under-multi-parent">
                                        <a href="tel:+353 894015233" className="under-multi">+353 894015233</a>
                                    </li>
                                    <li className="under-multi-parent">
                                        <a href="mailto:contact@datasciencewizards.ai" className="under-multi">contact@datasciencewizards.ai</a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="flex justify-between w-2/5 ml-auto gap-10">
                            {/* Navigation Links */}
                            <div>
                                <h6 className="font-medium mb-5">NAVIGATION</h6>
                                <ul className="space-y-3">
                                    {Links.map((link, index) => (
                                        <li key={index} className="text-white">
                                            <NavLink text={link.text} href={link.href} />
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newsletter Subscription */}
                            <div className="flex flex-col justify-between w-3/5">
                                <Newsletter />

                                {/* Social Media Links */}
                                <ul className="flex gap-4">
                                    {SocialLinks.map((link, index) => (
                                        <li key={index} className="group">
                                            <Link href={link.href} aria-label={link.label} className="rounded-full bg-black/20 block p-2.5 border overflow-hidden group-hover:bg-white transition-all duration-500 ease group-hover:scale-[0.95]">
                                                <div className="w-5 h-5 flex items-center justify-center text-white group-hover:text-black transition-all duration-500 ease " dangerouslySetInnerHTML={{__html: link.icon}}/>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between py-8 text-lg">
                        <p>Copyright © Data Science Wizards 2025</p>
                        <p>By: <a href="https://weareenigma.com/">Enigma Digital</a></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;