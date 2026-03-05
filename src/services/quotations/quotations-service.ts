import { SUPABASE_KEY, SUPABASE_URL } from "../auth-service";
import type { Create_Quotation, Quotations } from "./quotations.types";

export async function getQuotations(TOKEN: string) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/quotations`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  });

  const data: Quotations[] = await response.json();
  return data
}

export async function createProduct(TOKEN: string, product: Create_Quotation) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/quotations`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    },
    body: JSON.stringify(product)
  });

  if (!response.ok) {
    throw new Error("Error creating product");
  }

  const data: Quotations[] = await response.json();

  return data[0];
}