import { SUPABASE_KEY, SUPABASE_URL } from "../auth-service";

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

  const data = await response.json();
  return data
}