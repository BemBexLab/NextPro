import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const PriceCardTwo = ({ plan_name, price, services, old_price }) => {
  const planNameRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // Animation triggers only once
        }
      },
      { threshold: 0.5 }
    );
    if (planNameRef.current) observer.observe(planNameRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="group bg-white border-2 border-black rounded-[22px] flex flex-col justify-between p-8 min-h-[600px] w-[350px] transition mx-auto shadow-sm hover:shadow-md relative">
      {/* Plan Name */}
      <div>
        <div>
          {/* Plan Name Header - absolute, full width, bg, no spacing */}
          <div
            className="absolute top-0 left-0 right-0 bg-[#BF0B30] rounded-t-[22px] flex min-h-16 py-4 z-10"
            ref={planNameRef}
          >
            <span
              className={`text-lg font-bold text-white uppercase tracking-wider leading-tight mx-5 text-center w-full break-words ${
                animate ? "price-card-animate" : ""
              }`}
            >
              {plan_name}
            </span>
          </div>

          <div className="relative inline-block mb-5 mt-15">
            {/* "NEW" label above current price */}
            <span className="absolute -top-4 left-0 text-xs font-semibold text-green-600 tracking-wide">
              NOW
            </span>
            <span className="text-5xl font-extrabold text-black">${price}</span>
            {old_price && (
              <>
                {/* "OLD" label above old price */}
                <span className="absolute top-1 -right-15 text-lg text-black/90 font-bold line-through">
                  ${old_price}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Service List with custom scrollbar */}
        <ul
          className="
            text-base text-black space-y-3 mb-8 min-h-[210px] max-h-[210px] overflow-y-auto pr-1
            [&::-webkit-scrollbar]:w-1
            [&::-webkit-scrollbar-thumb]:bg-[#101129]
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-track]:bg-[#e5e7eb]
            scrollbar-thin
            scrollbar-thumb-[#101129]
            scrollbar-track-[#e5e7eb]
          "
        >
          {services.map((service, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 leading-tight text-gray-900"
            >
              <FaCircleCheck className="mt-1 w-4 h-4 text-primary flex-shrink-0 inline-block" />
              <span>
                {typeof service === "string" ? service : service.service}
              </span>
            </li>
          ))}
        </ul>
        <hr className="border-t border-gray-300 mb-4" />
      </div>
      {/* Footer Area */}
      <div className="flex flex-col relative pb-12">
        <div className="flex items-end justify-between mb-3 w-full">
          <div>
            <div className="text-[14px] font-bold text-primary leading-none mb-1">
              Speak with us
            </div>
            <a
              href="tel:+14702052274"
              className="text-[16px] font-medium text-black leading-none hover:text-primary transition"
            >
              +1 (470) 205-2274
            </a>
          </div>

          <Link href="/contact-us">
            <span className="text-[18px] font-extrabold text-primary leading-none hover:underline cursor-pointer">
              Chat Now
            </span>
          </Link>
        </div>
        {/* Overlapping Button */}
        <div className="w-[90%] left-1/2 -translate-x-1/2 absolute -bottom-14" style={{ zIndex: 10 }}>
          <OrderDialog />
        </div>
      </div>
    </div>
  );
};

export default PriceCardTwo;

// ---- OrderDialog Component ----

const OrderDialog = () => {
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
      <DialogTrigger asChild>
        <button
          className="
            bg-[#BF0B30] text-white rounded-[7px] px-4 py-3 font-bold text-lg
            transition hover:bg-[#BF0B30]/90
            shadow-md flex justify-center items-center w-full
            group-hover:animate-shake-pause
          "
        >
          Place Your Order
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
            <h6 className='text-lg sm:text-2xl font-bold text-muted-foreground'>Place Your Order</h6>
          </DialogTitle>
          <DialogClose />
        </div>
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
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Contact Number (optional)"
                  className="bg-white border-2 border-gray-300 font-medium placeholder:text-gray-400 text-black w-full rounded px-2 py-2 h-10 sm:px-3 sm:py-2 sm:h-12 text-sm sm:text-base"
                  value={contactNumber}
                  onChange={e => setContactNumber(e.target.value)}
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
  );
};
