import React from "react";

function decodeHtmlEntities(value = "") {
  return value
    .replace(/&#8211;|&ndash;/g, "-")
    .replace(/&#8212;|&mdash;/g, "-")
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&#038;|&amp;/g, "&")
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&hellip;/g, "...")
    .replace(/&nbsp;/g, " ");
}

export function cleanFaqText(value = "") {
  return decodeHtmlEntities(
    value
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]*>/g, " ")
  )
    .replace(/\s+/g, " ")
    .trim();
}

export function getFaqNodeText(value) {
  if (value === null || value === undefined || typeof value === "boolean") {
    return "";
  }

  if (typeof value === "string" || typeof value === "number") {
    return cleanFaqText(String(value));
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => getFaqNodeText(item))
      .filter(Boolean)
      .join(" ")
      .trim();
  }

  if (React.isValidElement(value)) {
    const html = value.props?.dangerouslySetInnerHTML?.__html;
    if (typeof html === "string") {
      return cleanFaqText(html);
    }

    return getFaqNodeText(value.props?.children);
  }

  return "";
}

export function normalizeFaqQuestion(value = "") {
  return cleanFaqText(value).replace(/^\d+\.\s*/, "");
}

export function normalizeFaqs(faqs = []) {
  return faqs
    .map((faq) => ({
      question: normalizeFaqQuestion(
        faq?.question || faq?.q || faq?.name || ""
      ),
      answer: getFaqNodeText(
        faq?.answer || faq?.ans || faq?.a || faq?.text || ""
      ),
    }))
    .filter((faq) => faq.question && faq.answer);
}

export function buildFaqSchema(faqs = []) {
  const normalizedFaqs = normalizeFaqs(faqs);

  if (!normalizedFaqs.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: normalizedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
