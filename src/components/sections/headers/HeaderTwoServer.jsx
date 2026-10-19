import fs from "node:fs";
import path from "node:path";
import {
  locationNavigation,
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

function getLocationLinks() {
  const locationsDirectory = path.join(process.cwd(), "src", "app", "locations");
  let discoveredLinks = [];

  try {
    discoveredLinks = fs
      .readdirSync(locationsDirectory, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isDirectory() &&
          !entry.name.startsWith("[") &&
          !entry.name.startsWith("_") &&
          ["page.tsx", "page.ts", "page.jsx", "page.js"].some((file) =>
            fs.existsSync(path.join(locationsDirectory, entry.name, file)),
          ),
      )
      .map((entry) => {
        const pageFile = ["page.tsx", "page.ts", "page.jsx", "page.js"]
          .map((file) => path.join(locationsDirectory, entry.name, file))
          .find((filePath) => fs.existsSync(filePath));

        let title = "";
        if (pageFile) {
          const pageSource = fs.readFileSync(pageFile, "utf8");
          const titleMatch = pageSource.match(
            /(?:title\s*:\s*["'`]([^"'`]+)["'`]|title\s*=\s*["']([^"']+)["'])/,
          );
          title = titleMatch?.[1] || titleMatch?.[2] || "";
        }

        title = title
          .split(/\s*\|\s*/)[0]
          .replace(/\s*[-\u2013\u2014]\s*Web Founders USA$/i, "")
          .trim();
        if (!title) {
          title = entry.name
            .split("-")
            .filter(Boolean)
            .map((word) =>
              ["seo", "usa", "ma", "ga", "az", "b2b"].includes(
                word.toLowerCase(),
              )
                ? word.toUpperCase()
                : word.charAt(0).toUpperCase() + word.slice(1),
            )
            .join(" ");
        }

        return {
          id: entry.name,
          path: `/locations/${entry.name}/`,
          title,
        };
      });
  } catch {
    discoveredLinks = [];
  }

  const linksByPath = new Map(
    locationNavigation.map((location) => [
      location.path.replace(/\/$/, ""),
      location,
    ]),
  );

  for (const location of discoveredLinks) {
    const key = location.path.replace(/\/$/, "");
    if (!linksByPath.has(key)) {
      linksByPath.set(key, location);
    }
  }

  return Array.from(linksByPath.values());
}

export default function HeaderTwoServer(props) {
  return (
    <HeaderTwo
      {...props}
      serviceLinks={getServiceLinks()}
      seoSubServices={getSeoServiceLinks()}
      locationLinks={getLocationLinks()}
    />
  );
}
