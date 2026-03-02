export interface Clients {
  address: string
  client_id: string
  created_at: string
  email: string
  id: string
  name: string
  phone: string
}

export interface Clients_config {
  clients_container_class: { common_class: string, class: string }
  title: { class_1: string, class_2: string, text: string }
  clients_class: {
    file: string
    name: string
    id: string
    email: string
    address: string
    phone: string
  }
}