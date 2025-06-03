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

const FaqTwo = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <div className='grid xl:grid-cols-[533px_1fr] lg:grid-cols-[430px_1fr] grid-cols-1 justify-between items-start gap-7.5'>

                    <div className='lg:sticky top-[var(--header-height)] transition-all duration-300'>
                        <Button variant="secondary">Frequently Asked Questions</Button>
                        <Title size={"5xl"} className="lg:max-w-[817px] max-w-full pt-6 ">Your Digital Journey Clarified</Title>
                        <p className='pt-7.5 lg:pb-10 pb-5 font-semibold max-w-[679px]'>Explore essential information about Rankflow and our services. Find quick answers to common queries in our FAQ section, ensuring a clear understanding of your digital journey with us.</p>
                    </div>

                    <div>
                        <Accordion type="single" defaultValue="one" collapsible>
                            {
                                faqData.map(({ ans, id, question }) => {
                                    return (
                                        <SlideUp key={id} id={id}>
                                            <AccordionItem value={id} className='mb-2.5 bg-gray rounded-[15px] border-none'>
                                                <AccordionTrigger className="font-semibold text-primary-foreground border-none lg:px-7.5 px-4 lg:py-7.5 py-4 text-left [&[data-state=open]]:text-primary-foreground [&[data-state=closed]]:text-muted-foreground">{question}</AccordionTrigger>
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
            </div>
        </section>
    )
}

export default FaqTwo