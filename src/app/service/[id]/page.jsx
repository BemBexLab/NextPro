import React from 'react';
import ServiceDetailClient from './ServiceDetailClient';
import { getServiceById } from '@/data/services';
import { notFound, redirect } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { id } = params;

  const service = await getServiceById(id);
  if (!service) {
    return {
      title: 'Service Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = service?.seo?.title || service?.title || 'Service';
  const description = service?.seo?.description || service?.desc || '';

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
    service?.id || service?.id || id
  )}`;



  return {
    title,
    description,
    keywords: service?.seo?.keyword
      ? String(service.seo.keyword).split(',').map((k) => k.trim())
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
  if (!getServiceById(params?.id)) {
    notFound();
  }

  return <ServiceDetailClient params={params} />;
}
