import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="text-[11px] font-medium uppercase tracking-wider text-brand">
        404
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
        The business profile you&apos;re looking for isn&apos;t here. Head back
        to the directory to keep browsing.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
      >
        Back to directory
      </Link>
    </div>
  );
}