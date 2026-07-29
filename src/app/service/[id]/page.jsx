import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import { getServiceById, services } from "@/data/services";
import { withEnUsHreflang } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  const service = getServiceById(id);
  if (!service) {
    return {
      title: "Service Not Found",
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
    service?.id || id
  )}`;

  return withEnUsHreflang({
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
  });
}

export default async function Page({ params }) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} serviceId={id} />;
}
