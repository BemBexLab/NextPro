"use client";

import React from "react";
import { buildFaqSchema } from "@/lib/faqSchema";

const FaqJsonLd = ({ faqs = [] }) => {
  const schema = buildFaqSchema(faqs);

  if (!schema) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default FaqJsonLd;
