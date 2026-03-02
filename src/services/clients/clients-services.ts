import { SUPABASE_KEY, SUPABASE_URL } from "../auth-service";
import type { Clients } from "./clients.types";

export async function getClients(TOKEN: string) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/clients`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  });

  const data: Clients[] = await response.json();
  return data
}