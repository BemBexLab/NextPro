"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { buildFaqSchema, cleanFaqText, normalizeFaqQuestion } from "@/lib/faqSchema";

const FAQ_HEADING_PATTERN = /\b(frequently asked questions|faq|faqs)\b/i;
const QUESTION_SELECTOR = "h3, h4, h5, h6";

function hasFaqHeading(container) {
  return Array.from(container.children).some(
    (child) =>
      /^H[1-6]$/.test(child.tagName) &&
      FAQ_HEADING_PATTERN.test(cleanFaqText(child.textContent || ""))
  );
}

function getFaqContainers() {
  const containers = Array.from(document.querySelectorAll("section, article, div"));

  return containers.filter((container) => {
    if (!hasFaqHeading(container)) {
      return false;
    }

    return !containers.some(
      (other) => other !== container && other.contains(container) && hasFaqHeading(other)
    );
  });
}

function extractFaqsFromContainer(container) {
  const questionHeadings = Array.from(container.querySelectorAll(QUESTION_SELECTOR)).filter(
    (heading) => !FAQ_HEADING_PATTERN.test(cleanFaqText(heading.textContent || ""))
  );

  return questionHeadings
    .map((heading) => {
      const question = normalizeFaqQuestion(heading.textContent || "");
      const parent = heading.parentElement;

      if (!question || !parent) {
        return null;
      }

      const siblings = Array.from(parent.children);
      const headingIndex = siblings.indexOf(heading);
      const answer = siblings
        .slice(headingIndex + 1)
        .map((element) => cleanFaqText(element.textContent || ""))
        .filter(Boolean)
        .join(" ")
        .trim();

      if (!answer) {
        return null;
      }

      return { question, answer };
    })
    .filter(Boolean);
}

const AutoFaqJsonLd = () => {
  const pathname = usePathname();
  const [schemaJson, setSchemaJson] = useState("");

  useEffect(() => {
    const hasExistingFaqSchema = Array.from(
      document.querySelectorAll('script[type="application/ld+json"]')
    ).some((script) => {
      if (script.id === "auto-faq-jsonld") {
        return false;
      }

      return /"@type"\s*:\s*"FAQPage"/.test(script.textContent || "");
    });

    if (hasExistingFaqSchema) {
      setSchemaJson("");
      return;
    }

    const containers = getFaqContainers();
    const faqs = containers.flatMap((container) => extractFaqsFromContainer(container));
    const schema = buildFaqSchema(faqs);

    setSchemaJson(schema ? JSON.stringify(schema) : "");
  }, [pathname]);

  if (!schemaJson) {
    return null;
  }

  return (
    <script
      id="auto-faq-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schemaJson }}
    />
  );
};

export default AutoFaqJsonLd;
