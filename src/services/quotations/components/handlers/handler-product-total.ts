export function handler_product_total(section: HTMLElement) {
  section.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement

    if (target.name === 'product_quantites') {

      const quantites = Array.from(section.querySelectorAll<HTMLInputElement>('[name="product_quantites"]'))

      const i = quantites.indexOf(target)

      if (i === -1) return
      const prices = section.querySelectorAll<HTMLInputElement>('[name="product_prices"]')
      const totals = section.querySelectorAll<HTMLInputElement>('[name="product_totals"]')

      const total = String(+prices[i].value * +quantites[i].value)
      totals[i].value = total

    }
  })
}