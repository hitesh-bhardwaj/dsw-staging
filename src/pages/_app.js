import { useEffect } from "react";
import "@/styles/globals.css";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import LenisSmoothScroll from "@/components/LenisSmoothScroll";


const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  fallback: ["sans-serif"],
});

const neumontreal = localFont({
  src: [
    {
      path: "./fonts/ppneuemontreal-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ppneuemontreal-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["sans-serif"],
});

export default function App({ Component, pageProps }) {
 
  useEffect(() => {
    // Scroll to top on reload
    if (typeof window !== "undefined") {
      // Let Lenis take control
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    }
  }, []);


  return (
    <>
      <LenisSmoothScroll>
        <div className={`${manrope.variable} ${neumontreal.variable} text-xl`}>
          <Component {...pageProps} />
        </div>
      </LenisSmoothScroll>
    </>
  );
}
