import type { Create_Client } from "@/app/features/clients/types/clients.types"

export function extract_client_form(form: HTMLFormElement): Create_Client {
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

  return new_client

}