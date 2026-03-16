import { handle_product_edit_open } from "./components/handlers/handle-product-edit-open"
import { handle_product_edit } from "./components/handlers/handle-product.edit"
import { products_header } from "./components/products-dashbaord"
import { product_form_add } from "./components/products-form-add"
import { product_form_edit } from "./components/products-form-edit"
import { products_list } from "./components/products-list"
import type { Products } from "./products.types"

export function content_products(TOKEN: string, products: Products[]): HTMLDivElement {

  const product_header = products_header()
  const list = products_list(products, product_header)
  product_form_add(TOKEN, product_header)

  const form_edit = product_form_edit(product_header)

  handle_product_edit_open(list, form_edit)
  handle_product_edit(TOKEN, form_edit)



  return product_header
}