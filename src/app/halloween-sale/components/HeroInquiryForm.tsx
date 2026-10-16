"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import phoneCountries from "@/data/phone-countries.json";

const inputClassName =
  "h-12 w-full min-w-0 rounded-lg bg-white/85 px-4 text-sm text-[#001F3F] outline-none transition placeholder:text-slate-500 focus:ring-2 focus:ring-blue-300";

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
const countries = phoneCountries
  .map(({ id, code }) => ({
    id,
    code,
    country: regionNames.of(id) ?? id,
  }))
  .sort((first, second) => first.country.localeCompare(second.country));

const CountryFlag = ({ country }: { country: string }) => {
  return (
    <span
      aria-hidden="true"
      className={`flag:${country} h-4 w-6 shrink-0 rounded-[2px] shadow-[0_0_0_1px_rgba(15,23,42,0.12)]`}
      style={{ "--CountryFlagIcon-height": "1rem" } as React.CSSProperties}
    />
  );
};

const HeroInquiryForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryId, setCountryId] = useState("US");
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectedCountry = countries.find((country) => country.id === countryId) ?? countries[0];
  const visibleCountries = countries.filter((country) =>
    `${country.country} ${country.id} ${country.code}`
      .toLowerCase()
      .includes(countrySearch.trim().toLowerCase()),
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const submission = await import("@/lib/submission");
      await submission.showSubmissionLoading();
      await submission.submitSubmission({
        source: "Halloween Sale Hero Form",
        name,
        email,
        contactNumber: phone ? `${selectedCountry.code} ${phone}` : "",
        service: "Halloween Sale Inquiry",
        message: `Budget: ${budget}\nTimeline: ${timeline}\n\n${message}`,
      });
      await submission.showSubmissionSuccess();
      setName("");
      setEmail("");
      setCountryId("US");
      setPhone("");
      setBudget("");
      setTimeline("");
      setMessage("");
    } catch {
      const submission = await import("@/lib/submission");
      await submission.showSubmissionError();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-w-0 items-center justify-center px-1 py-2 lg:px-7 lg:py-8 xl:px-10">
            <form
              id="hero-inquiry-form"
              onSubmit={handleSubmit}
              className="relative z-10 w-full max-w-[600px] overflow-hidden rounded-[26px] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.8),rgba(255,255,255,0.58)_48%,rgba(234,241,255,0.7))] p-5 text-[#001F3F] shadow-[0_24px_70px_rgba(0,31,63,0.18),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/55 contrast-more:border-[#001F3F] contrast-more:bg-white [@media(prefers-reduced-transparency:reduce)]:bg-white [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none sm:rounded-[30px] sm:p-7 lg:max-w-none lg:p-6 xl:p-8"
            >
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#BF0B30]">Let&apos;s get started</p>
                <h2 className="!mt-2 !text-[1.75rem] !font-bold !leading-tight tracking-wide text-[#001F3F] sm:!text-[2rem]">Tell us about your website</h2>
                <p className="mt-2 text-sm text-black">Share your website goals and our team will be in touch.</p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <label className="block min-w-0">
                  <span className="sr-only">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Full Name"
                    className={inputClassName}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </label>
                <label className="block min-w-0">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Email"
                    className={inputClassName}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </label>

                <div
                  className="relative z-20 flex h-12 min-w-0 rounded-lg bg-white/85 transition focus-within:ring-2 focus-within:ring-blue-300 sm:col-span-2"
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                      setIsCountryMenuOpen(false);
                    }
                  }}
                >
                  <div className="relative shrink-0">
                    <button
                      type="button"
                      aria-label={`Country code: ${selectedCountry.country} ${selectedCountry.code}`}
                      aria-haspopup="listbox"
                      aria-expanded={isCountryMenuOpen}
                      onClick={() => setIsCountryMenuOpen((open) => !open)}
                      onKeyDown={(event) => {
                        if (event.key === "Escape") setIsCountryMenuOpen(false);
                      }}
                      className="flex h-12 w-[104px] items-center justify-center gap-2 rounded-l-lg bg-[#f6f9ff] text-sm font-semibold text-[#001F3F] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#3478c9]"
                    >
                      <CountryFlag country={selectedCountry.id} />
                      <span>{selectedCountry.code}</span>
                      <svg aria-hidden="true" className="h-3.5 w-3.5 text-slate-500" viewBox="0 0 20 20" fill="currentColor"><path d="m5.5 7.5 4.5 4.5 4.5-4.5" /></svg>
                    </button>
                    {isCountryMenuOpen && (
                      <div className="absolute left-0 top-full z-30 mt-2 w-64 rounded-xl border border-blue-100 bg-white p-1.5 text-[#001F3F] shadow-[0_16px_40px_rgba(0,31,63,0.2)]">
                        <input
                          type="search"
                          aria-label="Search countries"
                          placeholder="Search country or code"
                          value={countrySearch}
                          onChange={(event) => setCountrySearch(event.target.value)}
                          className="mb-1 h-10 w-full rounded-lg bg-blue-50/70 px-3 text-sm outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-blue-300"
                        />
                        <div role="listbox" aria-label="Select a country" className="max-h-56 overflow-y-auto">
                          {visibleCountries.length > 0 ? visibleCountries.map((country) => (
                            <button
                              key={country.id}
                              type="button"
                              role="option"
                              aria-selected={country.id === countryId}
                              onClick={() => {
                                setCountryId(country.id);
                                setCountrySearch("");
                                setIsCountryMenuOpen(false);
                              }}
                              className="flex min-h-10 w-full items-center gap-3 rounded-lg px-3 text-left text-sm transition-colors hover:bg-blue-50 focus-visible:bg-blue-50 focus-visible:outline-none"
                            >
                              <CountryFlag country={country.id} />
                              <span className="flex-1">{country.country}</span>
                              <span className="text-slate-500">{country.code}</span>
                            </button>
                          )) : (
                            <p className="px-3 py-4 text-sm text-slate-500">No matching countries</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <label className="sr-only" htmlFor="hero-phone-number">Phone Number</label>
                  <input
                    id="hero-phone-number"
                    type="tel"
                    name="phone"
                    autoComplete="tel-national"
                    placeholder="Phone Number"
                    className="min-w-0 flex-1 bg-transparent px-3 text-sm text-[#001F3F] outline-none placeholder:text-slate-600 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#3478c9]"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                  />
                </div>
                <label className="block min-w-0">
                  <span className="sr-only">Budget</span>
                  <select
                    name="budget"
                    value={budget}
                    onChange={(event) => setBudget(event.target.value)}
                    className={`${inputClassName} appearance-none`}
                    required
                  >
                    <option value="" disabled>Budget</option>
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000+">$25,000+</option>
                  </select>
                </label>
                <label className="block min-w-0">
                  <span className="sr-only">Timeline</span>
                  <select
                    name="timeline"
                    value={timeline}
                    onChange={(event) => setTimeline(event.target.value)}
                    className={`${inputClassName} appearance-none`}
                    required
                  >
                    <option value="" disabled>Timeline</option>
                    <option value="As soon as possible">As soon as possible</option>
                    <option value="Within 2 weeks">Within 2 weeks</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </label>
                <label className="block min-w-0 sm:col-span-2">
                  <span className="sr-only">Message</span>
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="min-h-24 w-full resize-y rounded-lg bg-white/85 px-4 py-3 text-sm text-[#001F3F] outline-none transition placeholder:text-slate-500 focus:ring-2 focus:ring-blue-300"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                  />
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="mt-4 w-full"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </Button>
              <p className="mt-3 text-center text-xs text-slate-500">Your project details stay private with our team.</p>
            </form>
    </div>
  );
};

export default HeroInquiryForm;
