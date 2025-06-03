import React from 'react'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { pricingData } from '@/lib/fackData/pricingData'
import SlideUp from '@/components/animations/slideUp'
import PriceCardOne from './pricecardOne'

const PriceOne = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <div className='grid 2xl:grid-cols-[533px_1fr] lg:grid-cols-[400px_1fr] grid-cols-1 justify-between items-start gap-7.5'>
                    <div className={`lg:sticky top-[var(--header-height)] transition-all duration-300`}>
                        <Button variant="secondary">Simple Pricing</Button>
                        <Title size={"5xl"} className="pt-6 max-w-full">Tailored Solutions for Every Business</Title>
                        <p className='pt-[26px] text-muted-foreground'>Discover flexible and transparent pricing options designed to meet the diverse needs of businesses, whether you're a startup, small business, or enterprise.</p>

                    </div>
                    <div>
                        {
                            pricingData.map(({ additionalAdds, id, info, isTag, link, plan_name, price, services }) =>
                                <PriceCardOne key={id} id={id} additionalAdds={additionalAdds} info={info} isTag={isTag} link={link} plan_name={plan_name} price={price} services={services} />
                            )
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default PriceOne
