import Link from "next/link";

const { default: Image } = require("next/image")

const Header = () => {
    return (
        <>
            <header className=" text-white p-4 sticky top-0 left-0">
                <div className="flex items-center justify-between py-6 px-8">
                    <div>
                        <Image src={"/assets/images/logo.png"} height={67} width={132} alt="dsw-logo" />
                    </div>
                    <div className="border rounded-4xl  bg-gray-800/40">
                        <ul className="flex items-center justify-between px-10 py-5 gap-8 ">
                            <li>Home</li>
                            <li>Product</li>
                            <li>Solutions</li>
                            <li>About Us</li>
                            <li>Resources</li>
                            <li>Pilot Program</li>
                            <li> Contact</li>
                        </ul>

                    </div>
                    <div>
                        <Link
                            href="/"
                            className="relative inline-flex items-center gap-2 rounded-4xl bg-gradient-to-r from-[#f16b0d] to-[#e61216] text-white px-8 py-4"
                        >
                            <span className="bg-white rounded-full h-2 w-2"></span>
                            <span>Book a demo</span>
                        </Link>
                    </div>

                </div>
            </header>
        </>
    )
}
export default Header;