import type { Titles_Sheets } from "@/types/ui.types";
import type { Quotations_Config } from "@/services/quotations/quotations.types";


export const quotations_config: Quotations_Config = {
  quotations_container_class: { common_class: 'section-content', class: 'quotations-content' },
  title: { class_1: 'title', class_2: 'quotation-title', text: 'Cotizaciones', text_button: "Ver cotización" },
  quotations_class: {
    file: 'quotation-file',
    id: 'quotation-id',
    client: 'quotation-client',
    phone: 'quotation-phone',
    total: 'quotation-total',
    date: 'quotation-date',
    button: "quotation-vew-btn"
  },
  add_quotation_btn: { class: 'add-quotation-btn', text: 'Agregar cotizacion' }
}

export const quotation_titles_sheets: Titles_Sheets[] = [
  {
    title: "ID",
    class: "quoattion-sheet-id",
    common_class: "quoattion-sheet"
  }, {
    title: "CLIENTE",
    class: "quoattion-sheet-client",
    common_class: "quoattion-sheet"
  }, {
    title: "VALOR",
    class: "quoattion-sheet-value",
    common_class: "quoattion-sheet"
  }, {
    title: "FECHA",
    class: "quoattion-sheet-date",
    common_class: "quoattion-sheet"
  }
]