"use client";

import Image from "next/image";
import { Clock3, Crown, Tag } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaCommentDots,
  FaEnvelope,
  FaGlobe,
  FaListAlt,
  FaPhone,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import {
  showSubmissionError,
  showSubmissionLoading,
  showSubmissionSuccess,
  submitSubmission,
} from "@/lib/submission";

const fieldClassName =
  "h-[40px] w-full min-w-0 rounded-md border border-slate-300 bg-white px-3 pl-9 text-[11px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#BF0B30] focus:ring-2 focus:ring-[#BF0B30]/15 sm:text-xs";

const iconClassName =
  "pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400";

const services = [
  "Branding & Logo Design",
  "Website Design & Development",
  "Search Engine Optimization",
  "Digital Marketing",
];

const Popup = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (pathname?.replace(/\/+$/, "") === "/landing-test") {
      setIsOpen(true);
    }
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    showSubmissionLoading();

    try {
      await submitSubmission({
        name,
        email,
        website,
        contactNumber: phone,
        service,
        message,
      });
      await showSubmissionSuccess();
      setName("");
      setEmail("");
      setWebsite("");
      setPhone("");
      setService("");
      setMessage("");
      setIsOpen(false);
    } catch {
      await showSubmissionError();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#07111f]/80 p-3 backdrop-blur-[2px] sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="halloween-popup-title"
        className="relative grid w-full max-w-[1360px] overflow-hidden rounded-2xl bg-white shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:min-h-[320px] lg:grid-cols-[60%_40%]"
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close offer"
          className="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 shadow-sm transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30]"
        >
          <FaTimes className="h-3 w-3" aria-hidden="true" />
        </button>

        <div className="relative isolate flex min-h-[460px] flex-col overflow-hidden px-6 py-6 text-white sm:min-h-[500px] sm:px-9 sm:py-7 lg:min-h-[500px] lg:px-10 lg:py-6">
          <Image
            src="/Halloween Assets Task/image (9).png"
            alt=""
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 550px"
            className="absolute inset-0 z-0 h-full w-full object-fill"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              boxShadow:
                "inset 0 0 35px 8px rgba(0, 0, 0, 0.62), inset 0 -22px 28px -6px rgba(0, 0, 0, 0.8)",
            }}
          />

          <div className="relative z-10 flex h-12 w-[170px] items-center">
            <Image
              src="/Halloween Assets Task/image (10).png"
              alt="Web Founders USA"
              width={390}
              height={105}
              className="h-auto max-h-10 w-full object-contain object-left"
              priority
            />
          </div>

          <div className="relative z-10 mt-4 max-w-[430px] lg:mt-2">
            <p className="text-xs font-semibold uppercase tracking-[0.27em] text-white/90">
              Limited - time Halloween offer
            </p>
            <span className="mt-2 block h-[2px] w-8 bg-[#BF0B30]" />
            <h2
              id="halloween-popup-title"
              className="mt-3 text-3xl font-extrabold leading-none tracking-wide sm:max-w-md sm:text-4xl lg:mt-3"
            >
              Unlock exclusive
              <br />
              discounts for your {""}
              <span className="text-[#f32145]">next brand move.</span>
            </h2>
            <p
              className="mt-2 text-[12px] font-semibold text-white sm:text-sm"
              style={{
                textShadow:
                  "0 2px 2px rgba(0,0,0,1), 0 3px 8px rgba(0,0,0,0.95), 0 0 14px rgba(0,0,0,0.8)",
              }}
            >
              Get Your Perfect Branding Designed!
            </p>
          </div>

          <div className="absolute right-5 top-[22%] z-10 h-[112px] w-[96px] sm:right-8 sm:h-[131px] sm:w-[112px] lg:right-7 lg:top-[21%] lg:h-[146px] lg:w-[125px]">
            <Image
              src="/Halloween Assets Task/blood-splash.webp"
              alt=""
              fill
              sizes="(max-width: 639px) 96px, (max-width: 1023px) 112px, 125px"
              className="object-contain"
            />
            <div className="absolute inset-x-0 top-[22%] z-10 flex flex-col items-center text-center uppercase leading-none text-white drop-shadow-[0_2px_4px_rgba(80,0,0,0.7)]">
              <span className="text-[8px] font-semibold tracking-wide sm:text-[9px] lg:text-[10px]">Up to</span>
              <span className="mt-0.5 text-[27px] font-bold sm:text-[30px] lg:text-[34px]">50%</span>
              <span className="mt-0.5 text-[11px] font-bold sm:text-xs lg:text-sm">Off</span>
            </div>
          </div>

          <div className="relative z-10 mt-auto grid max-w-[550px] grid-cols-3 gap-3 pt-6 text-xs font-semibold leading-tight sm:gap-5 sm:text-[13px] lg:pt-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d50832] text-white shadow-[0_4px_10px_rgba(0,0,0,0.75)] sm:h-12 sm:w-12">
                <Tag className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">Exclusive Pricing</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d50832] text-white shadow-[0_4px_10px_rgba(0,0,0,0.75)] sm:h-12 sm:w-12">
                <Crown className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">Professional Design Experts</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d50832] text-white shadow-[0_4px_10px_rgba(0,0,0,0.75)] sm:h-12 sm:w-12">
                <Clock3 className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">Limited-Time Offer</span>
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-col justify-center px-5 pb-7 pt-14 sm:px-8 sm:pb-8 lg:px-9 lg:py-8">
          <p className="text-base font-extrabold uppercase tracking-[0.3em] text-[#ed173e]">
            Schedule a strategy call
          </p>
          <h3 className="mt-2 text-[24px] font-semibold leading-[1.08] tracking-tight text-[#092650] sm:text-[29px] lg:text-[27px]">
            Wait! Looking for {""}
            <span className="text-[#ed173e]">exclusive discounts?</span>
          </h3>
          <p className="mt-2 text-xs text-slate-500 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] sm:text-sm">
            Get Your Perfect Branding Designed!
          </p>

          <form onSubmit={handleSubmit} className="mt-4 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <label className="relative block min-w-0">
                <span className="sr-only">Name</span>
                <FaUser className={iconClassName} aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Name"
                  autoComplete="name"
                  className={fieldClassName}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </label>
              <label className="relative block min-w-0">
                <span className="sr-only">Email</span>
                <FaEnvelope className={iconClassName} aria-hidden="true" />
                <input
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className={fieldClassName}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>
              <label className="relative block min-w-0">
                <span className="sr-only">Website (optional)</span>
                <FaGlobe className={iconClassName} aria-hidden="true" />
                <input
                  type="url"
                  placeholder="Website (optional)"
                  autoComplete="url"
                  className={fieldClassName}
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </label>
              <label className="relative block min-w-0">
                <span className="sr-only">Phone number (optional)</span>
                <FaPhone className={iconClassName} aria-hidden="true" />
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  autoComplete="tel"
                  className={fieldClassName}
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </label>
            </div>

            <label className="relative block min-w-0">
              <span className="sr-only">Select a service</span>
              <FaListAlt className={iconClassName} aria-hidden="true" />
              <select
                value={service}
                onChange={(event) => setService(event.target.value)}
                className={`${fieldClassName} appearance-none pr-8 font-semibold`}
                required
              >
                <option value="" disabled>Select a Service</option>
                {services.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">⌄</span>
            </label>

            <label className="relative block min-w-0">
              <span className="sr-only">Message</span>
              <FaCommentDots className="pointer-events-none absolute left-2.5 top-2.5 h-3 w-3 text-slate-400" aria-hidden="true" />
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Message"
                className="h-[48px] w-full resize-y rounded-md border border-slate-300 bg-white px-3 py-2 pl-9 text-[11px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#BF0B30] focus:ring-2 focus:ring-[#BF0B30]/15 sm:text-xs"
                required
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-[42px] w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#ed173e] to-[#d9002f] text-sm font-bold text-white shadow-[0_5px_15px_rgba(217,0,47,0.22)] transition hover:from-[#d9002f] hover:to-[#bd0029] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
            >
              {isSubmitting ? "Sending request…" : "Send request"}
              {!isSubmitting && <FaArrowRight className="h-3 w-3" aria-hidden="true" />}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Popup;
