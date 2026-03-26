import { quotation_title } from "@/app/features/quotations/components/quotation-title"
import { quotation_title_sheets } from "@/app/features/quotations/components/quotation-title-sheets"
import type { Quotations } from "@/app/features/quotations/types/quotations.types"

export function quotation_list(quotations: Quotations[], header: HTMLDivElement) {
  const list_container = quotation_title()
  quotation_title_sheets(quotations, list_container)

  header.appendChild(list_container)

  return list_container

}