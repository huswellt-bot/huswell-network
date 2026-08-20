import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { signIn } from "@/app/login/actions";
import PasswordInput from "@/components/PasswordInput";
import { getCurrentClaims } from "@/lib/supabase/auth";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to access the Huswell Trading Supplier Network.",
};

type LoginPageProps = {
  searchParams: Promise<{ error?: string; next?: string }>;
};

function getSafeNext(next: string | undefined) {
  return next?.startsWith("/") && !next.startsWith("//") ? next : "/";
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const claims = await getCurrentClaims();

  if (claims) {
    redirect("/");
  }

  const { error, next } = await searchParams;
  const errorMessage =
    error === "missing_fields"
      ? "Enter your email address and password."
      : error === "invalid_credentials"
        ? "The email address or password is incorrect."
        : null;

  return (
    <section className="mx-auto flex w-full max-w-md flex-1 items-center px-4 py-12 sm:px-6 sm:py-16">
      <div className="w-full rounded-xl border border-zinc-200 bg-white p-6 sm:p-8">
        <p className="text-[11px] font-medium uppercase tracking-wider text-brand">
          Member access
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900">
          Sign in
        </h1>
        <p className="mt-3 text-[15px] leading-7 text-zinc-500">
          Use the email address and password provided by Huswell Trading.
        </p>

        <form action={signIn} className="mt-8 space-y-5">
          <input type="hidden" name="next" value={getSafeNext(next)} />
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-2 h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-zinc-700"
            >
              Password
            </label>
            <PasswordInput />
          </div>

          {errorMessage && (
            <p
              role="alert"
              className="rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="h-9 w-full rounded-lg bg-brand px-4 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 border-t border-zinc-200 pt-6">
          <p className="text-sm leading-6 text-zinc-500">
            Interested in joining the network?
          </p>
          <Link
            href="/join"
            className="mt-3 flex h-10 w-full items-center justify-center rounded-lg border border-zinc-200 bg-transparent px-4 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
          >
            Apply to join
          </Link>
        </div>
      </div>
    </section>
  );
}
