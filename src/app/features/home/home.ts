import type { Clients } from "@/app/features/clients/types/clients.types"
import { home_header } from "@/app/features/home/components/home-header.components"
import { home_list } from "@/app/features/home/components/profile-list.components"
import { homeContentConfig } from "@/app/features/home/config/home.config"
import type { Products } from "@/app/features/products/types/products.types"
import type { Quotations } from "@/app/features/quotations/types/quotations.types"

export function content_home(clients: Clients[], products: Products[], quotations: Quotations[]): HTMLDivElement {
  const home_content = homeContentConfig(clients, products, quotations)

  const home_container = home_header()
  home_list(home_content, home_container)

  return home_container
}