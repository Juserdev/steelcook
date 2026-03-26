import { clients_config } from '@/app/features/clients/config/clients.config'

export function clients_header(): HTMLDivElement {
  const clients_container = document.createElement('div')
  clients_container.classList.add(clients_config.clients_container_class.common_class, clients_config.clients_container_class.class, 'active')

  const title = document.createElement('h1')
  title.classList.add(clients_config.title.class_1, clients_config.title.class_2)
  title.textContent = clients_config.title.text

  const add_client_btn = document.createElement("button")
  add_client_btn.classList.add(clients_config.add_client_btn.class)
  add_client_btn.textContent = clients_config.add_client_btn.text
  add_client_btn.dataset.add_client = "add_client"

  clients_container.appendChild(title)
  clients_container.appendChild(add_client_btn)

  return clients_container
}