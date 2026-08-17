import React from 'react';
import SubServiceDetailClient from './SubServiceDetailClient';
import { getSubCategory, getServiceById, services } from '@/data/services';
import { toAbsoluteUrl, withEnUsHreflang } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.flatMap((service) =>
    (service.sub_categories || []).map((subCategory) => ({
      id: service.id,
      sub: subCategory.slug || subCategory.id,
    })),
  );
}

export async function generateMetadata({ params }) {
  const { id, sub } = await params;
  const subCategory = await getSubCategory(id, sub);
  const parentService = await getServiceById(id);

  const title = subCategory?.seo?.title || subCategory?.title || 'Service';
  const description = subCategory?.seo?.description || subCategory?.desc || '';

  const canonical = toAbsoluteUrl(`/service/${id}/${sub}/`);

  return withEnUsHreflang({
    title,
    description,
    keywords: subCategory?.seo?.keyword
      ? String(subCategory.seo.keyword).split(',').map((k) => k.trim())
      : parentService?.seo?.keyword
        ? String(parentService.seo.keyword).split(',').map((k) => k.trim())
        : undefined,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        maxImagePreview: "large",
        maxSnippet: -1,
        maxVideoPreview: -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
    },
  });
}

export default async function Page({ params }) {
  const resolvedParams = await params;

  return <SubServiceDetailClient params={resolvedParams} />;
}
