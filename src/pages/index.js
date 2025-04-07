import Blogs from "@/components/Blogs";
import Business from "@/components/Business";
import Clients from "@/components/Clients";
import Connects from "@/components/Connects";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Insuraince from "@/components/Insuraince";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";
import Turbocharge from "@/components/Turbocharge";
import UnifyAi from "@/components/UnifyAi";
import WhyUnify from "@/components/WhyUnify";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Turbocharge />
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
