import { clients_header } from '@/app/features/clients/components/clients-dashboard.view';
import { clients_form } from '@/app/features/clients/components/clients-form.view';
import { clients_list } from '@/app/features/clients/components/clients-list.view';
import { fill_client_form } from '@/app/features/clients/components/fill-client-form.view';
import { createClient, deleteClient, editClient } from '@/app/features/clients/services/clients.services';
import type { Clients } from '@/app/features/clients/types/clients.types';
import { extract_client_form } from '@/app/features/clients/utils/extract-client-form.utils';
import { handle_delete_from_list } from '@/app/shared/handlers/handle-delete-from-list.handle';
import { handle_edit_open } from '@/app/shared/handlers/handle-edit-open.handle';
import { handle_submit } from '@/app/shared/handlers/handle-submit.handle';

export function content_clients(TOKEN: string, clients: Clients[]): HTMLDivElement {

  const client_header = clients_header()
  const list = clients_list(clients, client_header)
  const form = clients_form(client_header)

  handle_submit(TOKEN, form, extract_client_form, createClient, editClient)
  handle_edit_open(clients, client_header, form, { item: 'client-file', list: 'list-container-client' }, fill_client_form)
  handle_delete_from_list(TOKEN, list, 'client', deleteClient)

  return client_header
} 