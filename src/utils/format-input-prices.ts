import { format_thousands_with_dots } from "@/utils/format-numeric-input"

export function format_input_prices(container: HTMLDivElement) {

  const inputs_price = container.querySelectorAll<HTMLInputElement>('[data-input_price]')
  if (inputs_price) {
    inputs_price.forEach(input => {
      input.addEventListener('input', () => {
        input.value = format_thousands_with_dots(input.value)
      })
    })
  }
}