"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import {
  FaCommentDots,
  FaEnvelope,
  FaGlobe,
  FaListAlt,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import {
  showSubmissionError,
  showSubmissionLoading,
  showSubmissionSuccess,
  submitSubmission,
} from "@/lib/submission";

const inputClassName =
  "h-12 min-w-0 w-full rounded-lg border-2 border-[#C0C0C0] bg-white py-2 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500/20 sm:h-14 sm:pl-12 sm:pr-5 sm:text-base";

const RequestAFreeAudit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
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

      setName("");
      setEmail("");
      setWebsite("");
      setContactNumber("");
      setService("");
      setMessage("");
    } catch {
      await showSubmissionError();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="request-audit" className="relative isolate w-full scroll-mt-24 bg-gradient-to-b from-[#F0F5FF] via-[#F6F8FE] to-[#FAFBFE] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Background Image - Changed from 100% 100% to bg-cover to prevent mobile distortion */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 dark:opacity-10"
        style={{
          backgroundImage: "url('/Halloween%20Assets%20Task/image%2033.png')",
        }}
      />
      
      <div className="relative z-10 mx-auto w-full max-w-7xl rounded-2xl border border-white/40 bg-white/60 px-4 py-8 backdrop-blur-xl shadow-xl sm:rounded-3xl sm:px-8 sm:py-12 lg:px-12 lg:py-16 dark:border-gray-800 dark:bg-gray-900/60">
        {/* Simplified, robust grid layout */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center lg:pb-6 xl:pb-11">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border-4 border-red-600 bg-white shadow-lg sm:h-16 sm:w-16 lg:h-[75px] lg:w-[75px] dark:bg-gray-800">
              <LuMail size={44} className="text-red-600" />
            </div>

            <Title
              size="5xl"
              className="text-3xl font-extrabold leading-tight text-[#001F3F] sm:text-4xl lg:text-5xl dark:text-white"
            >
              Request a free Audit of <span className="text-red-500">your website</span>
            </Title>
            <p className="mt-4 max-w-[449px] text-sm font-semibold leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
              Find quick answers to common queries in our FAQ section, ensuring
              a clear understanding of your digital journey with us.
            </p>
          </div>

          {/* Right Form */}
          <div className="min-w-0">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Name */}
                <div className="relative min-w-0">
                  <label htmlFor="contact-form-name" className="sr-only">Name</label>
                  <FaUser aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 sm:left-4" />
                  <input
                    id="contact-form-name"
                    type="text"
                    placeholder="Name"
                    autoComplete="name"
                    className={inputClassName}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative min-w-0">
                  <label htmlFor="contact-form-email" className="sr-only">Email</label>
                  <FaEnvelope aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 sm:left-4" />
                  <input
                    id="contact-form-email"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    className={inputClassName}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Website */}
                <div className="relative min-w-0">
                  <label htmlFor="contact-form-website" className="sr-only">Website (optional)</label>
                  <FaGlobe aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 sm:left-4" />
                  <input
                    id="contact-form-website"
                    type="url"
                    placeholder="Website (optional)"
                    autoComplete="url"
                    className={inputClassName}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                {/* Phone */}
                <div className="relative min-w-0">
                  <label htmlFor="contact-form-phone" className="sr-only">Phone Number (optional)</label>
                  <FaPhone aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 sm:left-4" />
                  <input
                    id="contact-form-phone"
                    type="tel"
                    placeholder="Phone Number (optional)"
                    autoComplete="tel"
                    className={inputClassName}
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
              </div>

              {/* Service Select */}
              <div className="relative min-w-0">
                <label htmlFor="contact-form-service" className="sr-only">Select a service</label>
                <FaListAlt aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 sm:left-4" />
                <select
                  id="contact-form-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  className={`${inputClassName} appearance-none truncate pr-10`}
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
                  className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 sm:right-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Message Textarea */}
              <div className="relative min-w-0">
                <label htmlFor="contact-form-message" className="sr-only">Message</label>
                <textarea
                  id="contact-form-message"
                  name="message"
                  placeholder="Message"
                  className="min-h-32 w-full min-w-0 resize-y rounded-lg border-2 border-[#C0C0C0] bg-white py-3 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500/20 sm:min-h-40 sm:pl-12 sm:pr-5 sm:text-base"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <FaCommentDots aria-hidden="true" className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-gray-400 sm:left-4 sm:top-4" />
              </div>

              {/* Submit Button */}
              <div className="mt-2 flex w-full justify-stretch sm:justify-end">
                <Button
                  type="submit"
                  className="w-full min-h-[48px] bg-[#BF0B30] text-white transition-all hover:bg-[#a00928] disabled:opacity-70 sm:w-auto sm:min-h-[56px] sm:px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Request"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestAFreeAudit;
