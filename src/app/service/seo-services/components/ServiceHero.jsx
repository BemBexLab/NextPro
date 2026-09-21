import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const actionStyles = {
  primary:
    "inline-flex w-full items-center justify-center rounded-xl bg-[#0b63b8] px-5 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#075aa6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto sm:px-6",
  secondary:
    "inline-flex w-full items-center justify-center rounded-xl border border-white/40 bg-white/5 px-5 py-3.5 text-center font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto sm:px-6",
};

function HeroField({ field }) {
  const {
    as = "input",
    className = "",
    colSpan = 2,
    id,
    label,
    name,
    placeholder,
    required = false,
    rows,
    type = "text",
    ...fieldProps
  } = field;
  const fieldId = id || name;
  const widthClassName =
    colSpan === 1 ? "col-span-1" : "col-span-1 sm:col-span-2";
  const controlClassName = `min-w-0 rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-base text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-[#0b63b8] focus:bg-white focus:ring-4 focus:ring-[#0b63b8]/10 ${className}`;

  return (
    <div className={widthClassName}>
      {label ? (
        <label
          htmlFor={fieldId}
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          {label}
        </label>
      ) : null}

      {as === "textarea" ? (
        <textarea
          {...fieldProps}
          id={fieldId}
          name={name}
          rows={rows}
          placeholder={placeholder}
          required={required}
          aria-label={label ? undefined : placeholder}
          className={`min-h-32 w-full resize-y sm:min-h-36 ${controlClassName}`}
        />
      ) : (
        <input
          {...fieldProps}
          id={fieldId}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          aria-label={label ? undefined : placeholder}
          className={`w-full ${controlClassName}`}
        />
      )}
    </div>
  );
}

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

          {title ? (
            <h1 className="max-w-[760px] break-words text-4xl font-extrabold leading-[1.04] tracking-[-0.04em] text-balance drop-shadow-md sm:text-5xl lg:text-6xl">
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
            <form
              action={form.action}
              method={form.method || "post"}
              aria-label={form.ariaLabel || "Contact form"}
              className="relative mx-auto w-full max-w-[520px] rounded-3xl border border-white/80 bg-white p-5 shadow-[0_24px_70px_rgba(2,8,23,0.32)] sm:p-7 lg:ml-auto lg:max-w-[440px]"
            >
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
                {(form.fields || []).map((field, index) => (
                  <HeroField
                    key={field.id || field.name || index}
                    field={field}
                  />
                ))}
              </div>

              {form.submitLabel ? (
                <button
                  type={form.action ? "submit" : "button"}
                  className={
                    form.submitClassName ||
                    "mt-6 w-full rounded-xl bg-[#0b63b8] px-6 py-3.5 font-semibold text-white shadow-md shadow-blue-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-[#075aa6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63b8] focus-visible:ring-offset-2 sm:mt-7"
                  }
                >
                  {form.submitLabel}
                </button>
              ) : null}
            </form>
          </aside>
        ) : null}
      </div>
    </section>
  );
}
