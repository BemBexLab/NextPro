"use client";

import { useState } from "react";
import {
  showSubmissionError,
  showSubmissionLoading,
  showSubmissionSuccess,
  submitSubmission,
} from "@/lib/submission";

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

export default function ServiceContactForm({ form, className = "" }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!form) return null;

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const name =
      [firstName, lastName].filter(Boolean).join(" ") ||
      String(formData.get("name") || "").trim();

    setIsSubmitting(true);
    await showSubmissionLoading();

    try {
      await submitSubmission({
        name,
        email: String(formData.get("email") || "").trim(),
        website: String(formData.get("website") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        service: form.service || form.ariaLabel || "Website Inquiry",
        message: String(formData.get("message") || "").trim(),
        source: form.ariaLabel || "Location Contact Form",
      });
      formElement.reset();
      await showSubmissionSuccess();
    } catch (error) {
      await showSubmissionError(
        error instanceof Error ? error.message : undefined,
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label={form.ariaLabel || "Contact form"}
      aria-busy={isSubmitting}
      className={`relative mx-auto w-full max-w-[520px] rounded-3xl border border-white/80 bg-white p-5 shadow-[0_24px_70px_rgba(2,8,23,0.32)] sm:p-7 lg:max-w-[440px] ${className}`}
    >
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
        {(form.fields || []).map((field, index) => (
          <HeroField key={field.id || field.name || index} field={field} />
        ))}
      </div>

      {form.submitLabel ? (
        <button
          type="submit"
          disabled={isSubmitting}
          className={
            form.submitClassName ||
            "mt-6 w-full rounded-xl bg-[#0b63b8] px-6 py-3.5 font-semibold text-white shadow-md shadow-blue-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-[#075aa6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63b8] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70 sm:mt-7"
          }
        >
          {isSubmitting ? "Sending..." : form.submitLabel}
        </button>
      ) : null}
    </form>
  );
}
