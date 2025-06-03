import React from 'react'
import Title from '../ui/title'
import { cn } from '@/lib/utils'

const Loading = () => {
    return (
        <section className='max-w-[1350px] mx-auto px-[15px] py-[60px]'>
            <div className='flex xl:flex-row flex-col justify-between'>
                <div className='lg:max-w-[40%]'>
                    <Title size={"6xl"} className="max-w-[464px]">
                        Designed for Swift Loading
                    </Title>
                </div>
                <div className='flex sm:flex-row flex-col sm:items-center justify-between gap-10 pt-10 xl:pt-0'>
                    <Card number={"95%"} result={"A+"} text={"Google Page Speed Score"} />
                    <Card number={"93%"} result={"A+"} text={"GT Metrix Score"} />
                </div>
            </div>
        </section>
    )
}

export default Loading


const Card = ({ number, result, text }) => {
    return (
        <div className='w-full'>
            <p className='bg-green font-semibold text-secondary-foreground py-[9px] px-[10px] rounded-lg w-[45px] h-[31px] flex justify-center items-center'>{result}</p>
            <div className='flex items-center w-full gap-2 pb-4'>
                <Title size={"5xl"}>{number}</Title>
                <p className='font-bold text-muted-foreground sm:max-w-[123px] max-w-full'>{text}</p>
            </div>
            <div className='bg-accent h-5 w-full xl:min-w-[345px] min-w-[300px] rounded-[4px] relative'>
                <div className={cn(`bg-[#0d6efd] absolute h-full rounded-[4px]`)} style={{width:`${number}`}}></div>
            </div>
        </div>
    )
}