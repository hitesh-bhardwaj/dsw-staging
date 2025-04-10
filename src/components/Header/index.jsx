import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Links, NavLink } from "./NavLink";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 2.2 }}
        className={`text-white p-4 fixed top-0 left-0 z-[999]`} >
        <div className={`flex items-center justify-between py-6 px-12 w-screen transition-transform duration-500 ${isHidden ? "-translate-y-full" : "translate-y-0"}`} ref={headerRef} >
          <Link href={"/"}>
            <Image
              src={"/dsw-logo.svg"}
              height={67}
              width={132}
              alt="dsw-logo"
              className="w-[7vw] h-[5vw] object-contain"
            />
          </Link>
          <div className="border rounded-4xl bg-stone-900/30 backdrop-blur-sm border-white/20 ml-[4vw]">
            <ul className="flex items-center justify-between px-12 py-4.5 gap-12 text-[1.145vw] ">
              {Links.map((link, index) => (
                <li key={index} className="text-white">
                  <NavLink text={link.text} href={link.href} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <PrimaryButton text={"Book a Demo"} href={"#"} />
          </div>
        </div>
      </motion.header>
    </>
  );
};
export default Header;
