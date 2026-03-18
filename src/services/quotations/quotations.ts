import type { Clients } from "../clients/clients.types"
import type { Products } from "../products/products.types"
import type { Profile } from "../profile/profile.types"
import type { Quote_Settings } from "../quote-settings/quote-settings-types"
import { fill_quotation_form } from "./components/form/fill-quotation-form"
import { quotation_form } from "./components/form/quotation-form"
import { handle_quotation_delete } from "./components/handlers/handle-quotation-delete"
import { handle_quotation_edit_open } from "./components/handlers/handle-quotation-edit-open"
import { handler_submit } from "./components/handlers/handler-submit"
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
  const list = quotation_list(quoatations, quotation_header)
  const form = quotation_form(quotation_header, profile, quote_settings, clients, products)

  handler_submit(form, TOKEN)

  console.log(list)

  handle_quotation_edit_open(quoatations, quotation_header, form, fill_quotation_form)
  handle_quotation_delete(TOKEN, list)



  return quotation_header

}