"use client"
import React from 'react'
import SlotCounter from "react-slot-counter"

const counterData = [
    {
        id: 1,
        number: 5,
        endPoint: "k+",
        title: "Projects Delivered"
    },
    {
        id: 2,
        number: 4.9,
        endPoint: "k+",
        title: "Happy Clients"
    },
    {
        id: 3,
        number: 95,
        endPoint: "%",
        title: "Success Rate"
    },
    {
        id: 4,
        number: 15,
        endPoint: "x",
        title: "Growth in Performance"
    },

]
const CountDown = () => {
    return (
        <div className='max-w-[1350px] mx-auto px-[15px] lg:py-15 py-9'>
            <div className='flex justify-between flex-wrap items-center gap-10'>
                {
                    counterData.map(({ endPoint, id, number, title }) => {
                        return (
                            <div key={id} className='flex items-center gap-[15px]'>
                                <h2 className='font-extrabold text-muted-foreground lg:text-6xl text-5xl'>
                                    <SlotCounter startValue={0} value={number} debounceDelay={5000} duration={2} animateOnVisible={{ triggerOnce: true, rootMargin: '0px 0px -100px 0px' }} />{endPoint}
                                </h2>
                                <p className='font-semibold text-1xl text-muted-foreground max-w-[113px]'>{title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CountDown

