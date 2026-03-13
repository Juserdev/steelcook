import type { Titles_Sheets } from "@/types/ui.types"
import type { Products_Config } from "./products.types"
import { icons } from "@/types/icons.config"

export const products_config: Products_Config = {
  products_content_class: {
    common_class: 'section-content',
    class: 'products-content'
  },
  title: {
    class_1: 'title',
    class_2: 'products-title',
    text: 'Productos'
  },
  products_class: {
    file: 'product-file',
    code: 'product-code',
    name: 'product-name',
    description: 'product-description',
    price: 'product-price'
  },
  add_product_btn: {
    class: 'add-product-btn',
    text: 'Agregar producto'
  }, icons: {
    container_class: 'conatiner-product-icons',
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