import type { Clients } from "../clients.types";
import { client_title_sheets, clients_config } from '../clients.config'

export function clients_list(clients: Clients[], header: HTMLDivElement) {

  const list_container = document.createElement('div')
  list_container.classList.add("list-container-client")

  const clients_titles_sheet_container = document.createElement("div")
  clients_titles_sheet_container.classList.add("quotations-titles-sheet")

  list_container.appendChild(clients_titles_sheet_container)

  client_title_sheets.forEach(title => {
    const titles = document.createElement("h3")
    titles.classList.add(title.class, title.common_class)
    titles.textContent = title.title

    clients_titles_sheet_container.appendChild(titles)

  });

  clients.forEach(client => {

    const icon_edit = clients_config.icons.edit
    const icon_remove = clients_config.icons.remove

    const clients_file = document.createElement('div')
    clients_file.classList.add(clients_config.clients_class.file)

    const name = document.createElement('span')
    name.classList.add(clients_config.clients_class.name)
    name.textContent = client.name

    const client_id = document.createElement('span')
    client_id.classList.add(clients_config.clients_class.id)
    client_id.textContent = String(client.client_id ?? '')

    const email = document.createElement('span')
    email.classList.add(clients_config.clients_class.email)
    email.textContent = client.email

    const address = document.createElement('span')
    address.classList.add(clients_config.clients_class.address)
    address.textContent = client.address

    const phone = document.createElement('span')
    phone.classList.add(clients_config.clients_class.phone)
    phone.textContent = String(client.phone ?? '')

    const icons_container = document.createElement('div')
    icons_container.classList.add(clients_config.icons.container_class)

    const edit = document.createElement('img')
    edit.src = icon_edit.src
    edit.alt = icon_edit.alt
    edit.classList.add(icon_edit.class)

    const remove = document.createElement('img')
    remove.src = icon_remove.src
    remove.alt = icon_remove.alt
    remove.classList.add(icon_remove.class)

    icons_container.appendChild(edit)
    icons_container.appendChild(remove)


    clients_file.appendChild(name)
    clients_file.appendChild(client_id)
    clients_file.appendChild(phone)
    clients_file.appendChild(email)
    clients_file.appendChild(address)
    clients_file.appendChild(icons_container)

    list_container.appendChild(clients_file)

  });

  header.appendChild(list_container)
}