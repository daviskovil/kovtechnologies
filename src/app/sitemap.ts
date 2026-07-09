import type { MetadataRoute } from "next";
import { POSTS } from "@/content/blog";
import { SERVICES } from "@/content/services";
import { PLATFORMS } from "@/content/platforms";
import { SAP_MODULES } from "@/content/sap-modules";
import { SOLUTIONS } from "@/content/solutions";
import { HARDWARE_CATEGORIES } from "@/content/hardware-categories";
import { SOFTWARE_CATEGORIES } from "@/content/software-categories";

const BASE = "https://kovtechnologies.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...[
      "/about/",
      "/contact/",
      "/faq/",
      "/testimonials/",
      "/blog/",
      "/hardware/",
      "/software/",
      "/solutions/",
      "/services/",
      "/services/cybersecurity/",
      "/platform-services/",
    ].map((p) => ({ url: `${BASE}${p}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...["/category/blog/", "/category/technology/"].map((p) => ({
      url: `${BASE}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];

  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${BASE}/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const services: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const platforms: MetadataRoute.Sitemap = [...PLATFORMS, ...SAP_MODULES].map((s) => ({
    url: `${BASE}/platform-services/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const solutions: MetadataRoute.Sitemap = SOLUTIONS.map((s) => ({
    url: `${BASE}/solutions/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const hardware: MetadataRoute.Sitemap = HARDWARE_CATEGORIES.map((s) => ({
    url: `${BASE}/hardware/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const software: MetadataRoute.Sitemap = SOFTWARE_CATEGORIES.map((s) => ({
    url: `${BASE}/software/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...core, ...posts, ...services, ...platforms, ...solutions, ...hardware, ...software];
}
