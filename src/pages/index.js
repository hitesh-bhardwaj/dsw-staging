import Blogs from "@/components/Blogs";
import Business from "@/components/Business";
import Clients from "@/components/Clients";
import Connects from "@/components/Connects";
import FAQs from "@/components/FAQs";
import { fadeIn, fadeUp, headingAnim, lineAnim, paraAnim } from "@/components/gsapAnimations";
import Hero from "@/components/Hero";
import Insuraince from "@/components/Insuraince";
import Layout from "@/components/Layout";
import Security from "@/components/Security";
import { initSplit } from "@/components/splitTextUtils";
import Testimonials from "@/components/Testimonials";
import TurbochargeG from "@/components/TurboChargeG";
import UnifyAi from "@/components/UnifyAi";
import WhyUnify from "@/components/WhyUnify";
import Head from "next/head";
import { useEffect } from "react";

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
      </Layout>
    </>
  );
}
