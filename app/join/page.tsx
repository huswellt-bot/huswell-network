import type { Metadata } from "next";
import Link from "next/link";
import { submitJoinApplication } from "@/app/join/actions";

export const metadata: Metadata = {
  title: "Join the network",
  description: "Learn about joining the Huswell Trading Supplier Network.",
};

type JoinPageProps = {
  searchParams: Promise<{ error?: string; submitted?: string }>;
};

export default async function JoinPage({ searchParams }: JoinPageProps) {
  const { error, submitted } = await searchParams;
  const errorMessage =
    error === "invalid_details"
      ? "Enter a valid full name, company name, and contact number."
      : error === "submission_failed"
        ? "We could not submit your application. Please try again shortly."
        : error === "configuration"
          ? "The application form is not configured yet. Please contact Huswell Trading."
          : null;

  return (
    <section className="mx-auto flex w-full max-w-2xl flex-1 items-center px-4 py-12 sm:px-6 sm:py-16">
      <div className="w-full rounded-xl border border-zinc-200 bg-white p-6 sm:p-8">
        <p className="text-[11px] font-medium uppercase tracking-wider text-brand">
          Supplier network
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900">
          Join Huswell Trading Supplier Network
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-zinc-700">
          Tell us about your business and we will review your application to
          join the network.
        </p>

        {submitted === "1" ? (
          <div className="mt-8 rounded-lg border border-zinc-200 p-4">
            <h2 className="text-sm font-semibold text-zinc-900">
              Application received
            </h2>
            <p className="mt-1 text-sm leading-6 text-zinc-600">
              Thank you. The Huswell Trading team will review your details.
            </p>
          </div>
        ) : (
          <form action={submitJoinApplication} className="mt-8 space-y-5">
            <div>
              <label htmlFor="fullName" className="text-sm font-medium text-zinc-700">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                maxLength={120}
                className="mt-2 h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-brand focus:ring-2 focus:ring-brand/40"
              />
            </div>
            <div>
              <label htmlFor="companyName" className="text-sm font-medium text-zinc-700">
                Company name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                autoComplete="organization"
                required
                maxLength={160}
                className="mt-2 h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-brand focus:ring-2 focus:ring-brand/40"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="text-sm font-medium text-zinc-700">
                Contact number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                required
                maxLength={32}
                className="mt-2 h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-brand focus:ring-2 focus:ring-brand/40"
              />
            </div>

            {errorMessage && (
              <p role="alert" className="rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              className="h-9 w-full rounded-lg bg-brand px-4 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
            >
              Submit application
            </button>
          </form>
        )}

        <p className="mt-6 text-sm leading-6 text-zinc-500">
          Already a member?{" "}
          <Link href="/login" className="font-medium text-zinc-700 hover:text-brand">
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}
