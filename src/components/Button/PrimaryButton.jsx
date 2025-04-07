import Link from "next/link";


const PrimaryButton = ({ text, className = "", ...props }) => {
  return (
    <Link {...props} className={`relative inline-flex items-center gap-3 rounded-4xl  bg-gradient-to-r from-[#f16b0d] group to-[#e61216] text-white px-8 py-4`}>
      <span className="bg-white rounded-full h-2 w-2 opacity-0 group-hover:opacity-100  duration-300 ease-in-out"></span>
      <span className="text-[1.145vw] -translate-x-2 group-hover:translate-0 duration-300 ease-in-out">{text}</span>
    </Link>
  );
};

export default PrimaryButton; 
