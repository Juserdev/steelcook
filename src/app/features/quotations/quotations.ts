import type { Clients } from "@/app/features/clients/types/clients.types"
import type { Products } from "@/app/features/products/types/products.types"
import type { Profile } from "@/app/features/profile/types/profile.types"
import { fill_quotation_form } from "@/app/features/quotations/components/fill-quotation-form"
import { quotation_form } from "@/app/features/quotations/components/quotation-form"
import { quotation_list } from "@/app/features/quotations/components/quotation-list"
import { quotation_headers } from "@/app/features/quotations/components/quotations-dashboard"
import { input_name_prices } from "@/app/features/quotations/config/input-name-price.config"
import { createQuotation, deleteQuotation, editQuotation } from "@/app/features/quotations/services/quotations-service"
import type { Quotations } from "@/app/features/quotations/types/quotations.types"
import { extract_quotation_form } from "@/app/features/quotations/utils/extract-quotation-form"
import { input_to_dataset_price } from "@/app/features/quotations/utils/input-to-dataset-price"
import type { Quote_Settings } from "@/app/features/quote-settings/types/quote-settings.types"
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