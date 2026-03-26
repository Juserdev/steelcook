import { SUPABASE_KEY, SUPABASE_URL } from "@/app/features/login/services/auth.services";
import type { Quote_Settings, Send_Quote_Settings } from "@/app/features/quote-settings/types/quote-settings.types";


export async function getQuoteSettings(TOKEN: string) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/quote_settings`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  });

  const data: Quote_Settings[] = await response.json();
  return data
}

export async function createQuoteSettings(TOKEN: string, quote: Send_Quote_Settings) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/quote_settings`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    },
    body: JSON.stringify(quote)
  });

  if (!response.ok) {
    throw new Error("Error creating product");
  }

  const data: Quote_Settings[] = await response.json();

  return data[0];
}

export async function editQuoteSettings(TOKEN: string, id: string, quote: Send_Quote_Settings) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/quote_settings?id=eq.${id}`, {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    },
    body: JSON.stringify(quote)
  });

  if (!response.ok) {
    throw new Error("Error updating products");
  }

  const data: Quote_Settings[] = await response.json();

  return data[0];
}


export async function deleteQuoteSettings(TOKEN: string, id: string) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/quote_settings?id=eq.${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("Error deleting products");
  }

}