import type { Clients } from "@/app/types/clients/clients.types";
import { form_add_client } from "@/app/config/clients/form-add-client.config";

export function fill_client_form(
  id: string,
  form: HTMLFormElement,
  clients: Clients[]
) {
  const form_mm = form_add_client.form

  form.dataset.mode = form_mm.mode.edit
  form.method = form_mm.method.edit

  const client = clients.find(element => element.id === id)


  const fields = {
    name: form.querySelector<HTMLInputElement>('[name="name"]'),
    client_id: form.querySelector<HTMLInputElement>('[name="id"]'),
    email: form.querySelector<HTMLInputElement>('[name="email"]'),
    phone: form.querySelector<HTMLInputElement>('[name="phone"]'),
    address: form.querySelector<HTMLInputElement>('[name="address"]'),
  }

  if (!client || !fields) return

  fields.name!.value = client.name ?? ''
  fields.client_id!.value = String(client.client_id) ?? ''
  fields.email!.value = client.email ?? ''
  fields.phone!.value = String(client.phone) ?? ''
  fields.address!.value = String(client.address) ?? ''

}