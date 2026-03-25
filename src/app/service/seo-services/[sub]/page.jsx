import React from 'react';
import SubServiceDetailClient from './SubServiceDetailClient';
import { getSubCategory, getServiceById } from '../components/subservices';

export async function generateMetadata({ params }) {
  const { id, sub } = params;
  const serviceId = id || "seo-services";
  const subCategory = await getSubCategory(serviceId, sub);
  const parentService = await getServiceById(serviceId);

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
  const serviceId = params?.id || "seo-services";
  const normalizedParams = { ...params, id: serviceId };
  return <SubServiceDetailClient params={normalizedParams} />;
}
