import { products_title } from "@/services/products/components/builders/products-title"
import { products_title_sheets } from "@/services/products/components/builders/products-title-sheets"
import type { Products } from "@/services/products/products.types"

export function products_list(products: Products[], header: HTMLDivElement) {

  const list_container = products_title()
  products_title_sheets(products, list_container)
  header.appendChild(list_container)

  return list_container

}

