import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";

const Header = () => {
  return (
    <>
      <header className=" text-white p-4 fixed top-0 left-0 z-[999]">
        <div className="flex items-center justify-between py-6 px-12 w-screen">
          <div>
            <Image
              src={"/assets/images/logo.png"}
              height={67}
              width={132}
              alt="dsw-logo"
              className="w-[7vw] h-[5vw] object-contain"
            />
          </div>
          <div className="border rounded-4xl bg-stone-900/30 backdrop-blur-sm border-white/20 ml-[4vw]">
            <ul className="flex items-center justify-between px-12 py-4.5 gap-12 text-[1.145vw] ">
              <li>
                <Link href={"#"}>Home</Link>
              </li>
              <li>
                <Link href={"#"}>Product</Link>
              </li>
              <li>
                <Link href={"#"}>Solutions</Link>
              </li>
              <li>
                <Link href={"#"}>About Us</Link>
              </li>
              <li>
                <Link href={"#"}>Resources</Link>
              </li>
              <li>
                <Link href={"#"}>Pilot Program</Link>
              </li>
              <li>
                <Link href={"#"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
           <PrimaryButton text={"Book a demo"} href={"#"}/>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
