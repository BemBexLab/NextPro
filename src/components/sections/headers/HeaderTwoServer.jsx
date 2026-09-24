import fs from "node:fs";
import path from "node:path";
import { services } from "@/data/services";
import { services as seoServices } from "@/app/service/seo-services/components/subservices";
import HeaderTwo from "./headerTwo";

function getServiceLinks() {
  return services.map((service) => ({
    id: service.id,
    title: service.title,
    path: `/service/${service.id}/`,
  }));
}

function getSeoServiceLinks() {
  const seoService = seoServices.find(
    (service) => service.id === "seo-services",
  );

  const dataLinks = (seoService?.sub_categories || []).map((service) => ({
    id: service.id,
    title: service.title,
    path: `/service/seo-services/${service.slug || service.id}/`,
  }));

  const seoServicesDirectory = path.join(
    process.cwd(),
    "src",
    "app",
    "service",
    "seo-services",
  );

  let customRouteLinks = [];

  try {
    customRouteLinks = fs
      .readdirSync(seoServicesDirectory, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isDirectory() &&
          entry.name !== "components" &&
          !entry.name.startsWith("[") &&
          ["page.tsx", "page.ts", "page.jsx", "page.js"].some((file) =>
            fs.existsSync(path.join(seoServicesDirectory, entry.name, file)),
          ),
      )
      .map((entry) => ({
        id: entry.name,
        title: entry.name
          .split("-")
          .filter(Boolean)
          .map((word) =>
            ["seo", "b2b"].includes(word.toLowerCase())
              ? word.toUpperCase()
              : word.charAt(0).toUpperCase() + word.slice(1),
          )
          .join(" "),
        path: `/service/seo-services/${entry.name}/`,
      }));
  } catch {
    customRouteLinks = [];
  }

  return Array.from(
    new Map(
      [...dataLinks, ...customRouteLinks].map((service) => [
        service.id,
        service,
      ]),
    ).values(),
  );
}

export default function HeaderTwoServer(props) {
  return (
    <HeaderTwo
      {...props}
      serviceLinks={getServiceLinks()}
      seoSubServices={getSeoServiceLinks()}
    />
  );
}
