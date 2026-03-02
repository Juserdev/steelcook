import { client_title_sheets, clients_config } from './clients-config'
import type { Clients } from './clients.types'


export function content_clients(clients: Clients[]): HTMLDivElement {

  const clients_container = document.createElement('div')
  clients_container.classList.add(clients_config.clients_container_class.common_class, clients_config.clients_container_class.class, 'active')

  const title = document.createElement('h1')
  title.classList.add(clients_config.title.class_1, clients_config.title.class_2)
  title.textContent = clients_config.title.text

  clients_container.appendChild(title)

  const clients_titles_sheet_container = document.createElement("div")
  clients_titles_sheet_container.classList.add("quotations-titles-sheet")

  clients_container.appendChild(clients_titles_sheet_container)

  client_title_sheets.forEach(title => {
    const titles = document.createElement("h3")
    titles.classList.add(title.class, title.common_class)
    titles.textContent = title.title

    clients_titles_sheet_container.appendChild(titles)

  });

  clients.forEach(client => {


    const clients_file = document.createElement('div')
    clients_file.classList.add(clients_config.clients_class.file)

    const name = document.createElement('span')
    name.classList.add(clients_config.clients_class.name)
    name.textContent = client.name

    const client_id = document.createElement('span')
    client_id.classList.add(clients_config.clients_class.id)
    client_id.textContent = client.client_id

    const email = document.createElement('span')
    email.classList.add(clients_config.clients_class.email)
    email.textContent = client.email

    const address = document.createElement('span')
    address.classList.add(clients_config.clients_class.address)
    address.textContent = client.address

    const phone = document.createElement('span')
    phone.classList.add(clients_config.clients_class.phone)
    phone.textContent = client.phone

    clients_file.appendChild(name)
    clients_file.appendChild(client_id)
    clients_file.appendChild(phone)
    clients_file.appendChild(email)
    clients_file.appendChild(address)

    clients_container.appendChild(clients_file)

  });


  return clients_container
}