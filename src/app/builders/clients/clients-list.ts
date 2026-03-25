import { clients_title } from "@/app/builders/clients/clients-title";
import type { Clients } from "../../types/clients/clients.types";
import { clients_title_sheets } from "@/app/builders/clients/clients-title-sheets";


export function clients_list(clients: Clients[], header: HTMLDivElement) {


  const client_container = clients_title()
  clients_title_sheets(clients, client_container)

  header.appendChild(client_container)

  return client_container


}