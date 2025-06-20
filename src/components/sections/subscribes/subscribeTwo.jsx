'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
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
    // State for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [service, setService] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const res = await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                website,
                contactNumber,
                service,
                message,
            }),
        });
        if (res.ok) {
            setStatus('Message sent!');
            setName('');
            setEmail('');
            setWebsite('');
            setContactNumber('');
            setService('');
            setMessage('');
        } else {
            setStatus('Error sending message.');
        }
    };

    return (
       <Dialog>
  <DialogTrigger>
    <span className="group rounded-full px-[38px] py-[18px] border-2 border-[#BF0B30] font-bold max-h-12.5 bg-[#BF0B30] text-secondary-foreground dark:text-muted-foreground flex justify-center items-center gap-2.5 transition-all duration-500 hover:bg-transparent hover:text-[#BF0B30]">
      Schedule a Meeting
    </span>
  </DialogTrigger>
  <DialogContent
    className="
      max-w-[95vw] sm:max-w-[700px]
      w-[95vw] sm:w-auto
      p-0
    "
  >
    {/* Header */}
    <div className='flex items-center justify-between py-4 sm:py-6 border-b border-b-[#dee2e6] px-3 sm:px-4'>
      <DialogTitle>
        <h6 className='text-lg sm:text-2xl font-bold text-muted-foreground'>Schedule a Meeting</h6>
      </DialogTitle>
      <DialogClose />
    </div>
    {/* Form */}
    <div className="px-3 sm:px-4 pb-4">
      <form className='pt-0' onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-5">
          <div className="w-full">
            <input
              type="text"
              placeholder="Name"
              className="bg-white border-2 border-gray-300 font-medium placeholder:text-gray-400 text-black w-full rounded px-2 py-2 h-10 sm:px-3 sm:py-2 sm:h-12 text-sm sm:text-base"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              className="bg-white border-2 border-gray-300 font-medium placeholder:text-gray-400 text-black w-full rounded px-2 py-2 h-10 sm:px-3 sm:py-2 sm:h-12 text-sm sm:text-base"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-5 mt-3 sm:mt-4">
          <div className="w-full">
            <input
              type="text"
              placeholder="Website (optional)"
              className="bg-white border-2 border-gray-300 font-medium placeholder:text-gray-400 text-black w-full rounded px-2 py-2 h-10 sm:px-3 sm:py-2 sm:h-12 text-sm sm:text-base"
              value={website}
              onChange={e => setWebsite(e.target.value)}
              // not required
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Phone Number (optional)"
              className="bg-white border-2 border-gray-300 font-medium placeholder:text-gray-400 text-black w-full rounded px-2 py-2 h-10 sm:px-3 sm:py-2 sm:h-12 text-sm sm:text-base"
              value={contactNumber}
              onChange={e => setContactNumber(e.target.value)}
              // not required
            />
          </div>
        </div>
        <div className="w-full mt-3 sm:mt-4">
          <select
            className="bg-white border-2 border-gray-300 font-medium text-black w-full rounded px-2 py-2 h-10 sm:px-3 sm:py-2 sm:h-12 text-sm sm:text-base"
            value={service}
            onChange={e => setService(e.target.value)}
            required
          >
            <option value="" disabled>Select a Service</option>
            <option value="Search Engine Optimization">Search Engine Optimization</option>
            <option value="Social Media Marketing">Social Media Marketing</option>
            <option value="Content Writing">Content Writing</option>
            <option value="Affiliate Marketing">Affiliate Marketing</option>
            <option value="Email Marketing">Email Marketing</option>
          </select>
        </div>
        <div className='mt-3 sm:mt-4'>
          <textarea
            placeholder="Message"
            className="bg-white border-2 border-gray-300 font-medium placeholder:text-gray-400 text-black w-full rounded px-2 py-2 text-sm sm:px-3 sm:py-2 sm:text-base"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            rows={3}
          />
        </div>
        <div className='mt-4 flex items-start'>
          <input type='checkbox' id='checkbox' className='w-4 h-4 mt-1' required />
          <label htmlFor="checkbox" className='pl-3 w-[94%] font-medium text-sm sm:text-base'>
            By using this form you agree with the storage and handling of your data policies of WebFounders USA.
          </label>
        </div>
        <div className='mt-6 flex justify-end pb-4'>
          <Button type="submit" className="text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">Send request</Button>
        </div>
        {status && <div className="mt-2 text-sm">{status}</div>}
      </form>
    </div>
  </DialogContent>
</Dialog>
    )
}
