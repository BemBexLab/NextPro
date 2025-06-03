
import SlideUp from '@/components/animations/slideUp'
import React from 'react'
import { motion } from "framer-motion"

const SwipeButton = ({ isChecked, setChecked, togglePricing }) => {

    return (
        <SlideUp>
            <div className='flex items-center justify-between bg-accent p-[5px] rounded-[10px] max-w-[300px] h-15 mx-auto relative z-[1]'>
                <div className={`rounded-[7px] px-[29px] py-2 text-1xl font-semibold h-full cursor-pointer relative transition-all duration-300 ${isChecked || "text-primary-foreground"}`} onClick={() => {setChecked(false), togglePricing()}}>
                    Monthly
                    {isChecked || (
                        <motion.span
                            layoutId="bubble"
                            className="absolute z-[-1] inset-0 w-full h-full bg-white rounded-[7px]"
                            transition={{ bounce: 0.2, duration: 0.3 }}
                        />
                    )}

                </div>
                <div className={`rounded-[7px] px-[29px] py-2 text-1xl font-semibold h-full cursor-pointer relative transition-all duration-300 ${isChecked && "text-primary-foreground"}`} onClick={() => {setChecked(true), togglePricing()}}>
                    {isChecked && (
                        <motion.span
                            layoutId="bubble"
                            className="absolute z-[-1] inset-0 w-full h-full bg-white text-primary-foreground rounded-[7px]"
                            transition={{ bounce: 0.2, duration: 0.3 }}
                        />
                    )}
                    Yearly
                </div>

            </div>
            <p className='text-center pt-7.5 text-sm'> <span className='text-red font-bold'>Save 30%</span> {" "} on Yearly Plan</p>
        </SlideUp>
    )
}

export default SwipeButton