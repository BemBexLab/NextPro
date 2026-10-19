import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import ServiceContactForm from "./ServiceContactForm";

const actionStyles = {
  primary:
    "inline-flex w-full items-center justify-center rounded-xl bg-[#0b63b8] px-5 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#075aa6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto sm:px-6",
  secondary:
    "inline-flex w-full items-center justify-center rounded-xl border border-white/40 bg-white/5 px-5 py-3.5 text-center font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto sm:px-6",
};

export default function ServiceHero({
  image,
  overlayClassName = "bg-gradient-to-br from-slate-950/90 via-slate-950/75 to-blue-950/85",
  breadcrumbs = [],
  title,
  description,
  actions = [],
  form,
  className = "",
}) {
  const hasForm = Boolean(form);

  return (
    <section
      className={`isolate relative w-full overflow-hidden py-12 sm:py-16 lg:py-20 ${className}`}
    >
      {image?.src ? (
        <Image
          src={image.src}
          alt={image.alt || ""}
          fill
          priority={image.priority ?? true}
          fetchPriority={(image.priority ?? true) ? "high" : undefined}
          sizes={image.sizes || "100vw"}
          className={image.className || "object-cover object-center"}
        />
      ) : null}
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_12%,rgba(14,165,233,0.2),transparent_42%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-[92%] max-w-[1280px] grid-cols-1 items-center gap-10 sm:w-[90%] lg:grid-cols-12 lg:gap-10 xl:gap-16">
        <div
          className={`min-w-0 text-white ${hasForm ? "lg:col-span-7" : "lg:col-span-12"}`}
        >
          {breadcrumbs.length ? (
            <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6">
              <ol className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-white/75 sm:text-sm">
                {breadcrumbs.map((item, index) => (
                  <li
                    key={`${item.href || "current"}-${index}`}
                    className="flex min-w-0 items-center gap-2"
                  >
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-white/40">
                        /
                      </span>
                    ) : null}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="break-words transition-colors hover:text-sky-200"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        aria-current="page"
                        className="min-w-0 break-words font-semibold text-white"
                      >
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <Image
            src="/images/Gemini_Generated_Image_n6ykdzn6ykdzn6yk__1_-removebg-preview.webp"
            alt="Google Verified Reviews"
            width={654}
            height={381}
            className="mb-4 h-auto w-20 object-contain object-left sm:w-44"
          />

          {title ? (
            <h1 className="max-w-[760px] break-words text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-balance drop-shadow-md sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          ) : null}

          {description ? (
            <div className="mt-5 max-w-[720px] text-base leading-7 text-slate-100/85 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
              {description}
            </div>
          ) : null}

          {actions.length ? (
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
              {actions.map((action, index) => (
                <Link
                  key={`${action.href}-${index}`}
                  href={action.href}
                  className={
                    action.className ||
                    actionStyles[action.variant || "primary"] ||
                    actionStyles.primary
                  }
                >
                  {action.label}
                  {action.showArrow === false ? null : (
                    <span
                      className="ml-3 inline-flex items-center text-lg"
                      aria-hidden="true"
                    >
                      <FaArrowCircleRight />
                    </span>
                  )}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        {hasForm ? (
          <aside className="relative min-w-0 lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-sky-400/20 via-blue-500/10 to-indigo-500/20 blur-xl"
            />
            <ServiceContactForm form={form} className="lg:ml-auto" />
          </aside>
        ) : null}
      </div>
    </section>
  );
}
