import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import Input from '@/components/ui/input'
import SlideUp from '@/components/animations/slideUp'

const SubscribeTwo = () => {
    return (
        <section className='lg:py-15 py-9'>
            <SlideUp>
                <div className='max-w-[1350px] mx-auto px-[15px] relative overflow-x-hidden'>
                    <div className='rounded-[30px] bg-gray lg:px-12.5 px-7.5 lg:pt-14 pt-7.5 lg:pb-16 pb-7.5 flex lg:flex-row flex-col justify-between lg:items-center'>
                        <div className='pb-6 max-w-[750px] w-full relative'>
                            <Title size={"5xl"} className={"max-w-[707px]"}>Ready to Transform Your Digital Presence?</Title>
                            <p>Schedule a 30 minutes Meeting with Our Experts to Propel Your Online Success.</p>
                            <div className='absolute -right-20 top-1/2 -translate-y-1/2 lg:block hidden'>
                                <Image src={"/images/shapes/business-consultant-cta-arrow.png"} width={188} height={39} className='dark:brightness-100 dark:invert' alt='arrow' />
                            </div>
                        </div>
                        <div className='relative flex items-center justify-between'>
                            <Form />
                        </div>
                    </div>
                </div>
            </SlideUp>
        </section>
    )
}

export default SubscribeTwo


const Form = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <span className="group rounded-full px-[38px] py-[18px] border-2 border-[#BF0B30] font-bold max-h-12.5 bg-[#BF0B30] text-secondary-foreground dark:text-muted-foreground flex justify-center items-center gap-2.5 transition-all duration-500 hover:bg-transparent hover:text-[#BF0B30]"> Schedule a Meeting</span>
            </DialogTrigger>
            <DialogContent className="max-w-[700px] p-0">
                <div className='flex items-center justify-between py-6 border-b border-b-[#dee2e6]'>
                    <DialogTitle className="pl-4"><h6 className='text-2xl font-bold text-muted-foreground'>Schedule a Meeting</h6></DialogTitle>
                    <DialogClose></DialogClose>
                </div>
                <form className='p-4 pt-0'>
    <div className='flex md:flex-row flex-col justify-between gap-5'>
        <Input
            type="text"
            placeholder="Name"
            className="bg-primary font-medium placeholder:text-white text-white w-full"
        />
        <Input
            type="email"
            placeholder="Email"
            className="bg-primary font-medium placeholder:text-white text-white w-full"
        />
    </div>
    <div className='flex md:flex-row flex-col justify-between gap-5 mt-4'>
        <Input
            type="text"
            placeholder="Website"
            className="bg-primary font-medium placeholder:text-white text-white w-full"
        />
        <div className="w-full">
            {/* Replace this Select component with your dropdown */}
            <select
                className="bg-primary font-medium placeholder:text-white text-white w-full h-[48px] rounded px-3"
                defaultValue=""
            >
                <option value="" disabled>Select a Service</option>
                <option value="SEO">Search Engine Optimization</option>
                <option value="SMM">Social Media Marketing</option>
                <option value="Content">Content Writing</option>
                <option value="Affiliate">Affiliate Marketing</option>
                <option value="Email">Email Marketing</option>
            </select>
        </div>
    </div>
    <div className='mt-4'>
        <textarea
            placeholder="Message"
            className="bg-primary font-medium placeholder:text-white text-white w-full rounded px-3 py-2 min-h-[120px] resize-none"
        />
    </div>
    <div className='mt-5 flex items-start'>
        <input type='checkbox' id='checkbox' className='w-4 h-4' />
        <label htmlFor="checkbox" className='pl-3 -mt-2 w-[94%] font-medium'>
            By using this form you agree with the storage and handling of your data policies of WebFounders USA.
        </label>
    </div>
    <div className='mt-8 flex justify-end pb-8'>
        <Button>Send request</Button>
    </div>
</form>

            </DialogContent>
        </Dialog>
    )
}