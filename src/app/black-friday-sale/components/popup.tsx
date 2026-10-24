"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  Mail,
  MessageSquareText,
  Phone,
  UserRound,
  X,
} from "lucide-react";
import {
  showSubmissionError,
  showSubmissionLoading,
  showSubmissionSuccess,
  submitSubmission,
} from "@/lib/submission";

const inputClassName =
  "h-11 w-full min-w-0 rounded-lg border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#e31824] focus:ring-2 focus:ring-[#e31824]/10";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Business Website Design",
    message: "",
  });

  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 300);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const openFromRouteInteraction = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const control = target.closest<HTMLElement>("a, button, [role='button']");
      if (!control || control.closest("[role='dialog']")) return;
      if (control.closest("[data-popup-trigger-ignore='true']")) return;

      event.preventDefault();
      event.stopPropagation();
      setIsOpen(true);
    };

    document.addEventListener("click", openFromRouteInteraction, true);
    return () => {
      document.removeEventListener("click", openFromRouteInteraction, true);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [closePopup, isOpen]);

  const updateField = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await showSubmissionLoading();
      await submitSubmission({
        source: "Black Friday Sale Popup",
        name: form.name.trim(),
        contactNumber: form.phone.trim(),
        email: form.email.trim(),
        service: form.service,
        message: form.message.trim() || "No additional message provided.",
      });
      await showSubmissionSuccess();
      setForm({
        name: "",
        phone: "",
        email: "",
        service: "Business Website Design",
        message: "",
      });
      closePopup();
    } catch {
      await showSubmissionError();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#05090d]/75 p-3 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePopup();
      }}
    >
      <section
        aria-labelledby="black-friday-popup-heading"
        aria-modal="true"
        className="relative my-auto grid max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl grid-cols-1 overflow-y-auto rounded-2xl bg-white text-[#101820] shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:rounded-3xl md:max-h-[min(760px,calc(100dvh-3rem))] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:overflow-hidden"
        role="dialog"
      >
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close Black Friday offer"
          className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-md transition hover:bg-white hover:text-[#e31824] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31824]"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>

        <div className="relative isolate min-h-[230px] overflow-hidden rounded-t-2xl bg-[radial-gradient(ellipse_at_18%_18%,rgba(227,24,36,0.34),transparent_38%),radial-gradient(ellipse_at_85%_82%,rgba(227,24,36,0.18),transparent_35%),linear-gradient(145deg,#151d25_0%,#080d12_72%)] sm:min-h-[280px] sm:rounded-t-3xl md:min-h-[540px] md:rounded-l-3xl md:rounded-tr-none">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 rounded-[1.1rem] border border-white/10 sm:inset-4 sm:rounded-[1.4rem]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 top-1/3 h-40 w-40 rounded-full bg-[#e31824]/15 blur-3xl sm:h-56 sm:w-56"
          />
          <Image
            src="/Assets/High%20res/2b9eaa12-72eb-404c-a6dc-17da736423f7.png"
            alt="Black Friday limited time offer graphic"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 45vw"
            className="z-0 object-contain p-5 sm:p-7 md:p-9"
          />
          <Image
            src="/Assets/High%20res/0dfaa056-ea22-4de3-97eb-261590f9d661.png"
            alt=""
            aria-hidden="true"
            width={340}
            height={340}
            className="pointer-events-none absolute -bottom-3 -left-2 z-10 h-[76px] w-[76px] object-contain drop-shadow-[0_12px_16px_rgba(0,0,0,0.4)] sm:h-24 sm:w-24 md:-bottom-5 md:-left-4 md:h-36 md:w-36"
          />
          <Image
            src="/Assets/High%20res/1a3e2e0c-9b29-4daf-97a3-bbf95e87eb9c.png"
            alt=""
            aria-hidden="true"
            width={240}
            height={240}
            className="pointer-events-none absolute right-3 top-3 z-10 h-12 w-12 rotate-12 object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.4)] sm:right-5 sm:top-5 sm:h-16 sm:w-16 md:right-7 md:top-7 md:h-20 md:w-20"
          />
          <Image
            src="/Assets/High%20res/90962928-d583-46b1-99eb-89a9013feaa2.png"
            alt=""
            aria-hidden="true"
            width={260}
            height={260}
            className="pointer-events-none absolute bottom-4 right-3 z-10 h-14 w-14 -rotate-12 object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.4)] sm:bottom-6 sm:right-5 sm:h-[72px] sm:w-[72px] md:bottom-8 md:right-7 md:h-24 md:w-24"
          />
          <div aria-hidden="true" className="pointer-events-none absolute left-[18%] top-[14%] z-10 h-1.5 w-1.5 rounded-full bg-[#ff3440] shadow-[0_0_14px_5px_rgba(227,24,36,0.35)] sm:h-2 sm:w-2" />
          <div aria-hidden="true" className="pointer-events-none absolute bottom-[22%] left-[22%] z-10 h-1 w-1 rounded-full bg-white/80 shadow-[0_0_12px_4px_rgba(255,255,255,0.2)] sm:h-1.5 sm:w-1.5" />
        </div>

        <div className="relative min-w-0 overflow-hidden bg-[radial-gradient(circle_at_100%_100%,rgba(227,24,36,0.08),transparent_38%),linear-gradient(145deg,#fff_0%,#f8f9fb_100%)] px-5 py-6 sm:px-8 sm:py-8 md:flex md:items-center md:px-9 md:py-10">
          <Image
            src="/Assets/High%20res/ad1b2b5b-63d6-4f3b-a22a-28c45457cb72.png"
            alt=""
            aria-hidden="true"
            width={250}
            height={240}
            className="pointer-events-none absolute -bottom-5 -right-5 h-28 w-28 object-contain opacity-15 sm:h-36 sm:w-36"
          />

          <div className="relative z-10 w-full">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#e31824] sm:text-xs">
              Black Friday Website Packages
            </p>
            <h2
              id="black-friday-popup-heading"
              className="mt-1.5 text-[clamp(1.55rem,4vw,2.15rem)] font-black uppercase leading-[1.02] tracking-[-0.04em]"
            >
              Get your free quote
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Share a few details and we&apos;ll help you plan a website that
              grows your business.
            </p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3 sm:mt-5">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="min-w-0">
                  <label
                    htmlFor="black-friday-popup-name"
                    className="mb-1 block text-xs font-semibold text-slate-700"
                  >
                    Name <span className="text-[#e31824]">*</span>
                  </label>
                  <div className="relative">
                    <UserRound
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      id="black-friday-popup-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={updateField}
                      className={inputClassName}
                      required
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="black-friday-popup-phone"
                    className="mb-1 block text-xs font-semibold text-slate-700"
                  >
                    Phone Number <span className="text-[#e31824]">*</span>
                  </label>
                  <div className="relative">
                    <Phone
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      id="black-friday-popup-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={updateField}
                      className={inputClassName}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="min-w-0">
                <label
                  htmlFor="black-friday-popup-email"
                  className="mb-1 block text-xs font-semibold text-slate-700"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="black-friday-popup-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Your email address"
                    value={form.email}
                    onChange={updateField}
                    className={inputClassName}
                  />
                </div>
              </div>

              <div className="min-w-0">
                <label
                  htmlFor="black-friday-popup-service"
                  className="mb-1 block text-xs font-semibold text-slate-700"
                >
                  Service
                </label>
                <div className="relative">
                  <BriefcaseBusiness
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  />
                  <select
                    id="black-friday-popup-service"
                    name="service"
                    value={form.service}
                    onChange={updateField}
                    required
                    className={inputClassName + " appearance-none pr-10 font-medium"}
                  >
                    <option value="Business Website Design">
                      Business Website Design
                    </option>
                    <option value="E-Commerce Websites">
                      E-Commerce Websites
                    </option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Custom Web Development">
                      Custom Web Development
                    </option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <label
                  htmlFor="black-friday-popup-message"
                  className="mb-1 block text-xs font-semibold text-slate-700"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquareText
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400"
                  />
                  <textarea
                    id="black-friday-popup-message"
                    name="message"
                    placeholder="Tell us about your project (optional)"
                    value={form.message}
                    onChange={updateField}
                    className="min-h-[76px] w-full min-w-0 resize-y rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#e31824] focus:ring-2 focus:ring-[#e31824]/10"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#ff1b27] to-[#d9000c] px-5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(233,12,20,0.25)] transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-wait disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31824] focus-visible:ring-offset-2"
              >
                {isSubmitting ? "Sending..." : "Get My Free Quote"}
                {!isSubmitting && (
                  <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0" />
                )}
              </button>
              <p className="text-center text-[10px] text-slate-500">
                Only Name and Phone Number are required.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Popup;
