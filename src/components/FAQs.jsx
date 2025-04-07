import React from 'react'
import { Accordion, AccordionItem } from "@heroui/accordion";

const FAQs = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t"
  return (
    <section className='h-full w-screen py-20'>
      <div className='w-full h-full flex flex-col items-center justify-center space-y-10 px-10'>
        <h2 className='text-[5.2vw] leading-[1.2] text-center'>Frequently Asked Questions</h2>
      </div>
      <div className='w-1/2 ml-auto mr-auto py-20'>
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default FAQs