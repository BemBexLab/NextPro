"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  showServiceRequiredWarning,
  showSubmissionError,
  showSubmissionLoading,
  showSubmissionSuccess,
  submitSubmission,
} from "@/lib/submission";

const SERVICES_LIST = [
  "Search Engine Optimization",
  "Social Media Marketing",
  "Content Writing",
  "Affiliate Marketing",
  "Email Marketing",
  "Other",
];

export default function FreelancerMatchForm() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle checkbox toggle
  const handleServiceChange = (service) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!services.length) {
      await showServiceRequiredWarning();
      return;
    }

    setIsSubmitting(true);
    showSubmissionLoading();

    try {
      await submitSubmission({
        name,
        email,
        website,
        contactNumber: phone,
        message,
        service: services.join(", "),
      });

      await showSubmissionSuccess();

      setName("");
      setEmail("");
      setWebsite("");
      setPhone("");
      setMessage("");
      setServices([]);
    } catch {
      await showSubmissionError();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-8">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row w-full max-w-6xl">
        {/* Left Side: Form */}
        <div className="md:w-3/5 w-full p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            Looking to build your online presence? Reach out and let’s make your vision a reality.
          </h2>
          <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="url"
              placeholder="Website (optional)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              value={website}
              onChange={e => setWebsite(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number (optional)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <textarea
              placeholder="Message"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-black"
              rows={3}
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
            {/* Services */}
            <div>
              <label className="block font-medium mb-1">Services</label>
              <div className="grid grid-cols-2 gap-2">
                {SERVICES_LIST.map((service) => (
                  <label className="flex items-center gap-2" key={service}>
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      checked={services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full py-2 rounded-lg"
            >
              {isSubmitting ? "Sending..." : "Send Request"}
            </Button>
          </form>
          <div className="text-center mt-4 text-xs text-gray-500">
            Prefer email?{" "}
            <a href="mailto:info@webfoundersusa.com" className="underline">
              info@webfoundersusa.com
            </a>
          </div>
        </div>
        {/* Right Side: Image + Text Overlay */}
        <div className="md:w-2/5 w-full relative flex items-center justify-center bg-gray-100">
          <div className="relative w-full h-96 md:h-full">
            <Image
              src="/images/contact/contact image.webp"
              alt="Designers"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 50vw, 420px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
