import { createClient } from '@/services/clients/clients-services'
import type { Create_Client } from '@/services/clients/clients.types'

export function handle_create_client(TOKEN: string, form: HTMLFormElement) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const client_id = Number(formData.get('id') as string)
    const email = formData.get('email') as string
    const phone = Number(formData.get('phone') as string)
    const address = formData.get('address') as string

    const new_client: Create_Client = {
      name,
      client_id,
      email,
      phone,
      address
    }

    await createClient(TOKEN, new_client)

    window.location.reload()
  })
}