import type { Clients_config } from "@/services/clients/clients.types";
import type { Titles_Sheets } from "@/types/ui.types";

export const clients_config: Clients_config = {
  clients_container_class: { common_class: 'section-content', class: 'clients-content' },
  title: { class_1: 'title', class_2: 'clients-title', text: 'Clientes' },
  clients_class: {
    file: 'client-file',
    name: 'client-name',
    id: 'client-id',
    email: 'client-email',
    address: 'client-address',
    phone: 'client-phone'
  },
  add_client_btn: { class: 'add-client-btn', text: 'Agregar Cliente' }

}

export const client_title_sheets: Titles_Sheets[] = [
  {
    title: "NOMBRE",
    class: "cliente-sheet-name",
    common_class: "client-sheet",
  }, {
    title: "ID",
    class: "cliente-sheet-id",
    common_class: "client-sheet",
  }, {
    title: "EMAIL",
    class: "cliente-sheet-email",
    common_class: "client-sheet",
  }, {
    title: "DIRECCIÓN",
    class: "cliente-sheet-address",
    common_class: "client-sheet",
  }, {
    title: "TELEFONO",
    class: "cliente-sheet-phone",
    common_class: "client-sheet",
  },
]
