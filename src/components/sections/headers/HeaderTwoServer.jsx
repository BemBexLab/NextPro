import fs from "node:fs";
import path from "node:path";
import {
  seoSubServiceNavigation,
  serviceNavigation,
} from "@/data/navigation";
import HeaderTwo from "./headerTwo";

function getServiceLinks() {
  return serviceNavigation.map((service) => ({
    id: service.id,
    title: service.title,
    path: `/service/${service.id}/`,
  }));
}

function getSeoServiceLinks() {
  const dataLinks = seoSubServiceNavigation.map((service) => ({
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
