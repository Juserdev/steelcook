import type { Clients } from "@/services/clients/clients.types"
import type { HomeContent } from "./home.types"
import type { Products } from "@/services/products/products.types"
import type { Quotations } from "@/services/quotations/quotations.types"


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