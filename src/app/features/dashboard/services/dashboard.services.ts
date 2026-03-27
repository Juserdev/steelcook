import { getClients } from "@/app/features/clients/services/clients.services"
import { getProducts } from "@/app/features/products/services/products.services"
import { getProfile } from "@/app/features/profile/services/profile.services"
import { getQuotations } from "@/app/features/quotations/services/quotations.services"
import { getQuoteSettings } from "@/app/features/quote-settings/services/quote-settings.services"

export async function loadDashboardData(token: string) {

  const [clients, products, quotations, profile, quote_settings] =
    await Promise.all([
      getClients(token),
      getProducts(token),
      getQuotations(token),
      getProfile(token),
      getQuoteSettings(token)
    ])

  return {
    clients,
    products,
    quotations,
    profile,
    quote_settings
  }
}