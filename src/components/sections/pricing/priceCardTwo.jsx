"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRightLong, FaRegCommentDots } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const dialogInputClassName =
  "h-12 min-w-0 w-full rounded-xl border border-[#d6deea] bg-white px-4 text-sm font-semibold text-[#102f5b] shadow-[0_3px_10px_rgba(13,45,89,0.04)] outline-none transition placeholder:text-[#9aa7ba] focus:border-[#12376f] focus:ring-4 focus:ring-[#12376f]/10 sm:text-base";

const planSubtitles = {
  basic: "Perfect for getting started",
  startup: "Great for growing businesses",
  professional: "For established brands",
};

const PriceCardTwo = ({
  plan_name,
  price,
  services = [],
  old_price,
  cardIndex = 0,
}) => {
  const planNameRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const planKey = plan_name.trim().toLowerCase();
  const subtitle = planSubtitles[planKey];
  const isRedHeader = cardIndex === 1;

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (planNameRef.current) {
      observer.observe(planNameRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article className="group relative mx-auto flex h-full min-h-[620px] w-full max-w-[450px] min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#e3eaf2] bg-white shadow-[0_12px_32px_rgba(13,45,89,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#ccd9e8] hover:shadow-[0_20px_44px_rgba(13,45,89,0.14)] sm:min-h-[620px]">
      <div
        className={`relative z-10 flex min-h-[132px] flex-col justify-center overflow-hidden rounded-t-[19px] border-b border-white/10 px-6 py-9 text-white sm:px-8 sm:py-9 ${
          isRedHeader
            ? "bg-gradient-to-br from-[#f20d3b] via-[#e5002d] to-[#c90028]"
            : "bg-gradient-to-br from-[#1b4788] via-[#12376f] to-[#0d2b58]"
        }`}
        ref={planNameRef}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-16 h-36 w-36 rounded-full border border-white/10 bg-white/10"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-10 h-28 w-28 rounded-full border border-white/10"
        />
        <h3
          className={`relative w-full break-words text-left text-2xl font-bold uppercase leading-tight tracking-[0.08em] text-white sm:text-4xl ${
            animate ? "price-card-animate" : ""
          }`}
        >
          {plan_name}
        </h3>
        {subtitle ? (
          <p className="relative mt-1 break-words text-[13px] font-medium leading-tight text-white/90 sm:text-[14px]">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="relative z-20 -mt-3 flex h-full min-w-0 flex-col rounded-t-[18px] border-t border-[#edf1f6] bg-gradient-to-b from-white via-white to-[#fbfcfe] px-6 pb-6 pt-6 sm:px-8 sm:pb-7 sm:pt-6">
        <div className="mb-6 flex min-w-0 flex-nowrap items-end gap-x-4">
          <div className="relative shrink-0 pt-8">
            <span className="absolute left-0 top-0 text-lg font-bold tracking-[0.12em] text-[#e5002d]">
              NOW
            </span>
            <span className="whitespace-nowrap text-[55px] font-bold leading-[0.92] tracking-[-0.04em] text-[#102f5b] sm:text-[60px]">
              ${price}
            </span>
          </div>

          {old_price ? (
            <span className="mb-1 shrink-0 whitespace-nowrap text-xl font-medium leading-none text-[#7d8b9e] line-through sm:text-3xl">
              ${old_price}
            </span>
          ) : null}
        </div>

        <ul className="mb-5 h-[245px] min-w-0 space-y-3 overflow-y-auto rounded-2xl border border-[#edf1f6] bg-[#fcfdff] px-4 py-4 pr-3 text-[13px] text-[#4b5c73] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:text-[14px]">
          {services.map((service, index) => (
            <li
              key={`${typeof service === "string" ? service : service.service}-${index}`}
              className="flex min-w-0 items-start gap-2.5 leading-[1.3] font-medium text-[#4b5c73]"
            >
              <FaCircleCheck className="mt-0.5 h-[19px] w-[19px] shrink-0 text-[#12376f] drop-shadow-[0_2px_2px_rgba(18,55,111,0.12)]" />
              <span className="min-w-0 break-words pt-px">
                {typeof service === "string" ? service : service.service}
              </span>
            </li>
          ))}
        </ul>

        <hr className="mb-5 border-t border-[#e4eaf1]" />

        <div className="mt-auto min-w-0">
          <div className="mb-5 grid w-full min-w-0 grid-cols-[minmax(0,1.1fr)_1px_minmax(112px,0.9fr)] items-center rounded-2xl border border-[#edf1f6] bg-[#f9fbfd] p-3 shadow-[0_3px_10px_rgba(13,45,89,0.03)]">
            <a
              href="tel:+14704707392"
              className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-2.5 pr-3 transition hover:opacity-80 focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12376f]/30 sm:gap-3"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff0f2] text-[#e5002d] shadow-[0_3px_8px_rgba(229,0,45,0.1)] sm:h-11 sm:w-11">
                <IoCall className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
              </span>
              <span className="flex min-w-0 flex-col justify-center">
                <span className="block whitespace-nowrap text-[12px] font-extrabold leading-[1.05] text-[#102f5b] sm:text-[13px]">
                  Speak with us
                </span>
                <span className="mt-0.5 block text-[12px] font-extrabold leading-[1.1] text-[#12376f] sm:whitespace-nowrap sm:text-[13px]">
                  +1 (470) 470-7392
                </span>
              </span>
            </a>

            <span
              aria-hidden="true"
              className="h-11 w-px bg-[#e1e7ee]"
            />

            <Link
              href="/contact-us"
              className="flex min-w-0 items-center justify-center gap-2 rounded-lg pl-3 text-[12px] font-extrabold leading-none text-[#12376f] transition hover:text-[#e5002d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12376f]/30 sm:text-[13px]"
            >
              <FaRegCommentDots className="h-[28px] w-[28px]" />
              <span className="whitespace-nowrap">Chat Now</span>
            </Link>
          </div>

          <OrderDialog />
        </div>
      </div>
    </article>
  );
};

export default PriceCardTwo;

const OrderDialog = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!consent) {
      setStatus("Please agree to the data policy before submitting.");
      return;
    }

    if (!service) {
      setStatus("Please select a service.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          website,
          contactNumber,
          service,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("Message sent!");
      setName("");
      setEmail("");
      setWebsite("");
      setContactNumber("");
      setService("");
      setMessage("");
      setConsent(false);
    } catch {
      setStatus("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#ef1640] to-[#ce002b] px-5 text-[16px] font-extrabold text-white shadow-[0_7px_14px_rgba(229,0,45,0.2)] transition hover:from-[#d90835] hover:to-[#b90026] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5002d]/35 focus-visible:ring-offset-2 group-hover:animate-shake-pause sm:text-[17px]"
        >
          Place Your Order
          <FaArrowRightLong className="h-4 w-4" />
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[92vh] w-[calc(100vw-2rem)] max-w-[760px] overflow-y-auto rounded-2xl border border-[#dfe7f1] bg-[#f8fafc] p-0 text-white shadow-[0_24px_70px_rgba(13,45,89,0.24)] sm:rounded-3xl">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#173f7b] via-[#12376f] to-[#0b2852] px-5 py-7 sm:px-8 sm:py-9">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-20 h-44 w-44 rounded-full border border-white/10 bg-white/10"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-12 h-40 w-40 rounded-full border border-white/10"
          />
          <div className="relative max-w-[560px]">
            <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/70">
              Let&apos;s work together
            </p>
            <DialogTitle className="text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-3xl">
              Place Your Order
            </DialogTitle>
            <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
              Tell us a little about your project and our team will get back to
              you shortly.
            </p>
          </div>
        </div>

        <div className="px-4 py-5 sm:px-8 sm:py-7">
          <form className="min-w-0" onSubmit={handleSubmit}>
            <div className="mb-5 flex items-start gap-3 rounded-xl border border-[#dce8fa] bg-[#eef4ff] px-4 py-3 text-[#173f7b]">
              <FaCircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#12376f]" />
              <div>
                <p className="text-sm font-extrabold">Fast, friendly response</p>
                <p className="mt-0.5 text-xs leading-relaxed text-[#587092] sm:text-sm">
                  We usually respond within one business day.
                </p>
              </div>
            </div>

            <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              <input
                type="text"
                aria-label="Name"
                autoComplete="name"
                placeholder="Name"
                className={dialogInputClassName}
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <input
                type="email"
                aria-label="Email"
                autoComplete="email"
                placeholder="Email"
                className={dialogInputClassName}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <input
                type="url"
                aria-label="Website (optional)"
                autoComplete="url"
                placeholder="Website (optional)"
                className={dialogInputClassName}
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
              <input
                type="tel"
                aria-label="Phone Number (optional)"
                autoComplete="tel"
                placeholder="Phone Number (optional)"
                className={dialogInputClassName}
                value={contactNumber}
                onChange={(event) => setContactNumber(event.target.value)}
              />
            </div>

            <div className="mt-4 min-w-0">
              <label
                htmlFor="price-order-service"
                className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em] text-[#53647d]"
              >
                Service needed
              </label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger
                  id="price-order-service"
                  aria-label="Select a service"
                  aria-required="true"
                  className={`${dialogInputClassName} data-[state=open]:border-[#12376f] data-[state=open]:ring-4 data-[state=open]:ring-[#12376f]/10 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-[#12376f]`}
                >
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent className="z-[60] rounded-xl border-[#d6deea] bg-white p-1 text-[#102f5b] shadow-[0_16px_36px_rgba(13,45,89,0.18)]">
                  <SelectItem
                    value="Search Engine Optimization"
                    className="cursor-pointer rounded-lg px-3 py-3 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f] sm:text-base"
                  >
                    Search Engine Optimization
                  </SelectItem>
                  <SelectItem
                    value="Social Media Marketing"
                    className="cursor-pointer rounded-lg px-3 py-3 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f] sm:text-base"
                  >
                    Social Media Marketing
                  </SelectItem>
                  <SelectItem
                    value="Content Writing"
                    className="cursor-pointer rounded-lg px-3 py-3 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f] sm:text-base"
                  >
                    Content Writing
                  </SelectItem>
                  <SelectItem
                    value="Affiliate Marketing"
                    className="cursor-pointer rounded-lg px-3 py-3 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f] sm:text-base"
                  >
                    Affiliate Marketing
                  </SelectItem>
                  <SelectItem
                    value="Email Marketing"
                    className="cursor-pointer rounded-lg px-3 py-3 text-sm font-semibold focus:bg-[#eef4ff] focus:text-[#12376f] sm:text-base"
                  >
                    Email Marketing
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <textarea
              aria-label="Message"
              placeholder="Message"
              className="mt-4 min-h-32 w-full min-w-0 resize-y rounded-xl border border-[#d6deea] bg-white px-4 py-3 text-sm font-semibold text-[#102f5b] shadow-[0_3px_10px_rgba(13,45,89,0.04)] outline-none transition placeholder:text-[#9aa7ba] focus:border-[#12376f] focus:ring-4 focus:ring-[#12376f]/10 sm:text-base"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />

            <div className="mt-5 flex min-w-0 items-start rounded-xl border border-[#e4eaf3] bg-white px-4 py-3">
              <input
                type="checkbox"
                id="price-order-consent"
                className="mt-1 h-4 w-4 shrink-0 accent-[#12376f]"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                required
              />
              <label
                htmlFor="price-order-consent"
                className="min-w-0 break-words pl-3 text-xs font-semibold leading-relaxed text-[#53647d] sm:text-sm"
              >
                By using this form you agree with the storage and handling of
                your data policies of WebFounders USA.
              </label>
            </div>

            <div className="mt-6 flex justify-stretch sm:justify-end">
              <Button
                type="submit"
                className="h-12 w-full max-w-none rounded-xl border-0 bg-gradient-to-r from-[#ef1640] to-[#ce002b] px-7 text-sm font-extrabold text-white shadow-[0_8px_16px_rgba(229,0,45,0.18)] hover:scale-100 hover:border-[#b90026] hover:bg-[#ce002b] hover:from-[#d90835] hover:to-[#b90026] hover:text-white hover:shadow-[0_10px_20px_rgba(185,0,38,0.24)] focus:ring-4 focus:ring-[#e5002d]/20 sm:w-auto sm:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send request"}
              </Button>
            </div>

            {status ? (
              <div className="mt-3 text-sm" aria-live="polite">
                {status}
              </div>
            ) : null}
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
