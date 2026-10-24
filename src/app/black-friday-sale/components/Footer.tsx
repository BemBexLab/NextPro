import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const footerLinks = [
  { label: "Services", href: "#our-services-heading" },
  { label: "Work", href: "#recent-projects-heading" },
  { label: "Process", href: "#process-heading" },
  { label: "FAQ", href: "#faq-heading" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/WebfoundersUSA/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/webfoundersusa/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/web-founders-usa/",
    icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@WebFoundersUSA",
    icon: FaYoutube,
  },
];

const Footer = () => {
  return (
    <footer
      id="landing-test-footer"
      className="relative isolate overflow-hidden bg-[#091116] text-white"
    >
      <section
        aria-labelledby="black-friday-footer-heading"
        className="relative isolate overflow-hidden border-b border-white/10 px-4 py-12 sm:px-6 sm:py-14 lg:py-12 xl:pb-0"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.07),transparent_55%)]"
        />
        <div className="mx-auto grid w-full max-w-[1800px] min-w-0 items-stretch gap-7 text-center xl:min-h-[280px] xl:grid-cols-[minmax(0,min(25vw,440px))_minmax(0,1fr)_minmax(0,min(25vw,440px))] xl:gap-6 xl:text-left">
          <div className="relative z-0 hidden h-full min-h-full min-w-0 xl:block">
            <Image
              src="/Assets/High%20res/234fdd58-c30f-4ded-afb4-7f5fbafc7923.png"
              alt=""
              aria-hidden="true"
              width={1586}
              height={992}
              className="absolute inset-0 h-full w-full object-contain object-left"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-[850px] flex-col justify-center xl:text-center">
            <h2
              id="black-friday-footer-heading"
              className="break-words text-[clamp(1.75rem,3.3vw,2.7rem)] font-black uppercase leading-[1.06] tracking-[-0.035em]"
            >
              Don&apos;t Miss Our{" "}
              <span className="text-[#f31624]">Black Friday</span> Offer!
            </h2>
            <p className="mx-auto mt-3 max-w-[760px] text-sm leading-relaxed text-white sm:text-base lg:text-lg">
              Get a high-converting website for your business at an exclusive
              price. Limited slots available.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="#request-audit"
                className="inline-flex min-h-14 w-full max-w-[340px] min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#ff1b27] to-[#d9000c] px-3 text-[13px] font-semibold leading-tight text-white shadow-[0_8px_22px_rgba(233,12,20,0.3)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#091116] sm:w-auto sm:gap-2.5 sm:whitespace-nowrap sm:px-6 sm:text-base"
              >
                <span className="min-w-0 text-center">Claim My Black Friday Deal</span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0"
                  strokeWidth={2.5}
                />
              </a>
            </div>
          </div>
          <div className="relative z-0 hidden h-full min-h-full min-w-0 xl:block">
            <Image
              src="/Assets/High%20res/1c37117e-f2b5-46e8-9089-39c0330aab92.png"
              alt=""
              aria-hidden="true"
              width={1407}
              height={1118}
              className="absolute inset-0 h-full w-full object-contain object-right"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-[1260px] min-w-0 grid-cols-1 items-center gap-6 px-5 py-8 sm:px-7 sm:py-9 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-8 lg:px-10 lg:py-10">
        <Link
          href="/"
          aria-label="Web Founders USA home"
          className="flex min-w-0 items-center justify-center gap-4 lg:justify-start"
        >
          <Image
            src="/Assets/High%20res/image%20(10).png"
            alt=""
            aria-hidden="true"
            width={389}
            height={124}
            className="h-14 w-[120px] max-w-full object-contain sm:h-16 sm:w-[150px] lg:h-20 lg:w-[190px]"
          />
        </Link>

        <nav
          aria-label="Footer navigation"
          className="flex min-w-0 flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-semibold text-white/85 sm:gap-x-8 sm:text-base"
        >
          {footerLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="transition-colors hover:text-[#ff303b] focus-visible:text-[#ff303b]"
            >
              {label}
            </a>
          ))}
        </nav>

        <nav
          aria-label="Social media"
          className="flex items-center justify-center gap-3 lg:justify-end"
        >
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#101820] transition hover:bg-[#f31624] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Icon aria-hidden="true" className="h-5 w-5" />
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1260px] min-w-0 flex-col items-center justify-center gap-3 px-5 py-4 text-xs text-white/60 sm:flex-row sm:px-7 sm:text-sm lg:px-10">
          <p className="w-full min-w-0 max-w-full text-center leading-relaxed">
            &copy; 2026 WebFoundersUSA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
