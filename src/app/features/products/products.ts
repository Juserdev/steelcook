import { fill_product_form } from "@/app/features/products/components/fill-product-form.view"
import { products_header } from "@/app/features/products/components/products-dashbaord.view"
import { product_form } from "@/app/features/products/components/products-form.view"
import { products_list } from "@/app/features/products/components/products-list.view"
import { createProduct, deleteProducts, editProducts } from "@/app/features/products/services/products.services"
import type { Products } from "@/app/features/products/types/products.types"
import { extract_product_form } from "@/app/features/products/utils/extract_product_form.utils"
import { handle_delete_from_list } from "@/app/shared/handlers/handle-delete-from-list.handle"
import { handle_edit_open } from "@/app/shared/handlers/handle-edit-open.handle"
import { handle_submit } from "@/app/shared/handlers/handle-submit.handle"
import '@app/features/products/styles/products-form.css'
import '@app/features/products/styles/products.css'

export function content_products(TOKEN: string, products: Products[]): HTMLDivElement {

  const product_header = products_header()
  const list = products_list(products, product_header)
  const form = product_form(product_header)

  handle_submit(TOKEN, form, extract_product_form, createProduct, editProducts)
  handle_edit_open(products, product_header, form, { item: 'product-file', list: 'list-container-product' }, fill_product_form)
  handle_delete_from_list(TOKEN, list, 'product', deleteProducts)

  return product_header
}
