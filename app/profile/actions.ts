"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type PasswordChangeState = {
  phase: "details" | "verify";
  error?: string;
  status?: string;
};

export const initialPasswordChangeState: PasswordChangeState = {
  phase: "details",
};

async function getAuthenticatedClient() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/profile");
  }

  return { supabase, user };
}

export async function updatePassword(
  _previousState: PasswordChangeState,
  formData: FormData,
): Promise<PasswordChangeState> {
  const currentPassword = formData.get("currentPassword");
  const newPassword = formData.get("newPassword");
  const confirmPassword = formData.get("confirmPassword");
  const verificationCode = formData.get("verificationCode");

  if (
    typeof currentPassword !== "string" ||
    typeof newPassword !== "string" ||
    typeof confirmPassword !== "string" ||
    !currentPassword ||
    !newPassword ||
    !confirmPassword
  ) {
    return { phase: "details", error: "missing_fields" };
  }

  if (newPassword.length < 8) {
    return { phase: "details", error: "password_too_short" };
  }

  if (newPassword !== confirmPassword) {
    return { phase: "details", error: "password_mismatch" };
  }

  const { supabase, user } = await getAuthenticatedClient();
  const nonce = typeof verificationCode === "string" ? verificationCode.trim() : "";

  if (!nonce) {
    if (!user.email) {
      return { phase: "details", error: "verification_send_failed" };
    }

    const { error: currentPasswordError } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: currentPassword,
    });

    if (currentPasswordError) {
      return { phase: "details", error: "current_password_incorrect" };
    }

    const { error: reauthenticationError } = await supabase.auth.reauthenticate();

    if (reauthenticationError) {
      return { phase: "details", error: "verification_send_failed" };
    }

    return { phase: "verify", status: "verification_sent" };
  }

  const { error } = await supabase.auth.updateUser({
    current_password: currentPassword,
    password: newPassword,
    nonce,
  });

  if (error) {
    const message = error.message.toLowerCase();

    if (message.includes("current password")) {
      return { phase: "verify", error: "current_password_incorrect" };
    }

    if (message.includes("reauthentication") || message.includes("nonce")) {
      return { phase: "verify", error: "verification_code_invalid" };
    }

    return { phase: "verify", error: "password_update_failed" };
  }

  return { phase: "details", status: "password_updated" };
}
