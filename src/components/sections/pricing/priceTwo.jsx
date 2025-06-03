"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { Switch } from "@/components/ui/switch"
import { pricingData } from '@/lib/fackData/pricingData'
import PriceCardTwo from './priceCardTwo'
import SlideUp from '@/components/animations/slideUp'

const PriceTwo = () => {
    const [isChecked, setChecked] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
        // setChecked()
       const id = setTimeout(() => {
            // setChecked(!isChecked);
            setIsAnimating(false);
        }, 300);

        return ()=> clearInterval(id)
    }, [isChecked])
  
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Pricing</Button>
                        <Title size={"5xl"} className="pt-6 max-w-full text-center">The Right Plan for every Business</Title>
                        <p className='pt-[26px] text-center max-w-[757px]'>Discover flexible and transparent pricing options designed to meet the diverse needs of businesses, whether you're a startup, small business, or enterprise.</p>
                    </div>
                </SlideUp>
                <div className='pt-[54px]'>
                    <div>
                        <SlideUp>
                            <div className='flex items-center justify-center md:gap-7.5 gap-4'>
                                <span className={`font-semibold text-xl lg:text-1xl ${isChecked ? "" : "text-muted-foreground"}`}>Billed Monthly</span>
                                <Switch checked={isChecked} onCheckedChange={setChecked} />
                                <span className={`font-semibold text-xl lg:text-1xl ${isChecked ? "text-muted-foreground" : ""}`}>Billed Yearly</span>
                            </div>
                            <p className='text-center pt-7.5 text-sm'> <span className='text-red font-bold'>Save 30%</span> {" "} on Yearly Plan</p>
                        </SlideUp>
                    </div>
                    <div>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5 pt-12.5'>
                            {pricingData.map(({ additionalAdds, id, info, isTag, link, plan_name, price, services }) =>
                                <PriceCardTwo key={id} id={id} isChecked={isChecked} additionalAdds={additionalAdds} info={info} isTag={isTag} link={link} plan_name={plan_name} price={price} services={services} isAnimating={isAnimating} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PriceTwo

