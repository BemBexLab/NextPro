"use client";

import { useState } from "react";
import Image from "next/image";
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
  "h-12 min-w-0 w-full rounded-lg border-2 border-[#C0C0C0] bg-background py-2 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 sm:h-14 sm:pl-12 sm:pr-5 sm:text-base";

const RequestAFreeAudit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
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
    <section className="relative isolate w-full bg-[#FAFBFE] px-4 sm:px-6 lg:py-15 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/Halloween%20Assets%20Task/image%2033.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 mx-auto mb-0 w-full max-w-[1320px] rounded-[20px] border border-white/25 bg-white/15 px-4 py-8 backdrop-blur-xl drop-shadow-4xl sm:rounded-[30px] sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12 xl:px-12.5 xl:pb-12.5 xl:pt-20">
        <div className="grid min-w-0 grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] lg:gap-12 xl:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)] xl:gap-14">
          <div className="min-w-0 lg:pb-6 xl:pb-11">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-white border border-red-600 border-4 drop-shadow-3xl sm:h-16 sm:w-16 lg:h-[75px] lg:w-[75px]">
              <LuMail size={44} className="text-red-600" />
            </div>

            <Title
              size="5xl"
              className="break-words pt-2 text-balance md:leading-[140%]"
            >
              Request a free Audit of your website
            </Title>
            <p className="mt-4 max-w-[449px] text-sm font-semibold leading-relaxed text-muted-foreground sm:text-base">
              Find quick answers to common queries in our FAQ section, ensuring
              a clear understanding of your digital journey with us.
            </p>
          </div>

          <div className="min-w-0">
            <form className="min-w-0" onSubmit={handleSubmit}>
              <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <div className="relative min-w-0">
                  <label htmlFor="contact-form-name" className="sr-only">
                    Name
                  </label>
                  <FaUser aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id="contact-form-name"
                    type="text"
                    placeholder="Name"
                    autoComplete="name"
                    className={inputClassName}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>

                <div className="relative min-w-0">
                  <label htmlFor="contact-form-email" className="sr-only">
                    Email
                  </label>
                  <FaEnvelope aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id="contact-form-email"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    className={inputClassName}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>

                <div className="relative min-w-0">
                  <label htmlFor="contact-form-website" className="sr-only">
                    Website (optional)
                  </label>
                  <FaGlobe aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id="contact-form-website"
                    type="url"
                    placeholder="Website (optional)"
                    autoComplete="url"
                    className={inputClassName}
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                  />
                </div>

                <div className="relative min-w-0">
                  <label htmlFor="contact-form-phone" className="sr-only">
                    Phone Number (optional)
                  </label>
                  <FaPhone aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id="contact-form-phone"
                    type="tel"
                    placeholder="Phone Number (optional)"
                    autoComplete="tel"
                    className={inputClassName}
                    value={contactNumber}
                    onChange={(event) => setContactNumber(event.target.value)}
                  />
                </div>
              </div>

              <div className="relative mt-3 min-w-0 sm:mt-4">
                <label htmlFor="contact-form-service" className="sr-only">
                  Select a service
                </label>
                <select
                  id="contact-form-service"
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  required
                  className={`${inputClassName} appearance-none truncate pr-10`}
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  <option value="Search Engine Optimization">
                    Search Engine Optimization
                  </option>
                  <option value="Social Media Marketing">
                    Social Media Marketing
                  </option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Content Writing">Content Writing</option>
                  <option value="Pay Per Click">Pay Per Click</option>
                  <option value="Conversion Optimization Services">
                    Conversion Optimization Services
                  </option>
                  <option value="eCommerce Website Design & Development">
                    eCommerce Website Design & Development
                  </option>
                  <option value="Graphics Design Services">
                    Graphic Design Services
                  </option>
                  <option value="Brand Strategy Services">
                    Brand Strategy Services
                  </option>
                  <option value="Website Maintainance Services">
                    Website Maintainance Services
                  </option>
                  <option value="eCommerce Marketing Services">
                    eCommerce Marketing Services
                  </option>
                  <option value="Video Animation Services">
                    Video Animation Services
                  </option>
                  <option value="Affiliate Marketing">
                    Affiliate Marketing
                  </option>
                  <option value="Email Marketing">Email Marketing</option>
                  <option value="Custom Website Design Services">
                    Custom Website Design Services
                  </option>
                  <option value="Website Development Services">
                    Website Development Services
                  </option>
                </select>
                <FaListAlt aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <svg
                  className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <div className="relative mt-3 min-w-0 sm:mt-4">
                <label htmlFor="contact-form-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-form-message"
                  name="message"
                  placeholder="Message"
                  className="min-h-36 w-full min-w-0 resize-y rounded-lg border-2 border-[#C0C0C0] bg-background py-4 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 sm:min-h-48 sm:pl-12 sm:pr-5 sm:text-base"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                />
                <FaCommentDots aria-hidden="true" className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-gray-400" />
              </div>

              <div className="mt-3 flex w-full justify-stretch sm:mt-4 sm:justify-end">
                <Button
                  type="submit"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send request"}
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
