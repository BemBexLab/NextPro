import React from 'react'
import Input from '../ui/input'
import { Button } from '../ui/button'
import Title from '../ui/title'
import Textarea from '../ui/textarea'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import SlideUp from '../animations/slideUp'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const ContactForm = ({ color, inputColor }) => {
    // color and inputColor props come from home page 3
    return (
        <section className='container lg:mt-15 mt-9'>
            <div className={` bg-primary lg:rounded-[30px] rounded-2xl px-3 relative z-[1]`}>
                <div className='absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat opacity-20 z-[-1]' style={{ backgroundImage: `url(/images/background/services-bg1-1.png)` }}></div>
                <div className={`max-w-[1320px] mx-auto lg:pt-[138px] pt-12 lg:pb-15 pb-10 rounded-[30px]`}>
                    <div className='flex lg:flex-row flex-col justify-between items-center gap-12.5'>
                        <div className='lg:w-[40%] w-full lg:pb-11'>
                            <SlideUp>
                                <div className={`w-[75px] h-[75px] rounded-lg flex justify-center items-center drop-shadow-3xl bg-white mb-3`}>
                                    <Image src={'/images/shapes/cro-icon.png'} width={45} height={50} alt='map arrwo' />
                                </div>
                                <Title size={"5xl"} className={`md:leading-[140%] ${color}`}>Request a free Audit of your website</Title>
                                <p className={`font-semibold mt-4 max-w-[449px] ${color}`}>Find quick answers to common queries in our FAQ section, ensuring a clear understanding of your digital journey with us.</p>
                            </SlideUp>
                        </div>
                        <div className='lg:w-[54%] w-full'>
                            <SlideUp>
                                <form >
                                    <div className='flex sm:flex-row flex-col items-center gap-4 mb-3'>
                                        <div className='w-full'>
                                            <Input type={"text"} placeholder={"Your Name"} className={`w-full border-2 border-[#C0C0C0] ${inputColor}`} />
                                        </div>
                                        <div className='w-full'>
                                            <Input type={"email"} placeholder={"Email"} className={`w-full border-2 border-[#C0C0C0] ${inputColor}`} />
                                        </div>
                                    </div>
                                    <div className='flex sm:flex-row flex-col items-center gap-4 mb-3'>
                                        <div className='w-full'>
                                            <Input type={"url"} placeholder={"Website"} className={`w-full border-2 border-[#C0C0C0] ${inputColor}`} />
                                        </div>
                                        <div className='w-full'>
                                            <Select>
                                                <SelectTrigger className={`border-2 border-[#C0C0C0] ${inputColor} h-12.5 py-[18px] px-[25px] text-lg`}>
                                                    <SelectValue placeholder="Select a Service" />
                                                </SelectTrigger>
                                                <SelectContent className={`${inputColor} bg-white text-black`}>
                                                    <SelectItem value="Search Engine Optimization" className="text-lg focus:bg-primary focus:text-white pl-5">Search Engine Optimization</SelectItem>
                                                    <SelectItem value="Social Media Marketing" className="text-lg focus:bg-primary focus:text-white pl-5">Social Media Marketing</SelectItem>
                                                    <SelectItem value="Content Writing" className="text-lg focus:bg-primary focus:text-white pl-5">Content Writing</SelectItem>
                                                    <SelectItem value="Affiliate Marketing" className="text-lg focus:bg-primary focus:text-white pl-5">Affiliate Marketing</SelectItem>
                                                    <SelectItem value="Email Marketing" className="text-lg focus:bg-primary focus:text-white pl-5">Email Marketing</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='mb-3'>
                                        <Textarea name={"massage"} placeholder={"Massage"} className={`${inputColor}`} />
                                    </div>
                                    <div className='flex justify-end w-full'>
                                        <Button variant={"outline"} className="border-white border text-white hover:text-primary-foreground hover:bg-white">Send request</Button>
                                    </div>
                                </form>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm