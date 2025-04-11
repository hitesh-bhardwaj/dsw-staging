import Blogs from "@/components/Homepage/Blogs";
import Business from "@/components/Homepage/Business";
import Clients from "@/components/Homepage/Clients";
import Connects from "@/components/Homepage/Connects";
import FAQs from "@/components/Homepage/FAQs";
import Footer from "@/components/Footer";
import { fadeIn, fadeUp, headingAnim, lineAnim, paraAnim } from "@/components/gsapAnimations";
import Header from "@/components/Header";
import Hero from "@/components/Homepage/Hero";
import Insuraince from "@/components/Homepage/Insuraince";
import Layout from "@/components/Layout";
import Security from "@/components/Homepage/Security";
import { initSplit } from "@/components/splitTextUtils";
import Testimonials from "@/components/Homepage/Testimonials";
import TurbochargeG from "@/components/Homepage/TurboChargeG";
import UnifyAi from "@/components/Homepage/UnifyAi";
import WhyUnify from "@/components/Homepage/WhyUnify";
import Head from "next/head";
import { useEffect } from "react";
import UnifyAiG from "@/components/Homepage/UnifyAiG";

export default function Home() {
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();

  useEffect(() => {
    initSplit();
  }, []);

  return (
    <>
      <Head>
        <title>Data Science Wizards</title>
        <meta name="description" content="Unify AI - Turbocharge your business with AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <TurbochargeG />
        {/* <UnifyAi /> */}
        <UnifyAiG/>
        <WhyUnify />
        <Insuraince />
        <Business />
        <Security />
        <Connects />
        <Clients />
        <Testimonials />
        <Blogs />
        <FAQs />
      </Layout>
    </>
  );
}
