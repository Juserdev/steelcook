import { SUPABASE_KEY, SUPABASE_URL } from "@/services/auth-service";
import type { Quote_Settings } from "@/services/quote-settings/quote-settings-types";


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