import "@/styles/globals.css";
import { Manrope } from "next/font/google";
import localFont from 'next/font/local';
import { ReactLenis } from 'lenis/react';

const manrope = Manrope({
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
  fallback: ['sans-serif']
});

const neumontreal = localFont({
  src: [
    {
      path: './fonts/ppneuemontreal-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ppneuemontreal-medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-display',
  display: 'swap',
  fallback: ['sans-serif']
})


export default function App({ Component, pageProps }) {
  return (
    <>
      <ReactLenis root>
        <div className={`${manrope.variable} ${neumontreal.variable} text-xl`}>
          <Component {...pageProps} />
        </div>
      </ReactLenis>
    </>
  )
}
