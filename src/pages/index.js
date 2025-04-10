import Blogs from "@/components/Blogs";
import Business from "@/components/Business";
import Clients from "@/components/Clients";
import Connects from "@/components/Connects";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import { fadeIn, fadeUp, headingAnim, lineAnim, paraAnim } from "@/components/gsapAnimations";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Insuraince from "@/components/Insuraince";
import Security from "@/components/Security";
import { initSplit } from "@/components/splitTextUtils";
import Testimonials from "@/components/Testimonials";
import Turbocharge from "@/components/Turbocharge";
import TurbochargeG from "@/components/TurboChargeG";
import UnifyAi from "@/components/UnifyAi";
import WhyUnify from "@/components/WhyUnify";
import { useEffect } from "react";

export default function Home() {
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();

  useEffect(() => {
    initSplit();
  }, [])


  return (
    <>
      <Header />
      <Hero />
      <TurbochargeG/>
      <UnifyAi />
      <WhyUnify />
      <Insuraince />
      <Business />
      <Security />
      <Connects />
      <Clients />
      <Testimonials />
      <Blogs />
      <FAQs />
      <Footer />
    </>
  );
}
