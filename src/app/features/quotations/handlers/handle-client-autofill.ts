import type { Clients } from "@/app/features/clients/types/clients.types"

export function handler_client_autofill(form: HTMLFormElement, clients: Clients[]) {
  const c_input_name = form.elements.namedItem('client_name') as HTMLInputElement
  const c_input_id = form.elements.namedItem('client_id') as HTMLInputElement
  const c_input_email = form.elements.namedItem('client_email') as HTMLInputElement
  const c_input_phone = form.elements.namedItem('client_phone') as HTMLInputElement
  const c_input_address = form.elements.namedItem('client_address') as HTMLInputElement

  c_input_name.addEventListener('input', () => {
    const client_selected = clients.find(client => client.name === c_input_name.value)

    if (!client_selected) return

    if (c_input_id) c_input_id.value = String(client_selected.client_id)
    if (c_input_email) c_input_email.value = client_selected.email
    if (c_input_phone) c_input_phone.value = String(client_selected.phone)
    if (c_input_address) c_input_address.value = client_selected.address

  })
}