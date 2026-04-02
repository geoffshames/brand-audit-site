import { notFound } from "next/navigation";
import AuditPageClient from "./client";
import type { Metadata } from "next";
import type { AuditData } from "@/lib/types/audit";

async function getAuditBySlug(slug: string): Promise<AuditData | null> {
  try {
    const auditData = await import(`@/lib/data/${slug}`).then((m) => m.default);
    return auditData;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const audit = await getAuditBySlug(slug);
  if (!audit) return { title: "Not Found" };

  return {
    title: `${audit.intake.brandName} — Brand & Digital Audit × Crowd Control Digital`,
    description: audit.tagline || `Comprehensive brand audit for ${audit.intake.brandName}`,
    openGraph: {
      title: `${audit.intake.brandName} — Brand Audit`,
      description: audit.tagline,
      type: "website",
      siteName: "Crowd Control Digital",
    },
  };
}

export default async function AuditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const audit = await getAuditBySlug(slug);

  if (!audit || audit.status !== "complete") notFound();

  return <AuditPageClient audit={audit} />;
}
