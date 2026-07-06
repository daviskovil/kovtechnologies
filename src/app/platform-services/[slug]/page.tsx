import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PLATFORMS, getPlatform } from "@/content/platforms";
import { ServiceDetail } from "@/components/service-detail";

const BASE = { label: "Platform Services", href: "/platform-services/", path: "/platform-services" };

export const dynamicParams = false;

export function generateStaticParams() {
  return PLATFORMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getPlatform(slug);
  if (!s) return {};
  const path = `/platform-services/${s.slug}/`;
  const og = `/og/${s.slug}.png`;
  return {
    title: s.seoTitle,
    description: s.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: s.seoTitle,
      description: s.metaDescription,
      url: path,
      type: "website",
      images: [{ url: og, width: 1200, height: 630, alt: s.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: s.seoTitle,
      description: s.metaDescription,
      images: [og],
    },
  };
}

export default async function PlatformPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getPlatform(slug);
  if (!s) notFound();
  return <ServiceDetail service={s} base={BASE} />;
}
