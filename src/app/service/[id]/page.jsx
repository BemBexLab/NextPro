import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import { getServiceById, services } from "@/data/services";
import { toAbsoluteUrl, withEnUsHreflang } from "@/lib/metadata";

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

  const canonical = toAbsoluteUrl(`/service/${id}/`);

  return withEnUsHreflang({
    title,
    description,
    keywords: service?.seo?.keyword
      ? String(service.seo.keyword).split(',').map((k) => k.trim())
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
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} serviceId={id} />;
}
