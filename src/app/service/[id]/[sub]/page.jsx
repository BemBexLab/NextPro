import React from 'react';
import SubServiceDetailClient from './SubServiceDetailClient';
import { getSubCategory } from '@/data/services';

export async function generateMetadata({ params }) {
  const { id, sub } = params;
  const service = getSubCategory(id, sub);
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
  return <SubServiceDetailClient params={params} />;
}
