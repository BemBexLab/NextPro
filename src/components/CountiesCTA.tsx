import type { ReactNode } from "react";
import { ServiceContactForm } from "@/app/service/seo-services/components/ServiceHero";

type CountiesCTAForm = {
  action?: string;
  method?: "get" | "post";
  ariaLabel?: string;
  fields?: Record<string, unknown>[];
  submitLabel?: ReactNode;
  submitClassName?: string;
};

type CountiesCTAProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  form?: CountiesCTAForm;
  className?: string;
};

const defaultForm: CountiesCTAForm = {
  ariaLabel: "Contact Web Founders USA",
  fields: [
    {
      name: "firstName",
      placeholder: "First Name",
      autoComplete: "given-name",
      colSpan: 1,
    },
    {
      name: "lastName",
      placeholder: "Last Name",
      autoComplete: "family-name",
      colSpan: 1,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email Address",
      autoComplete: "email",
    },
    {
      name: "website",
      type: "url",
      placeholder: "Website URL",
      autoComplete: "url",
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Phone",
      autoComplete: "tel",
    },
    {
      as: "textarea",
      name: "message",
      placeholder: "Message",
    },
  ],
  submitLabel: "Request a Free SEO Audit",
};

export default function CountiesCTA({
  eyebrow = "A smarter way to grow",
  title = "Turn search visibility into steady growth.",
  description =
    "Tell us about your business and we'll show you where a focused SEO strategy can create more opportunities.",
  form,
  className = "",
}: CountiesCTAProps) {
  const contactForm = { ...defaultForm, ...form };

  return (
    <section
      className={`relative isolate overflow-hidden border-y border-slate-800 bg-[#06142f] py-16 sm:py-20 lg:py-28 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(14,165,233,0.22),transparent_30%),radial-gradient(circle_at_92%_78%,rgba(37,99,235,0.28),transparent_34%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full border border-sky-300/10 shadow-[0_0_80px_rgba(14,165,233,0.12)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-[-8rem] h-96 w-96 rounded-full border border-blue-400/10 shadow-[0_0_100px_rgba(37,99,235,0.16)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-[92%] max-w-[1280px] items-center gap-12 sm:w-[90%] lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 text-white lg:col-span-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-200 shadow-[0_8px_30px_rgba(14,165,233,0.12)]">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-300" />
            </span>
            {eyebrow}
          </div>
          <h2 className="max-w-xl text-4xl font-semibold sm:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
            {description}
          </p>
        </div>

        <aside className="relative min-w-0 lg:col-span-6">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[2.25rem] bg-gradient-to-br from-sky-400/25 via-blue-500/10 to-indigo-500/25 blur-2xl"
          />
          <div className="relative mb-3 flex items-center justify-between px-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
            <span>Start with a free consultation</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Quick response
            </span>
          </div>
          <ServiceContactForm
            form={contactForm}
            className="relative z-10 border-slate-200/80 shadow-[0_28px_90px_rgba(2,8,23,0.46)] lg:ml-auto"
          />
          <p className="relative z-10 mt-3 text-center text-xs leading-5 text-slate-400">
            Your information is private and will only be used to respond to your request.
          </p>
        </aside>
      </div>
    </section>
  );
}
