
import { products_title } from "@/app/builders/products/products-title"
import { products_title_sheets } from "@/app/builders/products/products-title-sheets"
import type { Products } from "@/app/types/products/products.types"

export function products_list(products: Products[], header: HTMLDivElement) {

  const list_container = products_title()
  products_title_sheets(products, list_container)
  header.appendChild(list_container)

  return list_container

}

