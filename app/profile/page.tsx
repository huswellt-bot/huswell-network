import type { Metadata } from "next";
import { KeyRound, Mail } from "lucide-react";
import PasswordChangeForm from "@/components/PasswordChangeForm";
import { requireUser } from "@/lib/supabase/auth";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Profile",
  description: "Manage your Huswell Trading Supplier Network account.",
};

export default async function ProfilePage() {
  await requireUser();
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <section className="mx-auto w-full max-w-xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-[11px] font-medium uppercase tracking-wider text-brand">
        Account settings
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900">
        Profile
      </h1>
      <p className="mt-3 text-[15px] leading-7 text-zinc-500">
        Review your account and keep your password up to date.
      </p>

      <section className="mt-8 rounded-xl border border-zinc-200 bg-white p-6" aria-labelledby="account-email">
        <div className="flex items-start gap-3">
          <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" />
          <div>
            <h2 id="account-email" className="text-sm font-medium text-zinc-900">
              Email address
            </h2>
            <p className="mt-1 text-sm text-zinc-600">{user?.email ?? "Not available"}</p>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-zinc-200 bg-white p-6" aria-labelledby="change-password">
        <div className="flex items-start gap-3">
          <KeyRound aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" />
          <div>
            <h2 id="change-password" className="text-sm font-medium text-zinc-900">
              Change password
            </h2>
            <p className="mt-1 text-sm leading-6 text-zinc-500">
              Enter your current password and a new password. We will email a verification code before making the change.
            </p>
          </div>
        </div>

        <PasswordChangeForm />
      </section>
    </section>
  );
}
