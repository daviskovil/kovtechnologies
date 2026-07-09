import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://kovtechnologies.com/sitemap.xml",
    host: "https://kovtechnologies.com",
  };
}
