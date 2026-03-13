import { editClient } from "../../clients-services"
import type { Create_Client } from "../../clients.types"

export function handle_client_edit(TOKEN: string, form_edit: HTMLFormElement) {
  form_edit.addEventListener('submit', async (e) => {
    e.preventDefault()

    const id = form_edit.dataset.id
    if (!id) return

    const formData = new FormData(form_edit)
    const name = formData.get('name') as string
    const client_id = Number(formData.get('id') as string)
    const email = formData.get('email') as string
    const phone = Number(formData.get('phone') as string)
    const address = formData.get('address') as string

    const edited_client: Create_Client = {
      name,
      client_id,
      email,
      phone,
      address
    }

    await editClient(TOKEN!, id, edited_client)

    window.location.reload()
  })





}