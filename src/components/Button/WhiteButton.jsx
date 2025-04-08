import Link from "next/link";


const WhiteButton = ({ text, className = "", ...props }) => {
  return (
    <Link {...props} className={`relative inline-flex items-center gap-3 group rounded-4xl px-8 py-4 bg-white text-black ${className}`}>
       <span className="bg-black rounded-full h-2 w-2 opacity-0 group-hover:opacity-100  duration-300 ease-in-out"></span>
    
      <span className="text-[1.145vw] -translate-x-2 group-hover:translate-0 duration-300 ease-in-out">{text}</span>
    </Link>
  );
};

export default WhiteButton; 
