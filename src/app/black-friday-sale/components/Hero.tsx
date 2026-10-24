"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  Check,
  ChevronDown,
  LockKeyhole,
  Mail,
  Phone,
  Rocket,
  TrendingUp,
  UserRound,
  UsersRound,
} from "lucide-react";
import {
  showSubmissionError,
  showSubmissionLoading,
  showSubmissionSuccess,
  submitSubmission,
} from "@/lib/submission";

const inputClassName =
  "h-12 w-full min-w-0 rounded-lg border border-slate-200 bg-white pl-11 pr-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#BF0B30] focus:ring-2 focus:ring-[#BF0B30]/10 sm:h-11";

const benefits = ["Professional Design", "Mobile Responsive", "SEO Optimized"];

const metrics = [
  { value: 5, suffix: "K+", label: "Projects Delivered", Icon: Rocket },
  { value: 4.9, suffix: "K+", label: "Happy Clients", Icon: UsersRound },
  { value: 95, suffix: "%", label: "Success Rate", Icon: ChartNoAxesColumnIncreasing },
  { value: 15, suffix: "X", label: "Website Performance Growth", Icon: TrendingUp },
];

const AnimatedMetricValue = ({
  value,
  suffix,
  delay,
}: {
  value: number;
  suffix: string;
  delay: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const metricRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = metricRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }

    let frameId = 0;
    let startTime: number | null = null;
    const duration = 2600;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp + delay;
      if (timestamp < startTime) {
        frameId = window.requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      setCount(value * easedProgress);

      if (progress < 1) frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [delay, isVisible, value]);

  return (
    <span ref={metricRef}>
      {count.toFixed(Number.isInteger(value) ? 0 : 1)}
      <span className="text-red-500">{suffix}</span>
    </span>
  );
};

const Hero = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await showSubmissionLoading();
      await submitSubmission({
        source: "Landing Test Hero Quote Form",
        name: form.name,
        email: form.email,
        contactNumber: form.phone,
        service: form.service,
        message: form.message.trim() || "No additional project details provided.",
      });
      await showSubmissionSuccess();
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      await showSubmissionError();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#f7f8fc] text-[#101820]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-16 hidden h-[624px] w-[min(980px,52vw)] bg-contain bg-right bg-no-repeat min-[1400px]:block"
        style={{
          backgroundImage:
            "url('/Assets/High%20res/234fdd58-c30f-4ded-afb4-7f5fbafc7923.png')",
          backgroundSize: "contain",
        }}
      />

      <div className="relative mx-auto w-[90%] max-w-[1440px] pb-4 pt-16 sm:pb-5 sm:pt-20 lg:pb-4 lg:pt-16">
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_clamp(18rem,30vw,28rem)] lg:items-center lg:gap-10">
          <div className="relative z-10 w-full max-w-[700px] pt-1 sm:pt-5 lg:pt-0">
            <div className="mb-5 inline-flex rounded-full bg-[#101820] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-white sm:text-xs">
              Black Friday - Limited Time Offer
            </div>

            <h1 className="max-w-[680px] text-[clamp(2.25rem,10vw,3rem)] font-black uppercase leading-[0.96] tracking-[-0.045em] text-[#101820] sm:text-[3.6rem] md:text-[3.35rem] lg:text-[4rem] xl:text-[4.4rem]">
              Website Design &amp; Development{" "}
              <span className="text-[#d71920]">Deals</span>
            </h1>

            <p className="mt-5 max-w-[600px] font-medium text-base leading-[1.55] text-slate-800 sm:text-lg">
              Turn your ideas into a powerful, high-converting website. Get a
              modern design, faster performance, and more sales at an exclusive
              Black Friday price.
            </p>

            <a
              href="#request-audit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#E90C14] to-[#A60607] px-3 text-sm font-bold text-white shadow-[0_5px_14px_rgba(211,24,36,0.2)] transition duration-200 hover:brightness-95 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31824] focus-visible:ring-offset-2 sm:min-h-14 sm:w-auto sm:gap-2.5 sm:px-8 sm:text-lg"
            >
              Claim My Black Friday Deal
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </a>

            <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-[13px] font-semibold leading-none text-slate-800 sm:gap-x-6 sm:text-sm">
              {benefits.map((benefit) => (
                <li key={benefit} className="inline-flex items-center gap-2 whitespace-nowrap">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e31824] text-white shadow-sm ring-2 ring-red-100">
                    <Check aria-hidden="true" className="h-4 w-4" strokeWidth={3} />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-20 mx-auto mt-0 w-full max-w-[448px] lg:max-w-none">
            <form
              id="request-audit"
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white bg-white p-5 shadow-[0_18px_52px_rgba(15,23,42,0.2)] sm:p-6"
            >
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#e31824] sm:text-xs">
                Limited Time Offer
              </p>
              <h2 className="mt-1.5 text-2xl font-black uppercase leading-tight tracking-[-0.035em] text-[#101820] sm:text-[1.9rem] lg:text-[1.65rem] xl:text-[1.9rem]">
                Get a Free Quote
              </h2>
              <p className="mt-2 text-sm font-medium leading-[1.45] text-slate-600">
                Fill out the form and we&apos;ll get back to you with a custom
                Black Friday offer.
              </p>

              <div className="mt-4 space-y-2">
                <div className="relative">
                  <label htmlFor="quote-name" className="sr-only">
                    Full Name
                  </label>
                  <UserRound
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="quote-name"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    autoComplete="name"
                    value={form.name}
                    onChange={updateField}
                    className={inputClassName}
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="quote-email" className="sr-only">
                    Email Address
                  </label>
                  <Mail
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    autoComplete="email"
                    value={form.email}
                    onChange={updateField}
                    className={inputClassName}
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="quote-phone" className="sr-only">
                    Phone Number
                  </label>
                  <Phone
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={updateField}
                    className={inputClassName}
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="quote-service" className="sr-only">
                    Select a Service
                  </label>
                  <BriefcaseBusiness
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  />
                  <select
                    id="quote-service"
                    name="service"
                    value={form.service}
                    onChange={updateField}
                    className={`${inputClassName} appearance-none pr-9 text-slate-500`}
                    required
                  >
                    <option value="" disabled>
                      Select a Service
                    </option>
                    <option value="Business Website Design">Business Website Design</option>
                    <option value="E-Commerce Websites">E-Commerce Websites</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value={"Custom Web Development"}>Custom Web Development</option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="quote-message" className="sr-only">
                    Tell us about your project (Optional)
                  </label>
                  <textarea
                    id="quote-message"
                    name="message"
                    placeholder="Tell us about your project (Optional)"
                    value={form.message}
                    onChange={updateField}
                    className="min-h-14 w-full resize-y rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#BF0B30] focus:ring-2 focus:ring-[#BF0B30]/10"
                  />
                </div>
              </div>

              <button
                type="submit"
                data-popup-trigger-ignore="true"
                disabled={isSubmitting}
                className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#E90C14] to-[#A60607] px-4 text-sm font-bold text-white transition hover:brightness-95 disabled:cursor-wait disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31824] focus-visible:ring-offset-2 sm:min-h-14 sm:text-base"
              >
                {isSubmitting ? "Sending..." : "Get My Free Quote"}
                {!isSubmitting && <ArrowRight aria-hidden="true" className="h-4 w-4" />}
              </button>

              <p className="mt-2 flex items-center justify-center gap-1.5 text-[10px] text-slate-500 sm:text-[11px]">
                <LockKeyhole aria-hidden="true" className="h-3.5 w-3.5" />
                Your information is 100% secure. No spam.
              </p>
            </form>
          </div>
        </div>

        <div className="relative z-30 mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-y-2 rounded-2xl border border-white bg-white px-4 py-4 shadow-[0_12px_36px_rgba(15,23,42,0.08)] min-[420px]:grid-cols-2 sm:mt-12 sm:px-7 sm:py-6 md:grid-cols-4 md:gap-y-0 lg:mt-16 lg:px-10">
          {metrics.map(({ value, suffix, label, Icon }, index) => (
            <div
              key={label}
              className={`flex min-w-0 items-center justify-center gap-2.5 px-2 py-2 sm:gap-3 md:px-3 md:py-1 ${
                index > 0 ? "md:border-l md:border-slate-100" : ""
              }`}
            >
              <Icon
                aria-hidden="true"
                className="h-8 w-8 shrink-0 text-[#101820] sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                strokeWidth={2.6}
              />
              <div className="min-w-0">
                <div className="whitespace-nowrap text-xl font-black leading-none tracking-[-0.04em] text-[#101820] sm:text-2xl lg:text-3xl">
                  <AnimatedMetricValue value={value} suffix={suffix} delay={index * 220} />
                </div>
                <p className="mt-1 text-[10px] font-semibold text-slate-600 sm:text-xs">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
