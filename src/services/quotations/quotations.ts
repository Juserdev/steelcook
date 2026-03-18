import type { Clients } from "@/services/clients/clients.types"
import type { Products } from "@/services/products/products.types"
import type { Profile } from "@/services/profile/profile.types"
import { fill_quotation_form } from "@/services/quotations/components/form/fill-quotation-form"
import { quotation_form } from "@/services/quotations/components/form/quotation-form"
import { quotation_list } from "@/services/quotations/components/quotation-list"
import { quotation_headers } from "@/services/quotations/components/quotations-dashboard"
import { extract_quotation_form } from "@/services/quotations/components/utils/extract-quotation-form"
import { createQuotation, deleteQuotation, editQuotation } from "@/services/quotations/quotations-service"
import type { Quotations } from "@/services/quotations/quotations.types"
import type { Quote_Settings } from "@/services/quote-settings/quote-settings-types"
import { handle_delete_from_list } from "@/shared/handlers/handle-delete-from-list"
import { handle_edit_open } from "@/shared/handlers/handle-edit-open"
import { handle_submit } from "@/shared/handlers/handle-submit"

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

  handle_submit(TOKEN, form, extract_quotation_form, createQuotation, editQuotation)
  handle_edit_open(quoatations, quotation_header, form, { item: 'quotation-file', list: 'list-container-quotations' }, fill_quotation_form)
  handle_delete_from_list(TOKEN, list, 'quotation', deleteQuotation)

  return quotation_header

}