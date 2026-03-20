// export function handler_total_tax_amount(section: HTMLElement) {

import { format_thousands_with_dots } from "@/utils/format-numeric-input"
import { parce_formatted_number } from "@/utils/parce-formatted-number"

export function handler_total_tax_amount(section: HTMLElement) {

  section.addEventListener('input', e => {

    const target = e.target as HTMLInputElement

    if (target.name !== 'total_tax_rate' && target.name !== 'total_discount') return

    const input_net = section.querySelector<HTMLInputElement>('[name="total_net"]')
    const input_tax_rate = section.querySelector<HTMLInputElement>('[name="total_tax_rate"]')
    const input_tax_amount = section.querySelector<HTMLInputElement>('[name="total_tax_amount"]')
    const input_total = section.querySelector<HTMLInputElement>('[name="total_total"]')

    if (!input_net || !input_tax_rate || !input_tax_amount || !input_total) return

    const result = String(parce_formatted_number(input_net.value) * parce_formatted_number(input_tax_rate.value) / 100)

    input_tax_amount.value = format_thousands_with_dots(result)

    input_total.value = format_thousands_with_dots(String(parce_formatted_number(input_net.value) + parce_formatted_number(input_tax_amount.value)))

  })

}