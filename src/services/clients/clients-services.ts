import { SUPABASE_KEY, SUPABASE_URL } from "../auth-service";
import type { Clients, Create_Client, Edit_Client } from "./clients.types";

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

export async function createClient(TOKEN: string, client: Create_Client) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/clients`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    },
    body: JSON.stringify(client)
  });

  if (!response.ok) {
    throw new Error("Error creating client");
  }

  const data: Clients[] = await response.json();

  return data[0];
}


export async function editClient(TOKEN: string, id: string, client: Edit_Client) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/clients?id=eq.${id}`, {
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
    throw new Error("Error updating client");
  }

  const data: Clients[] = await response.json();

  return data[0];
}