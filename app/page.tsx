import AnnouncementBanner from "@/components/AnnouncementBanner";
import SearchFilter from "@/components/SearchFilter";
import { getAllBusinesses, getCategories, getCountries } from "@/lib/businesses";
import { requireUser } from "@/lib/supabase/auth";

export default async function Home() {
  await requireUser();
  const businesses = getAllBusinesses();
  const categories = getCategories();
  const countries = getCountries();

  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
      <section className="max-w-2xl">
        <p className="text-[11px] font-medium uppercase tracking-wider text-brand">
          Huswell Trading Suppliers Network
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-[2.5rem] sm:leading-[1.1]">
          Printing, packaging &amp; corporate giveaways. Sourced in one place.
        </h1>
        <p className="mt-3 max-w-xl text-base leading-7 text-zinc-500">
          The first sourcing hub of its kind in the Philippines. Browse supplier
          profiles, check MOQs and lead times.
        </p>
      </section>

      <div className="mt-10">
        <AnnouncementBanner />
      </div>

      <div className="mt-8">
        <SearchFilter
          businesses={businesses}
          categories={categories}
          countries={countries}
        />
      </div>
    </div>
  );
}
