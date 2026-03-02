import type { Titles_Sheets } from "@/types/ui.types"
import type { Products_config } from "./products.types"

export const products_config: Products_config = {
  products_content_class: { common_class: 'section-content', class: 'products-content' },
  title: { class_1: 'title', class_2: 'products-title', text: 'Productos' },
  products_class: {
    file: 'product-file',
    code: 'product-code',
    name: 'product-name',
    description: 'product-description',
    price: 'product-price'
  }

}

export const product_titles_sheets: Titles_Sheets[] = [
  {
    title: "CODE",
    class: "product-sheet-code",
    common_class: "product-sheet"
  }, {
    title: "NOMBRE",
    class: "product-sheet-name",
    common_class: "product-sheet"
  }, {
    title: "DESCRIPCIÓN",
    class: "product-sheet-description",
    common_class: "product-sheet"
  }, {
    title: "FECHA",
    class: "product-sheet-price",
    common_class: "product-sheet"
  },
]