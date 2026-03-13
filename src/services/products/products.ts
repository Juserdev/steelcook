import { products_header } from "./components/products-dashbaord"
import { product_form_add } from "./components/products-form-add"
import { products_list } from "./components/products-list"
import type { Products } from "./products.types"

export function content_products(TOKEN: string, products: Products[]): HTMLDivElement {

  const product_header = products_header()
  const list = products_list(products, product_header)

  product_form_add(TOKEN, product_header)
  console.log(list)

  return product_header
}