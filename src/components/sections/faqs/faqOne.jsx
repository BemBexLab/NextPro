import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { faqData } from '@/lib/fackData/faqData'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SlideUp from '@/components/animations/slideUp'

const FaqOne = () => {
  return (
    <section className='lg:py-15 py-9'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <SlideUp>
          <div className='flex flex-col items-center'>
            <Button variant="secondary">Frequently Asked Questions</Button>
            <Title size={"5xl"} className="lg:max-w-[817px] max-w-full pt-6 text-center">Your Digital Journey Clarified</Title>
            <p className='pt-7.5 pb-10 font-semibold text-center max-w-[679px]'>Explore essential information about Rankflow and our services. Find quick answers to common queries in our FAQ section, ensuring a clear understanding of your digital journey with us.</p>
          </div>
        </SlideUp>
        <div className='max-w-[871px] mx-auto'>
          <Accordion type="single" defaultValue="one" collapsible>
            {
              faqData.map(({ ans, id, question }) => {
                return (
                  <SlideUp key={id} id={id}>
                    <AccordionItem  value={id} className='mb-2.5 bg-gray rounded-[15px] border-none'>
                      <AccordionTrigger className="font-semibold border-none lg:px-7.5 px-4 lg:py-7.5 py-4 text-left [&[data-state=open]]:text-primary-foreground [&[data-state=closed]]:text-muted-foreground">{question}</AccordionTrigger>
                      <AccordionContent className="lg:px-7.5 px-4 text-muted-foreground">
                        {ans}
                      </AccordionContent>
                    </AccordionItem>
                  </SlideUp>
                )
              })
            }
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FaqOne