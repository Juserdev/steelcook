import { getClients } from "@/services/clients/clients-services"
import { getProducts } from "@/services/products/products-services"
import { getQuotations } from "@/services/quotations/quotations-service"
import { getProfile } from "@/services/profile/profile-services"

export async function loadDashboardData(token: string) {

  const [clients, products, quotations, profile] =
    await Promise.all([
      getClients(token),
      getProducts(token),
      getQuotations(token),
      getProfile(token)
    ])

  return {
    clients,
    products,
    quotations,
    profile
  }
}