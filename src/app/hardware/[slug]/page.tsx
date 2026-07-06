import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HARDWARE_CATEGORIES, getHardwareCategory } from "@/content/hardware-categories";
import { ServiceDetail } from "@/components/service-detail";

const BASE = { label: "Hardware", href: "/hardware/", path: "/hardware" };

export const dynamicParams = false;

export function generateStaticParams() {
  return HARDWARE_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getHardwareCategory(slug);
  if (!c) return {};
  const path = `/hardware/${c.slug}/`;
  const og = `/og/${c.slug}.png`;
  return {
    title: c.seoTitle,
    description: c.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: c.seoTitle,
      description: c.metaDescription,
      url: path,
      type: "website",
      images: [{ url: og, width: 1200, height: 630, alt: c.title }],
    },
    twitter: { card: "summary_large_image", title: c.seoTitle, description: c.metaDescription, images: [og] },
  };
}

export default async function HardwareCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getHardwareCategory(slug);
  if (!c) notFound();
  return <ServiceDetail service={c} base={BASE} />;
}
