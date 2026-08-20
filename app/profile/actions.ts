"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function profileUrl(key: "error" | "status", value: string) {
  return `/profile?${key}=${encodeURIComponent(value)}`;
}

async function getAuthenticatedClient() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/profile");
  }

  return supabase;
}

export async function updatePassword(formData: FormData) {
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
    redirect(profileUrl("error", "missing_fields"));
  }

  if (newPassword.length < 8) {
    redirect(profileUrl("error", "password_too_short"));
  }

  if (newPassword !== confirmPassword) {
    redirect(profileUrl("error", "password_mismatch"));
  }

  const supabase = await getAuthenticatedClient();
  const nonce = typeof verificationCode === "string" ? verificationCode.trim() : "";
  const { error } = await supabase.auth.updateUser({
    current_password: currentPassword,
    password: newPassword,
    ...(nonce ? { nonce } : {}),
  });

  if (error) {
    const message = error.message.toLowerCase();

    if (message.includes("current password")) {
      redirect(profileUrl("error", "current_password_incorrect"));
    }

    if (message.includes("reauthentication") || message.includes("nonce")) {
      redirect(profileUrl("error", "verification_required"));
    }

    redirect(profileUrl("error", "password_update_failed"));
  }

  redirect(profileUrl("status", "password_updated"));
}

export async function sendPasswordVerificationCode() {
  const supabase = await getAuthenticatedClient();
  const { error } = await supabase.auth.reauthenticate();

  if (error) {
    redirect(profileUrl("error", "verification_send_failed"));
  }

  redirect(profileUrl("status", "verification_sent"));
}
