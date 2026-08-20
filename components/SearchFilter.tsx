"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import type { Business } from "@/lib/businesses";
import BusinessCard from "./BusinessCard";

export default function SearchFilter({
  businesses,
  categories,
  countries,
}: {
  businesses: Business[];
  categories: string[];
  countries: string[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [country, setCountry] = useState("All");

  const normalized = query.trim().toLowerCase();

  const filtered = businesses.filter((business) => {
    const matchesCategory = category === "All" || business.category === category;
    const matchesCountry = country === "All" || business.country === country;
    const matchesQuery =
      normalized.length === 0 ||
      business.name.toLowerCase().includes(normalized) ||
      business.tagline.toLowerCase().includes(normalized) ||
      business.category.toLowerCase().includes(normalized) ||
      business.country.toLowerCase().includes(normalized);
    return matchesCategory && matchesCountry && matchesQuery;
  });

  return (
    <section>
      <div className="flex w-full">
        <div className="relative w-full">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-zinc-400"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search businesses…"
            aria-label="Search businesses"
            className="w-full rounded-lg border border-zinc-200 bg-white py-2.5 pr-4 pl-10 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand focus:ring-2 focus:ring-brand/40 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">
            Category
          </p>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {["All", ...categories].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={
                  item === category
                    ? "shrink-0 rounded-full bg-brand px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
                    : "shrink-0 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-sm text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900"
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:text-right">
          <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">
            Country
          </p>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1 lg:justify-end">
            {["All", ...countries].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCountry(item)}
                className={
                  item === country
                    ? "shrink-0 rounded-full bg-brand px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
                    : "shrink-0 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-sm text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900"
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filtered.map((business) => (
            <BusinessCard key={business.slug} business={business} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-xl border border-zinc-200 bg-white px-6 py-16 text-center">
          <p className="text-sm font-medium text-zinc-900">No businesses found</p>
          <p className="mt-1 text-sm text-zinc-500">
            Try a different search, category, or country.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
              setCountry("All");
            }}
            className="mt-4 rounded-lg border border-zinc-200 px-3.5 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-900"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
