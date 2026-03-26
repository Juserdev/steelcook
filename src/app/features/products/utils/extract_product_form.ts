import type { Create_Product } from "@/app/features/products/types/products.types"
import { parce_formatted_number } from "@/app/shared/utils/format/parce-formatted-number"

export function extract_product_form(form: HTMLFormElement) {

  const formData = new FormData(form)

  const code = formData.get('code') as string
  const name = formData.get('name') as string
  const description = formData.get('description') as string
  let price = formData.get('price') as string

  const new_product: Create_Product = {
    code: code,
    name: name,
    description: description,
    price: parce_formatted_number(price)
  }

  return new_product
}