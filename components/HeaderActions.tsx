import Link from "next/link";
import { signOut } from "@/app/login/actions";
import { getCurrentClaims } from "@/lib/supabase/auth";

export default async function HeaderActions() {
  const claims = await getCurrentClaims();

  if (!claims) {
    return (
      <Link
        href="/login"
        className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
      >
        Sign in
      </Link>
    );
  }

  return (
    <>
      <Link
        href="/profile"
        className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
      >
        Profile
      </Link>
      <form action={signOut}>
        <button
          type="submit"
          className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
        >
          Sign out
        </button>
      </form>
    </>
  );
}
