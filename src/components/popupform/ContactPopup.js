"use client";

import React, { useEffect, useState } from "react";
import { Button } from '../ui/button';
import Image from "next/image";

export default function ContactPopup() {
  const [open, setOpen] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, website, service, message }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Submitted!");
        setName("");
        setEmail("");
        setWebsite("");
        setService("");
        setMessage("");
      } else {
        setStatus("Submission failed: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      setStatus("Submission failed: " + error.message);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div
        className="bg-white rounded-2xl w-full max-w-2xl mx-4 p-0 shadow-2xl flex overflow-hidden relative"
        style={{ height: 600 }}
      >
        {/* Left Side - Full Cover Image */}
        <div className="relative w-1/2 h-full hidden md:block">
          <Image
            src="/images/banner/POPPUP.png"
            alt="Promo"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 50vw, 420px"
            style={{ display: "block" }}
          />
        </div>
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 h-full p-8 flex flex-col justify-center">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-xl text-gray-700 hover:text-red-500"
            aria-label="Close"
          >
            ×
          </button>
          <h2 className="text-2xl font-bold mb-2">
            Wait! Looking For Exclusive Discounts?
          </h2>
          <p className="mb-5 text-sm text-gray-700">Get Your Perfect Branding Designed!</p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className="border-2 border-[#C0C0C0] rounded-lg px-[25px] py-[8px] outline-blue-200 bg-background w-full"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border-2 border-[#C0C0C0] rounded-lg px-[25px] py-[8px] w-full outline-blue-200 bg-background"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <input
                type="url"
                placeholder="Website"
                className="border-2 border-[#C0C0C0] rounded-lg px-[25px] py-[8px] w-full outline-blue-200 bg-background"
                value={website}
                onChange={e => setWebsite(e.target.value)}
                required
              />
              <div className="relative">
                <select
                  value={service}
                  onChange={e => setService(e.target.value)}
                  required
                  className="border-2 border-[#C0C0C0] rounded-lg px-[25px] h-12 w-full outline-blue-200 bg-background text-base appearance-none pr-10"
                >
                  <option value="" disabled>Select a Service</option>
                  <option value="Search Engine Optimization">Search Engine Optimization</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Content Writing">Content Writing</option>
                  <option value="Affiliate Marketing">Affiliate Marketing</option>
                  <option value="Email Marketing">Email Marketing</option>
                </select>
                {/* Custom dropdown arrow */}
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
              <textarea
                name="message"
                placeholder="Message"
                className="border-2 border-[#C0C0C0] outline-none w-full rounded-lg px-[25px] py-[18px] min-h-24 bg-background"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end w-full mt-4">
              <Button type="submit" className="w-full">Send request</Button>
            </div>
            <div className="mt-2 text-green-600 text-sm">{status}</div>
          </form>
        </div>
      </div>
    </div>
  );
}
