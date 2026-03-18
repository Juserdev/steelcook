import type { Create_Product } from "@/services/products/products.types"

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
    price: Number(price)
  }

  return new_product
}