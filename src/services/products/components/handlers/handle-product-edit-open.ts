import type { Edit_Product } from "../../products.types"

export function handle_product_edit_open(container: HTMLDivElement, form: HTMLFormElement) {

  const icon_edit = container.querySelectorAll<HTMLImageElement>('.icon-edit')

  icon_edit.forEach(edit => {

    edit.addEventListener('click', e => {

      container.classList.add('active')
      form.classList.remove('active')

      const target = e.target as HTMLImageElement
      const content = target.closest('.product-file') as HTMLDivElement

      if (!content) return


      const product_data: Edit_Product = {
        id: content.dataset.id!,
        code: content.dataset.code ?? '',
        name: content.dataset.name ?? '',
        description: content.dataset.description ?? '',
        price: Number(content.dataset.price) ?? 0
      }

      form.dataset.id = product_data.id

      const form_inputs = {
        code: form.elements.namedItem('code') as HTMLInputElement,
        name: form.elements.namedItem('name') as HTMLInputElement,
        description: form.elements.namedItem('description') as HTMLInputElement,
        price: form.elements.namedItem('price') as HTMLInputElement
      }

      form_inputs.code.value = product_data.code
      form_inputs.name.value = product_data.name
      form_inputs.description.value = product_data.description
      form_inputs.price.value = String(product_data.price)

    })


  })
}