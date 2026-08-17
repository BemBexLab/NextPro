import { notFound } from "next/navigation";
import SubServiceDetailClient from "./SubServiceDetailClient";
import { getSubCategory, getServiceById } from "../components/subservices";
import { toAbsoluteUrl, withEnUsHreflang } from "@/lib/metadata";

const SERVICE_ID = "seo-services";

export const dynamicParams = false;

export function generateStaticParams() {
  const service = getServiceById(SERVICE_ID);

  return (service?.sub_categories || []).map((subCategory) => ({
    sub: subCategory.slug || subCategory.id,
  }));
}

export async function generateMetadata({ params }) {
  const { sub } = await params;
  const subCategory = getSubCategory(SERVICE_ID, sub);
  const parentService = getServiceById(SERVICE_ID);

  if (!parentService || !subCategory) {
    return {
      title: "Service Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = subCategory?.seo?.title || subCategory?.title || 'Service';
  const description = subCategory?.seo?.description || subCategory?.desc || '';

  const canonical = toAbsoluteUrl(`/service/${SERVICE_ID}/${sub}/`);

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
  const { sub } = await params;
  const parent = getServiceById(SERVICE_ID);
  const service = getSubCategory(SERVICE_ID, sub);

  if (!parent || !service) {
    notFound();
  }

  return (
    <SubServiceDetailClient
      parent={parent}
      service={service}
      serviceId={SERVICE_ID}
      sub={sub}
    />
  );
}
