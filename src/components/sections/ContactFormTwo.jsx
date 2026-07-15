"use client";

import React, { useState } from 'react'
import { Button } from '../ui/button'
import Title from '../ui/title'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Swal from 'sweetalert2'

const ContactFormTwo = () => {
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

        Swal.fire({
            title: 'Sending your request...',
            text: 'Please wait while we deliver your message.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
            customClass: {
                popup: 'rounded-3xl',
                title: 'text-[#002768]',
                confirmButton: 'rounded-full px-6 py-3',
            },
        });

        try {
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

            if (!res.ok) {
                throw new Error('Request failed');
            }

            Swal.close();
            await Swal.fire({
                icon: 'success',
                title: 'Message sent!',
                text: 'Thanks for reaching out. We will get back to you shortly.',
                confirmButtonText: 'Great',
                confirmButtonColor: '#002768',
                background: '#ffffff',
                color: '#1f2937',
                customClass: {
                    popup: 'rounded-3xl',
                    confirmButton: 'rounded-full px-6 py-3',
                },
            });

            setName('');
            setEmail('');
            setWebsite('');
            setContactNumber('');
            setService('');
            setMessage('');
        } catch {
            Swal.close();
            await Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                text: 'Your message could not be sent right now. Please try again.',
                confirmButtonText: 'Try again',
                confirmButtonColor: '#dc2626',
                background: '#ffffff',
                color: '#1f2937',
                customClass: {
                    popup: 'rounded-3xl',
                    confirmButton: 'rounded-full px-6 py-3',
                },
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className='container lg:mt-15 mt-9'>
            <div className={cn(`max-w-[1320px] mx-auto lg:pt-20 pt-12 lg:pb-12.5 pb-10 rounded-[30px] bg-background drop-shadow-4xl bg-gray-200 -mb-28 lg:px-12.5 px-6 relative z-[1]`)}>
                <div className='flex lg:flex-row flex-col justify-between items-center gap-12.5 '>
                    <div className='lg:w-[40%] w-full lg:pb-11'>
                        <div className={`w-[75px] h-[75px] rounded-lg flex justify-center items-center drop-shadow-3xl bg-white mb-3`}>
                            <Image src={'/images/shapes/Frame 209.webp'} width={45} height={50} alt='map arrow' />
                        </div>
                        <Title size={"5xl"} className={`md:leading-[140%]`}>Request a free Audit of your website</Title>
                        <p className={`font-semibold mt-4 max-w-[449px]`}>Find quick answers to common queries in our FAQ section, ensuring a clear understanding of your digital journey with us.</p>
                    </div>
                    <div className='lg:w-[54%] w-full'>
                        <form onSubmit={handleSubmit}>
                            <div className='flex sm:flex-row flex-col items-center gap-4 mb-3'>
                                <div className='w-full'>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="border-2 border-[#C0C0C0] rounded-lg px-[25px] py-[18px] max-h-12.5 outline-blue-200 bg-background w-full"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='w-full'>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="border-2 border-[#C0C0C0] rounded-lg px-[25px] py-[18px] max-h-12.5 w-full outline-blue-200 bg-background"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='flex sm:flex-row flex-col items-center gap-4 mb-3'>
                                <div className='w-full'>
                                    <input
                                        type="url"
                                        placeholder="Website (optional)"
                                        className="border-2 border-[#C0C0C0] rounded-lg px-[25px] py-[18px] max-h-12.5 w-full outline-blue-200 bg-background"
                                        value={website}
                                        onChange={e => setWebsite(e.target.value)}
                                        // Not required anymore
                                    />
                                </div>
                                <div className='w-full'>
                                    <input
                                        type="text"
                                        placeholder="Phone Number (optional)"
                                        className="border-2 border-[#C0C0C0] rounded-lg px-[25px] py-[18px] max-h-12.5 w-full outline-blue-200 bg-background"
                                        value={contactNumber}
                                        onChange={e => setContactNumber(e.target.value)}
                                        // Not required
                                    />
                                </div>
                            </div>
                            <div className="w-full relative mb-3">
                                <select
                                    value={service}
                                    onChange={e => setService(e.target.value)}
                                    required
                                    className="border-2 border-[#C0C0C0] rounded-lg px-[25px] h-12 w-full outline-blue-200 bg-background text-base appearance-none pr-10"
                                >
                                    <option value="" disabled>Select a Service</option>
                                    <option value="Search Engine Optimization">Search Engine Optimization</option>
                                    <option value="Social Media Marketing">Social Media Marketing</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Content Writing">Content Writing</option>
                                    <option value="Pay Per Click">Pay Per Click</option>
                                    <option value="Conversion Optimization Services">Conversion Optimization Services</option>
                                    <option value="eCommerce Website Design & Development">eCommerce Website Design & Development</option>
                                    <option value="Graphics Design Services">Graphic Design Services</option>
                                    <option value="Brand Strategy Services">Brand Strategy Services</option>
                                    <option value="Website Maintainance Services">Website Maintainance Services</option>
                                    <option value="eCommerce Marketing Services">eCommerce Marketing Services</option>
                                    <option value="Video Animation Services">Video Animation Services</option>
                                    <option value="Affiliate Marketing">Affiliate Marketing</option>
                                    <option value="Email Marketing">Email Marketing</option>
                                    <option value="Custom Website Design Services">Custom Website Design Services</option>
                                    <option value="Website Development Services">Website Development Services</option>
                                </select>
                                <svg
                                    className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div className='mb-3'>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    className="border-2 border-[#C0C0C0] outline-none w-full rounded-lg px-[25px] py-[18px] min-h-48 bg-background "
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='flex justify-end w-full'>
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send request'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactFormTwo
