import { format_thousands_with_dots } from "@/app/shared/utils/format/format-numeric-input"
import { parce_formatted_number } from "@/app/shared/utils/format/parce-formatted-number"

export function handle_total_tax_amount(section: HTMLElement) {

  section.addEventListener('input', e => {

    const target = e.target as HTMLInputElement

    if (target.name !== 'total_tax_rate' && target.name !== 'total_discount') return

    const input_sbutotal = section.querySelector<HTMLInputElement>('[name="total_subtotal"]')
    const input_discount = section.querySelector<HTMLInputElement>('[name="total_discount"]')
    const input_net = section.querySelector<HTMLInputElement>('[name="total_net"]')
    const input_tax_rate = section.querySelector<HTMLInputElement>('[name="total_tax_rate"]')
    const input_tax_amount = section.querySelector<HTMLInputElement>('[name="total_tax_amount"]')
    const input_total = section.querySelector<HTMLInputElement>('[name="total_total"]')

    if (!input_sbutotal || !input_discount || !input_net || !input_tax_rate || !input_tax_amount || !input_total) return

    const subtotal = parce_formatted_number(input_sbutotal.value)
    const discount = parce_formatted_number(input_discount.value)
    const net = parce_formatted_number(input_net.value)
    const tax_rate = Number(input_tax_rate.value)

    const result_tax = format_thousands_with_dots(String(net * tax_rate / 100))

    input_tax_amount.value = result_tax

    const result = (subtotal - discount) + +result_tax

    input_total.value = format_thousands_with_dots(String(result))


  })

}