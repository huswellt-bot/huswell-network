import SearchFilter from "@/components/SearchFilter";
import { getAllBusinesses, getCategories } from "@/lib/businesses";
import { requireUser } from "@/lib/supabase/auth";

export default async function Home() {
  await requireUser();
  const businesses = getAllBusinesses();
  const categories = getCategories();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="max-w-2xl">
        <p className="text-[11px] font-medium uppercase tracking-wider text-brand">
          Sourcing hub · Philippines
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
        <SearchFilter businesses={businesses} categories={categories} />
      </div>
    </div>
  );
}
