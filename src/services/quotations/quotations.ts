import { quotation_list } from "./components/quotation-list"
import { quotation_headers } from "./components/quotations-dashboard"

import type { Quotations } from "./quotations.types"


export function content_quotations(quoatations: Quotations[]): HTMLDivElement {
  const quotation_header = quotation_headers()
  quotation_list(quoatations, quotation_header)



  return quotation_header

}