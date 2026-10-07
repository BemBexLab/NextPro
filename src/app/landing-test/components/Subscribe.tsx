"use client";
import Image from "next/image";
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
    <section className="lg:pb-10">
      <SlideUp>
        <div className="max-w-[1150px] mx-auto px-[15px] relative overflow-x-hidden">
          <div className="flex w-full flex-col justify-between rounded-[30px] border border-white/60 bg-white/50 px-7.5 pt-7.5 pb-7.5  backdrop-blur-xl lg:flex-row lg:items-center lg:px-12.5 lg:pt-14 lg:pb-16">
            <div className="pb-6 max-w-[750px] w-full relative">
              <Title size={"5xl"} className={"max-w-[707px]"}>
                Ready to Transform Your Digital Presence?
              </Title>
              <p>
                Schedule a 30 minutes Meeting with Our Experts to Propel Your
                Online Success.
              </p>
              {/* <div className="absolute -right-20 top-1/2 -translate-y-1/2 lg:block hidden">
                <Image
                  src={"/images/shapes/business-consultant-cta-arrow.webp"}
                  width={188}
                  height={39}
                  className="dark:brightness-100 dark:invert"
                  alt="arrow"
                />
              </div> */}
            </div>
            <div className="relative flex items-center justify-between">
              <Form />
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default Subscribe;

const Form = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
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
    <Dialog>
      <DialogTrigger>
        <span className="group min-w-[280px] whitespace-nowrap rounded-full border-2 border-[#BF0B30] bg-[#BF0B30] px-[38px] py-[18px] font-bold text-secondary-foreground transition-all duration-500 hover:bg-transparent hover:text-[#BF0B30] dark:text-muted-foreground flex max-h-12.5 items-center justify-center gap-2.5">
          Schedule a Meeting
        </span>
      </DialogTrigger>
      <DialogContentWithChildren
        className="
      max-w-[95vw] sm:max-w-[700px]
      w-[95vw] sm:w-auto
      p-0
    "
      >
        {/* Header */}
        <div className="flex items-center justify-between py-4 sm:py-6 border-b border-b-[#dee2e6] px-3 sm:px-4">
          <DialogTitleWithChildren>
            <h6 className="text-lg sm:text-2xl font-bold text-muted-foreground">
              Schedule a Meeting
            </h6>
          </DialogTitleWithChildren>
          <DialogClose />
        </div>
        {/* Form */}
        <div className="px-3 sm:px-4 pb-4">
          <form className="pt-0" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-5">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white border-2 border-gray-300 font-medium placeholder:text-gray-400 text-black w-full rounded px-2 py-2 h-10 sm:px-3 sm:py-2 sm:h-12 text-sm sm:text-base"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white border-2 border-gray-300 font-medium placeholder:text-gray-400 text-black w-full rounded px-2 py-2 h-10 sm:px-3 sm:py-2 sm:h-12 text-sm sm:text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setWebsite(e.target.value)}
                  // not required
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Phone Number (optional)"
                  className="bg-white border-2 border-gray-300 font-medium placeholder:text-gray-400 text-black w-full rounded px-2 py-2 h-10 sm:px-3 sm:py-2 sm:h-12 text-sm sm:text-base"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
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
                onChange={(e) => setService(e.target.value)}
                required
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
                <option value="Content Writing">Content Writing</option>
                <option value="Affiliate Marketing">Affiliate Marketing</option>
                <option value="Email Marketing">Email Marketing</option>
              </select>
            </div>
            <div className="mt-3 sm:mt-4">
              <textarea
                placeholder="Message"
                className="bg-white border-2 border-gray-300 font-medium placeholder:text-gray-400 text-black w-full rounded px-2 py-2 text-sm sm:px-3 sm:py-2 sm:text-base"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={3}
              />
            </div>
            <div className="mt-4 flex items-start">
              <input
                type="checkbox"
                id="schedule-meeting-consent"
                className="w-4 h-4 mt-1"
                required
              />
              <label
                htmlFor="schedule-meeting-consent"
                className="pl-3 w-[94%] font-medium text-sm sm:text-base"
              >
                By using this form you agree with the storage and handling of
                your data policies of WebFounders USA.
              </label>
            </div>
            <div className="mt-6 flex justify-end pb-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
              >
                {isSubmitting ? "Sending..." : "Send request"}
              </Button>
            </div>
          </form>
        </div>
      </DialogContentWithChildren>
    </Dialog>
  );
};
