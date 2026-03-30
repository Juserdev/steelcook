import type { Clients } from "@/app/features/clients/types/clients.types"
import type { HomeContent } from "@/app/features/home/types/home.types"
import type { Products } from "@/app/features/products/types/products.types"
import type { Quotations } from "@/app/features/quotations/types/quotations.types"


export function homeContentConfig(clients: Clients[], products: Products[], quotations: Quotations[]) {
  const home_content: HomeContent[] = [
    {
      title: 'CLIENTES',
      class_title: 'title-clients',
      counter: clients.length,
      class_counter: 'home-counter',
      text: 'Clientes registrados',
      class_text: 'clients-text',
      class_container: 'home-container-info'
    },
    {
      title: 'PRODUCTOS',
      class_title: 'title-products',
      counter: products.length,
      class_counter: 'counter',
      text: 'Productos registrados',
      class_text: 'products-text',
      class_container: 'home-container-info'
    },
    {
      title: 'COTIZACIONES',
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