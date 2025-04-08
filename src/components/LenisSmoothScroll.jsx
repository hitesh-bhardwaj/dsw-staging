// import Lenis from "lenis";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// export default function LenisSmoothScroll() {
//     const lenis = new Lenis({
//         duration: 2,
//         // easing: (t) => Math.min(1, 1.5 - Math.pow(2, -10 * t)),
//     });

//     lenis.on('scroll', ScrollTrigger.update);

//     gsap.ticker.add((time) => {
//         lenis.raf(time * 1000);
//     });

//     gsap.ticker.lagSmoothing(0);

//     lenis.start();

//     return null;
// }

import { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { cancelFrame, frame } from 'motion';

const LenisSmoothScroll = ({ children }) => {
    const lenisRef = useRef(null);
    
    useEffect(() => {
        function update(data) {
          const time = data.timestamp
          lenisRef.current?.lenis?.raf(time)
        }
    
        frame.update(update, true)
    
        return () => cancelFrame(update)
      }, [])

    return <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>{children}</ReactLenis>
}

export default LenisSmoothScroll;