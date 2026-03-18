import type { Clients, Send_Quote_Client } from "@/services/clients/clients.types"
import type { Products, Send_Quote_Product } from "@/services/products/products.types"
import type { Profile, Send_Quote_Profile } from "@/services/profile/profile.types"
import type { Quote_Settings, Send_Quote_Settings } from "../quote-settings/quote-settings-types"

export type Form_Mode = 'add' | 'edit'

interface Client_Snapshot extends Omit<Clients, "created_at"> { }
interface Profile_Snapshot extends Omit<Profile, "created_at"> { }
interface Items_Snapshot extends Omit<Products, "created_at"> {
  quantity: number
  subtotal: number
  total: number
}

export interface QS_Snapshot extends Omit<Quote_Settings, 'created_at' | 'id'> { }


export interface Quotations {
  id: string
  user_id: string
  quotation_id: string
  profile_snapshot: Profile_Snapshot
  client_snapshot: Client_Snapshot
  items: Items_Snapshot[]
  public_id: string
  subtotal: number
  discount: number
  net: number
  tax_rate: number
  tax_amount: number
  total: number
  quote_settings: QS_Snapshot
  created_at: string
}


export interface Quotations_Config {
  quotations_container_class: {
    common_class: string,
    class: string
  },
  title: {
    class_1: string,
    class_2: string,
    text: string,
    text_button: string
  },
  quotations_class: {
    file: string
    id: string
    client: string
    phone: string
    total: string
    date: string
    button: string
  }
  add_quotation_btn: {
    class: string,
    text: string
  }
  icons: {
    container_class: string
    edit: {
      src: string
      alt: string
      class: string
    }
    remove: {
      src: string
      alt: string
      class: string
    }
  }
}

export interface Send_Create_Quotation {
  quotation_id: string
  profile_snapshot: Send_Quote_Profile
  client_snapshot: Send_Quote_Client
  items: Send_Quote_Product[]
  subtotal: number
  discount: number
  net: number
  tax_rate: number
  tax_amount: number
  total: number
  quote_settings: Send_Quote_Settings
}

