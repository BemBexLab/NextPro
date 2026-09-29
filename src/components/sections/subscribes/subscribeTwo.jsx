'use client'
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { MdOutlineCalendarMonth } from "react-icons/md"
import {
    showSubmissionError,
    showSubmissionLoading,
    showSubmissionSuccess,
    submitSubmission,
} from '@/lib/submission'
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
        <section className=''>
            <SlideUp>
                <div className='mx-auto w-[95%] max-w-[1650px]'>
                    <div className='relative flex flex-col justify-between gap-10 overflow-hidden rounded-[26px] border border-[#e1ebf7] bg-gradient-to-r from-[#eef6ff] via-[#f5faff] to-[#edf5fd] px-8 py-10 shadow-[0_14px_38px_rgba(18,55,111,0.08)] sm:px-12 sm:py-11 lg:flex-row lg:items-center lg:gap-16 lg:px-16 lg:py-12'>
                        <span aria-hidden='true' className='pointer-events-none absolute -right-10 -top-16 h-36 w-36 rounded-full border border-[#d8e7f8] bg-white/30' />
                        <div className='relative min-w-0 max-w-[760px]'>
                            <h2 className='max-w-[900px] text-[42px] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[54px] lg:text-[60px]'>
                                <span className='block text-[#102f5b]'>Ready to Transform Your</span>
                                <span className='block text-[#e5002d]'>Digital Presence?</span>
                            </h2>
                            <p className='mt-4 max-w-[760px] text-base font-medium leading-relaxed text-[#435979] sm:text-lg'>
                                Schedule a 30 minutes Meeting with Our Experts to Propel Your Online Success.
                            </p>
                        </div>

                        <div className='relative flex shrink-0 items-center justify-end gap-7 lg:gap-10'>
                            <div className='flex h-20 w-20 shrink-0 items-center justify-center border-r border-[#cbd9ea] pr-6 text-[#102f5b] lg:h-24 lg:w-24'>
                                <MdOutlineCalendarMonth className='h-16 w-16 lg:h-20 lg:w-20' />
                            </div>
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
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        showSubmissionLoading();

        try {
            await submitSubmission({
                name,
                email,
                website,
                contactNumber,
                service,
                message,
            });
            await showSubmissionSuccess();

            setName('');
            setEmail('');
            setWebsite('');
            setContactNumber('');
            setService('');
            setMessage('');
        } catch {
            await showSubmissionError();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
       <Dialog>
  <DialogTrigger asChild>
    <button type="button" className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ef1640] to-[#ce002b] px-7 text-sm font-extrabold text-white shadow-[0_7px_14px_rgba(229,0,45,0.2)] transition hover:from-[#d90835] hover:to-[#b90026] hover:shadow-[0_10px_20px_rgba(185,0,38,0.2)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#e5002d]/20 sm:h-14 sm:px-8 sm:text-base">
      Schedule a Meeting
      <FaArrowRightLong className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
    </button>
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
          <label htmlFor="schedule-meeting-service" className="sr-only">
            Select a service
          </label>
          <select
            id="schedule-meeting-service"
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
          <input type='checkbox' id='schedule-meeting-consent' className='w-4 h-4 mt-1' required />
          <label htmlFor="schedule-meeting-consent" className='pl-3 w-[94%] font-medium text-sm sm:text-base'>
            By using this form you agree with the storage and handling of your data policies of WebFounders USA.
          </label>
        </div>
        <div className='mt-6 flex justify-end pb-4'>
          <Button type="submit" disabled={isSubmitting} className="text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
            {isSubmitting ? 'Sending...' : 'Send request'}
          </Button>
        </div>
      </form>
    </div>
  </DialogContent>
</Dialog>
    )
}
