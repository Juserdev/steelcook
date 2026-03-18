import { getClients } from "@/services/clients/clients-services"
import { getProducts } from "@/services/products/products-services"
import { getProfile } from "@/services/profile/profile-services"
import { getQuotations } from "@/services/quotations/quotations-service"
import { getQuoteSettings } from "@/services/quote-settings/quote-settings-service"

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