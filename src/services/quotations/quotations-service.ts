import { SUPABASE_KEY, SUPABASE_URL } from "../auth-service";
import type { Quotations, Send_Create_Quotation } from "./quotations.types";

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

export async function createQuotation(TOKEN: string, quotation: Send_Create_Quotation) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/quotations`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    },
    body: JSON.stringify(quotation)
  });

  if (!response.ok) {
    // throw new Error("Error creating product");
    const errorText = await response.text()
    console.error('supabase error response: ', errorText)
    throw new Error(`Èrror creating quotation: ${errorText}`)
  }

  // const data: Send_Create_Quotation[] = await response.json();
  const data = await response.json() as Send_Create_Quotation[]

  return data[0];
}