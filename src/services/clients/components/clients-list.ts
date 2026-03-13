import type { Clients } from "../clients.types";
import { clients_title } from "./builders/clients-title";
import { clients_title_sheets } from "./builders/clients-title-sheets";

export function clients_list(clients: Clients[], header: HTMLDivElement) {


  const client_container = clients_title()
  clients_title_sheets(clients, client_container)

  header.appendChild(client_container)


  return client_container


}