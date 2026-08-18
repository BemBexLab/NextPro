"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const dialogInputClassName =
  "h-11 min-w-0 w-full rounded border-2 border-gray-300 bg-white px-3 text-sm font-medium text-black outline-none placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 sm:h-12 sm:text-base";

const PriceCardTwo = ({ plan_name, price, services = [], old_price }) => {
  const planNameRef = useRef(null);
  const [animate, setAnimate] = useState(false);

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
    <article className="group relative mx-auto flex h-full min-h-[560px] w-full max-w-[390px] min-w-0 flex-col overflow-hidden rounded-[22px] border-2 border-black bg-[#ffe6e9] p-5 pt-0 shadow-sm transition hover:shadow-md sm:min-h-[600px] sm:p-8 sm:pt-0">
      <div
        className="absolute inset-x-0 top-0 z-10 flex min-h-16 items-center rounded-t-[20px] bg-[#BF0B30] px-4 py-3"
        ref={planNameRef}
      >
        <h2
          className={`w-full break-words text-center text-base font-bold uppercase leading-tight tracking-wider text-white sm:text-lg ${
            animate ? "price-card-animate" : ""
          }`}
        >
          {plan_name}
        </h2>
      </div>

      <div className="flex h-full min-w-0 flex-col pt-16">
        <div className="mb-5 mt-5 flex min-w-0 flex-wrap items-end gap-x-3 gap-y-2 sm:mt-6">
          <div className="relative min-w-0 pt-4">
            <span className="absolute left-0 top-0 text-xs font-semibold tracking-wide text-green-600">
              NOW
            </span>
            <span className="break-all text-4xl font-extrabold leading-none text-black sm:text-5xl">
              ${price}
            </span>
          </div>

          {old_price ? (
            <span className="mb-1 break-all text-base font-bold text-black/90 line-through sm:text-lg">
              ${old_price}
            </span>
          ) : null}
        </div>

        <ul className="mb-6 h-[210px] min-w-0 space-y-3 overflow-y-auto pr-1 text-sm text-black [scrollbar-color:#101129_#e5e7eb] [scrollbar-width:thin] sm:mb-8 sm:text-base [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#101129] [&::-webkit-scrollbar-track]:bg-[#e5e7eb] [&::-webkit-scrollbar]:w-1">
          {services.map((service, index) => (
            <li
              key={`${typeof service === "string" ? service : service.service}-${index}`}
              className="flex min-w-0 items-start gap-3 leading-tight text-gray-900"
            >
              <FaCircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary sm:mt-1" />
              <span className="min-w-0 break-words">
                {typeof service === "string" ? service : service.service}
              </span>
            </li>
          ))}
        </ul>

        <hr className="mb-4 border-t border-gray-300" />

        <div className="mt-auto min-w-0">
          <div className="mb-5 flex min-w-0 flex-wrap items-end justify-between gap-3">
            <div className="min-w-0">
              <div className="mb-1 text-sm font-bold leading-none text-primary">
                Speak with us
              </div>
              <a
                href="tel:+14704707392"
                className="break-words text-sm font-medium leading-none text-black transition hover:text-primary sm:text-base"
              >
                +1 (470) 470-7392
              </a>
            </div>

            <Link
              href="/contact-us"
              className="shrink-0 text-base font-extrabold leading-none text-primary hover:underline sm:text-lg"
            >
              Chat Now
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
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
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
          className="flex w-full items-center justify-center rounded-[7px] bg-[#BF0B30] px-4 py-3 text-base font-bold text-white shadow-md transition hover:bg-[#BF0B30]/90 group-hover:animate-shake-pause sm:text-lg"
        >
          Place Your Order
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] w-[calc(100vw-2rem)] max-w-[700px] overflow-y-auto p-0">
        <div className="flex items-center justify-between border-b border-b-[#dee2e6] px-4 py-4 sm:px-6 sm:py-5">
          <DialogTitle className="text-lg font-bold text-muted-foreground sm:text-2xl">
            Place Your Order
          </DialogTitle>
          <DialogClose />
        </div>

        <div className="px-4 pb-5 sm:px-6 sm:pb-6">
          <form className="min-w-0" onSubmit={handleSubmit}>
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

            <div className="mt-3 min-w-0 sm:mt-4">
              <label htmlFor="price-order-service" className="sr-only">
                Select a service
              </label>
              <select
                id="price-order-service"
                className={dialogInputClassName}
                value={service}
                onChange={(event) => setService(event.target.value)}
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
                <option value="Affiliate Marketing">
                  Affiliate Marketing
                </option>
                <option value="Email Marketing">Email Marketing</option>
              </select>
            </div>

            <textarea
              aria-label="Message"
              placeholder="Message"
              className="mt-3 min-h-28 w-full min-w-0 resize-y rounded border-2 border-gray-300 bg-white px-3 py-3 text-sm font-medium text-black outline-none placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 sm:mt-4 sm:text-base"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />

            <div className="mt-4 flex min-w-0 items-start">
              <input
                type="checkbox"
                id="price-order-consent"
                className="mt-1 h-4 w-4 shrink-0"
                required
              />
              <label
                htmlFor="price-order-consent"
                className="min-w-0 break-words pl-3 text-sm font-medium sm:text-base"
              >
                By using this form you agree with the storage and handling of
                your data policies of WebFounders USA.
              </label>
            </div>

            <div className="mt-6 flex justify-start sm:justify-end">
              <Button
                type="submit"
                className="w-full px-4 py-2 text-sm sm:w-auto sm:px-6 sm:py-3 sm:text-base"
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
