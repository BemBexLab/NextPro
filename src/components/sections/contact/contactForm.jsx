"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
  const [status, setStatus] = useState("");

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
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          website,
          phone,
          message,
          service: services[0], // Only send the first selected service
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("Submitted!");
        setName("");
        setEmail("");
        setWebsite("");
        setPhone("");
        setMessage("");
        setServices([]);
      } else {
        setStatus("Submission failed: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      setStatus("Submission failed: " + error.message);
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
            <Button type="submit" className="mt-4 w-full py-2 rounded-lg">
              Send Request
            </Button>
            {status && (
              <div className="mt-2 text-sm text-center text-green-600">{status}</div>
            )}
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
              src="/images/contact/contact image.png"
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
