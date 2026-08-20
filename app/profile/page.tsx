import type { Metadata } from "next";
import { KeyRound, Mail, ShieldCheck } from "lucide-react";
import PasswordInput from "@/components/PasswordInput";
import {
  sendPasswordVerificationCode,
  updatePassword,
} from "@/app/profile/actions";
import { requireUser } from "@/lib/supabase/auth";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Profile",
  description: "Manage your Huswell Trading Supplier Network account.",
};

type ProfilePageProps = {
  searchParams: Promise<{ error?: string; status?: string }>;
};

const errorMessages: Record<string, string> = {
  missing_fields: "Complete all required password fields.",
  password_too_short: "Use a new password with at least 8 characters.",
  password_mismatch: "Your new password and confirmation do not match.",
  current_password_incorrect: "Your current password is incorrect.",
  verification_required:
    "Enter the verification code sent to your email, then try again.",
  verification_send_failed:
    "We could not send a verification code. Please try again.",
  password_update_failed: "We could not update your password. Please try again.",
};

const statusMessages: Record<string, string> = {
  password_updated: "Your password has been updated.",
  verification_sent: "A verification code was sent to your email address.",
};

export default async function ProfilePage({ searchParams }: ProfilePageProps) {
  await requireUser();
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { error, status } = await searchParams;

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

      {error && errorMessages[error] && (
        <p
          role="alert"
          className="mt-6 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700"
        >
          {errorMessages[error]}
        </p>
      )}

      {status && statusMessages[status] && (
        <p className="mt-6 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700">
          {statusMessages[status]}
        </p>
      )}

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
              Enter your current password, then choose a new password with at least 8 characters.
            </p>
          </div>
        </div>

        <form action={updatePassword} className="mt-6 space-y-5">
          <div>
            <label htmlFor="currentPassword" className="text-sm font-medium text-zinc-700">
              Current password
            </label>
            <PasswordInput id="currentPassword" name="currentPassword" />
          </div>
          <div>
            <label htmlFor="newPassword" className="text-sm font-medium text-zinc-700">
              New password
            </label>
            <PasswordInput
              id="newPassword"
              name="newPassword"
              autoComplete="new-password"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="text-sm font-medium text-zinc-700">
              Confirm new password
            </label>
            <PasswordInput
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="new-password"
            />
          </div>
          <div>
            <label htmlFor="verificationCode" className="text-sm font-medium text-zinc-700">
              Email verification code <span className="text-zinc-400">(if requested)</span>
            </label>
            <input
              id="verificationCode"
              name="verificationCode"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              className="mt-2 h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
          </div>
          <button
            type="submit"
            className="h-9 rounded-lg bg-brand px-4 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
          >
            Update password
          </button>
        </form>

        <div className="mt-6 border-t border-zinc-200 pt-6">
          <div className="flex items-start gap-3">
            <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" />
            <div>
              <p className="text-sm font-medium text-zinc-900">Need a verification code?</p>
              <p className="mt-1 text-sm leading-6 text-zinc-500">
                If Supabase asks for one, send a code to your email and enter it above.
              </p>
              <form action={sendPasswordVerificationCode} className="mt-3">
                <button
                  type="submit"
                  className="h-9 rounded-lg border border-zinc-200 px-4 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
                >
                  Send verification code
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
