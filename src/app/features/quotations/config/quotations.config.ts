import type { Quotations_Config } from "@/app/features/quotations/types/quotations.types";
import { icons } from "@/app/shared/config/icons.config";
import type { Titles_Sheets } from "@/app/shared/types/ui.types";


export const quotations_config: Quotations_Config = {
  quotations_container_class: {
    common_class: 'section-content',
    class: 'quotations-content'
  },
  title: {
    class_1: 'title',
    class_2: 'quotation-title',
    text: 'Cotizaciones',
    text_button: "Ver cotización"
  },
  quotations_class: {
    file: 'quotation-file',
    id: 'quotation-id',
    client: 'quotation-client',
    phone: 'quotation-phone',
    total: 'quotation-total',
    date: 'quotation-date',
    button: "quotation-vew-btn"
  },
  add_quotation_btn: {
    class: 'add-quotation-btn',
    text: 'Agregar cotizacion'
  }, icons: {
    container_class: 'conatiner-quotation-icons',
    edit: {
      src: icons.edit,
      alt: 'icon edit',
      class: 'icon-edit'
    },
    remove: {
      src: icons.remove,
      alt: 'icon delete',
      class: 'icon-delete'
    }
  }
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
    title: "TELEFONO",
    class: "quoattion-sheet-phone",
    common_class: "quoattion-sheet"
  }, {
    title: "VALOR",
    class: "quoattion-sheet-price",
    common_class: "quoattion-sheet"
  }, {
    title: "FECHA",
    class: "quoattion-sheet-date",
    common_class: "quoattion-sheet"
  }, {
    title: "VER",
    class: "quoattion-sheet-VIEW",
    common_class: "quoattion-sheet"
  }
]