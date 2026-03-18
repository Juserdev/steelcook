import type { Clients } from "@/services/clients/clients.types"
import type { Products } from "@/services/products/products.types"
import type { Profile } from "@/services/profile/profile.types"
import { fill_quotation_form } from "@/services/quotations/components/form/fill-quotation-form"
import { quotation_form } from "@/services/quotations/components/form/quotation-form"
import { handle_quotation_delete } from "@/services/quotations/components/handlers/handle-quotation-delete"
import { handle_quotation_edit_open } from "@/services/quotations/components/handlers/handle-quotation-edit-open"
import { handle_submit } from "@/services/quotations/components/handlers/handle-submit"
import { quotation_list } from "@/services/quotations/components/quotation-list"
import { quotation_headers } from "@/services/quotations/components/quotations-dashboard"
import type { Quotations } from "@/services/quotations/quotations.types"
import type { Quote_Settings } from "@/services/quote-settings/quote-settings-types"

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

  handle_submit(form, TOKEN)


  handle_quotation_edit_open(quoatations, quotation_header, form, fill_quotation_form)
  handle_quotation_delete(TOKEN, list)

  return quotation_header

}