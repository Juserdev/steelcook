import type { Clients } from "@/app/types/clients/clients.types"
import type { Products } from "@/app/types/products/products.types"
import type { Profile } from "@/app/types/profile/profile.types"
import { input_name_prices } from "@/app/config/quotations/input-name-price.config"
import { fill_quotation_form } from "@/app/builders/quotation/fill-quotation-form"
import { quotation_form } from "@/app/builders/quotation/quotation-form"
import { quotation_list } from "@/app/builders/quotation/quotation-list"
import { quotation_headers } from "@/app/builders/quotation/quotations-dashboard"
import { extract_quotation_form } from "@/app/utils/quotation/extract-quotation-form"
import { input_to_dataset_price } from "@/app/utils/quotation/input-to-dataset-price"
import { createQuotation, deleteQuotation, editQuotation } from "@/app/services/quotation/quotations-service"
import type { Quotations } from "@/services/quotations/quotations.types"
import type { Quote_Settings } from "@/app/types/quote-settings/quote-settings.types"
import { handle_delete_from_list } from "@/app/shared/handlers/handle-delete-from-list"
import { handle_edit_open } from "@/app/shared/handlers/handle-edit-open"
import { handle_submit } from "@/app/shared/handlers/handle-submit"

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

  input_to_dataset_price(form, input_name_prices)

  handle_submit(TOKEN, form, extract_quotation_form, createQuotation, editQuotation)
  handle_edit_open(quoatations, quotation_header, form, { item: 'quotation-file', list: 'list-container-quotations' }, fill_quotation_form)
  handle_delete_from_list(TOKEN, list, 'quotation', deleteQuotation)

  return quotation_header

}