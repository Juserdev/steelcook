import { format_thousands_with_dots } from "@/app/shared/utils/format/format-numeric-input"

export function init_input_behaviors(container: HTMLDivElement) {

  const regex_num = /\D/g
  const prices = container.querySelectorAll<HTMLInputElement>('[data-input_price]')
  const numeric = container.querySelectorAll<HTMLInputElement>('[data-number]')

  if (prices) {

    prices.forEach(input => {
      input.addEventListener('input', () => {
        input.value = format_thousands_with_dots(input.value)
      })
    })

  }

  if (numeric) {

    numeric.forEach(input => {
      input.addEventListener('input', () => {
        input.value = input.value.replaceAll(regex_num, '')
      })
    })

  }



}