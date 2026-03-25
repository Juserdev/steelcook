import type { Products } from "@/app/types/products/products.types"
import { format_thousands_with_dots } from "@/app/shared/utils/format/format-numeric-input"

export function handler_product_autofill(section: HTMLElement, products: Products[]) {

  section.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement
    if (target.name === 'product_code') {

      const product_selected = products.find(product => product.code === target.value)
      if (!product_selected) return

      const codes = Array.from(section.querySelectorAll<HTMLInputElement>('[name="product_code"]'))

      const i = codes.indexOf(target)

      if (i === -1) return

      const names = section.querySelectorAll<HTMLInputElement>('[name="product_names"]')
      const descriptions = section.querySelectorAll<HTMLInputElement>('[name="product_descriptions"]')
      const prices = section.querySelectorAll<HTMLInputElement>('[name="product_prices"]')

      names[i].value = product_selected.name
      descriptions[i].value = product_selected.description
      prices[i].value = format_thousands_with_dots(String(product_selected.price))

    }
  })
}