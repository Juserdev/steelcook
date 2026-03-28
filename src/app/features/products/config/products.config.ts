import type { Titles_Sheets } from "@/app/shared/types/ui.types"
import { icons } from "@/app/shared/config/icons.config"
import type { Products_Config } from "@/app/features/products/types/products.types"

export const products_config = {
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

} as const satisfies Products_Config

export const product_titles_sheets = [
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
] as const satisfies Titles_Sheets[]