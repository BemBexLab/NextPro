import Image from "next/image";
import Link from "next/link";

const actionStyles = {
  primary:
    "rounded-lg bg-[#0b63b8] px-6 py-3 font-semibold text-white shadow transition-colors hover:bg-[#075aa6]",
  secondary:
    "rounded-lg border border-white/40 px-6 py-3 text-white backdrop-blur-sm transition-colors hover:bg-white/10",
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
  const widthClassName = colSpan === 1 ? "col-span-1" : "col-span-2";
  const controlClassName = `rounded-md border border-gray-200 bg-white p-3 ${className}`;

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
          className={`h-38 w-full ${controlClassName}`}
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
    <section className={`relative w-full overflow-hidden py-20 ${className}`}>
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

      <div className="relative mx-auto grid w-[92%] max-w-[1200px] grid-cols-12 items-start gap-8">
        <div className={`col-span-12 text-white ${hasForm ? "lg:col-span-7" : ""}`}>
          {breadcrumbs.length ? (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/90">
                {breadcrumbs.map((item, index) => (
                  <li
                    key={`${item.href || "current"}-${index}`}
                    className="flex items-center gap-2"
                  >
                    {index > 0 ? <span aria-hidden="true">{">"}</span> : null}
                    {item.href ? (
                      <Link href={item.href} className="transition-colors hover:text-white">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="font-medium text-white">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          {title ? (
            <h1 className="mt-10 text-4xl font-bold leading-tight drop-shadow-md">
              {title}
            </h1>
          ) : null}

          {description ? (
            <div className="mt-6 max-w-[720px] text-md text-slate-100/90 md:text-xl">
              {description}
            </div>
          ) : null}

          {actions.length ? (
            <div className="mt-8 flex flex-wrap gap-4">
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
                      &gt;
                    </span>
                  )}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        {hasForm ? (
          <aside className="col-span-12 mt-15 lg:col-span-5">
            <form
              action={form.action}
              method={form.method || "post"}
              aria-label={form.ariaLabel || "Contact form"}
              className="mx-auto max-w-[420px] rounded-xl bg-[#F2F3F5] p-6 shadow-xl lg:ml-auto"
            >
              <div className="grid grid-cols-2 gap-4">
                {(form.fields || []).map((field, index) => (
                  <HeroField key={field.id || field.name || index} field={field} />
                ))}
              </div>

              {form.submitLabel ? (
                <button
                  type={form.action ? "submit" : "button"}
                  className={
                    form.submitClassName ||
                    "mt-10 w-full rounded-full bg-[#0b63b8] py-3 font-semibold text-white"
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
