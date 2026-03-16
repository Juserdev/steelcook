import { editProducts } from "../../products-services"
import type { Create_Product } from "../../products.types"

export function handle_product_edit(TOKEN: string, form_edit: HTMLFormElement) {
  form_edit.addEventListener('submit', async e => {
    e.preventDefault()

    const id = form_edit.dataset.id
    if (!id) return

    const formDada = new FormData(form_edit)
    const code = formDada.get('code') as string
    const name = formDada.get('name') as string
    const description = formDada.get('description') as string
    const price = formDada.get('price') as string

    const edited_product = {
      code: code,
      name: name,
      description: description,
      price: +price

    } satisfies Create_Product

    await editProducts(TOKEN, id, edited_product)

    window.location.reload()

  })
}