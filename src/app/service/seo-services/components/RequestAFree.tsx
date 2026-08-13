import Link from "next/link";
import type { ReactNode } from "react";

type RequestAFreeProps = {
  title?: ReactNode;
  paragraphs?: ReactNode[];
  icon?: ReactNode | false;
  cta?: {
    label?: ReactNode;
    href?: string;
    ariaLabel?: string;
    target?: "_self" | "_blank";
    rel?: string;
  };
};

function AuditIcon() {
  return (
    <svg
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  );
}

export default function RequestAFree({
  title = null,
  paragraphs = [],
  icon,
  cta = {},
}: RequestAFreeProps = {}) {
  const visibleParagraphs = (
    Array.isArray(paragraphs) ? paragraphs : []
  ).filter((paragraph) => paragraph !== null && paragraph !== undefined);
  const showContent = visibleParagraphs.length > 0;
  const showCta = Boolean(cta.label && cta.href);

  if (!title && !showContent && !showCta) {
    return null;
  }

  const visibleIcon = icon === false ? null : (icon ?? <AuditIcon />);
  const showHeading = Boolean(title);

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-[92%] max-w-[1240px]">
        <div
          className="relative isolate overflow-hidden rounded-3xl shadow-[0_30px_80px_-35px_rgba(5,45,112,0.75)] sm:rounded-[32px]"
          style={{
            background:
              "linear-gradient(135deg, #041f52 0%, #063b8d 55%, #075eb8 100%)",
          }}
        >
          <div
            className="absolute -left-24 -top-28 -z-10 h-80 w-80 rounded-full bg-[#1587e8]/45 blur-3xl"
            style={{ backgroundColor: "rgba(21, 135, 232, 0.45)" }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-40 right-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
            style={{ backgroundColor: "rgba(34, 211, 238, 0.2)" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:44px_44px]"
            aria-hidden="true"
          />

          {showHeading || showContent ? (
            <div
              className={`grid items-center gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:gap-12 lg:px-14 lg:py-16 xl:px-16 ${
                showHeading && showContent
                  ? "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
                  : "mx-auto max-w-4xl"
              }`}
            >
              {showHeading ? (
                <div className="text-center lg:text-left">
                  {visibleIcon ? (
                    <div
                      className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border shadow-lg backdrop-blur-sm lg:mx-0"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.12)",
                        borderColor: "rgba(255, 255, 255, 0.22)",
                        color: "#ffffff",
                      }}
                    >
                      {visibleIcon}
                    </div>
                  ) : null}

                  {title ? (
                    <h2
                      className={`${visibleIcon ? "mt-6" : ""} text-3xl font-semibold leading-[1.12] tracking-[-0.025em] sm:text-4xl lg:text-[44px]`}
                      style={{ color: "#ffffff" }}
                    >
                      {title}
                    </h2>
                  ) : null}

                  {title ? (
                    <div
                      className="mx-auto mt-6 h-1 w-16 rounded-full bg-cyan-300 lg:mx-0"
                      style={{ backgroundColor: "#67e8f9" }}
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
              ) : null}

              {showContent ? (
                <div
                  className="rounded-2xl border p-6 text-center shadow-[0_20px_50px_-30px_rgba(0,0,0,0.65)] backdrop-blur-md sm:p-8 lg:text-left"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "rgba(255, 255, 255, 0.18)",
                  }}
                >
                  {visibleParagraphs.map((paragraph, index) => (
                    <div key={index}>
                      {index > 0 ? (
                        <div
                          className="my-5 h-px bg-white/15"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div
                        className={`${index === 0 ? "text-base font-medium sm:text-lg" : "text-sm sm:text-base"} leading-relaxed`}
                        style={{
                          color:
                            index === 0
                              ? "#ffffff"
                              : "rgba(219, 234, 254, 0.94)",
                        }}
                      >
                        {paragraph}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          {showCta ? (
            <div
              className="border-t px-6 py-6 text-center backdrop-blur-sm sm:px-10 sm:py-8"
              style={{
                backgroundColor: "rgba(3, 27, 70, 0.82)",
                borderColor: "rgba(255, 255, 255, 0.16)",
              }}
            >
              <Link
                href={cta.href!}
                aria-label={cta.ariaLabel}
                target={cta.target}
                rel={
                  cta.rel ||
                  (cta.target === "_blank" ? "noopener noreferrer" : undefined)
                }
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-4 text-center text-sm font-semibold text-[#064a9f] shadow-[0_14px_35px_-14px_rgba(0,0,0,0.65)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#04245c] sm:w-auto sm:text-base"
                style={{ backgroundColor: "#ffffff", color: "#064a9f" }}
              >
                {cta.label}
                <svg
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
