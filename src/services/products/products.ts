import { fill_product_form } from "@/services/products/components/builders/fill-product-form"
import { products_header } from "@/services/products/components/products-dashbaord"
import { product_form } from "@/services/products/components/products-form-add"
import { products_list } from "@/services/products/components/products-list"
import { extract_product_form } from "@/services/products/components/utils/extract_product_form"
import { createProduct, deleteProducts, editProducts } from "@/services/products/products-services"
import type { Products } from "@/services/products/products.types"
import { handle_delete_from_list } from "@/shared/handlers/handle-delete-from-list"
import { handle_edit_open } from "@/shared/handlers/handle-edit-open"
import { handle_submit } from "@/shared/handlers/handle-submit"

export function content_products(TOKEN: string, products: Products[]): HTMLDivElement {

  const product_header = products_header()
  const list = products_list(products, product_header)
  const form = product_form(product_header)

  handle_submit(TOKEN, form, extract_product_form, createProduct, editProducts)
  handle_edit_open(products, product_header, form, { item: 'product-file', list: 'list-container-product' }, fill_product_form)
  handle_delete_from_list(TOKEN, list, 'product', deleteProducts)

  return product_header
}
