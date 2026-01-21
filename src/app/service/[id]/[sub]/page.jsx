import React from 'react';
import SubServiceDetailClient from './SubServiceDetailClient';
import { getSubCategory, getServiceById } from '@/data/services';

export async function generateMetadata({ params }) {
  const { id, sub } = params;
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
    parentService?.title || parentService?.name || id
  )}/${slugify(subCategory?.id || sub)}`;

  return {
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
  };
}

export default function Page({ params }) {
  return <SubServiceDetailClient params={params} />;
}
