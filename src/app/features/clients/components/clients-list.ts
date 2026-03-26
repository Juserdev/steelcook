import { clients_title } from "@/app/features/clients/components/clients-title";
import type { Clients } from "../types/clients.types";
import { clients_title_sheets } from "@/app/features/clients/components/clients-title-sheets";


export function clients_list(clients: Clients[], header: HTMLDivElement) {


  const client_container = clients_title()
  clients_title_sheets(clients, client_container)

  header.appendChild(client_container)

  return client_container


}