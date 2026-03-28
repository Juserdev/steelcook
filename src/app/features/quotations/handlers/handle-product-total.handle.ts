import { format_thousands_with_dots } from "@/app/shared/utils/format/format-numeric-input.utils"
import { parce_formatted_number } from "@/app/shared/utils/format/parce-formatted-number.utils"

export function handle_product_total(section: HTMLElement, section_total: HTMLElement) {

  section.addEventListener('input', (e) => {

    const target = e.target as HTMLInputElement

    let result = 0

    if (target.name === 'product_quantites') {

      const row = target.closest('.container-product-aq') as HTMLDivElement
      if (!row) return

      const quantites = row.querySelector<HTMLInputElement>('[name="product_quantites"]')
      const price = row.querySelector<HTMLInputElement>('[name="product_prices"]')
      const totals = row.querySelector<HTMLInputElement>('[name="product_totals"]')

      if (!quantites || !price || !totals) return

      const total = String(parce_formatted_number(price.value) * +quantites.value)
      totals.value = format_thousands_with_dots(String(total))

      const total_subtotal = section.querySelectorAll<HTMLInputElement>('[name="product_totals"]')
      total_subtotal.forEach(t => { result += parce_formatted_number(t.value) })


      const subtotal = section_total.querySelector<HTMLInputElement>('[name="total_subtotal"]')
      if (subtotal) subtotal.value = format_thousands_with_dots(String(result))

    }

  })
}