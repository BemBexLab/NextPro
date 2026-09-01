import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const actionStyles = {
  primary:
    "inline-flex w-full items-center justify-center rounded-lg bg-[#0b63b8] px-5 py-3 text-center font-semibold text-white shadow transition-colors hover:bg-[#075aa6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto sm:px-6",
  secondary:
    "inline-flex w-full items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-center font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto sm:px-6",
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
  const controlClassName = `min-w-0 rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#0b63b8] focus:ring-2 focus:ring-[#0b63b8]/20 ${className}`;

  return (
    <div className={widthClassName}>
      {label ? (
        <label htmlFor={fieldId} className="mb-2 block text-sm font-medium text-gray-700">
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
  overlayClassName = "bg-black/55",
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
      className={`relative w-full overflow-hidden py-12 sm:py-16 lg:py-20 ${className}`}
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

      <div className="relative mx-auto grid w-[92%] max-w-[1200px] grid-cols-1 items-start gap-10 sm:w-[90%] lg:grid-cols-12 lg:gap-10 xl:gap-14">
        <div
          className={`min-w-0 text-white ${hasForm ? "lg:col-span-7" : "lg:col-span-12"}`}
        >
          {breadcrumbs.length ? (
            <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6">
              <ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-white/90 sm:text-sm">
                {breadcrumbs.map((item, index) => (
                  <li
                    key={`${item.href || "current"}-${index}`}
                    className="flex min-w-0 items-center gap-2"
                  >
                    {index > 0 ? <span aria-hidden="true">{">"}</span> : null}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="break-words transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        aria-current="page"
                        className="min-w-0 break-words font-medium text-white"
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
            <h1 className="break-words text-3xl font-bold leading-tight text-balance drop-shadow-md sm:text-4xl lg:text-5xl">
              {title}
            </h1>
          ) : null}

          {description ? (
            <div className="mt-5 max-w-[720px] text-base leading-7 text-slate-100/90 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
              {description}
            </div>
          ) : null}

          {actions.length ? (
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
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
                    <span className="ml-3 inline-block" aria-hidden="true">
                      <FaArrowCircleRight />
                    </span>
                  )}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        {hasForm ? (
          <aside className="min-w-0 lg:col-span-5">
            <form
              action={form.action}
              method={form.method || "post"}
              aria-label={form.ariaLabel || "Contact form"}
              className="mx-auto w-full max-w-[520px] rounded-2xl bg-[#F2F3F5] p-4 shadow-xl sm:p-6 lg:ml-auto lg:max-w-[420px]"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {(form.fields || []).map((field, index) => (
                  <HeroField key={field.id || field.name || index} field={field} />
                ))}
              </div>

              {form.submitLabel ? (
                <button
                  type={form.action ? "submit" : "button"}
                  className={
                    form.submitClassName ||
                    "mt-6 w-full rounded-full bg-[#0b63b8] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#075aa6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63b8] focus-visible:ring-offset-2 sm:mt-8"
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
