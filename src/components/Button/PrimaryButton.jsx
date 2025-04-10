import Link from "next/link";

const PrimaryButton = ({ text, className = "", ...props }) => {
  return (
    <Link {...props} data-letters-delay data-split='letters' className={`buttonSplit relative inline-flex items-center gap-3 rounded-4xl bg-gradient-to-r from-primary-1 to-primary-2 text-white px-8 py-4 group hover:scale-95 transition-transform duration-500 ${className}`}>
      {/* <span className="bg-white rounded-full h-2 w-2 opacity-0 group-hover:opacity-100  duration-300 ease-in-out"></span> */}
      <div className="overflow-clip leading-[1.4]">
        <p className="text-[1.145vw] leading-[1.4] buttonTextShadow">{text}</p>
      </div>
    </Link>
  );
};

export default PrimaryButton; 
