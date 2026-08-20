import Image from "next/image";
import Link from "next/link";
import type { Business } from "@/lib/businesses";

export default function BusinessCard({ business }: { business: Business }) {
  return (
    <Link
      href={`/business/${business.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:-translate-y-px hover:border-zinc-300 hover:shadow-sm"
    >
      <div className="overflow-hidden">
        <Image
          src={business.featureImage}
          alt={`${business.name} showcase`}
          width={640}
          height={400}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <div className="flex items-center gap-3">
          <Image
            src={business.logoImage}
            alt={`${business.name} logo`}
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 rounded-full bg-white object-contain ring-1 ring-zinc-200"
          />
          <h3 className="min-w-0 flex-1 text-lg font-semibold tracking-tight text-zinc-900">
            {business.name}
          </h3>
        </div>
        <p className="text-[15px] leading-6 text-zinc-500 line-clamp-3">
          {business.tagline}
        </p>
        <p className="mt-auto pt-1 text-[11px] font-medium uppercase tracking-wider text-zinc-400">
          {business.category}
        </p>
      </div>
    </Link>
  );
}