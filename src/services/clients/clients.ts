
import type { Clients } from './clients.types'
import { clients_header } from './components/clients-dashboard';
import { clients_form_add } from './components/clients-add-form';
import { clients_list } from './components/clients-list';
import { client_form_edit } from './components/client-edit-form';
import { handle_client_edit_open } from './components/handlers/handle-client-edit-open';



export function content_clients(TOKEN: string, clients: Clients[]): HTMLDivElement {

  const client_header = clients_header()
  const list = clients_list(clients, client_header)
  clients_form_add(TOKEN, client_header)

  const form_edit = client_form_edit(client_header)

  handle_client_edit_open(list, form_edit)

  return client_header
} 