import React from 'react'
import { Accordion, AccordionItem } from "@heroui/accordion";

const data= [
    {
        title:"What is UnifyAI?",
        description:"UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability."
    },
    {
        title:"Who can use UnifyAI?",
        description:"UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability."
    },
    {
        title:"How does UnifyAI integrate with existing systems?",
        description:"UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability."
    },
    {
        title:"Is UnifyAI secure?",
        description:"UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability."
    },
    {
        title:"What types of AI models does UnifyAI support?",
        description:"UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability."
    },
]

const FAQs = () => {
  const itemClasses = {
    base: "py-5 w-full border-b border-gray-600 px-4",
    title: "font-medium text-[1.145vw] text-[#E8E8E8] ",
    trigger: "px-2 py-0 rounded-full h-14 flex items-center justify-between w-full",
    // indicator: "text-medium text-xl",
    content: "text-[1.145vw] px-2 text-[#CACACA]",
  };

  return (
    <section className='h-full w-screen py-20'>
      <div className='w-full h-full flex flex-col items-center justify-center space-y-10 px-10'>
        <h2 className='text-[5.2vw] leading-[1.2] text-center'>Frequently Asked Questions</h2>
      </div>

      <div className='w-[80%] ml-auto mr-auto py-20'>
        <Accordion itemClasses={itemClasses}>
        {data.map((item, index) => (
  <AccordionItem
    key={index}
    aria-label={item.title}
    title={item.title}
    className='!w-full'
    indicator={({ isOpen }) => (
      <span className={`w-12 h-12 flex items-center justify-center text-3xl  border border-gray-700 rounded-full ${isOpen? "bg-gradient-to-r from-[#f16b0d] group to-[#e61216]" : ""}`}>
        {isOpen ? "-" : "+"}
      </span>
    )} 
  >
    {item.description}
  </AccordionItem>
))}

        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
