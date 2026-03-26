import { clients_title } from "@/app/features/clients/components/clients-title";
import { clients_title_sheets } from "@/app/features/clients/components/clients-title-sheets";
import type { Clients } from "@/app/features/clients/types/clients.types";

export function clients_list(clients: Clients[], header: HTMLDivElement) {


  const client_container = clients_title()
  clients_title_sheets(clients, client_container)

  header.appendChild(client_container)

  return client_container


}