import React from 'react';
import SubServiceDetailClient from './SubServiceDetailClient';
import { getSubCategory, getServiceById, services } from '@/data/services';
import { withEnUsHreflang } from "@/lib/metadata";

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

  const slugify = (str) =>
    str
      ?.toString()
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .replace(/^-+|-+$/g, '') || 'service';

  const canonical = `https://www.webfoundersusa.com/service/${slugify(
    parentService?.id || parentService?.name || id
  )}/${slugify(subCategory?.id || sub)}`;

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
    openGraph: {
      title,
      description,
    },
  });
}

export default async function Page({ params }) {
  const resolvedParams = await params;

  return <SubServiceDetailClient params={resolvedParams} />;
}
