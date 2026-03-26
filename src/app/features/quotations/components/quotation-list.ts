import type { Quotations } from "../types/quotations.types"
import { quotation_title } from "./quotation-title"
import { quotation_title_sheets } from "./quotation-title-sheets"


export function quotation_list(quotations: Quotations[], header: HTMLDivElement) {
  const list_container = quotation_title()
  quotation_title_sheets(quotations, list_container)

  header.appendChild(list_container)

  return list_container

}