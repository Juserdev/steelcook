import type { Create_Product, Products } from "@/app/types/products/products.types";
import { SUPABASE_KEY, SUPABASE_URL } from "@/services/auth-service";


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

  const checkResponse = await fetch(`${SUPABASE_URL}/rest/v1/products?code=eq.${product.code}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  });

  const existingProducts: Products[] = await checkResponse.json();

  if (existingProducts.length > 0) {
    throw new Error("El código del producto ya existe");
  }


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
    const error = await response.json()
    console.error('supabase error:', error)

    throw new Error(error.message || "Error creating product")
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

export async function deleteProducts(TOKEN: string, id: string) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/products?id=eq.${id}`, {
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