
import type { Clients } from './clients.types'
import { clients_header } from './components/clients-dashboard';
import { clients_form } from './components/clients-form';
import { clients_list } from './components/clients-list';

export function content_clients(TOKEN: string, clients: Clients[]): HTMLDivElement {

  const client_header = clients_header()
  clients_list(clients, client_header)
  clients_form(TOKEN, client_header)

  return client_header
} 