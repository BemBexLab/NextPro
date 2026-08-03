import { SITE_URL } from "@/lib/metadata";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/search",
          "/checkout/",
          "/cart/",
          "/thank-you/",
          "/*?s=*",
          "/*?filter=*",
          "/*?sort=*",
          "/*?_rsc=*",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
