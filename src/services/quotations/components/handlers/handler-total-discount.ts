export function handler_total_discount(section: HTMLElement) {

  section.addEventListener('input', e => {
    const target = e.target as HTMLInputElement

    if (target.name !== 'total_discount') return

    const input_subtotal = section.querySelector<HTMLInputElement>('[name="total_subtotal"]')
    const input_discount = section.querySelector<HTMLInputElement>('[name="total_discount"]')
    const input_neto = section.querySelector<HTMLInputElement>('[name="total_net"]')

    if (!input_subtotal || !input_discount || !input_neto) return

    const input = input_subtotal.value
    const discount = input_discount.value

    const subtotal = String(+input - +discount)

    input_neto.value = subtotal

  })
}