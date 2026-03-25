import type { Input_Name_Price } from "@/app/config/quotations/input-name-price.config"

export function input_to_dataset_price(
  form: HTMLFormElement,
  data: readonly Input_Name_Price[]
) {
  const inputs = form.querySelectorAll<HTMLInputElement>('input')
  const price_names = new Set<Input_Name_Price>(data)

  inputs.forEach(input => { if (price_names.has(input.name as Input_Name_Price)) input.dataset.input_price = 'input_price' })

}

