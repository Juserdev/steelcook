
import { createClient, deleteClient, editClient } from '@/app/services/clients/clients-services';
import type { Clients } from '@/app/types/clients/clients.types';
import { extract_client_form } from '@/app/utils/clients/extract-client-form';
import { handle_delete_from_list } from '@/app/shared/handlers/handle-delete-from-list';
import { handle_edit_open } from '@/app/shared/handlers/handle-edit-open';
import { handle_submit } from '@/app/shared/handlers/handle-submit';
import { clients_header } from '../../builders/clients/clients-dashboard';
import { clients_form } from '../../builders/clients/clients-form';
import { clients_list } from '../../builders/clients/clients-list';
import { fill_client_form } from '@/app/builders/clients/fill-client-form';



export function content_clients(TOKEN: string, clients: Clients[]): HTMLDivElement {

  const client_header = clients_header()
  const list = clients_list(clients, client_header)
  const form = clients_form(client_header)

  handle_submit(TOKEN, form, extract_client_form, createClient, editClient)
  handle_edit_open(clients, client_header, form, { item: 'client-file', list: 'list-container-client' }, fill_client_form)
  handle_delete_from_list(TOKEN, list, 'client', deleteClient)

  return client_header
} 