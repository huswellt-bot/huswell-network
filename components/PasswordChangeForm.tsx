"use client";

import { useActionState, useEffect, useState } from "react";
import {
  initialPasswordChangeState,
  updatePassword,
} from "@/app/profile/actions";
import PasswordInput from "@/components/PasswordInput";

const errorMessages: Record<string, string> = {
  missing_fields: "Complete all required password fields.",
  password_too_short: "Use a new password with at least 8 characters.",
  password_mismatch: "Your new password and confirmation do not match.",
  current_password_incorrect: "Your current password is incorrect.",
  verification_code_invalid: "That verification code is invalid or has expired. Request a new code and try again.",
  verification_send_failed: "We could not send a verification code. Please try again.",
  password_update_failed: "We could not update your password. Please try again.",
};

const statusMessages: Record<string, string> = {
  password_updated: "Your password has been updated.",
  verification_sent:
    "A verification code was sent to your email address. Enter it below to finish changing your password.",
};

export default function PasswordChangeForm() {
  const [state, formAction, isPending] = useActionState(
    updatePassword,
    initialPasswordChangeState,
  );
  const [passwordFields, setPasswordFields] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    verificationCode: "",
  });

  useEffect(() => {
    if (state.status === "password_updated") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Clear sensitive fields after a confirmed update.
      setPasswordFields({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        verificationCode: "",
      });
    }
  }, [state.status]);

  return (
    <>
      {state.error && errorMessages[state.error] && (
        <p
          role="alert"
          className="mt-6 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700"
        >
          {errorMessages[state.error]}
        </p>
      )}
      {state.status && statusMessages[state.status] && (
        <p className="mt-6 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700">
          {statusMessages[state.status]}
        </p>
      )}

      <form action={formAction} className="mt-6 space-y-5">
        <div>
          <label htmlFor="currentPassword" className="text-sm font-medium text-zinc-700">
            Current password
          </label>
          <PasswordInput
            id="currentPassword"
            name="currentPassword"
            value={passwordFields.currentPassword}
            onChange={(event) =>
              setPasswordFields((fields) => ({
                ...fields,
                currentPassword: event.target.value,
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="newPassword" className="text-sm font-medium text-zinc-700">
            New password
          </label>
          <PasswordInput
            id="newPassword"
            name="newPassword"
            autoComplete="new-password"
            value={passwordFields.newPassword}
            onChange={(event) =>
              setPasswordFields((fields) => ({ ...fields, newPassword: event.target.value }))
            }
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
            value={passwordFields.confirmPassword}
            onChange={(event) =>
              setPasswordFields((fields) => ({
                ...fields,
                confirmPassword: event.target.value,
              }))
            }
          />
        </div>
        {state.phase === "verify" && (
          <div>
            <label htmlFor="verificationCode" className="text-sm font-medium text-zinc-700">
              Verification code
            </label>
            <input
              id="verificationCode"
              name="verificationCode"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              required
              value={passwordFields.verificationCode}
              onChange={(event) =>
                setPasswordFields((fields) => ({
                  ...fields,
                  verificationCode: event.target.value,
                }))
              }
              className="mt-2 h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
          </div>
        )}
        <button
          type="submit"
          disabled={isPending}
          className="h-9 rounded-lg bg-brand px-4 text-sm font-medium text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
        >
          {isPending
            ? "Please wait…"
            : state.phase === "verify"
              ? "Confirm password change"
              : "Send verification code"}
        </button>
      </form>
    </>
  );
}
