export function handler_total_tax_amount(section: HTMLElement) {

  section.addEventListener('input', e => {

    const target = e.target as HTMLInputElement

    if (target.name !== 'total_tax_rate' && target.name !== 'total_discount') return

    const input_net = section.querySelector<HTMLInputElement>('[name="total_net"]')
    const input_tax_rate = section.querySelector<HTMLInputElement>('[name="total_tax_rate"]')
    const input_tax_amount = section.querySelector<HTMLInputElement>('[name="total_tax_amount"]')
    const input_total = section.querySelector<HTMLInputElement>('[name="total_total"]')

    if (!input_net || !input_tax_rate || !input_tax_amount || !input_total) return

    const result = (+input_net.value * +input_tax_rate.value / 100).toFixed(2)

    input_tax_amount.value = result

    input_total.value = String(+input_net.value + +input_tax_amount.value)

  })

}