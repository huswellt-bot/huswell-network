"use server";

import { redirect } from "next/navigation";

function getRequiredField(
  formData: FormData,
  name: string,
  minimumLength: number,
  maximumLength: number,
) {
  const value = formData.get(name);

  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();
  return trimmed.length >= minimumLength && trimmed.length <= maximumLength
    ? trimmed
    : null;
}

export async function submitJoinApplication(formData: FormData) {
  const fullName = getRequiredField(formData, "fullName", 2, 120);
  const companyName = getRequiredField(formData, "companyName", 2, 160);
  const phoneNumber = getRequiredField(formData, "phoneNumber", 7, 32);

  if (
    !fullName ||
    !companyName ||
    !phoneNumber ||
    !/^[0-9+()\s-]+$/.test(phoneNumber)
  ) {
    redirect("/join?error=invalid_details");
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookToken = process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN;

  if (!webhookUrl || !webhookToken) {
    redirect("/join?error=configuration");
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        token: webhookToken,
        fullName,
        companyName,
        phoneNumber,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    const result = (await response.json().catch(() => null)) as {
      ok?: boolean;
    } | null;

    if (!response.ok || !result?.ok) {
      throw new Error("Google Sheets webhook rejected the submission.");
    }
  } catch {
    redirect("/join?error=submission_failed");
  }

  redirect("/join?submitted=1");
}
