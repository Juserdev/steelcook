import { format_thousands_with_dots } from "@/app/shared/utils/format/format-numeric-input.utils"

export function init_input_behaviors(container: HTMLDivElement) {
  const regex_num = /\D/g

  // Procesar todos los inputs que tengan datasets de formato
  container.querySelectorAll<HTMLInputElement>('[data-price], [data-number]').forEach(input => {
    input.addEventListener('input', () => {
      if (input.dataset.price) {
        input.value = format_thousands_with_dots(input.value)
      }
      else if (input.dataset.number) {
        input.value = input.value.replaceAll(regex_num, '')
      }
    })
  })
}