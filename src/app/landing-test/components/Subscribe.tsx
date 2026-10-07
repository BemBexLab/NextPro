"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import {
  showSubmissionError,
  showSubmissionLoading,
  showSubmissionSuccess,
  submitSubmission,
} from "@/lib/submission";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import SlideUp from "@/components/animations/slideUp";

const DialogContentWithChildren = DialogContent as React.ComponentType<
  React.PropsWithChildren<{ className?: string }>
>;
const DialogTitleWithChildren = DialogTitle as React.ComponentType<
  React.PropsWithChildren<{ className?: string }>
>;

const Subscribe = () => {
  return (
    <section className="relative isolate py-12 sm:py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 bg-gradient-to-b from-[#F5F7FD]/85 via-[#F5F7FD]/45 to-transparent sm:h-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-36 bg-gradient-to-t from-[#F0F5FF] via-[#F0F5FF]/65 to-transparent sm:h-44"
      />

      <div className="relative z-10">
        <SlideUp>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/60 bg-white/50 p-6 backdrop-blur-xl sm:rounded-3xl sm:p-8 lg:flex lg:items-center lg:justify-between lg:p-12 dark:border-gray-800 dark:bg-gray-900/50">
            {/* Left Content */}
            <div className="relative mb-8 max-w-2xl lg:mb-0 lg:pr-8">
              <Title
                size={"5xl"}
                className="text-2xl font-extrabold leading-tight text-[#001F3F] sm:text-3xl lg:text-4xl dark:text-white"
              >
                Ready to Transform <span className="text-red-500">Your Digital Presence?</span>
              </Title>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
                Schedule a 30-minute meeting with our experts to propel your
                online success.
              </p>

              {/* Optional decorative arrow, uncomment if needed */}
              {/* <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 lg:block">
                <Image
                  src={"/images/shapes/business-consultant-cta-arrow.webp"}
                  width={188}
                  height={39}
                  className="dark:brightness-100 dark:invert"
                  alt="arrow"
                />
              </div> */}
            </div>

            {/* Right Content (CTA) */}
            <div className="relative flex flex-shrink-0 items-center justify-center lg:justify-end">
              <Form />
            </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default Subscribe;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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

  // Reusable input styling for consistency and dark mode
  const inputClasses =
    "w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-black placeholder:text-gray-400 transition-colors focus:border-[#BF0B30] focus:outline-none focus:ring-2 focus:ring-[#BF0B30]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 sm:text-base sm:px-4 sm:py-3";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group flex min-w-[260px] max-w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-2 border-[#BF0B30] bg-[#BF0B30] px-6 py-3.5 font-bold text-white transition-all duration-500 hover:bg-transparent hover:text-[#BF0B30] dark:text-white sm:min-w-[280px] sm:px-8 sm:py-4">
          Schedule a Meeting
        </button>
      </DialogTrigger>

      <DialogContentWithChildren
        className="max-h-[90vh] w-[95vw] max-w-[95vw] overflow-y-auto p-0 sm:max-w-[600px] lg:max-w-[700px] dark:bg-gray-900 dark:border-gray-800"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-4 sm:px-6 sm:py-5 dark:border-gray-800 dark:bg-gray-900">
          <DialogTitleWithChildren>
            <h2 className="text-lg font-bold text-[#001F3F] sm:text-xl dark:text-white">
              Schedule a Meeting
            </h2>
          </DialogTitleWithChildren>
          <DialogClose className="rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>

        {/* Form */}
        <div className="px-4 pb-6 pt-4 sm:px-6 sm:pb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name *"
                  className={inputClasses}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email *"
                  className={inputClasses}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="website" className="sr-only">Website</label>
                <input
                  id="website"
                  type="text"
                  placeholder="Website (optional)"
                  className={inputClasses}
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="contactNumber" className="sr-only">Phone Number</label>
                <input
                  id="contactNumber"
                  type="tel"
                  placeholder="Phone Number (optional)"
                  className={inputClasses}
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="sr-only">Select a service</label>
              <select
                id="service"
                className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.5rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a Service *
                </option>
                <option value="Search Engine Optimization">Search Engine Optimization</option>
                <option value="Social Media Marketing">Social Media Marketing</option>
                <option value="Content Writing">Content Writing</option>
                <option value="Affiliate Marketing">Affiliate Marketing</option>
                <option value="Email Marketing">Email Marketing</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                placeholder="Message *"
                className={`${inputClasses} resize-none`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={3}
              />
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="schedule-meeting-consent"
                className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-[#BF0B30] focus:ring-[#BF0B30] dark:border-gray-600 dark:bg-gray-800"
                required
              />
              <label
                htmlFor="schedule-meeting-consent"
                className="text-sm leading-snug text-gray-600 dark:text-gray-300"
              >
                By using this form, you agree to the storage and handling of your data in accordance with WebFounders USA's privacy policies.
              </label>
            </div>

            <div className="mt-6 flex justify-end pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#BF0B30] text-white hover:bg-[#a00928] disabled:opacity-70 sm:w-auto sm:px-8"
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
      </DialogContentWithChildren>
    </Dialog>
  );
};
