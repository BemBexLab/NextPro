import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type BreadcrumbItem = {
  label: ReactNode;
  href?: string;
};

type HeroAction = {
  label: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

type SubServiceHeroProps = {
  title?: ReactNode;
  description?: ReactNode;
  descriptionHtml?: string;
  imageSrc?: string;
  imageAlt?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: HeroAction[];
  className?: string;
  imageClassName?: string;
  containerClassName?: string;
  overlayClassName?: string;
  priority?: boolean;
};

function getActionClassName(variant: HeroAction["variant"] = "primary") {
  if (variant === "secondary") {
    return "rounded-lg border border-white/40 px-6 py-3 text-white backdrop-blur-sm transition-colors hover:bg-white/10";
  }

  return "rounded-lg bg-[#0b63b8] px-6 py-3 font-semibold text-white shadow transition-colors hover:bg-[#075aa6]";
}

function renderDescription(description?: ReactNode, descriptionHtml?: string) {
  if (descriptionHtml) {
    return (
      <div
        className="mt-6 text-md text-slate-100/90 md:text-xl"
        style={{ width: "50vw", maxWidth: "50vw" }}
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
      />
    );
  }

  if (!description) {
    return null;
  }

  return (
    <div
      className="mt-6 text-md text-slate-100/90 md:text-xl"
      style={{ width: "50vw", maxWidth: "50vw" }}
    >
      {description}
    </div>
  );
}

export default function SubServiceHero({
  title,
  description,
  descriptionHtml,
  imageSrc = "/service-testing/Local-SEO-Agency-LocalMighty.webp",
  imageAlt = "Service hero background",
  breadcrumbs = [],
  actions = [],
  className = "",
  imageClassName = "object-cover object-center brightness-[0.15]",
  containerClassName = "relative mx-auto grid w-[92%] max-w-[1200px] grid-cols-12 items-start gap-8",
  overlayClassName = "bg-black/55",
  priority = true,
}: SubServiceHeroProps) {
  if (!title && !description && !descriptionHtml && !imageSrc) {
    return null;
  }

  return (
    <section className={`relative w-full overflow-hidden py-20 ${className}`}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          fetchPriority={priority ? "high" : undefined}
          sizes="100vw"
          className={imageClassName}
        />
      ) : null}
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden="true" />

      <div className={containerClassName}>
        <div className="col-span-12 text-white">
          {breadcrumbs.length ? (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/90">
                {breadcrumbs.map((item, index) => (
                  <li key={`${item.href || "current"}-${index}`} className="flex items-center gap-2">
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

          {renderDescription(description, descriptionHtml)}

          {actions.length ? (
            <div className="mt-8 flex flex-wrap gap-4">
              {actions.map((action, index) => (
                <Link
                  key={`${action.href}-${index}`}
                  href={action.href}
                  className={getActionClassName(action.variant)}
                >
                  {action.label}
                  <span className="ml-3 inline-block">&gt;</span>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
