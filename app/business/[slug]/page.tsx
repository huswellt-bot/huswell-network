import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MapPin, Package, Timer } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getBusinessBySlug, businesses } from "@/lib/businesses";
import { requireUser } from "@/lib/supabase/auth";

export function generateStaticParams() {
  return businesses.map((business) => ({ slug: business.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/business/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);
  if (!business) return {};
  return {
    title: business.name,
    description: business.tagline,
  };
}

export default async function BusinessPage({
  params,
}: PageProps<"/business/[slug]">) {
  await requireUser();
  const { slug } = await params;
  const business = getBusinessBySlug(slug);
  if (!business) notFound();

  const details: { icon: ReactNode; label: string; value: string }[] = [
    { icon: <Package aria-hidden="true" className="h-4 w-4" />, label: "MOQ", value: business.moq },
    { icon: <Timer aria-hidden="true" className="h-4 w-4" />, label: "Lead time", value: business.leadTime },
    { icon: <MapPin aria-hidden="true" className="h-4 w-4" />, label: "Address", value: business.contact.address ?? "Not listed" },
    { icon: <Clock aria-hidden="true" className="h-4 w-4" />, label: "Hours", value: business.hours },
    { icon: <Calendar aria-hidden="true" className="h-4 w-4" />, label: "Founded", value: business.founded },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        Back to directory
      </Link>

      <div className="mt-6 overflow-hidden rounded-2xl">
        <Image
          src={business.coverImage}
          alt={`${business.name} cover`}
          width={1200}
          height={400}
          priority
          className="h-[260px] w-full object-cover sm:h-[320px]"
        />
      </div>

      <div className="px-1">
        <div className="-mt-16 flex items-end gap-4 sm:-mt-18">
          <Image
            src={business.logoImage}
            alt={`${business.name} logo`}
            width={144}
            height={144}
            priority
            className="h-28 w-28 rounded-full bg-white object-contain ring-1 ring-zinc-200 sm:h-36 sm:w-36"
          />
        </div>

        <div className="mt-4 flex flex-col gap-1">
          <p className="text-[11px] font-medium uppercase tracking-wider text-brand">
            {business.category}
          </p>
          <h1 className="text-[28px] font-semibold tracking-tight text-zinc-900">
            {business.name}
          </h1>
          <p className="text-base text-zinc-500">{business.tagline}</p>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-wider text-zinc-900">
              About
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              {business.description.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="max-w-prose text-[15px] leading-7 text-zinc-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-xl border border-zinc-200 bg-white">
            <dl className="divide-y divide-zinc-200">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-start gap-3 px-5 py-4"
                >
                  <span className="mt-0.5 text-zinc-400">{detail.icon}</span>
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                      {detail.label}
                    </dt>
                    <dd className="mt-0.5 text-sm text-zinc-900">
                      {detail.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="mt-12">
          <h2 className="text-[13px] font-semibold uppercase tracking-wider text-zinc-900">
            Photos
          </h2>
          <div className="mt-4">
            <PhotoGallery images={business.gallery} name={business.name} />
          </div>
        </div>
      </div>
      {business.contact.whatsapp && (
        <WhatsAppButton number={business.contact.whatsapp} />
      )}
    </div>
  );
}
