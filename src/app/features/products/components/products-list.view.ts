import { products_title_sheets } from "@/app/features/products/components/products-title-sheets.view"
import { products_title } from "@/app/features/products/components/products-title.view"
import type { Products } from "@/app/features/products/types/products.types"

export function products_list(products: Products[], header: HTMLDivElement) {

  const list_container = products_title()
  products_title_sheets(products, list_container)
  header.appendChild(list_container)

  return list_container

}

