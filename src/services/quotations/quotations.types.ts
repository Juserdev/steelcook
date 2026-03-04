import type { Clients } from "@/services/clients/clients.types"
import type { Products } from "@/services/products/products.types"
import type { Profile } from "@/services/profile/profile.types"

interface Client_Snapshot extends Omit<Clients, "created_at"> { }
interface Profile_Snapshot extends Omit<Profile, "created_at"> { }
interface Items_Snapshot extends Omit<Products, "created_at"> {
  quantity: number
  subtotal: number
  total: number
}

export interface Quotations {
  id: string
  user_id: string
  quotation_id: string
  profile_snapshot: Profile_Snapshot
  client_snapshot: Client_Snapshot
  items: Items_Snapshot[]
  public_id: string
  subtotal: number
  tax: number
  total: number
  created_at: string
}

export interface Quotations_Config {
  quotations_container_class: { common_class: string, class: string },
  title: { class_1: string, class_2: string, text: string, text_button: string },
  quotations_class: {
    file: string
    id: string
    client: string
    phone: string
    total: string
    date: string
    button: string
  }
  add_quotation_btn: { class: string, text: string }
}

export interface Create_Quotation extends Omit<Quotations, 'id' | 'created_at'> { }

