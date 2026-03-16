import { SUPABASE_KEY, SUPABASE_URL } from "../auth-service";
import type { Create_Product, Products } from "./products.types";

export async function getProducts(TOKEN: string) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/products`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  });

  const data: Products[] = await response.json();
  return data
}

export async function createProduct(TOKEN: string, product: Create_Product) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/products`, {
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

  const data: Products[] = await response.json();

  return data[0];
}

export async function editProducts(TOKEN: string, id: string, client: Create_Product) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/products?id=eq.${id}`, {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    },
    body: JSON.stringify(client)
  });

  if (!response.ok) {
    throw new Error("Error updating products");
  }

  const data: Products[] = await response.json();

  return data[0];
}