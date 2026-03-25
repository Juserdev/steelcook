import type { Clients } from "@/app/types/clients/clients.types"
import type { Products } from "@/app/types/products/products.types"
import type { Quotations } from "@/app/types/quotations/quotations.types"
import type { HomeContent } from "@features/dashboard/main-content/home/home.types"


export function homeContentConfig(clients: Clients[], products: Products[], quotations: Quotations[]) {
  const home_content: HomeContent[] = [
    {
      title: 'Clientes',
      class_title: 'title-clients',
      counter: clients.length,
      class_counter: 'counter',
      text: 'Clientes registrados',
      class_text: 'clients-text',
      class_container: 'home-container-info'
    },
    {
      title: 'Productos',
      class_title: 'title-products',
      counter: products.length,
      class_counter: 'counter',
      text: 'Productos registrados',
      class_text: 'products-text',
      class_container: 'home-container-info'
    },
    {
      title: 'Cotizaciones',
      class_title: 'title-quotations',
      counter: quotations.length,
      class_counter: 'counter',
      text: 'Cotizaciones registrados',
      class_text: 'quotations-text',
      class_container: 'home-container-info'
    }
  ]
  return home_content

}