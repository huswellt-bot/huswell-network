"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function getSafeNext(value: FormDataEntryValue | null) {
  const next = typeof value === "string" ? value : "/";
  return next.startsWith("/") && !next.startsWith("//") ? next : "/";
}

function loginUrl(error: string, next: string) {
  return `/login?error=${error}&next=${encodeURIComponent(next)}`;
}

export async function signIn(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const next = getSafeNext(formData.get("next"));

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    !email.trim() ||
    !password
  ) {
    redirect(loginUrl("missing_fields", next));
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });

  if (error) {
    redirect(loginUrl("invalid_credentials", next));
  }

  redirect(next);
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
