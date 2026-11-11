import { MetadataRoute } from "next";
import { COMPANY } from "@/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${COMPANY.websiteUrl}/sitemap.xml`,
  };
}
