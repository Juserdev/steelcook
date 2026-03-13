
import type { Clients } from './clients.types'
import { clients_header } from './components/clients-dashboard';
import { clients_form_add } from './components/clients-add-form';
import { clients_list } from './components/clients-list';
import { client_form_edit } from './components/client-edit-form';
import { handle_client_edit_open } from './components/handlers/handle-client-edit-open';
import { handle_client_edit } from './components/handlers/handle-client-edit';
import { deleteClient } from './clients-services';



export function content_clients(TOKEN: string, clients: Clients[]): HTMLDivElement {

  const client_header = clients_header()
  const list = clients_list(clients, client_header)
  clients_form_add(TOKEN, client_header)

  const form_edit = client_form_edit(client_header)

  handle_client_edit_open(list, form_edit)
  handle_client_edit(TOKEN!, form_edit)

  function handle_client_delete(TOKEN: string, container: HTMLDivElement) {

    const icon_delete = container.querySelectorAll<HTMLImageElement>('.icon-delete')

    icon_delete.forEach(icon => {

      icon.addEventListener('click', e => {

        const target = e.target as HTMLImageElement
        const content = target.closest('.client-file') as HTMLDivElement

        if (!content) return

        const id = content.dataset.id

        deleteClient(TOKEN!, id!)

        window.location.reload()
      })

    })

  }

  handle_client_delete(TOKEN!, list)

  return client_header
} 