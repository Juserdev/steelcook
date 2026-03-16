import type { Edit_Client } from "../../clients.types"

export function handle_client_edit_open(container: HTMLDivElement, form: HTMLFormElement) {

  const icon_edit = container.querySelectorAll<HTMLImageElement>('.icon-edit')

  icon_edit.forEach(edit => {

    edit.addEventListener('click', (e) => {

      container.classList.add('active')
      form.classList.remove('active')


      const target = e.target as HTMLImageElement
      const content = target.closest('.client-file') as HTMLDivElement

      if (!content) return


      const client_data: Edit_Client = {

        id: content.dataset.id!,
        name: content.dataset.name ?? '',
        client_id: content.dataset.client_id ? Number(content.dataset.client_id) : null,
        phone: content.dataset.phone ? Number(content.dataset.phone) : null,
        email: content.dataset.email ?? '',
        address: content.dataset.address ?? '',
      }

      form.dataset.id = client_data.id

      const form_inputs = {
        name: form.elements.namedItem('name') as HTMLInputElement,
        id: form.elements.namedItem('id') as HTMLInputElement,
        phone: form.elements.namedItem('phone') as HTMLInputElement,
        email: form.elements.namedItem('email') as HTMLInputElement,
        address: form.elements.namedItem('address') as HTMLInputElement,
      }

      form_inputs.name.value = client_data.name
      form_inputs.id.value = String(client_data.client_id)
      form_inputs.phone.value = String(client_data.phone)
      form_inputs.email.value = client_data.email
      form_inputs.address.value = client_data.address

    })

  })
}