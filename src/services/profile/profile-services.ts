import { SUPABASE_KEY, SUPABASE_URL } from "../auth-service";
import type { Profile } from "./profile.types";

export async function getProfile(TOKEN: string) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/profile`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  });

  const data: Profile[] = await response.json();

  return data
}




