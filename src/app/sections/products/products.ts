import { fill_product_form } from "@/app/builders/products/fill-product-form"

import { product_form } from "@/app/builders/products/products-form"
import { products_list } from "@/app/builders/products/products-list"
import { extract_product_form } from "@/app/utils/products/extract_product_form"

import type { Products } from "@/app/types/products/products.types"
import { handle_delete_from_list } from "@/shared/handlers/handle-delete-from-list"
import { handle_edit_open } from "@/shared/handlers/handle-edit-open"
import { handle_submit } from "@/shared/handlers/handle-submit"
import { products_header } from "@/app/builders/products/products-dashbaord"
import { createProduct, deleteProducts, editProducts } from "@/app/services/products/products-services"

export function content_products(TOKEN: string, products: Products[]): HTMLDivElement {

  const product_header = products_header()
  const list = products_list(products, product_header)
  const form = product_form(product_header)

  handle_submit(TOKEN, form, extract_product_form, createProduct, editProducts)
  handle_edit_open(products, product_header, form, { item: 'product-file', list: 'list-container-product' }, fill_product_form)
  handle_delete_from_list(TOKEN, list, 'product', deleteProducts)

  return product_header
}
