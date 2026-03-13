import type { Clients } from "../clients/clients.types"
import type { Products } from "../products/products.types"
import type { Profile } from "../profile/profile.types"
import type { Quote_Settings } from "../quote-settings/quote-settings-types"
import { quotation_form } from "./components/form/quotation-form"
import { quotation_list } from "./components/quotation-list"
import { quotation_headers } from "./components/quotations-dashboard"

import type { Quotations } from "./quotations.types"


export function content_quotations(
  TOKEN: string,
  quoatations: Quotations[],
  profile: Profile[],
  quote_settings: Quote_Settings[],
  clients: Clients[],
  products: Products[]

): HTMLDivElement {
  const quotation_header = quotation_headers()
  quotation_list(quoatations, quotation_header)
  quotation_form(TOKEN, quotation_header, profile, quote_settings, clients, products)


  return quotation_header

}