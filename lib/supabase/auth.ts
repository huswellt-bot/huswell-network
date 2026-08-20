import "server-only";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function getCurrentClaims() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  return data?.claims ?? null;
}

export async function requireUser() {
  const claims = await getCurrentClaims();

  if (!claims) {
    redirect("/login");
  }

  return claims;
}
