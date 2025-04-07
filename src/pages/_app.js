import "@/styles/globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={`${manrope.variable} font-body text-xl`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
