import Image from "next/image";
import Link from "next/link";
import React from "react";

const Business = () => {
  const businessData = [
    {
      title: "Insurance",
      link: "#",
      list: [
        "Sales Attrition",
        "Persistency",
        "Early Claim Prediction",
        "Customer Unification",
      ],
    },
    {
      title: "Banking",
      link: "#",
      list: [
        "Sales Attrition",
        "Persistency",
        "Early Claim Prediction",
        "Customer Unification",
      ],
    },
    {
      title: "Retail",
      link: "#",
      list: [
        "Sales Attrition",
        "Persistency",
        "Early Claim Prediction",
        "Customer Unification",
      ],
    },
    {
      title: "Healthcare",
      link: "#",
      list: [
        "Sales Attrition",
        "Persistency",
        "Early Claim Prediction",
        "Customer Unification",
      ],
    },
    {
      title: "Gaming",
      link: "#",
      list: [
        "Sales Attrition",
        "Persistency",
        "Early Claim Prediction",
        "Customer Unification",
      ],
    },
  ];

  return (
    <section className="h-full w-screen py-10 overflow-hidden">
      <div className="py-10 px-15 w-full">
        <div className="w-[52%] space-y-8">
          <h2 className="text-[5.2vw] font-head leading-[1.2]">
            AI That Works for Your Business
          </h2>
          <p className="content-p text-[#CACACA]">
            UnifyAI is designed to solve real-world business challenges with
            cutting-edge AI capabilities. Whether you need to enhance fraud
            prevention, automate workflows, or improve customer interactions,
            our AI solutions provide scalability, efficiency, and intelligence
            for enterprises across industries.
          </p>
        </div>
        <div className=" overflow-scroll w-screen mt-[5vw]">
          <div className="ml-[50vw] overflow-x-auto overflow-scroll w-fit flex  gap-10 py-10 mr-[10vw]">
            {businessData.map((data, id) => (
              <>
                <Link href={data.link}>
                  <div className="relative w-[27vw] rounded-4xl overflow-hidden group border border-gray-800">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F16B0D] to-[#E61216] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-0" />

                    {/* Main content */}
                    <div className="relative z-10 bg-white/5 rounded-4xl py-14 px-8 space-y-20">
                      <div className="h-13 w-13 bg-white rounded-full flex items-center justify-center absolute top-8 right-8">
                        <span>
                          <Image
                            src="/assets/icons/top-right.svg"
                            height={14}
                            width={14}
                            alt="top-right-arrow"
                          />
                        </span>
                      </div>
                      <div className="space-y-5 mt-40">
                        <p className="text-[2.6vw]">{data.title}</p>
                        <ul className="list-disc text-[1.145vw] font-medium space-y-0.5 ml-[1vw]">
                          {data.list.map((listData) => (
                            <li key={listData}>{listData}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
