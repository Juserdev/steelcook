import { SUPABASE_KEY, SUPABASE_URL } from "../../app/services/auth-service";
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

  const checkResponse = await fetch(`${SUPABASE_URL}/rest/v1/quotations?quotation_id=eq.${quotation.quotation_id}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  });

  const existingProducts: Quotations[] = await checkResponse.json();

  if (existingProducts.length > 0) {
    throw new Error("El código de la cotizacion ya existe");
  }

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
    const error = await response.json()
    console.error('supabase error:', error)

    throw new Error(error.message || "Error creating quotation")
  }


  const data = await response.json() as Send_Create_Quotation[]

  return data[0];
}


export async function editQuotation(TOKEN: string, id: string, quotation: Send_Create_Quotation) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/quotations?id=eq.${id}`, {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Prefer": "return=representation"
    },
    body: JSON.stringify(quotation)
  })

  const data: Send_Create_Quotation = await response.json()

  return data
}

export async function deleteQuotation(TOKEN: string, id: string) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/quotations?id=eq.${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("Error deleting quotation");
  }

}