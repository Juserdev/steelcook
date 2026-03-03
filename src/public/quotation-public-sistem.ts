import { SUPABASE_KEY, SUPABASE_URL } from "@/services/auth-service";

export async function get_public_quotation(public_id: string) {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/quotations?public_id=eq.${public_id}`,
      {
        method: "GET",
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
        }
      }
    )

    if (!response.ok) {
      throw new Error(`Error fetching quotation: ${response.statusText}`)
    }

    const data = await response.json()

    return data[0]

  } catch (error) {
    console.error(error)
  }


}
