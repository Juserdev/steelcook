import { products_header } from "./components/products-dashbaord"
import { product_form } from "./components/products-form"
import { products_list } from "./components/products-list"
import type { Products } from "./products.types"

export function content_products(TOKEN: string, products: Products[]): HTMLDivElement {

  const product_header = products_header()
  products_list(products, product_header)
  product_form(TOKEN, product_header)

  return product_header
}