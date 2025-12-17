import React from 'react';
import ServiceDetailClient from './ServiceDetailClient';
import { getServiceById } from '@/data/services';

export async function generateMetadata({ params }) {
  const { id } = params;
  const service = getServiceById(id);
  const title = service?.seo?.title || service?.title || 'Service';
  const description = service?.seo?.description || service?.desc || '';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default function Page({ params }) {
  return <ServiceDetailClient params={params} />;
}
