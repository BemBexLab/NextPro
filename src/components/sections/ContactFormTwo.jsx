"use client";

import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  showSubmissionError,
  showSubmissionLoading,
  showSubmissionSuccess,
  submitSubmission,
} from "@/lib/submission";

const inputClassName =
  "h-11 min-w-0 w-full rounded-lg border border-[#d7e0eb] bg-white px-4 text-sm font-semibold text-[#102f5b] shadow-[0_2px_8px_rgba(13,45,89,0.03)] outline-none transition placeholder:text-[#8e9caf] focus:border-[#12376f] focus:ring-2 focus:ring-[#12376f]/10 sm:h-12 sm:px-5 sm:text-base";

const ContactFormTwo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!service) {
      return;
    }

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
    <section className="relative z-20 mt-9 w-full px-4 pt-2 sm:px-6 lg:mt-15 lg:px-8 lg:-mb-48">
      <div className="relative z-30 mx-auto mb-0 w-full max-w-[1800px] bg-transparent">
        <div className="grid min-w-0 grid-cols-1 items-center gap-10 rounded-[20px] border border-[#e3ebf4] bg-gradient-to-br from-white via-white to-[#f6faff] px-6 py-8 shadow-[0_18px_42px_rgba(13,45,89,0.1)] sm:gap-12 sm:px-10 sm:py-10 lg:grid-cols-[minmax(300px,0.82fr)_minmax(0,1.18fr)] lg:gap-0 lg:px-10 lg:py-10 xl:grid-cols-[minmax(350px,0.85fr)_minmax(0,1.15fr)] xl:px-12 xl:py-12">
          <div className="min-w-0 border-b border-[#e7edf5] pb-7 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10 xl:pr-12">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#eef4fc] text-[#12376f] shadow-[0_10px_22px_rgba(18,55,111,0.1)] sm:h-24 sm:w-24">
              <MdOutlineMail className="h-11 w-11 sm:h-14 sm:w-14" />
            </div>

            <h2 className="max-w-[620px] break-words text-[42px] font-bold leading-[1.03] tracking-[-0.045em] sm:text-[52px] lg:text-[58px]">
              <span className="text-[#102f5b]">Request a free Audit</span>
              <span className="block text-[#e5002d]">of your website</span>
            </h2>
            <p className="mt-6 max-w-[620px] text-base font-semibold leading-relaxed text-[#52647e] sm:text-lg">
              Find quick answers to common queries in our FAQ section, ensuring
              a clear understanding of your digital journey with us.
            </p>
          </div>

          <div className="min-w-0 lg:pl-10 xl:pl-12">
            <form className="min-w-0" onSubmit={handleSubmit}>
              <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <div className="min-w-0">
                  <label htmlFor="contact-form-name" className="sr-only">
                    Name
                  </label>
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

                <div className="min-w-0">
                  <label htmlFor="contact-form-email" className="sr-only">
                    Email
                  </label>
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

                <div className="min-w-0">
                  <label htmlFor="contact-form-website" className="sr-only">
                    Website (optional)
                  </label>
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

                <div className="min-w-0">
                  <label htmlFor="contact-form-phone" className="sr-only">
                    Phone Number (optional)
                  </label>
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
                <Select
                  value={service}
                  onValueChange={setService}
                >
                  <SelectTrigger
                    id="contact-form-service"
                    aria-label="Select a service"
                    aria-required="true"
                    className={`${inputClassName} data-[state=open]:border-[#12376f] data-[state=open]:ring-2 data-[state=open]:ring-[#12376f]/10 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-[#12376f]`}
                  >
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent
                    position="item-aligned"
                    className="z-[60] max-h-80 rounded-xl border-[#d7e0eb] bg-white p-1 text-[#102f5b] shadow-[0_16px_36px_rgba(13,45,89,0.18)]"
                  >
                    <SelectItem value="Search Engine Optimization" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      Search Engine Optimization
                    </SelectItem>
                    <SelectItem value="Social Media Marketing" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      Social Media Marketing
                    </SelectItem>
                    <SelectItem value="Digital Marketing" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      Digital Marketing
                    </SelectItem>
                    <SelectItem value="Content Writing" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      Content Writing
                    </SelectItem>
                    <SelectItem value="Pay Per Click" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      Pay Per Click
                    </SelectItem>
                    <SelectItem value="Conversion Optimization Services" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      Conversion Optimization Services
                    </SelectItem>
                    <SelectItem value="eCommerce Website Design & Development" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      eCommerce Website Design &amp; Development
                    </SelectItem>
                    <SelectItem value="Graphics Design Services" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      Graphic Design Services
                    </SelectItem>
                    <SelectItem value="Brand Strategy Services" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      Brand Strategy Services
                    </SelectItem>
                    <SelectItem value="Website Maintainance Services" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      Website Maintainance Services
                    </SelectItem>
                    <SelectItem value="eCommerce Marketing Services" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      eCommerce Marketing Services
                    </SelectItem>
                    <SelectItem value="Video Animation Services" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      Video Animation Services
                    </SelectItem>
                    <SelectItem value="Affiliate Marketing" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      Affiliate Marketing
                    </SelectItem>
                    <SelectItem value="Email Marketing" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      Email Marketing
                    </SelectItem>
                    <SelectItem value="Custom Website Design Services" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      Custom Website Design Services
                    </SelectItem>
                    <SelectItem value="Website Development Services" className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f]">
                      Website Development Services
                    </SelectItem>
                </SelectContent>
              </Select>
            </div>

              <div className="mt-3 min-w-0 sm:mt-4">
                <label htmlFor="contact-form-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-form-message"
                  name="message"
                  placeholder="Message"
                  className="min-h-28 w-full min-w-0 resize-y rounded-lg border border-[#d7e0eb] bg-white px-4 py-4 text-sm font-semibold text-[#102f5b] shadow-[0_2px_8px_rgba(13,45,89,0.03)] outline-none transition placeholder:text-[#8e9caf] focus:border-[#12376f] focus:ring-2 focus:ring-[#12376f]/10 sm:min-h-36 sm:px-5 sm:text-base"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                />
              </div>

              <div className="mt-3 flex w-full justify-stretch sm:mt-4 sm:justify-end">
                <Button
                  type="submit"
                  className="h-12 w-full max-w-none rounded-lg border-0 bg-gradient-to-r from-[#ef1640] to-[#ce002b] px-7 text-sm font-extrabold text-white shadow-[0_7px_14px_rgba(229,0,45,0.18)] hover:scale-100 hover:border-[#b90026] hover:bg-[#ce002b] hover:from-[#d90835] hover:to-[#b90026] hover:text-white hover:shadow-[0_9px_18px_rgba(185,0,38,0.22)] focus:ring-2 focus:ring-[#e5002d]/20 sm:w-auto sm:px-9 sm:text-base"
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

export default ContactFormTwo;
