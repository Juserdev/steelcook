import { createProduct } from "../../products-services"
import type { Create_Product } from "../../products.types"

export function handle_create_product(TOKEN: string, form: HTMLFormElement) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(form)

    const code = formData.get('code') as string
    const name = formData.get('name') as string
    const description = formData.get('description') as string
    let priceStr = formData.get('price') as string
    const price = +priceStr

    const new_product: Create_Product = { code, name, description, price }

    await createProduct(TOKEN, new_product)

    window.location.reload()
  })
}