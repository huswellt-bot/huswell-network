import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Huswell Trading Supplier Network is a pioneering global sourcing and fulfillment hub in the Philippines. Learn how we connect buyers, SMEs, and suppliers.",
};

const whatWeDo = [
  {
    verb: "Source",
    text: "Find suitable local and global suppliers according to buyer requirements.",
  },
  {
    verb: "Match",
    text: "Connect the right buyer with the right supplier based on product, capability, price, quality, quantity, and timeline.",
  },
  {
    verb: "Verify",
    text: "Evaluate suppliers and help reduce sourcing and transaction risks.",
  },
  {
    verb: "Negotiate",
    text: "Coordinate pricing, MOQ, specifications, production terms, payment conditions, and delivery requirements.",
  },
  {
    verb: "Fulfill",
    text: "Support the process from sourcing and order placement through quality coordination, logistics, and delivery.",
  },
  {
    verb: "Build partnerships",
    text: "Develop a growing ecosystem where buyers and suppliers can build long-term commercial relationships.",
  },
];

const supplierAudiences = [
  "SMEs",
  "Corporate buyers",
  "Distributors",
  "Resellers",
  "Project-based buyers",
  "Philippine market opportunities",
  "International sourcing opportunities",
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-wider text-brand">
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        Back to directory
      </Link>

      <section className="mt-10">
        <SectionLabel>
          A Pioneering Global Sourcing &amp; Fulfillment Hub in the Philippines
        </SectionLabel>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-[2.5rem] sm:leading-[1.1]">
          Connecting Buyers. Empowering Suppliers. Creating Opportunities.
        </h1>
        <div className="mt-5 flex w-full flex-col gap-4 text-[15px] leading-7 text-zinc-700">
          <p>
            Huswell Trading Supplier Network is a pioneering global sourcing and
            fulfillment hub in the Philippines, connecting business buyers,
            SMEs, manufacturers, wholesalers, distributors, and reliable
            suppliers to create better business opportunities.
          </p>
          <p>
            We help buyers find the right products, suppliers, prices, quality,
            and delivery solutions, while helping suppliers connect with
            qualified buyers and new market opportunities.
          </p>
          <p>
            Our role is to make sourcing and trading simpler, safer, faster, and
            more efficient, from identifying a requirement to finding the right
            supplier and completing fulfillment.
          </p>
        </div>
      </section>

      <section className="mt-16 border-t border-zinc-200 pt-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>Our Purpose</SectionLabel>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
              Connecting Needs. Sourcing Solutions. Delivering Value.
            </h2>
          </div>
          <p className="text-[15px] leading-7 text-zinc-700">
            Huswell Trading bridges the gap between what buyers need and what
            suppliers can provide.
          </p>
        </div>
      </section>

      <section className="mt-16 border-t border-zinc-200 pt-10">
        <SectionLabel>What We Do</SectionLabel>
        <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDo.map((item, index) => (
            <div
              key={item.verb}
              className="flex flex-col gap-1 border-t border-zinc-200 pt-4"
            >
              <span className="text-[13px] font-semibold tracking-tight text-zinc-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[15px] font-semibold tracking-tight text-zinc-900">
                {item.verb}
              </h3>
              <p className="text-sm leading-6 text-zinc-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-zinc-200 pt-10">
        <div className="max-w-2xl">
          <SectionLabel>For Suppliers</SectionLabel>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
            You Supply It. We Connect You to Opportunities.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-zinc-700">
            Gain access to buyer requirements and business opportunities that
            match your products, capabilities, and production capacity.
          </p>
          <ul className="mt-5 flex flex-col gap-2">
            {supplierAudiences.map((audience) => (
              <li key={audience} className="text-sm leading-6 text-zinc-600">
                {audience}
              </li>
            ))}
          </ul>
          <Link
            href="/join"
            className="mt-6 inline-flex h-10 items-center rounded-lg border border-zinc-200 bg-white px-5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-900"
          >
            Join the network
          </Link>
        </div>
      </section>

      <section className="mt-16 border-t border-zinc-200 pt-10">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <SectionLabel>Our Vision</SectionLabel>
            <p className="mt-4 text-[15px] leading-7 text-zinc-700">
              To establish Huswell Trading Supplier Network as a pioneering
              global sourcing and fulfillment hub in the Philippines and a
              trusted gateway connecting Philippine businesses with reliable
              local and international suppliers, while creating new market
              opportunities for qualified suppliers.
            </p>
          </div>
          <div>
            <SectionLabel>Our Mission</SectionLabel>
            <p className="mt-4 text-[15px] leading-7 text-zinc-700">
              To empower SMEs and businesses through a trusted sourcing
              ecosystem that makes procurement, supplier discovery, trading, and
              fulfillment more accessible, transparent, efficient, and reliable.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 border-t border-zinc-200 pt-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Brand Promise</SectionLabel>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-brand">
              From Your Needs to Our Network. We Make It Happen.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
          >
            Browse the supplier network
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
