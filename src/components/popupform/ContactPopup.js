"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Swal from "sweetalert2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function ContactPopup() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!service) {
      await Swal.fire({
        icon: "warning",
        title: "Select a service",
        text: "Please choose a service before submitting the form.",
        confirmButtonText: "OK",
        confirmButtonColor: "#BF0B30",
        background: "#ffffff",
        color: "#1f2937",
        customClass: {
          popup: "rounded-3xl",
          confirmButton: "rounded-full px-6 py-3",
        },
      });
      return;
    }

    setIsSubmitting(true);

    Swal.fire({
      title: "Sending your request...",
      text: "Please wait while we deliver your message.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
      customClass: {
        popup: "rounded-3xl",
        title: "text-[#002768]",
        confirmButton: "rounded-full px-6 py-3",
      },
    });

    try {
      const res = await fetch("/api/submit", {
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

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Unknown error");
      }

      Swal.close();
      await Swal.fire({
        icon: "success",
        title: "Message sent!",
        text: "Thanks for reaching out. We will get back to you shortly.",
        confirmButtonText: "Great",
        confirmButtonColor: "#002768",
        background: "#ffffff",
        color: "#1f2937",
        customClass: {
          popup: "rounded-3xl",
          confirmButton: "rounded-full px-6 py-3",
        },
      });

      setName("");
      setEmail("");
      setWebsite("");
      setContactNumber("");
      setService("");
      setMessage("");
      setOpen(false);
    } catch {
      Swal.close();
      await Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Your message could not be sent right now. Please try again.",
        confirmButtonText: "Try again",
        confirmButtonColor: "#dc2626",
        background: "#ffffff",
        color: "#1f2937",
        customClass: {
          popup: "rounded-3xl",
          confirmButton: "rounded-full px-6 py-3",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6">
      <div className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl md:max-h-[720px] md:flex-row">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg font-semibold text-gray-700 shadow-sm transition hover:bg-white hover:text-[#BF0B30]"
          aria-label="Close popup"
        >
          x
        </button>

        <div className="relative h-56 w-full shrink-0 md:h-auto md:w-[44%]">
          <Image
            src="/images/banner/POPPUP.webp"
            alt="Promo"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 44vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
              Limited-Time Offer
            </p>
            <h2 className="mt-2 max-w-xs text-2xl font-bold leading-tight sm:text-3xl">
              Unlock exclusive discounts for your next brand move.
            </h2>
          </div>
        </div>

        <div className="w-full overflow-y-auto md:w-[56%]">
          <div className="flex min-h-full flex-col justify-center p-5 sm:p-8">
            <div className="mb-6 pr-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#BF0B30]">
                Schedule a Strategy Call
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                Wait! Looking for exclusive discounts?
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                Get Your Perfect Branding Designed!
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="h-12 rounded-xl border-2 border-[#C0C0C0] bg-background px-4 outline-blue-200 transition focus:border-[#BF0B30]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="h-12 rounded-xl border-2 border-[#C0C0C0] bg-background px-4 outline-blue-200 transition focus:border-[#BF0B30]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="url"
                  placeholder="Website (optional)"
                  className="h-12 rounded-xl border-2 border-[#C0C0C0] bg-background px-4 outline-blue-200 transition focus:border-[#BF0B30]"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone Number (optional)"
                  className="h-12 rounded-xl border-2 border-[#C0C0C0] bg-background px-4 outline-blue-200 transition focus:border-[#BF0B30]"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>

              <div className="mt-3">
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger
                    className="h-12 rounded-xl border-2 border-[#C0C0C0] bg-background px-4 text-base outline-blue-200 transition focus:border-[#BF0B30] focus:ring-0 focus:ring-offset-0"
                    aria-label="Select a Service"
                  >
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent className="z-[60] rounded-xl border-[#C0C0C0] bg-white text-black shadow-xl">
                    <SelectItem value="Search Engine Optimization" className="rounded-lg py-3 pl-4 text-base focus:bg-[#BF0B30] focus:text-white">
                      Search Engine Optimization
                    </SelectItem>
                    <SelectItem value="Custom Web Development" className="rounded-lg py-3 pl-4 text-base focus:bg-[#BF0B30] focus:text-white">
                      Custom Web Development
                    </SelectItem>
                    <SelectItem value="Graphic Designing" className="rounded-lg py-3 pl-4 text-base focus:bg-[#BF0B30] focus:text-white">
                      Graphic Designing
                    </SelectItem>
                    <SelectItem value="E-commerce marketing" className="rounded-lg py-3 pl-4 text-base focus:bg-[#BF0B30] focus:text-white">
                      E-commerce marketing
                    </SelectItem>
                  </SelectContent>
                </Select>
                <input
                  type="hidden"
                  name="service"
                  value={service}
                  required
                  readOnly
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                className="mt-3 min-h-28 w-full rounded-xl border-2 border-[#C0C0C0] bg-background px-4 py-3 outline-none transition focus:border-[#BF0B30]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <div className="mt-5 flex justify-end">
                <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto sm:min-w-44">
                  {isSubmitting ? "Sending..." : "Send request"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
