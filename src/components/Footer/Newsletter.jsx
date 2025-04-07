import Image from "next/image";

const Newsletter = () => {
    return (
        <div className="">
            <p className="mb-4">Subscribe to our newsletter for the latest tech insights and updates.</p>
            <form className="relative">
                <input type="email" placeholder="Enter your email" className="w-full border-b pb-2" />
                <button type="button" className="flex cursor-pointer absolute right-0 items-center gap-1 bottom-2">
                    <span>
                        Subscribe
                    </span>
                    <Image src="/assets/icons/arrow-left.svg" width={10} height={10} className="w-4 h-4" />
                </button>
            </form>
        </div>
    )
}

export default Newsletter;