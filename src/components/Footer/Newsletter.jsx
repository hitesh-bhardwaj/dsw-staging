import Image from "next/image";

const Newsletter = () => {
    return (
        <div className="">
            <p  className="mb-4">Subscribe to our newsletter for the latest tech insights and updates.</p>
            <form className="relative">
                <input type="email" placeholder="Enter your email" className="w-full  pb-2" />
                <span className="w-full h-[1px] bg-white block lineDraw"/>
                <button type="button"  className="flex cursor-pointer absolute right-0 items-center gap-1 bottom-2  group hover:scale-[0.95] transition-all duration-300 ease">
                    <span >
                        Subscribe
                    </span>
                    <Image src="/assets/icons/arrow-right.svg" alt="arrow-right" width={10} height={10} className="w-4 h-4 group-hover:-rotate-45 transition-all duration-300 ease" />
                </button>
            </form>
        </div>
    )
}

export default Newsletter;