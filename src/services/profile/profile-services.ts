import { SUPABASE_KEY, SUPABASE_URL } from "../auth-service";
import type { Profile, Send_Profile } from "./profile.types";

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

  const data: Profile[] = await response.json()

  return data

}

export async function createProfile(TOKEN: string, profile: Send_Profile) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/profile`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Prefer": "return=representation"
    },
    body: JSON.stringify(profile)
  })

  const data: Profile[] = await response.json()

  return data
}

export async function editProfile(TOKEN: string, id: string, profile: Send_Profile) {

  const response = await fetch(`${SUPABASE_URL}/rest/v1/profile?id=eq.${id}`, {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Prefer": "return=representation"
    },
    body: JSON.stringify(profile)
  })

  const data: Send_Profile = await response.json()

  return data
}
